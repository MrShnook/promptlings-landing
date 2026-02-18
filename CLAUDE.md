# CLAUDE.md — Promptlings Landing Page

## Project Overview
Promptlings is an AI literacy program for kids ages 8-16. This repo contains the landing page — a cosmic-themed Next.js 15 site.

## Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **Analytics:** PostHog Cloud (posthog-js)
- **Deployment:** Vercel (`vercel deploy --token=$VERCEL_TOKEN`)
- **Blog:** MDX via next-mdx-remote or @next/mdx

## Repository Structure
- `/` — Legacy static HTML files (keep intact, do not delete)
- `/next/` — The Next.js 15 project (this is where you build)

## Design System — Cosmic Theme

### Colors (use in tailwind.config.ts)
| Token | Hex | Usage |
|-------|-----|-------|
| violet | #7C3AED | Primary brand, CTAs |
| violet-glow | #9F67FF | Hover/accent |
| coral | #FF6B6B | Highlights, secondary CTA |
| navy-deep | #0B0A1A | Page background |
| navy | #1E1B4B | Card backgrounds |
| mint | #34D399 | Explorers tier, success |
| white | #F0EEFF | Primary text |
| glass-bg | rgba(30,27,75,0.45) | Glassmorphism cards |

### Typography
- Headlines: `Orbitron` (Google Fonts)
- Body: `Space Grotesk` (Google Fonts)
- Code: `JetBrains Mono` (Google Fonts)

### Signature Effects
- Animated starfield background (CSS keyframes + minimal JS, performant)
- Nebula gradient blobs (fixed position, blurred, 10-12% opacity)
- Glass-morphism cards (`backdrop-filter: blur(12px)` + translucent bg + subtle border)
- Glow effects on CTAs (`box-shadow` with violet-glow)
- Shooting star animations (occasional, not distracting)
- Respect `prefers-reduced-motion`

### Anti-Patterns
- ❌ Generic gradient backgrounds (starfield IS the brand)
- ❌ Stock photo vibes (everything cosmic and hand-crafted)
- ❌ Cookie-cutter SaaS layouts (this is for KIDS, make it fun)
- ❌ Overcrowded sections (let space breathe)
- ❌ Low contrast text (WCAG 2.1 AA required)

## Key Components
- `Starfield` — Animated background, CSS-only preferred
- `Navigation` — Responsive, glassmorphic, shadcn Sheet for mobile
- `Hero` — Headline + waitlist form + mascot placeholders
- `CourseTiers` — 3 cards (Explorers/Builders/Creators)
- `WaitlistForm` — Email + optional age dropdown
- `FAQ` — shadcn Accordion, 10 questions
- `MeetFounder` — Swappable founder/team component
- `Footer` — Links, social icons, contact

## Pages
1. **Home** (`/`) — Full landing page with all sections
2. **Partners** (`/partners`) — For schools and after-school programs
3. **About** (`/about`) — Mission, founder bio
4. **Blog** (`/blog`) — MDX posts with cosmic cards

## Age Tiers
- **Explorers** (8-10) — Upper Elementary — mint accent — Mascot: **Pip**
- **Builders** (11-13) — Middle School — violet accent — Mascot: **Giga**
- **Creators** (14-18) — High School — coral accent — Mascot: **Nova**

## Forms
- **Waitlist:** email (required) + age range dropdown (optional) → `console.log` for now
- **Partner Intake:** full form (10 fields) → `console.log` for now

## Commands
```bash
cd next/
npm run dev      # Development
npm run build    # Production build
npm run lint     # Linting
vercel deploy --token=$VERCEL_TOKEN  # Deploy
```

## Preferences
- Use `app/` directory (App Router), not `pages/`
- Server components by default, `"use client"` only when needed
- Tailwind for styling, no CSS modules
- shadcn/ui for interactive components (Accordion, Sheet, Button, etc.)
- Keep bundle size minimal — no heavy animation libraries
- Image placeholders as colored SVG rectangles with text labels

## Age Tiers (UPDATED)
- **Explorers** (8-10) — Mascot: **Pip** (NOT Byte) — mint accent
- **Builders** (11-13) — Mascot: **Giga** — violet accent
- **Creators** (14-18) — Mascot: **Nova** — coral accent

Note: Age range is **8-18** everywhere (not 8-16).

## Current Sprint

**Read `next/SPRINT-V3.md` for the current task.**

This is a polish + copy sprint from Matt's product review (19 items). Work inside existing components. Do NOT restructure routing, remove PostHog, or change the font system. The spec has detailed changes per component, new copy, and a verification checklist. Follow it precisely.

## Reference
See `v2-cosmic.html` in the repo root for the approved visual direction.
See `sprint-spec.md` for the original build checklist.
See `next/SPRINT-TUNEUP.md` for the previous tune-up sprint.
See `next/SPRINT-V3.md` for the current sprint (Matt's review punch list).
