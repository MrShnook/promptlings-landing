"use client";

import posthog from "posthog-js";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Week {
  number: number;
  title: string;
  description: string;
}

interface Tier {
  id: string;
  name: string;
  tagline: string;
  ages: string;
  weeks: number;
  sessionLength: string;
  groupSize: number;
  prerequisites: string;
  color: string;
  colorLight: string;
  colorBg: string;
  colorBorder: string;
  curriculum: Week[];
}

const tiers: Tier[] = [
  {
    id: "explorers",
    name: "Explorers Path",
    tagline: "AI is My Superpower",
    ages: "Ages 8–10",
    weeks: 6,
    sessionLength: "45 min",
    groupSize: 8,
    prerequisites: "No prerequisites",
    color: "#34D399",
    colorLight: "#6EEDB8",
    colorBg: "rgba(52, 211, 153, 0.1)",
    colorBorder: "rgba(52, 211, 153, 0.25)",
    curriculum: [
      {
        number: 1,
        title: "Meet Your AI Friend",
        description:
          "What IS this thing? Learn what AI is, ask questions, evaluate answers",
      },
      {
        number: 2,
        title: "AI Art Studio",
        description:
          "Create images from imagination using text prompts",
      },
      {
        number: 3,
        title: "Story Time with AI",
        description:
          "Co-write your first adventure with AI as partner",
      },
      {
        number: 4,
        title: "AI Homework Helper",
        description:
          "Study smarter with AI tutoring, learn to fact-check",
      },
      {
        number: 5,
        title: "Building a Chatbot",
        description:
          "Design an AI personality with system prompts (no code!)",
      },
      {
        number: 6,
        title: "Showcase & Graduation",
        description:
          "Present projects, safety quiz, certificates",
      },
    ],
  },
  {
    id: "builders",
    name: "Builders Path",
    tagline: "AI as a Power Tool",
    ages: "Ages 11–13",
    weeks: 8,
    sessionLength: "60 min",
    groupSize: 10,
    prerequisites: "Interest in tech (no coding required)",
    color: "#7C3AED",
    colorLight: "#9F67FF",
    colorBg: "rgba(124, 58, 237, 0.1)",
    colorBorder: "rgba(124, 58, 237, 0.25)",
    curriculum: [
      {
        number: 1,
        title: "AI Under the Hood",
        description:
          "How AI actually works (training, data, patterns)",
      },
      {
        number: 2,
        title: "Prompt Engineering Pro",
        description:
          "Advanced techniques for getting exactly what you need",
      },
      {
        number: 3,
        title: "AI + Data",
        description:
          "Working with datasets, AI analysis, visualization",
      },
      {
        number: 4,
        title: "Build an AI App",
        description:
          "Create a real application using AI APIs",
      },
      {
        number: 5,
        title: "AI for Good",
        description:
          "Solving real problems with AI (community focus)",
      },
      {
        number: 6,
        title: "AI Ethics Deep Dive",
        description: "Bias, fairness, responsibility",
      },
      {
        number: 7,
        title: "Advanced Chatbot Lab",
        description: "Multi-turn, context-aware bots",
      },
      {
        number: 8,
        title: "Demo Day",
        description: "Present your AI app to an audience",
      },
    ],
  },
  {
    id: "creators",
    name: "Creators Path",
    tagline: "AI as Your Co-Pilot",
    ages: "Ages 14–18",
    weeks: 10,
    sessionLength: "90 min",
    groupSize: 8,
    prerequisites: "Interest in programming (experience helpful but not required)",
    color: "#FF6B6B",
    colorLight: "#FF8E8E",
    colorBg: "rgba(255, 107, 107, 0.1)",
    colorBorder: "rgba(255, 107, 107, 0.25)",
    curriculum: [
      {
        number: 1,
        title: "The AI Landscape",
        description:
          "Models, APIs, architectures overview",
      },
      {
        number: 2,
        title: "Prompt Engineering Mastery",
        description:
          "System prompts, few-shot, chain-of-thought",
      },
      {
        number: 3,
        title: "Building with APIs",
        description:
          "Connect to OpenAI, Claude, image APIs",
      },
      {
        number: 4,
        title: "Full-Stack AI App",
        description:
          "Frontend + backend + AI integration",
      },
      {
        number: 5,
        title: "Fine-Tuning & Custom Models",
        description: "Train AI on custom data",
      },
      {
        number: 6,
        title: "AI Agents & Automation",
        description: "Multi-step AI workflows",
      },
      {
        number: 7,
        title: "Ethics, Safety & Policy",
        description: "Real-world AI governance",
      },
      {
        number: 8,
        title: "Portfolio Sprint (Part 1)",
        description: "Design your capstone project",
      },
      {
        number: 9,
        title: "Portfolio Sprint (Part 2)",
        description: "Build and iterate",
      },
      {
        number: 10,
        title: "Capstone Showcase",
        description:
          "Present to panel, receive professional feedback",
      },
    ],
  },
];

