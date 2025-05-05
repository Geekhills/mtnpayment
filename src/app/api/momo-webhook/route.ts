import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Webhook body:", body);
    const { referenceId, status } = body;

    if (!referenceId || !status) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // If successful, generate unique code
    const code =
      status === "SUCCESSFUL"
        ? `ORIENT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
        : null;

    await prisma.momoPayment.update({
      where: { referenceId },
      data: {
        status,
        code,
      },
    });

    return NextResponse.json({ message: "Payment status updated" });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
