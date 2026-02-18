"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pipFrames = [
  { src: "/img/animations/pip-scroll-frame1.png", alt: "Pip mindlessly scrolling a phone", duration: 2000 },
  { src: "/img/animations/pip-scroll-frame2.png", alt: "Pip pauses and looks up curious", duration: 1200 },
  { src: "/img/animations/pip-scroll-frame3.png", alt: "Pip has a lightbulb moment", duration: 1500 },
  { src: "/img/animations/pip-scroll-frame4.png", alt: "Pip actively building and creating", duration: 2500 },
  { src: "/img/animations/pip-scroll-frame5.png", alt: "Pip proudly shows off what they made", duration: 2000 },
];

function PipAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const frame = pipFrames[currentFrame];
    
    // Show current frame for its duration, then fade out
    const showTimer = setTimeout(() => {
      setFadeState("out");
    }, frame.duration - 300); // Start fade 300ms before switching

    // Switch to next frame after full duration
    const switchTimer = setTimeout(() => {
      setCurrentFrame((prev) => (prev + 1) % pipFrames.length);
      setFadeState("in");
    }, frame.duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(switchTimer);
    };
  }, [currentFrame]);

  // Progress indicator labels
  const stages = ["Scroll", "Notice", "Idea!", "Build", "Create!"];

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Animation frame */}
      <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
        {pipFrames.map((frame, i) => (
          <div
            key={frame.src}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{
              opacity: i === currentFrame ? (fadeState === "in" ? 1 : 0) : 0,
            }}
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              width={320}
              height={320}
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Progress dots with labels */}
      <div className="flex items-center gap-2">
        {stages.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === currentFrame
                  ? "linear-gradient(135deg, #9F67FF, #E8735C)"
                  : "rgba(255,255,255,0.2)",
                boxShadow: i === currentFrame
                  ? "0 0 8px rgba(159, 103, 255, 0.5)"
                  : "none",
                transform: i === currentFrame ? "scale(1.3)" : "scale(1)",
              }}
            />
            <span
              className="text-[10px] transition-all duration-300"
              style={{
                color: i === currentFrame ? "#C4B5FD" : "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhatIsPromptlings() {
  return (
    <section className="py-28 relative z-2">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section label — centered */}
        <div
          className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          // The Opportunity
        </div>
        <h2
          className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-12 text-center"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          The{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Generation
          </span>
        </h2>

        {/* Two-column: copy left, animation right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-5 text-white-dim text-lg leading-relaxed text-center md:text-left">
            <p>
              AI isn&apos;t coming — it&apos;s already here. Your child uses it
              every day without thinking about it.
            </p>
            <p>
              The kids who thrive won&apos;t just use AI. They&apos;ll know how
              to build with it, think with it, and make it work for them.
            </p>
            <p className="text-cosmic-white font-semibold">
              Promptlings turns passive consumers into active creators.
            </p>
          </div>

          {/* Pip Animation */}
          <div className="flex justify-center md:justify-end">
            <PipAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
