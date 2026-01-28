import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL =
  "https://n8n.srv1141092.hstgr.cloud/webhook/e1e3997b-98d8-4e96-b74d-3367a233c356";

function isValidEmail(email: string) {
  // Simple email validation suitable for basic UX-level checks.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to submit to waitlist. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error while submitting to waitlist.",
      },
      { status: 500 }
    );
  }
}


