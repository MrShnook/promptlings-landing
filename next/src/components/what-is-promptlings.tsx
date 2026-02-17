export function WhatIsPromptlings() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="max-w-[520px]">
            <div
              className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center gap-3"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <span className="w-6 h-px bg-violet" />
              // The Problem
            </div>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Kids Are{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Consuming
              </span>{" "}
              AI.
              <br />
              Not{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Creating
              </span>{" "}
              With It.
            </h2>
            <p className="text-white-dim text-lg leading-relaxed mb-5">
              Right now, most kids interact with AI the same way they watch TV —
              passively. They type into ChatGPT, scroll TikTok&apos;s algorithm,
              and accept whatever the machine gives them.
            </p>
            <p className="text-white-dim text-lg leading-relaxed mb-5">
              <strong className="text-coral">
                That&apos;s not a skill. That&apos;s a habit.
              </strong>
            </p>
            <p className="text-white-dim text-lg leading-relaxed mb-8">
              The kids who will thrive aren&apos;t the ones who use AI —
              they&apos;re the ones who understand it, direct it, and build with
              it. That&apos;s what Promptlings teaches.
            </p>

            {/* Alert callout */}
            <div className="p-5 rounded-xl border border-coral/20 bg-coral/8 flex items-start gap-3.5">
              <span className="text-xl shrink-0 mt-0.5">⚡</span>
              <p className="text-white-dim text-sm leading-relaxed">
                By 2030,{" "}
                <strong className="text-coral">
                  65% of today&apos;s students
                </strong>{" "}
                will work in jobs that don&apos;t exist yet. AI literacy
                isn&apos;t a nice-to-have — it&apos;s{" "}
                <strong className="text-coral">the new ABCs</strong>.
              </p>
            </div>
          </div>

          {/* Stats panel */}
          <div className="glass-card p-10 relative overflow-hidden">
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #9F67FF, transparent)",
              }}
            />

            <div
              className="text-[0.7rem] tracking-[3px] uppercase text-mint mb-8 flex items-center gap-2"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <span style={{ animation: "blink 2s ease-in-out infinite" }}>
                ◉
              </span>
              SYSTEM::MARKET_DATA — LIVE
            </div>

            {[
              {
                label: "Parents who want AI skills taught",
                value: "67%",
                color: "violet",
                fill: "67%",
              },
              {
                label: "Kids EdTech AI Market (2026)",
                value: "$2.1B",
                color: "coral",
                fill: "82%",
              },
              {
                label: "Schools with AI curriculum",
                value: "<12%",
                color: "mint",
                fill: "12%",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center py-5 border-b border-violet/10 last:border-b-0"
              >
                <div className="flex-1">
                  <div className="text-white-dim text-sm">{stat.label}</div>
                  <div className="h-1 bg-violet/15 rounded mt-2 overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-1000"
                      style={{
                        width: stat.fill,
                        background:
                          stat.color === "violet"
                            ? "linear-gradient(90deg, #7C3AED, #9F67FF)"
                            : stat.color === "coral"
                              ? "linear-gradient(90deg, #FF6B6B, #FF8E8E)"
                              : "linear-gradient(90deg, #34D399, #6EEDB8)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`ml-6 text-2xl font-bold ${
                    stat.color === "violet"
                      ? "text-violet-glow"
                      : stat.color === "coral"
                        ? "text-coral"
                        : "text-mint"
                  }`}
                  style={{
                    fontFamily: "var(--font-orbitron), sans-serif",
                    textShadow:
                      stat.color === "violet"
                        ? "0 0 20px rgba(124, 58, 237, 0.5)"
                        : stat.color === "coral"
                          ? "0 0 20px rgba(255, 107, 107, 0.5)"
                          : "0 0 20px rgba(52, 211, 153, 0.5)",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center py-5">
              <div className="text-white-dim text-sm">
                Gap between demand & supply
              </div>
              <div
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  color: "#FBBF24",
                  textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                }}
              >
                MASSIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
