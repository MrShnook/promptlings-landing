import { Compass, Users, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Compass,
    title: "Pick Your Path",
    description:
      "Choose Explorers, Builders, or Creators based on your child's age.",
    colorBg: "rgba(124, 58, 237, 0.2)",
    colorBorder: "rgba(124, 58, 237, 0.4)",
    colorText: "#9F67FF",
  },
  {
    num: "02",
    icon: Users,
    title: "Join a Small Group",
    description:
      "Get matched with 3\u20137 peers and a live instructor.",
    colorBg: "rgba(255, 107, 107, 0.2)",
    colorBorder: "rgba(255, 107, 107, 0.4)",
    colorText: "#FF6B6B",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build Real Projects",
    description:
      "Every session ends with something your child made \u2014 not just watched.",
    colorBg: "rgba(52, 211, 153, 0.2)",
    colorBorder: "rgba(52, 211, 153, 0.4)",
    colorText: "#34D399",
  },
  {
    num: "04",
    icon: Trophy,
    title: "Level Up",
    description:
      "Track progress, earn achievements, and build a portfolio.",
    colorBg: "rgba(196, 181, 253, 0.2)",
    colorBorder: "rgba(196, 181, 253, 0.4)",
    colorText: "#C4B5FD",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 relative z-2" style={{ background: "linear-gradient(180deg, transparent, rgba(124, 58, 237, 0.03), transparent)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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

          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="text-center relative">
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 relative z-2 font-bold text-base"
                  style={{
                    fontFamily: "var(--font-orbitron), sans-serif",
                    background: step.colorBg,
                    color: step.colorText,
                    border: `1px solid ${step.colorBorder}`,
                  }}
                >
                  {step.num}
                </div>

                <div className="flex justify-center mb-3">
                  <IconComponent
                    className="w-7 h-7"
                    style={{ color: step.colorText }}
                  />
                </div>

                <h3
                  className="text-cosmic-white font-semibold text-sm tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-white-dim text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
