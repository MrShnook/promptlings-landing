const steps = [
  {
    num: "01",
    icon: "🧭",
    title: "Pick Your Track",
    description:
      "Choose Explorers, Builders, or Creators based on age and experience. We'll match your kid with the perfect cohort.",
    colorBg: "rgba(124, 58, 237, 0.2)",
    colorBorder: "rgba(124, 58, 237, 0.4)",
    colorText: "#9F67FF",
  },
  {
    num: "02",
    icon: "👩‍🚀",
    title: "Join a Small Crew",
    description:
      "Max 8 students per class. Your kid gets real attention from instructors who are AI practitioners, not just teachers.",
    colorBg: "rgba(255, 107, 107, 0.2)",
    colorBorder: "rgba(255, 107, 107, 0.4)",
    colorText: "#FF6B6B",
  },
  {
    num: "03",
    icon: "🔧",
    title: "Build Real Projects",
    description:
      "No worksheets. Kids build chatbots, AI art, apps, and tools. Every week ends with something they made and can share.",
    colorBg: "rgba(52, 211, 153, 0.2)",
    colorBorder: "rgba(52, 211, 153, 0.4)",
    colorText: "#34D399",
  },
  {
    num: "04",
    icon: "🏆",
    title: "Showcase & Level Up",
    description:
      "Each course ends with a live demo day. Parents watch. Kids present. Certificates issued. Confidence: through the roof.",
    colorBg: "rgba(196, 181, 253, 0.2)",
    colorBorder: "rgba(196, 181, 253, 0.4)",
    colorText: "#C4B5FD",
  },
];

const chips = [
  { icon: "🔴", text: "100% Live Classes — Never Pre-Recorded", colorBg: "rgba(124, 58, 237, 0.2)" },
  { icon: "🛡️", text: "Safety-First — COPPA Compliant", colorBg: "rgba(255, 107, 107, 0.2)" },
  { icon: "👥", text: "Max 8 Students Per Class", colorBg: "rgba(52, 211, 153, 0.2)" },
];

export function HowItWorks() {
  return (
    <section className="py-28 relative z-2" style={{ background: "linear-gradient(180deg, transparent, rgba(124, 58, 237, 0.03), transparent)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // How It Works
          </div>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            From Curious to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Capable
            </span>
            <br />
            in 4 Steps
          </h2>
          <p className="text-white-dim text-lg max-w-[600px] mx-auto leading-relaxed">
            Our proven framework takes kids from &quot;what is AI?&quot; to
            building real projects — with expert guidance every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (hidden on mobile) */}
          <div
            className="absolute top-14 left-[12.5%] right-[12.5%] h-px opacity-30 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, #7C3AED, #FF6B6B, #34D399, #9F67FF)",
            }}
          />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              {/* Step number */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 relative z-2 font-bold text-base"
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  background: step.colorBg,
                  color: step.colorText,
                  border: `1px solid ${step.colorBorder}`,
                }}
              >
                {step.num}
              </div>

              <div className="text-3xl mb-4">{step.icon}</div>

              <h3
                className="text-cosmic-white font-semibold text-sm tracking-wide mb-3"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {step.title}
              </h3>

              <p className="text-white-dim text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature chips */}
        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 mt-16">
          {chips.map((chip) => (
            <div
              key={chip.text}
              className="glass-card flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ background: chip.colorBg }}
              >
                {chip.icon}
              </div>
              <span className="text-cosmic-white">{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
