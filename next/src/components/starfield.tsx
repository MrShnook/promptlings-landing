"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const count = window.innerWidth < 768 ? 80 : 200;

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      star.className = "absolute rounded-full bg-white";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      if (!prefersReducedMotion) {
        const dur = Math.random() * 4 + 2;
        const minO = Math.random() * 0.3 + 0.1;
        const maxO = Math.random() * 0.5 + 0.5;
        star.style.setProperty("--min-o", String(minO));
        star.style.setProperty("--max-o", String(maxO));
        star.style.animation = `twinkle ${dur}s ease-in-out infinite alternate`;
        star.style.animationDelay = `${Math.random() * 5}s`;
      } else {
        star.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      }

      field.appendChild(star);
    }

    return () => {
      while (field.firstChild) {
        field.removeChild(field.firstChild);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={fieldRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      {/* Shooting stars */}
      <div
        className="fixed w-[120px] h-[2px] rounded-sm z-[1] pointer-events-none opacity-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
          top: "15%",
          right: "10%",
          transform: "rotate(-35deg)",
          animation: "shoot 2.5s ease-in 3s infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed w-[120px] h-[2px] rounded-sm z-[1] pointer-events-none opacity-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
          top: "35%",
          right: "30%",
          transform: "rotate(-35deg)",
          animation: "shoot 2s ease-in 8s infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed w-[120px] h-[2px] rounded-sm z-[1] pointer-events-none opacity-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
          top: "8%",
          right: "50%",
          transform: "rotate(-35deg)",
          animation: "shoot 3s ease-in 14s infinite",
        }}
        aria-hidden="true"
      />
    </>
  );
}
