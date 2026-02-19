import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ShieldAlert,
  Eye,
  BookOpen,
  UserCheck,
  Users,
  Lock,
  MessageCircleWarning,
  FileDown,
  Rocket,
  CheckCircle2,
  GraduationCap,
  Brain,
  Fingerprint,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Safety for Kids — Promptlings",
  description:
    "Learn how Promptlings keeps children safe while teaching AI literacy. COPPA-compliant, supervised instruction, background-checked instructors, and transparent parent access.",
  keywords: [
    "AI safety for children",
    "COPPA compliant AI education",
    "kids AI safety",
    "children AI privacy",
    "safe AI learning",
    "AI literacy safety",
    "supervised AI for kids",
  ],
  openGraph: {
    title: "AI Safety for Kids — Promptlings",
    description:
      "Safety isn't a feature — it's foundational. Learn how Promptlings protects children while teaching AI literacy.",
    type: "website",
    url: "https://promptlings.ai/safety",
  },
};

function SectionIcon({
  icon: Icon,
  color = "violet",
}: {
  icon: React.ComponentType<{ className?: string }>;
  color?: "violet" | "mint" | "coral";
}) {
  const colors = {
    violet: {
      bg: "bg-violet/10",
      border: "border-violet/20",
      text: "text-violet-glow",
    },
    mint: {
      bg: "bg-mint/10",
      border: "border-mint/20",
      text: "text-mint",
    },
    coral: {
      bg: "bg-coral/10",
      border: "border-coral/20",
      text: "text-coral",
    },
  };
  const c = colors[color];
  return (
    <div
      className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}
    >
      <Icon className={`w-6 h-6 ${c.text}`} />
    </div>
  );
}

