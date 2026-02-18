import type { Metadata } from "next";
import Link from "next/link";
import { CurriculumTiers } from "./curriculum-tiers";
import { ShieldCheck, Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Curriculum — Promptlings",
  description:
    "Explore the Promptlings curriculum: three learning paths for ages 8–18. Hands-on AI projects, small groups, and safety-first education.",
};

export default function CurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-2">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // Curriculum
          </div>
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Three Paths to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Mastery
            </span>
          </h1>
          <p className="text-white-dim text-lg max-w-[650px] mx-auto leading-relaxed mb-8">
            From first conversations with AI to building full-stack applications,
            our curriculum grows with your child. Small groups, live instruction,
            real projects.
          </p>

          {/* Path quick-nav pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#explorers"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase no-underline transition-all hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(52, 211, 153, 0.15)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
                color: "#34D399",
              }}
            >
              Explorers · 8–10
            </a>
            <a
              href="#builders"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase no-underline transition-all hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(124, 58, 237, 0.15)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "#9F67FF",
              }}
            >
              Builders · 11–13
            </a>
            <a
              href="#creators"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase no-underline transition-all hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(255, 107, 107, 0.15)",
                border: "1px solid rgba(255, 107, 107, 0.3)",
                color: "#FF6B6B",
              }}
            >
              Creators · 14–18
            </a>
          </div>
        </div>
      </section>

      {/* Safety badge */}
      <section className="pb-12 relative z-2">
        <div className="max-w-[700px] mx-auto px-6">
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(52, 211, 153, 0.08)",
              border: "1px solid rgba(52, 211, 153, 0.2)",
            }}
          >
            <ShieldCheck className="w-6 h-6 flex-shrink-0 text-mint" />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#6EEDB8" }}
            >
              <strong>Safety First:</strong> Every session includes
              age-appropriate AI safety education — critical thinking, fact-checking,
              privacy awareness, and responsible use.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Tiers */}
      <section className="py-10 relative z-2">
        <div className="max-w-[900px] mx-auto px-6">
          <CurriculumTiers />
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 relative z-2">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #9F67FF, transparent)",
              }}
            />
            <div className="w-14 h-14 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center mx-auto mb-5">
              <Download className="w-7 h-7 text-violet-glow" />
            </div>
            <h2
              className="text-xl font-bold mb-3 text-cosmic-white"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              See It in Action
            </h2>
            <p className="text-white-dim text-base leading-relaxed mb-6 max-w-[500px] mx-auto">
              Download a sample lesson plan to see how we combine hands-on AI
              projects with critical thinking and safety education.
            </p>
            <Button
              asChild
              className="bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Link href="/downloads/sample-lesson-plan.html">
                <Download className="w-4 h-4 mr-2" />
                Download Sample Lesson Plan
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
              Launch
            </span>
            ?
          </h2>
          <p className="text-white-dim text-lg leading-relaxed mb-8 max-w-[500px] mx-auto">
            Spring 2026 cohorts are filling up. Join the waitlist to secure your
            child&apos;s spot and be the first to know when enrollment opens.
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
