import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getMomoAccessToken } from "@/lib/momo/getAccessToken";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const referenceId = url.searchParams.get("referenceId");

  if (!referenceId) {
    return NextResponse.json({ error: "Missing referenceId" }, { status: 400 });
  }

  try {
    const token = await getMomoAccessToken();

    const res = await axios.get(
      `https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${referenceId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Target-Environment": "sandbox",
          "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY!,
        },
      }
    );

    const status = res.data.status;

    // generate a unique code on success
    let code: string | null = null;

    if (status === "SUCCESSFUL") {
      code = `ORIENT-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;
    }

    await prisma.momoPayment.update({
      where: { referenceId },
      data: {
        status,
        code,
      },
    });

    return NextResponse.json({ status, code });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
