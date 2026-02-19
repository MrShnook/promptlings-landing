"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tiers = [
  {
    id: "8-10",
    name: "Explorers",
    ages: "Ages 8–10",
    color: "#22c55e",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    selectedBg: "bg-green-500/20",
    selectedBorder: "border-green-500/60",
    ringColor: "ring-green-500/40",
    description:
      "AI art, story co-writing, and prompt games. Pure creativity, zero screen-zombie energy.",
    emoji: "🎨",
  },
  {
    id: "11-13",
    name: "Builders",
    ages: "Ages 11–13",
    color: "#7C3AED",
    bgColor: "bg-violet/10",
    borderColor: "border-violet/30",
    selectedBg: "bg-violet/20",
    selectedBorder: "border-violet/60",
    ringColor: "ring-violet/40",
    description:
      "Prompt engineering, chatbot building, and AI-powered web projects. Real skills, real output.",
    emoji: "🛠️",
  },
  {
    id: "14-18",
    name: "Creators",
    ages: "Ages 14–18",
    color: "#3b82f6",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    selectedBg: "bg-blue-500/20",
    selectedBorder: "border-blue-500/60",
    ringColor: "ring-blue-500/40",
    description:
      "Full-stack AI projects, API integration, and portfolio-ready work. College-app material.",
    emoji: "🚀",
  },
];

const scheduleOptions = [
  { value: "morning", label: "Morning (9–12 PM)" },
  { value: "afternoon", label: "Afternoon (12–4 PM)" },
  { value: "evening", label: "Evening (4–7 PM)" },
  { value: "weekend", label: "Weekend" },
];

export function EnrollForm() {
  const searchParams = useSearchParams();
  const prefillEmail = searchParams.get("email") || "";

  const [selectedTier, setSelectedTier] = useState<string>("");
  const [schedule, setSchedule] = useState<string>("");
  const [email, setEmail] = useState(prefillEmail);
  const [questions, setQuestions] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedTier) {
      setError("Please select your child's age range.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tier: selectedTier,
          schedule_preference: schedule || "not specified",
          questions: questions || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
      posthog.capture("pre_registration", {
        tier: selectedTier,
        schedule_preference: schedule || "not specified",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      posthog.capture("pre_registration_error", {
        error: err instanceof Error ? err.message : "unknown",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          You&apos;re In!
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          We&apos;ll be in touch when your child&apos;s cohort is ready. Keep an
          eye on your inbox!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
      {/* Step 1: Tier Selection */}
      <fieldset className="mb-8">
        <legend
          className="text-lg font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          1. Your Child&apos;s Age Range
        </legend>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => {
                  setSelectedTier(tier.id);
                  setError("");
                }}
                className={`relative rounded-2xl p-5 text-left transition-all duration-200 border-2 cursor-pointer focus:outline-none focus:ring-2 ${
                  isSelected
                    ? `${tier.selectedBg} ${tier.selectedBorder} ${tier.ringColor} shadow-lg`
                    : `${tier.bgColor} ${tier.borderColor} hover:border-opacity-60`
                }`}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: tier.color }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <span className="text-2xl mb-2 block">{tier.emoji}</span>
                <h3
                  className="text-lg font-bold mb-0.5"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{tier.ages}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tier.description}
                </p>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 2: Schedule Preference */}
      <fieldset className="mb-8">
        <legend
          className="text-lg font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          2. Preferred Schedule
        </legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {scheduleOptions.map((option) => {
            const isSelected = schedule === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSchedule(option.value)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet/40 ${
                  isSelected
                    ? "bg-violet/20 border-violet/60 text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-violet/30 hover:text-gray-300"
                }`}
                aria-pressed={isSelected}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 3: Email */}
      <div className="mb-6">
        <label
          htmlFor="enroll-email"
          className="text-lg font-bold text-white mb-4 block"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          3. Parent Email
        </label>
        <Input
          id="enroll-email"
          type="email"
          placeholder="parent@example.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="w-full h-12 px-5 bg-navy-deep/60 border-violet/30 rounded-xl text-cosmic-white placeholder:text-white-dim/50 focus:border-violet-glow focus:ring-violet-glow/20 text-base"
        />
      </div>

      {/* Step 4: Questions (optional) */}
      <div className="mb-8">
        <label
          htmlFor="enroll-questions"
          className="text-lg font-bold text-white mb-4 block"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          4. Questions or Comments{" "}
          <span className="text-gray-500 text-sm font-normal">(optional)</span>
        </label>
        <textarea
          id="enroll-questions"
          placeholder="Anything you'd like us to know about your child or your expectations..."
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          rows={3}
          className="w-full px-5 py-3 bg-navy-deep/60 border border-violet/30 rounded-xl text-cosmic-white placeholder:text-white-dim/50 focus:border-violet-glow focus:outline-none focus:ring-2 focus:ring-violet-glow/20 text-base resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/40 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all px-8 tracking-widest uppercase text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Registering...
          </span>
        ) : (
          <>
            Pre-Register <span className="ml-2">&rarr;</span>
          </>
        )}
      </Button>

      <p className="text-center text-gray-500 text-xs mt-4">
        No payment required. We&apos;ll only email you about enrollment updates.
      </p>
    </form>
  );
}
