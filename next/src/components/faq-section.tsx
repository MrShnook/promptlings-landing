"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "Safety & Trust",
    items: [
      {
        q: "Is this safe for my child? What AI tools will they use?",
        a: "Curated, age-appropriate tools. No unsupervised access to raw LLMs. Guardrails and instructor oversight at every step. We use sandboxed AI environments designed specifically for young learners.",
      },
      {
        q: "Will my child's data be collected or used to train AI?",
        a: "No student data collection. Privacy-first approach. Clear data policy. We never share, sell, or use student data for any purpose beyond delivering the course.",
      },
      {
        q: "Does my child need prior coding experience?",
        a: "No. Explorers is designed for complete beginners. Each tier builds progressively. Builders assumes some comfort with computers but no coding required. Creators is our advanced track — some programming experience helps but isn't mandatory.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "How are classes structured?",
        a: "Live instructor-led, small cohorts (max 8-10 students), project-based learning. Not pre-recorded videos. Every session has hands-on building time with direct instructor feedback.",
      },
      {
        q: "What ages/grades are each course for?",
        a: "Explorers (ages 8-10, Upper Elementary), Builders (ages 11-13, Middle School), Creators (ages 14+, High School). We match students to the right cohort based on both age and experience.",
      },
      {
        q: "How long is each course?",
        a: "Session details are being finalized for Spring 2026. Contact us at hello@promptlings.ai for the current schedule and availability.",
      },
      {
        q: "What does my child need?",
        a: "A laptop or tablet, internet connection, and a modern web browser (Chrome, Firefox, or Safari). No expensive software required — we provide access to all the tools used in class.",
      },
    ],
  },
  {
    category: "Value & Outcomes",
    items: [
      {
        q: "What will my child actually learn?",
        a: "Explorers: create stories and art with AI, learn prompt crafting. Builders: build functional chatbots and AI tools, intro to Python. Creators: ship portfolio-worthy projects, full-stack AI app development.",
      },
      {
        q: "How is this different from other coding classes?",
        a: "We teach kids to build WITH AI, not just learn about it. Our curriculum is project-based, creative, and hands-on. Every session ends with something your child made and can share. We're practitioners who build AI systems professionally, not just educators.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes — satisfaction guarantee. Full refund within the first two sessions, no questions asked. After that, we offer a prorated refund. Contact us at hello@promptlings.ai for details.",
      },
    ],
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-28 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[3px] uppercase text-violet-glow mb-3 flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            // FAQ
          </div>
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Got{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9F67FF, #C4B5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
            ?
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-[800px] mx-auto space-y-8">
          {faqData.map((section) => (
            <div key={section.category}>
              <h3
                className="text-xs font-semibold tracking-[2px] uppercase text-white-dim mb-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                {section.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {section.items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${section.category}-${idx}`}
                    className="glass-card border border-glass-border rounded-2xl overflow-hidden px-0 data-[state=open]:border-violet/50 data-[state=open]:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all"
                  >
                    <AccordionTrigger className="px-7 py-5 text-left text-cosmic-white font-semibold hover:text-violet-glow transition-colors [&>svg]:text-violet-glow hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-7 pb-6 text-white-dim text-[0.95rem] leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
