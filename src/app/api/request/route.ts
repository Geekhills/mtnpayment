import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getMomoAccessToken } from "@/lib/momo/getAccessToken";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = await getMomoAccessToken();
    const referenceId = crypto.randomUUID();
    console.log("body", body);
    await prisma.momoPayment.create({
      data: {
        referenceId,
        externalId: body.externalId,
        amount: body.amount,
        currency: body.currency,
        msisdn: body.payer.partyId,
        payerMessage: body.payerMessage,
        payeeNote: body.payeeNote,
      },
    });

    await axios.post(
      "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Reference-Id": referenceId,
          "X-Target-Environment": "sandbox",
          "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY!,
          "Content-Type": "application/json",
          "X-Callback-Url": process.env.NEXT_PUBLIC_BASE_URL,
        },
      }
    );

    return NextResponse.json({ message: "Payment initiated", referenceId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
