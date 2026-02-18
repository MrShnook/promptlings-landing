import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Promptlings",
  description:
    "Refund and cancellation policy for Promptlings AI literacy classes.",
};

export default function RefundPage() {
  return (
    <section className="pt-32 pb-20 relative z-2">
      <div className="max-w-[800px] mx-auto px-6">
        <h1
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-8"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          Refund Policy
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
              Full Refund
            </h2>
            <p>
              If you cancel 48 or more hours before your child&apos;s first
              class, you will receive a full refund. No questions asked.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Pro-Rated Refund
            </h2>
            <p>
              After the first class, you may cancel at any time and receive a
              pro-rated refund for any unused sessions. The refund amount is
              calculated based on the number of remaining sessions at the time of
              cancellation.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              No Refund for Completed Sessions
            </h2>
            <p>
              Sessions that have already been completed are not eligible for
              refund. If your child misses a session, we will do our best to
              offer a make-up opportunity, but missed sessions are not refundable.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              How to Request a Refund
            </h2>
            <p>
              To request a refund, email{" "}
              <a
                href="mailto:hello@promptlings.ai"
                className="text-violet-glow hover:underline"
              >
                hello@promptlings.ai
              </a>{" "}
              with your name and enrollment details. We will process your request
              within 5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
