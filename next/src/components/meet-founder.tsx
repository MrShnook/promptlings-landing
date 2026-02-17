export function MeetFounder() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="absolute inset-[-4px] rounded-3xl opacity-40"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #34D399)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative w-[320px] aspect-square rounded-3xl overflow-hidden border border-glass-border bg-gradient-to-br from-navy to-violet/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p
                    className="text-violet-glow text-sm font-semibold tracking-wider uppercase"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    Founder Photo
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
              // Meet the Founder
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
                Hi, I&apos;m{" "}
                <strong className="text-cosmic-white">Matt Martin</strong> — a
                data and AI professional, and a dad who watched his own kids
                interact with AI and thought: &quot;They deserve better than
                this.&quot;
              </p>
              <p>
                After years building AI systems in the enterprise world, I
                realized the biggest gap wasn&apos;t in the boardroom — it was
                in the classroom. Kids were using AI every day but nobody was
                teaching them{" "}
                <strong className="text-cosmic-white">
                  how to think with it
                </strong>
                .
              </p>
              <p>
                Promptlings is the program I wish existed for my kids. Live
                instructors, small groups, real projects, and a safety-first
                approach. No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
