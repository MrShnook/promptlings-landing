export function WhatIsPromptlings() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <div
          className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          // The Opportunity
        </div>
        <h2
          className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-8"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          The{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Generation
          </span>
        </h2>
        <div className="space-y-5 text-white-dim text-lg leading-relaxed">
          <p>
            AI isn&apos;t coming — it&apos;s already here. Your child uses it
            every day without thinking about it.
          </p>
          <p>
            The kids who thrive won&apos;t just use AI. They&apos;ll know how to
            build with it, think with it, and make it work for them.
          </p>
          <p className="text-cosmic-white font-semibold">
            Promptlings turns passive consumers into active creators.
          </p>
        </div>
      </div>
    </section>
  );
}
