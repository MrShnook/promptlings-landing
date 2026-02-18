"use client";

import Image from "next/image";
import posthog from "posthog-js";

const tiers = [
  {
    name: "Explorers",
    mascot: "Meet Pip",
    ages: "Ages 8\u201310",
    grade: "Upper Elementary",
    color: "#34D399",
    mascotImage: "/img/characters/pip-curious.webp",
    features: [
      "Design your own AI chatbot buddy",
      "Create art and stories with AI tools",
      "Build a working story generator",
      "Learn prompt crafting and creative thinking",
    ],
  },
  {
    name: "Builders",
    mascot: "Meet Giga",
    ages: "Ages 11\u201313",
    grade: "Middle School",
    color: "#7C3AED",
    mascotImage: "/img/characters/giga-confident.webp",
    features: [
      "Code a real web app from scratch",
      "Train your own mini AI model",
      "Automate everyday tasks with AI",
      "Develop Python basics and data thinking",
    ],
  },
  {
    name: "Creators",
    mascot: "Meet Nova",
    ages: "Ages 14\u201318",
    grade: "High School",
    color: "#FF6B6B",
    mascotImage: "/img/characters/nova-creating.webp",
    features: [
      "Ship a portfolio-ready project",
      "Build with real APIs and developer tools",
      "Present your work to an expert panel",
      "Master full-stack development and AI integration",
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
            Three Paths. One{" "}
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
            Pick the path that matches your child&apos;s age and watch them
            level up.
          </p>
        </div>

        {/* Cards — equal height via grid stretch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative overflow-hidden transition-all duration-400 hover:-translate-y-2 group rounded-2xl p-8 flex flex-col"
              style={{
                background: "rgba(15, 10, 30, 0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
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

              {/* Mascot */}
              <div className="w-20 h-20 mb-5 relative z-[1]">
                <Image
                  src={tier.mascotImage}
                  alt={`${tier.mascot.replace("Meet ", "")} — the ${tier.name} mascot guide`}
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

              <ul className="list-none mb-8 relative z-[1] space-y-2 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-white-dim text-sm"
                  >
                    <span
                      className="text-[0.7rem] mt-1 shrink-0"
                      style={{ color: tier.color }}
                    >
                      &#10022;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                onClick={() =>
                  posthog.capture("cta_click", {
                    cta_label: `Enroll ${tier.name.replace(/s$/, "")}`,
                    path_name: tier.name,
                    age_range: tier.ages,
                    location: "course_tiers",
                  })
                }
                className="block w-full py-3.5 text-center rounded-xl text-sm font-semibold tracking-wider uppercase transition-all border relative z-[1] mt-auto"
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