export function CurriculumTiers() {
  return (
    <div className="space-y-10">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          id={tier.id}
          className="glass-card relative overflow-hidden scroll-mt-28"
        >
          {/* Top color bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, ${tier.color}, ${tier.colorLight})` }}
          />

          {/* Header section */}
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div
                  className="text-xs font-semibold tracking-[3px] uppercase mb-2 flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: tier.color,
                  }}
                >
                  <span
                    className="w-6 h-px"
                    style={{ background: tier.color }}
                  />
                  // {tier.ages}
                </div>
                <h3
                  className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-cosmic-white mb-1"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  {tier.name}
                </h3>
                <p className="text-white-dim text-lg italic">
                  &ldquo;{tier.tagline}&rdquo;
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    background: tier.colorBg,
                    border: `1px solid ${tier.colorBorder}`,
                    color: tier.color,
                  }}
                >
                  {tier.weeks} weeks × {tier.sessionLength}
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    background: tier.colorBg,
                    border: `1px solid ${tier.colorBorder}`,
                    color: tier.color,
                  }}
                >
                  Max {tier.groupSize} students
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    background: tier.colorBg,
                    border: `1px solid ${tier.colorBorder}`,
                    color: tier.color,
                  }}
                >
                  {tier.prerequisites}
                </span>
              </div>
            </div>

            {/* Week-by-week accordion */}
            <div className="mt-8">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                onValueChange={(value) => {
                  if (value) {
                    posthog.capture("curriculum_path_viewed", {
                      path_name: tier.name,
                      age_range: tier.ages,
                    });
                  }
                }}
              >
                <AccordionItem
                  value={`${tier.id}-curriculum`}
                  className="border-none"
                >
                  <AccordionTrigger
                    className="hover:no-underline py-3 px-4 rounded-xl transition-colors"
                    style={{
                      background: tier.colorBg,
                      border: `1px solid ${tier.colorBorder}`,
                    }}
                  >
                    <span
                      className="text-sm font-semibold tracking-wide"
                      style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        color: tier.color,
                      }}
                    >
                      Week-by-Week Breakdown
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-0">
                    <div className="relative pl-6 md:pl-8">
                      {/* Timeline line */}
                      <div
                        className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px opacity-30"
                        style={{ background: tier.color }}
                      />

                      <div className="space-y-4">
                        {tier.curriculum.map((week) => (
                          <div key={week.number} className="relative flex items-start gap-4">
                            {/* Timeline dot */}
                            <div
                              className="absolute -left-6 md:-left-8 top-1 w-[10px] h-[10px] rounded-full border-2 flex-shrink-0"
                              style={{
                                borderColor: tier.color,
                                background: tier.colorBg,
                              }}
                            />
                            <div className="flex-1 pb-1">
                              <div className="flex items-baseline gap-3">
                                <span
                                  className="text-[0.65rem] font-bold tracking-wider uppercase opacity-60 flex-shrink-0"
                                  style={{
                                    fontFamily:
                                      "var(--font-jetbrains-mono), monospace",
                                    color: tier.color,
                                  }}
                                >
                                  WK {String(week.number).padStart(2, "0")}
                                </span>
                                <span
                                  className="text-cosmic-white font-semibold text-sm"
                                  style={{
                                    fontFamily:
                                      "var(--font-orbitron), sans-serif",
                                  }}
                                >
                                  {week.title}
                                </span>
                              </div>
                              <p className="text-white-dim text-sm mt-1 leading-relaxed ml-[3.3rem]">
                                {week.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
