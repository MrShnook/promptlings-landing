"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

/**
 * Temporary Spring Break announcement banner.
 * Remove this component after March 13, 2026.
 *
 * Phase 0 (now): Links to #waitlist
 * Phase 1 (Outschool live): Update href to Outschool listing URL
 */
export function SpringBreakBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm md:text-base">
        <span className="hidden sm:inline">🌴</span>
        <span className="font-medium">
          <span className="hidden md:inline">Spring Break AI Camp — March 9–13 — </span>
          <span className="md:hidden">Spring Break AI Camp — </span>
          <Link
            href="#waitlist"
            className="underline underline-offset-2 decoration-white/60 hover:decoration-white font-bold transition-colors"
          >
            Join the waitlist for early access →
          </Link>
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 md:right-6 p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
