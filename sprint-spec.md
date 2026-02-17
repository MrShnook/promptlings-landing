# Sprint: Promptlings Landing Page — Cosmic v2

## Context

We're converting an approved static HTML cosmic-themed landing page into a production Next.js 15 site. The family (William, Norah, Anastasia) approved the cosmic v2 direction: starfield background, nebula blobs, glassmorphic cards, Space Grotesk typography.

**Reference:** The existing `v2-cosmic.html` in this repo shows the approved visual direction. Match its aesthetic but build it properly in Next.js.

**Stack:** Next.js 15 (App Router, TypeScript), Tailwind CSS, shadcn/ui components, PostHog Cloud analytics.

**Deploy:** Vercel via CLI (`vercel deploy --token=$VERCEL_TOKEN`). The token is in the environment.

## Checklist

- [ ] Initialize Next.js 15 project with TypeScript + Tailwind in a `next/` subdirectory (keep existing static files intact)
- [ ] Install and configure shadcn/ui (Accordion, Button, Card, Input, Sheet, Form components)
- [ ] Port cosmic theme to Tailwind config — colors: violet #7C3AED, violet-glow #9F67FF, coral #FF6B6B, navy-deep #0B0A1A, navy #1E1B4B, mint #34D399, white #F0EEFF, glass-bg rgba(30,27,75,0.45). Fonts: Orbitron (headlines), Space Grotesk (body), JetBrains Mono (code)
- [ ] Build Starfield background component (CSS-only animated stars, performant, reduced-motion support)
- [ ] Build responsive Navigation component with logo placeholder, page links (Programs, Partners, About, Blog), and "Join Waitlist" CTA button. Use shadcn Sheet for mobile menu. Glass-morphism styling.
- [ ] Build Hero section — "Prompt. Build. Create." headline, subhead about AI literacy for kids, inline waitlist form (email input + optional age dropdown + submit button), floating mascot illustration placeholders
- [ ] Build Course Tiers section — 3 glassmorphic cards: Explorers (8-10, Upper Elementary, mint accent), Builders (11-13, Middle School, violet accent), Creators (14+, High School, coral accent). Each card has mascot placeholder, description, age range.
- [ ] Build Trust Signals section — 4 credibility badges (Age-Appropriate, Safety-First, Live Instructor, Parent-Approved Curriculum)
- [ ] Build "Meet the Founder" section — Matt's photo placeholder, bio about data/AI professional background, designed as a swappable component (easy to change to "Meet the Team" later)
- [ ] Build mid-page Waitlist CTA section between Programs and FAQ (capture point #2)
- [ ] Build WaitlistForm component — email (required) + optional age range dropdown (8-10/11-13/14+) → console.log on submit for now (ConvertKit integration later)
- [ ] Build FAQ section using shadcn Accordion — 10 questions covering Safety & Trust (3), Logistics (4), Value & Outcomes (3). See content below.
- [ ] Build Footer component — logo, page links, social icon placeholders (Facebook, Instagram, TikTok, YouTube, LinkedIn), hello@promptlings.ai, copyright
- [ ] Compose Home page with all sections in order: Nav → Hero → Trust Signals → What is Promptlings → Programs → How It Works → Mid-page CTA → Meet the Founder → For Parents → FAQ → Waitlist CTA → Footer
- [ ] Create Partners page — hero ("Bring AI Literacy to Your School"), Why Partner benefits, Program Options cards (After-school active, Summer/In-school/Teacher PD as "Coming Soon"), Curriculum Preview, Intake Form (school name, contact, role, org type, grade levels, student count, program type, timeline, referral source, message) → console.log on submit
- [ ] Create About page — mission statement, Matt as founder/lead instructor, Promptlings story
- [ ] Create Blog index page with cosmic-themed post cards + MDX support via next-mdx-remote or similar
- [ ] Create 1 sample blog post in MDX with proper frontmatter (title, date, description, author) — placeholder content is fine
- [ ] Add PostHog Cloud analytics integration (posthog-js) — initialize in layout, track page views automatically
- [ ] Add proper metadata — title "Promptlings — AI Literacy for Kids", description, OG tags, favicon placeholder
- [ ] Ensure full mobile responsiveness — no horizontal scroll at 375px, 768px, 1024px, 1440px
- [ ] Ensure `next build` completes with zero errors
- [ ] Deploy to Vercel via CLI and verify the deployment loads

## FAQ Content (for the Accordion)

**Safety & Trust:**
1. "Is this safe for my child? What AI tools will they use?" — Curated, age-appropriate tools. No unsupervised access to raw LLMs. Guardrails and instructor oversight at every step.
2. "Will my child's data be collected or used to train AI?" — No student data collection. Privacy-first approach. Clear data policy.
3. "Does my child need prior coding experience?" — No. Explorers is designed for complete beginners. Each tier builds progressively.

**Logistics:**
4. "How are classes structured?" — Live instructor-led, small cohorts (max 8-10), project-based. Not pre-recorded videos.
5. "What ages/grades are each course for?" — Explorers (8-10/Upper Elementary), Builders (11-13/Middle School), Creators (14+/High School).
6. "How long is each course?" — Session details TBD. Contact us for current schedule.
7. "What does my child need?" — A laptop or tablet, internet connection, modern web browser. No expensive software.

**Value & Outcomes:**
8. "What will my child actually learn?" — Explorers: create stories/art with AI. Builders: build functional apps. Creators: ship portfolio-worthy projects.
9. "How is this different from other coding classes?" — We teach kids to build WITH AI, not just learn about it. Project-based, creative, hands-on.
10. "Is there a refund policy?" — Satisfaction guarantee. Contact us for details.

## Design Tokens

```css
/* Colors */
--violet: #7C3AED;
--violet-glow: #9F67FF;
--coral: #FF6B6B;
--navy-deep: #0B0A1A;
--navy: #1E1B4B;
--mint: #34D399;
--white: #F0EEFF;
--glass-bg: rgba(30, 27, 75, 0.45);

/* Effects */
backdrop-filter: blur(12px);
/* Nebula blobs: fixed, blurred, 10-12% opacity */
/* Shooting stars: occasional CSS animations */
/* Glow on CTAs and interactive elements */
```

## Success Criteria

- All checklist items completed
- `next build` passes with zero errors
- Site deploys to Vercel and loads
- All 4 pages render (Home, Partners, About, Blog)
- Mobile responsive at all breakpoints
- Waitlist form captures input (console.log OK)
- Partner form renders all fields
- FAQ accordion works
- Starfield animates (and respects reduced-motion)

## Notes

- Use the existing `v2-cosmic.html` as visual reference for the cosmic theme
- Do NOT delete existing files in the root — the Next.js project lives in `next/` subdirectory
- Placeholder images are fine — use colored divs or SVG placeholders for mascots/logos
- Keep it tasteful and fun — this is for KIDS, not a corporate SaaS landing page
- The dark cosmic theme should feel like a space academy, not a dark mode website
- Glass-morphism cards should have subtle borders and glow effects
- WCAG 2.1 AA contrast ratios — light text on dark needs to be readable
