import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Users, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Enroll — Promptlings",
  description:
    "Enroll your child in Promptlings AI classes. Spring Break AI Camp March 9-13, plus ongoing courses for ages 8-18.",
};

const springBreakTiers = [
  {
    name: "Explorers",
    ages: "Ages 8–10",
    color: "#22c55e",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description:
      "AI art, story co-writing, and prompt games. Pure creativity, zero screen-zombie energy.",
    time: "10:00 AM MST",
    outschoolLink: "#", // Placeholder until listing is live
  },
  {
    name: "Builders",
    ages: "Ages 11–13",
    color: "#7C3AED",
    bgColor: "bg-violet/10",
    borderColor: "border-violet/30",
    description:
      "Prompt engineering, chatbot building, and AI-powered web projects. Real skills, real output.",
    time: "12:00 PM MST",
    outschoolLink: "#",
  },
  {
    name: "Creators",
    ages: "Ages 14–18",
    color: "#3b82f6",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description:
      "Full-stack AI projects, API integration, and portfolio-ready work. College-app material.",
    time: "2:00 PM MST",
    outschoolLink: "#",
  },
];

export default function EnrollPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Enrollment
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Join Promptlings
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose your path. All classes are live, instructor-led, and limited
            to 8 students for personalized attention.
          </p>
        </div>

        {/* Spring Break Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🌴</span>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Spring Break AI Camp
            </h2>
            <span className="text-sm bg-violet/20 text-violet px-3 py-1 rounded-full font-medium">
              March 9–13
            </span>
          </div>

          <div className="grid gap-4 mb-8">
            <div className="flex items-center gap-6 text-gray-400 text-sm flex-wrap">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet" />
                Monday–Friday
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet" />
                1 hour per day
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-violet" />
                Max 8 students
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-violet" />
                COPPA compliant
              </span>
            </div>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {springBreakTiers.map((tier) => (
              <div
                key={tier.name}
                className={`${tier.bgColor} ${tier.borderColor} border rounded-2xl p-6 flex flex-col`}
              >
                <div className="mb-4">
                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-400">{tier.ages}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {tier.description}
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {tier.time}
                </div>
                {tier.outschoolLink === "#" ? (
                  <Link
                    href="#waitlist-section"
                    className="block w-full py-3 text-center rounded-xl text-sm font-semibold tracking-wider uppercase transition-all border"
                    style={{
                      fontFamily: "var(--font-orbitron), sans-serif",
                      borderColor: tier.color,
                      color: tier.color,
                    }}
                  >
                    Join Waitlist
                  </Link>
                ) : (
                  <a
                    href={tier.outschoolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center rounded-xl text-sm font-semibold tracking-wider uppercase transition-all border flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "var(--font-orbitron), sans-serif",
                      borderColor: tier.color,
                      color: tier.color,
                    }}
                  >
                    Register on Outschool
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Founding Member Note */}
          <div className="mt-8 p-4 bg-violet/10 border border-violet/20 rounded-xl text-center">
            <p className="text-sm text-gray-300">
              🎁{" "}
              <span className="text-violet font-semibold">
                Waitlist members get 20% off
              </span>{" "}
              their first enrollment with code{" "}
              <code className="bg-violet/20 px-2 py-0.5 rounded text-violet font-mono text-xs">
                FOUNDER2026
              </code>
            </p>
          </div>
        </div>

        {/* Ongoing Courses Section */}
        <div className="mb-16" id="waitlist-section">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Ongoing Courses
          </h2>
          <p className="text-gray-400 mb-8">
            Full multi-week courses launching after Spring Break. Join the
            waitlist to be first to know when enrollment opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Link href="/#waitlist">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white/5 tracking-wider uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Link href="/curriculum">View Full Curriculum</Link>
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-gray-800 pt-12">
          <h2
            className="text-xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Common Questions
          </h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">
                What does my child need?
              </h3>
              <p className="text-gray-400 text-sm">
                A laptop or tablet with a modern web browser and a stable
                internet connection. That&apos;s it — all tools and materials are
                provided.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                What if my child has never used AI before?
              </h3>
              <p className="text-gray-400 text-sm">
                Perfect — that&apos;s what we&apos;re here for. The Explorers
                path starts from zero. No prior experience needed for any tier.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Can I sit in on a session?
              </h3>
              <p className="text-gray-400 text-sm">
                Absolutely. Parents are welcome to observe any session. We
                believe in full transparency.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                What&apos;s your refund policy?
              </h3>
              <p className="text-gray-400 text-sm">
                If your child isn&apos;t loving it after the first two sessions,
                we&apos;ll refund you in full. No questions asked.{" "}
                <Link
                  href="/refund"
                  className="text-violet hover:underline"
                >
                  Full refund policy →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
