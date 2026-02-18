export function MeetFounder() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder — sized for headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="absolute inset-[-4px] rounded-full opacity-40"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #34D399)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border border-glass-border bg-gradient-to-br from-navy to-violet/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center">
                    <span className="text-lg text-violet-glow" aria-hidden="true">&#10022;</span>
                  </div>
                  <p
                    className="text-violet-glow text-xs font-semibold tracking-wider uppercase"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    Photo
                  </p>
                  <p className="text-white-dim text-xs mt-1">Matt Martin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div
              className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center gap-3"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <span className="w-6 h-px bg-violet" />
              // Meet the Instructor
            </div>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Built by a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dad
              </span>{" "}
              Who Gets It
            </h2>
            <div className="space-y-4 text-white-dim text-lg leading-relaxed">
              <p>
                AI isn&apos;t coming — it&apos;s already here. My kids, William
                and Nora, interact with it every day without thinking about it. I
                built Promptlings because I believe the kids who thrive will be
                the ones who learn to create with AI, not just consume it.
              </p>
              <p>
                Live instruction breaks through the insecurity of being a
                beginner. Small groups give kids the confidence to try. And
                building real things is the only way to actually learn.
              </p>
              <p className="text-cosmic-white font-medium italic">
                — Matt Martin, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
