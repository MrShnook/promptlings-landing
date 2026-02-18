import { NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_TAG_ID = "16164171"; // "waitlist" tag

export async function POST(request: Request) {
  try {
    const { email, age } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!KIT_API_KEY) {
      console.error("Missing KIT_API_KEY env var");
      return NextResponse.json(
        { error: "Waitlist configuration error" },
        { status: 500 }
      );
    }

    // 1. Create/update subscriber with age range custom field
    const subResponse = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "X-Kit-Api-Key": KIT_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        fields: {
          child_age_range: age || "not specified",
        },
      }),
    });

    if (!subResponse.ok) {
      const errorData = await subResponse.json().catch(() => ({}));
      console.error("Kit subscriber API error:", subResponse.status, errorData);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 502 }
      );
    }

    const subData = await subResponse.json();
    const subscriberId = subData.subscriber?.id;

    // 2. Tag subscriber as "waitlist"
    if (subscriberId) {
      await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
        method: "POST",
        headers: {
          "X-Kit-Api-Key": KIT_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }).catch((err) => console.error("Kit tag error:", err));
    }

    return NextResponse.json({
      success: true,
      subscriber_id: subscriberId,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
