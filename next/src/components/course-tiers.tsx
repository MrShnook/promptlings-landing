import Image from "next/image";

const tiers = [
  {
    name: "Explorers",
    mascot: "★ Meet Pip",
    ages: "Ages 8–10",
    grade: "Upper Elementary",
    color: "#34D399",
    colorBg: "rgba(52, 211, 153, 0.15)",
    emoji: "🔭",
    mascotImage: "/img/characters/pip-curious.webp",
    features: [
      "What is AI? Friendly intro concepts",
      "Prompt crafting through storytelling",
      "AI art & creative projects",
      "Digital safety fundamentals",
      "End-of-course showcase project",
    ],
  },
  {
    name: "Builders",
    mascot: "⚡ Meet Giga",
    ages: "Ages 11–13",
    grade: "Middle School",
    color: "#7C3AED",
    colorBg: "rgba(124, 58, 237, 0.15)",
    emoji: "🤖",
    mascotImage: "/img/characters/giga-confident.webp",
    features: [
      "Hands-on prompt engineering",
      "Build chatbots & AI tools",
      "Intro to Python + AI APIs",
      "Ethics & bias in AI systems",
      "Team project: ship a real app",
      "Industry guest speakers",
    ],
  },
  {
    name: "Creators",
    mascot: "🚀 Meet Nova",
    ages: "Ages 14+",
    grade: "High School",
    color: "#FF6B6B",
    colorBg: "rgba(255, 107, 107, 0.15)",
    emoji: "💫",
    mascotImage: "/img/characters/nova-creating.webp",
    features: [
      "Advanced prompt architecture",
      "Full-stack AI app development",
      "Fine-tuning & custom models",
      "AI entrepreneurship & ethics",
      "Portfolio-ready capstone project",
      "College application boost",
    ],
  },
];

export function CourseTiers() {
  return (
    <section id="programs" className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // Choose Your Path
          </div>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Three Tracks. One{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mission
            </span>
            .
          </h2>
          <p className="text-white-dim text-lg max-w-[600px] mx-auto leading-relaxed">
            Every track is led by a mascot guide. Pick the one that matches your
            kid&apos;s age and watch them level up.
          </p>
        </div>

        {/* Cards — no standalone mascot row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative overflow-hidden transition-all duration-400 hover:-translate-y-2 group rounded-2xl p-8"
              style={{
                background: "rgba(15, 10, 30, 0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                ["--tier-color" as string]: tier.color,
              }}
            >
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
                style={{ background: tier.color }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tier.color}, transparent 70%)`,
                }}
              />

              {/* Mascot — transparent, no colored box */}
              <div className="w-20 h-20 mb-5 relative z-[1]">
                <Image
                  src={tier.mascotImage}
                  alt={`${tier.mascot.replace(/[★⚡🚀] /, "")} — the ${tier.name} mascot guide`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div
                className="text-[0.7rem] tracking-[2px] uppercase mb-5 relative z-[1]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: tier.color,
                }}
              >
                {tier.mascot}
              </div>

              <h3
                className="text-cosmic-white font-bold text-lg mb-1 relative z-[1]"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {tier.name}
              </h3>

              <p className="text-white-dim text-sm font-medium mb-4 relative z-[1]">
                {tier.ages} · {tier.grade}
              </p>

              <ul className="list-none mb-8 relative z-[1] space-y-2">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-white-dim text-sm"
                  >
                    <span
                      className="text-[0.7rem] mt-1 shrink-0"
                      style={{ color: tier.color }}
                    >
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="block w-full py-3.5 text-center rounded-xl text-sm font-semibold tracking-wider uppercase transition-all border relative z-[1]"
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  borderColor: tier.color,
                  color: tier.color,
                  background: "transparent",
                }}
              >
                Enroll {tier.name.replace(/s$/, "")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
