import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, age } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const KIT_API_KEY = process.env.KIT_API_KEY;
    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (!KIT_API_KEY || !KIT_FORM_ID) {
      console.error("Missing KIT_API_KEY or KIT_FORM_ID env vars");
      return NextResponse.json(
        { error: "Waitlist configuration error" },
        { status: 500 }
      );
    }

    // Subscribe to Kit form
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: KIT_API_KEY,
          email,
          fields: {
            child_age_range: age || "not specified",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Kit API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      subscriber_id: data.subscription?.subscriber?.id,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
