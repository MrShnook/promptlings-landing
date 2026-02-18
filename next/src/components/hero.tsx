import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-[120px] pb-20 relative overflow-hidden z-2"
      style={{
        backgroundImage: "url('/img/hero-classroom.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient scrim — dark left for text, fades right to show art */}
      {/* Mobile: heavier overlay for readability; Desktop: original gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,2,8,0.92) 0%, rgba(5,2,8,0.80) 25%, rgba(5,2,8,0.50) 50%, rgba(5,2,8,0.15) 75%, rgba(5,2,8,0.05) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,2,8,0.92) 0%, rgba(5,2,8,0.88) 40%, rgba(5,2,8,0.80) 70%, rgba(5,2,8,0.70) 100%)",
          backgroundPosition: "30% center",
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[2]">
        <div className="max-w-[600px]">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
            style={{
              background: "rgba(167, 139, 250, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.4)",
              color: "#c4b5fd",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#4ade80",
                boxShadow: "0 0 8px rgba(74, 222, 128, 0.6)",
                animation: "blink 2s ease-in-out infinite",
              }}
            />
            Now Enrolling — Spring 2026
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] mb-2"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              color: "#ffffff",
              textShadow:
                "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(100,50,180,0.2)",
              background: "linear-gradient(135deg, #ffffff 40%, #f9a8d4 70%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))",
            }}
          >
            Your child&apos;s AI journey starts here.
          </h1>

          {/* Typing tagline */}
          <div
            className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-medium mb-6 min-h-[2.4em]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              textShadow: "0 1px 12px rgba(0,0,0,0.5)",
            }}
          >
            <span className="text-violet-glow">Prompt</span>
            <span className="text-violet-glow">. </span>
            <span className="text-coral">Build</span>
            <span className="text-coral">. </span>
            <span className="text-mint">Create</span>
            <span className="text-mint">.</span>
            <span
              className="inline-block w-[3px] h-[1.2em] bg-mint ml-1 align-text-bottom"
              style={{ animation: "cursor-blink 1s step-end infinite" }}
            />
          </div>

          {/* Subheadline */}
          <p
            className="text-lg leading-relaxed mb-9 max-w-[480px]"
            style={{
              color: "rgba(230, 220, 245, 0.9)",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            <strong className="text-white">Promptlings</strong> teaches kids
            ages 8 to 18 to become AI creators through live, small-group
            classes. Not passive screen time —{" "}
            <strong className="text-white">real skills</strong> for the future.
          </p>

          {/* Waitlist form */}
          <WaitlistForm variant="inline" />
        </div>
      </div>
    </section>
  );
}
