import { Eye, Radio, Users, ShieldCheck, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const parentPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Eye,
    title: "Full Lesson Transparency",
    description: "Parents receive complete lesson plans so you always know what your child is learning.",
  },
  {
    icon: Radio,
    title: "Live Instruction",
    description: "Every class is led by a real instructor, not AI. Your child gets human guidance and feedback.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Maximum 4:1 student-to-instructor ratio so every child gets personal attention.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Tools",
    description: "Every AI tool is reviewed for age-appropriateness before it enters the classroom.",
  },
  {
    icon: BookOpen,
    title: "Take-Home Resources",
    description: "Activity guides and practice materials after each session to keep the learning going.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {parentPoints.map((point) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.title}
                className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-mint" />
                </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