export default function SafetyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // Safety First
          </div>
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Your Child&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Safety
            </span>{" "}
            Is Our
            <br />
            Foundation
          </h1>
          <p className="text-white-dim text-lg max-w-[700px] mx-auto leading-relaxed mb-8">
            Safety isn&apos;t a feature we bolt on — it&apos;s woven into every
            lesson, every interaction, and every decision we make. Here&apos;s
            how we protect your child while teaching them to thrive in an
            AI-powered world.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(52, 211, 153, 0.15)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
                color: "#34D399",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              COPPA Compliant
            </div>
            <div
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(124, 58, 237, 0.15)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "#9F67FF",
              }}
            >
              <Eye className="w-3.5 h-3.5" />
              Supervised Learning
            </div>
            <div
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(255, 107, 107, 0.15)",
                border: "1px solid rgba(255, 107, 107, 0.3)",
                color: "#FF6B6B",
              }}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Background Checked
            </div>
          </div>
        </div>
      </section>

      {/* Our Safety Philosophy */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #34D399, transparent)",
              }}
            />
            <div className="flex items-center gap-4 mb-6">
              <SectionIcon icon={ShieldCheck} color="mint" />
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Our Safety{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Philosophy
                </span>
              </h2>
            </div>
            <div className="space-y-4 text-white-dim text-lg leading-relaxed">
              <p>
                At Promptlings, safety isn&apos;t a checkbox or an afterthought.
                It&apos;s the foundation everything else is built on. Every
                lesson plan, every AI interaction, every curriculum decision
                starts with one question:{" "}
                <strong className="text-cosmic-white">
                  &quot;Is this safe for the children in our care?&quot;
                </strong>
              </p>
              <p>
                We believe kids can learn to be powerful AI creators{" "}
                <em>and</em> stay safe doing it. These goals don&apos;t compete
                — they reinforce each other. A child who understands AI safety
                is a child who uses AI better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COPPA Compliance */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={ShieldAlert} color="violet" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                COPPA{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Compliance
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  We follow the{" "}
                  <strong className="text-cosmic-white">
                    Children&apos;s Online Privacy Protection Act (COPPA)
                  </strong>{" "}
                  — the federal law that sets the standard for protecting
                  children&apos;s data online.
                </p>
                <p>Here&apos;s what that means in practice:</p>
                <ul className="space-y-3 ml-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      No personal data is collected from children under 13
                      without verified parental consent
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Parents can review, modify, or delete their child&apos;s
                      information at any time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      We collect only what&apos;s necessary for the educational
                      experience — nothing more
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span>
                      Data is never sold to third parties. Period.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Is Used in Class */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={GraduationCap} color="mint" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                How AI Is Used{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  in Class
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  Children never have unsupervised access to AI tools in our
                  program.{" "}
                  <strong className="text-cosmic-white">
                    Every AI interaction is instructor-guided.
                  </strong>
                </p>
                <p>
                  Our instructors walk students through each interaction,
                  explaining what&apos;s happening, why the AI responds the way
                  it does, and how to think critically about the output. AI is
                  used as a teaching tool — never handed off as a babysitter.
                </p>
                <div
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl mt-4"
                  style={{
                    background: "rgba(52, 211, 153, 0.08)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                >
                  <Eye className="w-5 h-5 flex-shrink-0 text-mint" />
                  <p className="text-sm leading-relaxed" style={{ color: "#6EEDB8" }}>
                    <strong>Supervised at every step:</strong> Instructors see
                    every prompt and every response in real time. No exceptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach About AI Safety */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={BookOpen} color="violet" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                What We Teach About{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI Safety
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  Safety education isn&apos;t a separate module — it&apos;s
                  integrated into every lesson. Students learn to be thoughtful,
                  critical users of AI from day one.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="glass-card p-5 flex items-start gap-3">
                    <Brain className="w-5 h-5 text-violet-glow flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-cosmic-white text-sm font-semibold mb-1">
                        Critical Thinking
                      </h3>
                      <p className="text-sm text-white-dim">
                        Question every AI output. Verify facts. Understand that
                        AI can be confidently wrong.
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-5 flex items-start gap-3">
                    <Fingerprint className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-cosmic-white text-sm font-semibold mb-1">
                        Privacy Awareness
                      </h3>
                      <p className="text-sm text-white-dim">
                        Never share personal information with AI — names,
                        addresses, schools, or photos.
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-5 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-cosmic-white text-sm font-semibold mb-1">
                        AI Limitations
                      </h3>
                      <p className="text-sm text-white-dim">
                        AI doesn&apos;t &quot;know&quot; things. It predicts
                        text. Understanding this changes how you use it.
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-5 flex items-start gap-3">
                    <Eye className="w-5 h-5 text-violet-glow flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-cosmic-white text-sm font-semibold mb-1">
                        Spotting AI Content
                      </h3>
                      <p className="text-sm text-white-dim">
                        Recognize AI-generated text, images, and media in the
                        wild.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5 Safety Rules */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                5 Safety Rules
              </span>
            </h2>
            <p className="text-white-dim text-lg mt-3 max-w-[600px] mx-auto">
              Every Promptlings student learns these five rules before touching
              any AI tool. They&apos;re simple enough for an 8-year-old,
              important enough for everyone.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                icon: Fingerprint,
                title: "Never share personal information with AI",
                desc: "No names, addresses, school names, photos, or anything that identifies you. AI doesn't need to know who you are to help you learn.",
                color: "coral" as const,
              },
              {
                num: "02",
                icon: CheckCircle2,
                title: "Always verify AI outputs",
                desc: "AI can sound confident and still be wrong. Check the facts. Use other sources. Think before you trust.",
                color: "mint" as const,
              },
              {
                num: "03",
                icon: MessageCircleWarning,
                title: "Tell a trusted adult if something feels wrong",
                desc: "If AI says something that makes you uncomfortable, confused, or worried — tell your instructor or a parent right away.",
                color: "violet" as const,
              },
              {
                num: "04",
                icon: Brain,
                title: "AI is a tool, not a friend",
                desc: "AI doesn't have feelings, opinions, or care about you. It's a powerful tool — treat it like one.",
                color: "coral" as const,
              },
              {
                num: "05",
                icon: Lightbulb,
                title: "Your ideas come first, AI assists",
                desc: "You're the creator. AI is the assistant. Start with your own thinking, then use AI to enhance — never replace — your ideas.",
                color: "mint" as const,
              },
            ].map((rule) => {
              const colorMap = {
                violet: { numColor: "#9F67FF", borderColor: "rgba(124, 58, 237, 0.3)" },
                mint: { numColor: "#34D399", borderColor: "rgba(52, 211, 153, 0.3)" },
                coral: { numColor: "#FF6B6B", borderColor: "rgba(255, 107, 107, 0.3)" },
              };
              const { numColor, borderColor } = colorMap[rule.color];

              return (
                <div
                  key={rule.num}
                  className="glass-card p-6 flex items-start gap-5"
                  style={{ borderColor }}
                >
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span
                      className="text-2xl font-extrabold"
                      style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        color: numColor,
                      }}
                    >
                      {rule.num}
                    </span>
                    <rule.icon className="w-5 h-5" style={{ color: numColor }} />
                  </div>
                  <div>
                    <h3
                      className="text-cosmic-white font-semibold text-base mb-1.5"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {rule.title}
                    </h3>
                    <p className="text-white-dim text-sm leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Background Checks */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={UserCheck} color="coral" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Instructor{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Background Checks
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  Every Promptlings instructor undergoes a comprehensive
                  background check before working with students. We take the
                  trust you place in us seriously.
                </p>
                <ul className="space-y-3 ml-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>
                      Criminal background screening for all instructors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>
                      Identity and credential verification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>
                      Ongoing training in child safety and digital ethics
                    </span>
                  </li>
                </ul>
                {/* NOTE: Background check provider/process needs to be implemented */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Transparency */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={Users} color="mint" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Parent{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #34D399, #6EEDB8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Transparency
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  You shouldn&apos;t have to wonder what&apos;s happening in
                  your child&apos;s AI class. We make everything visible.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  <div className="glass-card p-5 text-center">
                    <Eye className="w-6 h-6 text-mint mx-auto mb-3" />
                    <h3 className="text-cosmic-white text-sm font-semibold mb-2">
                      Sit In Anytime
                    </h3>
                    <p className="text-white-dim text-xs leading-relaxed">
                      Parents are welcome to observe any session, any time. No
                      appointment needed.
                    </p>
                  </div>
                  <div className="glass-card p-5 text-center">
                    <BookOpen className="w-6 h-6 text-mint mx-auto mb-3" />
                    <h3 className="text-cosmic-white text-sm font-semibold mb-2">
                      Progress Updates
                    </h3>
                    <p className="text-white-dim text-xs leading-relaxed">
                      Regular updates on what your child is learning, building,
                      and achieving.
                    </p>
                  </div>
                  <div className="glass-card p-5 text-center">
                    <GraduationCap className="w-6 h-6 text-mint mx-auto mb-3" />
                    <h3 className="text-cosmic-white text-sm font-semibold mb-2">
                      Curriculum Access
                    </h3>
                    <p className="text-white-dim text-xs leading-relaxed">
                      Full access to lesson plans, materials, and learning
                      objectives for every session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={Lock} color="violet" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Data{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Privacy
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  We believe in collecting as little data as possible and
                  protecting everything we do collect. Here&apos;s the
                  breakdown:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(52, 211, 153, 0.06)",
                      border: "1px solid rgba(52, 211, 153, 0.15)",
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: "#6EEDB8" }}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      What We Collect
                    </h3>
                    <ul className="text-white-dim text-sm space-y-2">
                      <li>Parent contact information (for enrollment)</li>
                      <li>Student first name and age range</li>
                      <li>Session attendance records</li>
                      <li>Learning progress notes</li>
                    </ul>
                  </div>
                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(255, 107, 107, 0.06)",
                      border: "1px solid rgba(255, 107, 107, 0.15)",
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: "#FF8E8E" }}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      What We Don&apos;t
                    </h3>
                    <ul className="text-white-dim text-sm space-y-2">
                      <li>No social security numbers</li>
                      <li>No photos or biometric data</li>
                      <li>No location tracking</li>
                      <li>No selling data to anyone. Ever.</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4">
                  For full details, read our{" "}
                  <Link
                    href="/privacy"
                    className="text-violet-glow hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Concerns */}
      <section className="py-16 relative z-2">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex items-start gap-5 mb-6">
            <SectionIcon icon={MessageCircleWarning} color="coral" />
            <div>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold mb-4"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Reporting{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Concerns
                </span>
              </h2>
              <div className="space-y-4 text-white-dim text-lg leading-relaxed">
                <p>
                  If you ever have a concern about your child&apos;s safety,
                  privacy, or experience in a Promptlings session, we want to
                  hear from you immediately.
                </p>
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255, 107, 107, 0.06)",
                    border: "1px solid rgba(255, 107, 107, 0.2)",
                  }}
                >
                  <p className="text-cosmic-white font-semibold text-base mb-3">
                    Contact us directly:
                  </p>
                  <ul className="space-y-2 text-base">
                    <li>
                      <span className="text-white-dim">Email: </span>
                      <a
                        href="mailto:safety@promptlings.ai"
                        className="text-coral-glow hover:underline font-medium"
                      >
                        safety@promptlings.ai
                      </a>
                    </li>
                    <li>
                      <span className="text-white-dim">General: </span>
                      <a
                        href="mailto:hello@promptlings.ai"
                        className="text-coral-glow hover:underline font-medium"
                      >
                        hello@promptlings.ai
                      </a>
                    </li>
                  </ul>
                  <p className="text-white-dim text-sm mt-4">
                    Safety concerns are treated with the highest priority. We
                    respond to all safety-related inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Safety Guide CTA */}
      <section className="py-16 relative z-2">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #34D399, transparent)",
              }}
            />
            <div className="w-14 h-14 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center mx-auto mb-5">
              <FileDown className="w-7 h-7 text-mint" />
            </div>
            <h2
              className="text-xl font-bold mb-3 text-cosmic-white"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Download Our Safety Guide
            </h2>
            <p className="text-white-dim text-base leading-relaxed mb-6 max-w-[500px] mx-auto">
              Get our complete parent&apos;s guide to AI safety for children —
              including tips you can use at home, conversation starters, and our
              full safety framework.
            </p>
            <Button
              asChild
              className="bg-gradient-to-br from-mint to-[#059669] text-white border border-mint/30 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-sm font-semibold px-8"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Link href="/blog/parents-guide-ai-safety-children">
                Read the Safety Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 relative z-2">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center mx-auto mb-5">
            <Rocket className="w-7 h-7 text-coral" />
          </div>
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Enroll
            </span>
            ?
          </h2>
          <p className="text-white-dim text-lg leading-relaxed mb-8 max-w-[500px] mx-auto">
            Join families who trust Promptlings to teach their children AI
            literacy the safe way. Spring 2026 cohorts are filling up.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-br from-coral to-[#E05555] text-white border border-coral/30 shadow-[0_0_20px_rgba(255,107,107,0.3)] hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-sm font-semibold px-8"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            <Link href="/#waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
