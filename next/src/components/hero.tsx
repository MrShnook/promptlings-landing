import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 relative overflow-hidden z-2">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
              style={{
                background: "rgba(124, 58, 237, 0.15)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "#9F67FF",
                animation: "pulse-badge 3s ease-in-out infinite",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-mint"
                style={{ animation: "blink 2s ease-in-out infinite" }}
              />
              Now Enrolling — Spring 2026
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-2"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #F0EEFF, #C4B5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Kid Won&apos;t Just
                <br />
                Use AI.
              </span>
              <span className="block mt-2">
                <span
                  style={{
                    background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  They&apos;ll{" "}
                </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Master{" "}
                </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  It.
                </span>
              </span>
            </h1>

            {/* Typing tagline */}
            <div
              className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-medium mb-6 min-h-[2.4em]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <span className="text-violet-glow">Prompt</span>
              <span className="text-violet-glow">. </span>
              <span className="text-coral">Build</span>
              <span className="text-coral">. </span>
              <span className="text-mint">Create</span>
              <span className="text-mint">.</span>
              <span
                className="inline-block w-[3px] h-[1.2em] bg-mint ml-1 align-text-bottom"
                style={{ animation: "cursor-blink 1s step-end infinite" }}
              />
            </div>

            {/* Subheadline */}
            <p className="text-lg text-white-dim leading-relaxed mb-9 max-w-[480px] mx-auto lg:mx-0">
              <strong className="text-cosmic-white">Promptlings</strong> teaches
              kids ages 8–16+ to become AI creators through live, small-group
              classes. Not passive screen time —{" "}
              <strong className="text-cosmic-white">real skills</strong> for the
              future.
            </p>

            {/* Waitlist form */}
            <WaitlistForm variant="inline" />
          </div>

          {/* Visual */}
          <div className="relative flex justify-center items-center order-first lg:order-last">
            {/* Orbit rings */}
            <div
              className="absolute w-[500px] h-[500px] border border-violet/15 rounded-full pointer-events-none hidden lg:block"
              style={{
                top: "50%",
                left: "50%",
                animation: "orbit-spin 40s linear infinite",
              }}
            >
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-violet-glow shadow-[0_0_10px_var(--color-violet)]" />
            </div>
            <div
              className="absolute w-[650px] h-[650px] border border-mint/8 rounded-full pointer-events-none hidden lg:block"
              style={{
                top: "50%",
                left: "50%",
                animation: "orbit-spin 60s linear infinite reverse",
              }}
            >
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" />
            </div>

            {/* Hero image placeholder */}
            <div
              className="relative rounded-3xl overflow-hidden border border-glass-border shadow-[0_0_60px_rgba(124,58,237,0.2),0_25px_50px_rgba(0,0,0,0.4)]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <div
                className="absolute inset-[-2px] rounded-[26px] z-[-1] opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #7C3AED, #FF6B6B, #34D399)",
                  animation: "glow-rotate 8s linear infinite",
                }}
              />
              <div className="w-[400px] max-w-full aspect-[4/3] bg-gradient-to-br from-navy to-violet/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p
                    className="text-violet-glow text-sm font-semibold tracking-wider uppercase"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    Hero Image
                  </p>
                  <p className="text-white-dim text-xs mt-1">
                    Kids learning AI with Pip, Giga &amp; Nova
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
