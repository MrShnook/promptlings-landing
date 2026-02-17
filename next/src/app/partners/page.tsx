import type { Metadata } from "next";
import { PartnerForm } from "./partner-form";

export const metadata: Metadata = {
  title: "Partners — Promptlings",
  description:
    "Bring AI literacy to your school or after-school program. Partner with Promptlings.",
};

const benefits = [
  {
    icon: "🎯",
    title: "Turnkey Curriculum",
    description:
      "Fully designed lesson plans, materials, and AI tools. Just add students.",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Instructors",
    description:
      "Our trained AI practitioners lead every session. Your staff observes and learns.",
  },
  {
    icon: "📈",
    title: "Measurable Outcomes",
    description:
      "Progress tracking, demo days, and portfolio projects parents love.",
  },
  {
    icon: "🛡️",
    title: "Safety-First",
    description:
      "COPPA compliant, age-appropriate tools, and transparent data policies.",
  },
];

const programOptions = [
  {
    title: "After-School Program",
    status: "active",
    description:
      "Weekly sessions after school hours. 8-10 students per cohort. Full semester or short intensives.",
    color: "#34D399",
  },
  {
    title: "Summer Camps",
    status: "coming-soon",
    description:
      "Immersive week-long camps during summer break. All-day or half-day formats.",
    color: "#7C3AED",
  },
  {
    title: "In-School Integration",
    status: "coming-soon",
    description:
      "Integrate AI literacy into existing CS or STEM classes. We co-teach with your staff.",
    color: "#FF6B6B",
  },
  {
    title: "Teacher PD",
    status: "coming-soon",
    description:
      "Professional development workshops for educators. Learn to teach AI literacy.",
    color: "#9F67FF",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // For Schools & Organizations
          </div>
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Bring{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Literacy
            </span>{" "}
            to Your School
          </h1>
          <p className="text-white-dim text-lg max-w-[600px] mx-auto leading-relaxed">
            Partner with Promptlings to give your students the AI skills they
            need. Turnkey programs, expert instructors, measurable results.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Partner
            </span>{" "}
            With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3
                  className="text-cosmic-white font-semibold text-sm tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  {b.title}
                </h3>
                <p className="text-white-dim text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Program Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {programOptions.map((p) => (
              <div key={p.title} className="glass-card p-6 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
                  style={{ background: p.color }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className="text-cosmic-white font-semibold text-sm"
                    style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[0.6rem] font-semibold tracking-wider uppercase ${
                      p.status === "active"
                        ? "bg-mint/20 text-mint"
                        : "bg-white-dim/10 text-white-dim"
                    }`}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    {p.status === "active" ? "Active" : "Coming Soon"}
                  </span>
                </div>
                <p className="text-white-dim text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-20 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="glass-card p-10 text-center">
            <div className="text-4xl mb-4">📋</div>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Curriculum Preview
            </h2>
            <p className="text-white-dim text-base leading-relaxed mb-6">
              Our curriculum is designed by AI practitioners and education
              specialists. Each module combines computer science concepts with
              hands-on AI projects tailored to age group and skill level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-mint/10 border border-mint/20">
                <div
                  className="text-mint font-bold text-sm mb-1"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  Explorers
                </div>
                <p className="text-white-dim text-xs">
                  Stories, art, and intro AI concepts
                </p>
              </div>
              <div className="p-4 rounded-xl bg-violet/10 border border-violet/20">
                <div
                  className="text-violet-glow font-bold text-sm mb-1"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  Builders
                </div>
                <p className="text-white-dim text-xs">
                  Chatbots, APIs, and real apps
                </p>
              </div>
              <div className="p-4 rounded-xl bg-coral/10 border border-coral/20">
                <div
                  className="text-coral font-bold text-sm mb-1"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  Creators
                </div>
                <p className="text-white-dim text-xs">
                  Full-stack AI and portfolio projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Intake Form */}
      <section className="py-20 relative z-2">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-4"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Get Started
            </h2>
            <p className="text-white-dim text-lg leading-relaxed">
              Tell us about your school or organization and we&apos;ll be in touch
              within 48 hours.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
