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
        a: "Every AI tool used in class is vetted for age-appropriateness before it enters the classroom. Students never have unsupervised access to raw language models. All sessions are instructor-led with guardrails in place, and we use sandboxed environments designed specifically for young learners. Your child's safety is our top priority.",
      },
      {
        q: "Will my child's data be collected or used to train AI?",
        a: "We collect only what's necessary: parent email, child's first name, and age range. We never share, sell, or use student data for any purpose beyond delivering the course. We do not collect data directly from children under 13 without parental consent, in compliance with COPPA. See our privacy policy for full details.",
      },
      {
        q: "What if my child has zero experience with AI?",
        a: "That's exactly who we built this for. Our Explorer path is designed for complete beginners. Your child will start with the basics — how to talk to AI, how to evaluate its responses, and how to use it creatively. No coding experience needed. Just curiosity.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "Who teaches the classes?",
        a: "Every class is taught by Matt Martin, Promptlings' founder and an experienced AI professional. This isn't a marketplace of random tutors — it's one instructor who knows every student by name. Matt brings real-world AI experience from the enterprise space, translated into projects kids actually care about.",
      },
      {
        q: "How are classes structured?",
        a: "Classes are live, instructor-led, and project-based with small cohorts of 4-8 students. This is not pre-recorded content. Every session includes hands-on building time with direct instructor feedback. Students work on real projects they can show off when they're done.",
      },
      {
        q: "What ages/grades are each path for?",
        a: "Explorers is for ages 8-10 (Upper Elementary), Builders is for ages 11-13 (Middle School), and Creators is for ages 14-18 (High School). We match students to the right cohort based on both age and experience level to make sure everyone feels challenged but not overwhelmed.",
      },
      {
        q: "What does my child need to participate?",
        a: "A laptop or tablet, an internet connection, and a modern web browser (Chrome, Firefox, or Safari). No expensive software or downloads required — we provide access to all the AI tools used in class. Everything runs in the browser.",
      },
    ],
  },
  {
    category: "Value & Outcomes",
    items: [
      {
        q: "What will my child actually learn?",
        a: "Explorers (ages 8-10): Your child will learn to talk to AI using prompt engineering, create art and stories with AI tools, and build their first working project — a chatbot or story generator they design themselves.\n\nBuilders (ages 11-13): Students dive into coding with Python, build real web applications, and learn to train simple AI models. They'll automate tasks and develop computational thinking skills.\n\nCreators (ages 14-18): Advanced students build portfolio-ready projects using real developer tools and APIs. They'll present their work to expert panels and develop skills directly applicable to college and careers.",
      },
      {
        q: "What tools do you use?",
        a: "We use industry-standard AI tools including ChatGPT, Claude, and creative AI platforms — the same tools professionals use daily. Every tool is vetted for age-appropriateness and used in a supervised, instructor-led environment. No downloads required — everything runs in the browser.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes. Full refund if you cancel 48 or more hours before the first class. After that, we offer a pro-rated refund for any unused sessions. No refund for sessions already completed. Contact hello@promptlings.ai to request a refund. See our full refund policy for details.",
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
                    <AccordionContent className="px-7 pb-6 text-white-dim text-[0.95rem] leading-relaxed whitespace-pre-line">
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
