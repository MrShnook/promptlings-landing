import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Promptlings",
  description:
    "Terms of Service for Promptlings, an AI literacy program for kids ages 8-18.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 relative z-2">
      <div className="max-w-[800px] mx-auto px-6">
        <h1
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-8"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          Terms of Service
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
              1. Service Description
            </h2>
            <p>
              Promptlings provides live, online AI literacy classes for children
              ages 8-18. Classes are conducted in small groups with a live
              instructor via video conferencing. By using our service, you agree
              to these terms.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              2. User Eligibility
            </h2>
            <p>
              A parent or legal guardian must register on behalf of any minor
              participating in Promptlings classes. By registering a child, you
              confirm that you are the child&apos;s parent or legal guardian and
              that you consent to their participation.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              3. Acceptable Use
            </h2>
            <p>
              Students are expected to treat instructors and fellow students with
              respect. AI tools provided during class must be used only for
              course-related activities. Misuse of AI tools, disruptive
              behavior, or violation of these terms may result in removal from
              the program without refund.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              4. Intellectual Property
            </h2>
            <p>
              Projects and creative works produced by students during
              Promptlings classes belong to the students. Promptlings retains the
              right to use anonymized examples of student work for promotional
              purposes only with prior parental consent. Promptlings course
              materials, curriculum, and branding remain the property of
              Promptlings.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              5. Limitation of Liability
            </h2>
            <p>
              Promptlings is an educational service. We do not guarantee specific
              learning outcomes. Our liability is limited to the fees paid for
              the service. Promptlings is not liable for any indirect,
              incidental, or consequential damages arising from participation in
              the program.
            </p>
          </div>

          <div>
            <h2
              className="text-cosmic-white font-semibold text-lg mb-3"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of Arizona. Any
              disputes shall be resolved in the courts of Arizona.
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
              Questions about these terms? Contact us at{" "}
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
