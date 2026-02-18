"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Check } from "lucide-react";

interface WaitlistFormProps {
  variant?: "inline" | "stacked";
}

export function WaitlistForm({ variant = "inline" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { email, age: age || "not specified" });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card px-6 py-4 text-center">
        <p
          className="text-mint font-semibold text-lg flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          <Check className="w-5 h-5" />
          You&apos;re In!
        </p>
        <p className="text-white-dim text-sm mt-1">
          We&apos;ll be in touch when enrollment opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-3 ${
        variant === "stacked"
          ? "flex-col max-w-md mx-auto"
          : "flex-col sm:flex-row flex-wrap"
      }`}
    >
      <Input
        type="email"
        placeholder="parent@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 px-5 bg-navy-deep/60 border-violet/30 rounded-xl text-cosmic-white placeholder:text-white-dim/50 focus:border-violet-glow focus:ring-violet-glow/20 text-base"
      />
      <div className="relative w-full sm:w-auto">
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full h-12 px-4 pr-10 bg-navy-deep/60 border border-violet/30 rounded-xl text-cosmic-white text-sm cursor-pointer focus:border-violet-glow focus:outline-none focus:ring-2 focus:ring-violet-glow/20 appearance-none backdrop-blur-sm"
        >
          <option value="" className="bg-navy-deep">
            Child&apos;s Age Range
          </option>
          <option value="8-10" className="bg-navy-deep">
            8-10 (Explorers)
          </option>
          <option value="11-13" className="bg-navy-deep">
            11-13 (Builders)
          </option>
          <option value="14-18" className="bg-navy-deep">
            14-18 (Creators)
          </option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white-dim pointer-events-none" />
      </div>
      <Button
        type="submit"
        className="w-full sm:w-auto h-12 bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/40 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all px-8 tracking-widest uppercase text-sm font-bold whitespace-nowrap"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        Join Waitlist <span className="ml-2">&rarr;</span>
      </Button>
    </form>
  );
}
