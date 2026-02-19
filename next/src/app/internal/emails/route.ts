import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN || "promptlings-preview-2026";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const email = request.nextUrl.searchParams.get("email");

  if (token !== PREVIEW_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const validEmails = [
    "email-1-welcome",
    "email-2-mascots",
    "email-3-activity",
    "email-4-safety",
    "email-5-earlybird",
    "blast-spring-break-announcement",
    "blast-spring-break-lastchance",
    "preview",
  ];

  const file = email || "preview";

  if (!validEmails.includes(file)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), "src", "emails", `${file}.html`);
    const html = readFileSync(filePath, "utf-8");
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
