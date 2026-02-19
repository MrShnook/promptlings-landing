import { NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;

/**
 * Find or create the "pre-registered" tag in Kit.
 * Returns the tag ID.
 */
async function getOrCreatePreRegisteredTag(): Promise<string | null> {
  if (!KIT_API_KEY) return null;

  // Search existing tags
  const listRes = await fetch("https://api.kit.com/v4/tags", {
    headers: {
      "X-Kit-Api-Key": KIT_API_KEY,
      Accept: "application/json",
    },
  });

  if (listRes.ok) {
    const data = await listRes.json();
    const tags = data.tags || [];
    const existing = tags.find(
      (t: { name: string; id: string }) =>
        t.name.toLowerCase() === "pre-registered"
    );
    if (existing) return existing.id;
  }

  // Create tag if it doesn't exist
  const createRes = await fetch("https://api.kit.com/v4/tags", {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": KIT_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: "pre-registered" }),
  });

  if (createRes.ok) {
    const data = await createRes.json();
    return data.tag?.id || null;
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const { email, tier, schedule_preference, questions } =
      await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!tier) {
      return NextResponse.json(
        { error: "Please select an age range" },
        { status: 400 }
      );
    }

    if (!KIT_API_KEY) {
      console.error("Missing KIT_API_KEY env var");
      return NextResponse.json(
        { error: "Enrollment configuration error" },
        { status: 500 }
      );
    }

    // 1. Create/update subscriber with custom fields
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
          child_age_range: tier,
          schedule_preference: schedule_preference || "not specified",
          ...(questions ? { questions_comments: questions } : {}),
        },
      }),
    });

    if (!subResponse.ok) {
      const errorData = await subResponse.json().catch(() => ({}));
      console.error(
        "Kit subscriber API error:",
        subResponse.status,
        errorData
      );
      return NextResponse.json(
        { error: "Failed to register. Please try again." },
        { status: 502 }
      );
    }

    const subData = await subResponse.json();
    const subscriberId = subData.subscriber?.id;

    // 2. Tag subscriber as "pre-registered"
    if (subscriberId) {
      const tagId = await getOrCreatePreRegisteredTag();
      if (tagId) {
        await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
          method: "POST",
          headers: {
            "X-Kit-Api-Key": KIT_API_KEY,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email_address: email }),
        }).catch((err) => console.error("Kit tag error:", err));
      }
    }

    return NextResponse.json({
      success: true,
      subscriber_id: subscriberId,
    });
  } catch (error) {
    console.error("Enroll API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
