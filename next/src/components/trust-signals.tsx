const signals = [
  {
    icon: "🛡️",
    title: "Age-Appropriate",
    description: "Curated tools with guardrails. No raw LLM access.",
    color: "violet",
  },
  {
    icon: "🔒",
    title: "Safety-First",
    description: "COPPA compliant. Privacy-first. No student data collection.",
    color: "mint",
  },
  {
    icon: "🎓",
    title: "Live Instructor",
    description: "Real humans teaching. Small cohorts. Not pre-recorded.",
    color: "coral",
  },
  {
    icon: "✅",
    title: "Parent-Approved",
    description: "Transparent curriculum. Parent guides included.",
    color: "violet-glow",
  },
];

const colorMap: Record<string, string> = {
  violet: "rgba(124, 58, 237, 0.2)",
  mint: "rgba(52, 211, 153, 0.2)",
  coral: "rgba(255, 107, 107, 0.2)",
  "violet-glow": "rgba(159, 103, 255, 0.2)",
};

const borderColorMap: Record<string, string> = {
  violet: "rgba(124, 58, 237, 0.3)",
  mint: "rgba(52, 211, 153, 0.3)",
  coral: "rgba(255, 107, 107, 0.3)",
  "violet-glow": "rgba(159, 103, 255, 0.3)",
};

export function TrustSignals() {
  return (
    <section className="py-20 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{
                borderColor: borderColorMap[signal.color],
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ background: colorMap[signal.color] }}
              >
                {signal.icon}
              </div>
              <h3
                className="text-cosmic-white font-semibold text-sm tracking-wide mb-2"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {signal.title}
              </h3>
              <p className="text-white-dim text-sm leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
