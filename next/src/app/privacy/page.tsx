import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Promptlings",
  description:
    "Privacy Policy for Promptlings, an AI literacy program for kids ages 8-18.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 relative z-2">
      <div className="max-w-[800px] mx-auto px-6">
        <h1
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-8"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-white-dim/60 text-sm mb-10">
          Last updated: February 18, 2026
        </p>

        <div className="space-y-8 text-white-dim text-base leading-relaxed">
          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              1. What Data We Collect
            </h2>
            <p>
              We collect the following information when you sign up for the
              waitlist or enroll in a class:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Parent/guardian email address</li>
              <li>Child&apos;s first name</li>
              <li>Child&apos;s age range</li>
            </ul>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              2. How We Use Your Data
            </h2>
            <p>
              Your data is used solely for class enrollment, scheduling, and
              communications about the Promptlings program. We may send you
              updates about enrollment windows, class schedules, and program
              news.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              3. We Do Not Sell Your Data
            </h2>
            <p>
              We do not sell, share, or distribute your personal information to
              third parties for marketing purposes. Period.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              4. COPPA Compliance
            </h2>
            <p>
              We do not collect personal information directly from children under
              13 without verifiable parental consent. All account registration is
              done by a parent or guardian. During classes, we do not store or
              record student inputs to AI tools.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              5. Data Retention & Deletion
            </h2>
            <p>
              We retain your data for as long as you are an active customer or
              waitlist member. You may request deletion of your data at any time
              by contacting us. We will process deletion requests within 30 days.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              6. Analytics
            </h2>
            <p>
              We use PostHog for anonymous website analytics to understand how
              visitors use our site. This data does not include personally
              identifiable information and is used solely to improve the website
              experience.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              7. Contact
            </h2>
            <p>
              For privacy questions or data deletion requests, contact us at{" "}
              <a
                href="mailto:hello@promptlings.ai"
                className="text-violet-glow hover:underline"
              >
                hello@promptlings.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
