import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Promptlings",
  description:
    "Learn about the Promptlings mission: AI literacy for every kid. Meet our founder and instructor, Matt Martin.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // Our Mission
          </div>
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Teaching Kids to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Create
            </span>{" "}
            With AI,
            <br />
            Not Just{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Consume
            </span>{" "}
            It
          </h1>
          <p className="text-white-dim text-lg max-w-[700px] mx-auto leading-relaxed">
            Promptlings exists to close the AI literacy gap. We believe every
            kid deserves to understand and direct the technology that will shape
            their future — not just passively use it.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #9F67FF, transparent)",
              }}
            />
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Belief
              </span>
            </h2>
            <div className="space-y-4 text-white-dim text-lg leading-relaxed">
              <p>
                AI is the most transformative technology since the internet. Within a decade, every career will be shaped by it. Yet most kids today are consuming AI passively — watching algorithm-curated feeds, typing simple prompts, accepting whatever comes back.
              </p>
              <p>
                <strong className="text-cosmic-white">
                  That&apos;s not literacy. That&apos;s dependency.
                </strong>
              </p>
              <p>
                Promptlings teaches kids to think critically about AI, craft purposeful prompts, build real projects, and understand the ethics behind the technology. We&apos;re raising the first generation of AI-literate creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="flex justify-center">
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
                // Founder & Lead Instructor
              </div>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Matt Martin
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  Matt is a data and AI professional with over a decade of
                  experience building AI systems for enterprise companies. But
                  more importantly, he&apos;s a dad.
                </p>
                <p>
                  When he watched his own kids interact with AI — passively,
                  uncritically, without any framework for understanding what they
                  were using — he knew something had to change.
                </p>
                <p>
                  Promptlings was born from a simple question:{" "}
                  <strong className="text-cosmic-white">
                    &quot;What if we taught kids to be AI creators instead of
                    just AI consumers?&quot;
                  </strong>
                </p>
                <p>
                  Matt designed Promptlings to be the program he wished existed
                  for his own kids: hands-on, safety-first, taught by
                  practitioners who actually build with AI — not just teach about
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-center mb-10"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Story
            </span>
          </h2>
          <div className="space-y-6 text-white-dim text-lg leading-relaxed">
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3
                  className="text-cosmic-white font-semibold text-sm mb-2"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  The Spark
                </h3>
                <p>
                  Watching kids use ChatGPT like a magic 8-ball — asking it
                  questions and accepting every answer without thinking. They
                  deserved better.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-2xl">🔬</span>
              <div>
                <h3
                  className="text-cosmic-white font-semibold text-sm mb-2"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  The Research
                </h3>
                <p>
                  Months of studying how kids learn, what age-appropriate AI
                  education looks like, and why existing programs weren&apos;t
                  cutting it.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-2xl">🚀</span>
              <div>
                <h3
                  className="text-cosmic-white font-semibold text-sm mb-2"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  The Launch
                </h3>
                <p>
                  Promptlings is launching Spring 2026 with three tracks
                  designed for ages 8–16+. Small groups, live instruction, real
                  projects. The future of AI education starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
