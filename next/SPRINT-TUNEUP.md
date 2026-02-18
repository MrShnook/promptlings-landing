# Sprint: Landing Page Tune-Up

This is a **tune-up** of the existing build, NOT a rewrite. The architecture and components are solid. These are specific, surgical changes.

## Assets Already Staged

All assets are already in `public/`:
- `public/img/hero-classroom.webp` — Hero background (3584×1184 wide panoramic)
- `public/img/characters/pip-curious.webp` — Pip tier card (transparent, 391×500)
- `public/img/characters/giga-confident.webp` — Giga tier card (transparent, 505×500)
- `public/img/characters/nova-creating.webp` — Nova tier card (transparent, 385×500)
- `public/img/logos/logo-1-nav.webp` — Logo (transparent bg, 480×262)
- `public/img/logos/logo-1-nav.png` — Logo PNG fallback
- `public/favicon-32x32.png`, `public/favicon-16x16.png`, `public/apple-touch-icon.png`
- `public/img/og-image.jpg` — Open Graph image

---

## Changes Required

### 1. Hero Section (`src/components/hero.tsx`) — MAJOR

**Current:** Split layout (text left, hero-banner in floating card right, orbit rings).

**Change to:** Full-bleed hero with the Classroom banner as CSS background-image and a left-to-right gradient scrim overlay for text readability.

**Specifics:**
- Background: `url('/img/hero-classroom.webp')` with `background-size: cover; background-position: center;`
- Gradient scrim overlay (pseudo-element `::after`):
  ```
  linear-gradient(90deg,
    rgba(5,2,8,0.92) 0%,
    rgba(5,2,8,0.80) 25%,
    rgba(5,2,8,0.50) 50%,
    rgba(5,2,8,0.15) 75%,
    rgba(5,2,8,0.05) 100%)
  ```
- **Remove** the entire right-side visual column (orbit rings, floating card, hero-banner Image)
- Switch to **single-column layout**, text left-aligned, max-width ~600px
- Headline: pure white `#ffffff` with `text-shadow: 0 2px 20px rgba(0,0,0,0.6)`
- "They'll Master It." accent: `linear-gradient(135deg, #f9a8d4, #fbbf24)` (warm pink→gold, softer than before)
- Tagline: keep colored but add `text-shadow: 0 1px 12px rgba(0,0,0,0.5)`
- Description text: `rgba(230,220,245,0.9)` with text-shadow
- Badge: add `backdrop-filter: blur(8px)`, background `rgba(167,139,250,0.15)`
- Form inputs: `background: rgba(10,5,20,0.6)` with `backdrop-filter: blur(8px)`
- CTA button: add `box-shadow: 0 4px 20px rgba(168,85,247,0.4)`
- Remove all orbit ring elements and float animations
- Keep the starfield component running behind (it shows through the transparent edges of the scrim)

### 2. Course Tiers (`src/components/course-tiers.tsx`) — MODERATE

**Changes:**
- **Remove the standalone mascot row** (the `flex justify-center mb-12` section with the three mascot boxes above the cards). Mascots live inside the cards only.
- **Remove "Most Popular" badge** — delete the `featured` property from Builders tier and remove the badge rendering code
- **Update mascot images** to use the new transparent character poses:
  - Pip: `/img/characters/pip-curious.webp`
  - Giga: `/img/characters/giga-confident.webp`
  - Nova: `/img/characters/nova-creating.webp`
- **Glass morphism on cards** — ensure cards have: `background: rgba(15,10,30,0.4)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.08)`
- **Keep gradient top borders** (already present ✅)
- The mascot icon inside each card should render the character at ~80×80px on a transparent background (no colored square behind it)

### 3. Navigation (`src/components/navigation.tsx`) — MINOR

- Replace logo with: `<Image src="/img/logos/logo-1-nav.webp" ... />` (transparent background)
- Fallback: PNG version at same path with `.png` extension
- Height: `40px` in nav, let width auto-scale

### 4. FAQ — ADD 3 QUESTIONS

Current FAQ has 7 questions. Add these 3:

**Safety & Trust:**
- Q: "How do you handle AI safety and content filtering?"
- A: "Every session uses age-appropriate AI tools with built-in content filters. Our instructors monitor all AI interactions in real-time. We teach kids to think critically about AI outputs — not just accept them blindly. Your child's safety is our top priority."

**Logistics:**
- Q: "What technology does my child need?"
- A: "A computer (Mac, PC, or Chromebook) with a modern web browser and a stable internet connection. That's it. All AI tools are provided through our platform — no downloads or installations needed."

**Value & Outcomes:**
- Q: "What makes Promptlings different from free AI tutorials online?"
- A: "Three things: live instruction (not pre-recorded), small groups (max 8 kids), and structured curriculum. Free tutorials teach button-clicking. We teach thinking — prompt architecture, AI ethics, creative problem-solving. Plus, kids learn alongside peers and get real-time feedback from an experienced instructor."

### 5. Metadata (`src/app/layout.tsx`) — MINOR

- Set favicon links: `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />`
- Set `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`
- Set OG image: `<meta property="og:image" content="/img/og-image.jpg" />`

### 6. Meet the Founder (`src/components/meet-founder.tsx`) — MINOR

- Ensure it references **Matt** as lead instructor (not Anastasia)
- Should be implemented as a swappable component (already is ✅)

---

## What NOT to Change

- ❌ Don't rewrite the component architecture
- ❌ Don't change the routing structure
- ❌ Don't remove PostHog integration
- ❌ Don't change the font loading (Orbitron, JetBrains Mono — already working via next/font)
- ❌ Don't touch the Partners page or About page
- ❌ Don't add pricing — waitlist only

---

## Verification Checklist

After changes, verify:
- [ ] `npm run build` succeeds with no errors
- [ ] Hero shows classroom banner as background, text is readable on the left
- [ ] Starfield particles visible through right edge of scrim
- [ ] Tier cards show transparent character poses, no standalone mascot row
- [ ] No "Most Popular" badge
- [ ] Glass morphism effect visible on tier cards (blur behind glass)
- [ ] Logo in nav has transparent background (no white box)
- [ ] FAQ has 10 questions total
- [ ] Favicon shows Pip icon in browser tab
- [ ] OG image meta tag present
- [ ] Mobile responsive — hero text stacks properly, characters scale down
