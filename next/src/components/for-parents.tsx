const parentPoints = [
  {
    icon: "🔍",
    title: "Full Transparency",
    description: "See what your kid is building. We share lesson plans and project updates.",
  },
  {
    icon: "📊",
    title: "Progress Reports",
    description: "Regular updates on your child's growth and skills development.",
  },
  {
    icon: "🤝",
    title: "Parent Community",
    description: "Connect with other forward-thinking families navigating AI education.",
  },
  {
    icon: "📚",
    title: "Home Resources",
    description: "Take-home activities and conversation guides to keep the learning going.",
  },
];

export function ForParents() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // For Parents
          </div>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            You&apos;re Part of the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mission
            </span>
          </h2>
          <p className="text-white-dim text-lg max-w-[600px] mx-auto leading-relaxed">
            We believe parents should be in the loop. Here&apos;s how we keep
            you connected to your child&apos;s AI journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {parentPoints.map((point) => (
            <div
              key={point.title}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3
                className="text-cosmic-white font-semibold text-sm tracking-wide mb-2"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {point.title}
              </h3>
              <p className="text-white-dim text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
