import { WaitlistForm } from "./waitlist-form";

export function FooterCta() {
  return (
    <section id="waitlist" className="py-28 text-center relative z-2">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="glass-card p-12 md:p-16 relative overflow-hidden">
          {/* Gradient border glow */}
          <div
            className="absolute inset-[-1px] rounded-[33px] z-[-1] opacity-30"
            style={{
              background:
                "linear-gradient(135deg, #7C3AED, transparent, #34D399)",
            }}
          />
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 80%, rgba(124, 58, 237, 0.08), transparent 50%)",
            }}
          />

          <h2
            className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold mb-4 relative"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Ready to Launch Your Child&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Journey
            </span>
            ?
          </h2>
          <p className="text-white-dim text-lg mb-9 leading-relaxed relative">
            Join the waitlist for early access and founding member pricing.
          </p>

          <div className="relative">
            <WaitlistForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  );
}
