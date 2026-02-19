"use client";

import { useState } from "react";
import { X } from "lucide-react";
import posthog from "posthog-js";

export function SpringBreakBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Fixed banner at very top */}
      <div className="fixed top-0 left-0 right-0 z-[1001] bg-gradient-to-r from-violet to-[#5B21B6] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm sm:text-base relative">
          <span className="hidden sm:inline">🌴</span>
          <span className="font-medium">
            <span className="font-bold">Spring Break AI Camp</span>
            {" — "}
            <span className="hidden sm:inline">March 9–13 · 1 hour/day · Ages 8–18 · </span>
            <a
              href="#waitlist"
              onClick={() =>
                posthog.capture("cta_click", {
                  cta_label: "Spring Break Banner",
                  location: "top_banner",
                })
              }
              className="underline underline-offset-2 hover:no-underline font-bold"
            >
              Reserve your spot →
            </a>
          </span>
          <button
            onClick={() => {
              setDismissed(true);
              posthog.capture("banner_dismissed", { banner: "spring_break" });
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Spacer to push nav and content down */}
      <div className="h-[40px]" />
    </>
  );
}
