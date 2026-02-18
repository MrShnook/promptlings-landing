# PostHog Integration Audit — 2026-02-18

## Summary

Our PostHog integration had a **critical race condition** that could silently drop the initial `$pageview` event. This audit identified the bug, implemented the fix using PostHog's current recommended approach, and verified the build passes.

---

## Bug Found: Race Condition in useEffect Init

### The Problem

In the old code, `posthog.init()` was called inside a `useEffect` in the parent `PostHogProvider` component, while `posthog.capture("$pageview")` was called inside a `useEffect` in the child `PostHogPageView` component.

**React executes child `useEffect` callbacks before parent `useEffect` callbacks** (depth-first commit phase). This means on the initial page load:

1. `PostHogPageView` `useEffect` fires → calls `posthog.capture("$pageview")`
2. `PostHogProvider` `useEffect` fires → calls `posthog.init()`

The `$pageview` capture fires **before** PostHog is initialized. When using `posthog-js` as an npm module (not the snippet), there is no "magic array" queue — calls before init are silently dropped.

This explains why:
- Server-side curl events appeared in PostHog ✅
- Browser events were not showing up ❌
- The timing could look like a PostHog outage

### Why It Wasn't Obvious

- `posthog.capture()` before `posthog.init()` doesn't throw an error
- The comment in the old code said "posthog.capture queues events until init completes" — this is only true when using the PostHog snippet, not the npm module
- Subsequent client-side navigations (SPA) would work because init has completed by then
- Only the **first pageview on full page load** was affected

---

## Fix Applied: `instrumentation-client.ts`

PostHog's official docs now recommend using Next.js's `instrumentation-client.ts` file for initialization. This file:

- Runs at **module scope** (top-level, not inside a React component)
- Executes **before React hydration begins**
- Runs **exactly once** per page load
- Eliminates any race condition with React effects

### Changes Made

1. **Created `src/instrumentation-client.ts`** — PostHog init at module scope
2. **Simplified `src/components/posthog-provider.tsx`** — removed `useEffect` init, kept only the `PostHogPageView` tracker component
3. **No changes to `next.config.ts`** — rewrites are correct

### File: `src/instrumentation-client.ts` (NEW)
```ts
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";

if (POSTHOG_KEY && typeof window !== "undefined") {
  posthog.init(POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage",
    person_profiles: "always",
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") ph.debug();
    },
  });
}
```

### File: `src/components/posthog-provider.tsx` (UPDATED)
- Removed the `useEffect` that called `posthog.init()`
- Added `posthog.__loaded` guard in `PostHogPageView` as a safety check
- Kept `Suspense` boundary around `PostHogPageView` (required because `useSearchParams()` suspends)

---

## Audit Results: Point-by-Point

### 1. Official Docs Comparison ✅

PostHog's current docs recommend `instrumentation-client.ts` for Next.js 15.3+. Our app runs Next.js 16.1.6, so this is the correct approach. **Fixed.**

### 2. Reverse Proxy Configuration ✅

Our Vercel rewrites in `next.config.ts` are correct:
- Static assets rule comes **first** (before catch-all) ✅
- US region domains (`us.i.posthog.com`, `us-assets.i.posthog.com`) ✅
- `skipTrailingSlashRedirect: true` is set ✅
- `/ingest` path is commonly used and not on known ad-blocker lists ✅

**Note:** PostHog warns against obvious paths like `/analytics`, `/tracking`, `/telemetry`, `/posthog`. The `/ingest` path is fine but if we ever see blocking issues, consider changing to something app-specific.

### 3. Rewrite Order ⚠️ Minor

The `/ingest/decide` rule comes **after** the catch-all `/ingest/:path*`. Since Next.js rewrites evaluate in order and the catch-all matches `/ingest/decide`, the specific decide rule is redundant (but harmless). The catch-all already proxies it correctly.

### 4. Race Condition 🐛 FIXED

As described above — child `useEffect` (capture) ran before parent `useEffect` (init). **Fixed by moving init to `instrumentation-client.ts`.**

### 5. `PostHogProvider` from `posthog-js/react` — Not Needed

The `@posthog/react` package provides `PostHogProvider` (context) and hooks like `usePostHog()`, `useFeatureFlagEnabled()`, etc. These are useful for:
- Feature flags
- Experiments (A/B tests)
- Accessing the PostHog instance via context

For our current use case (just pageview tracking on a waitlist landing page), the `posthog-js` singleton import is sufficient. We don't need to install `@posthog/react`.

**Recommendation:** Install `@posthog/react` later when we need feature flags or experiments.

### 6. `person_profiles: "always"` ✅

This setting controls **person profile creation**, not event visibility:
- `"always"`: Creates person profiles for anonymous visitors (tracks from first visit)
- `"identified_only"`: Creates profiles only after `posthog.identify()` is called

Both settings capture all events to the Activity tab. `"always"` is correct for our use case (waitlist landing page where we want to see all visitor journeys).

### 7. `persistence: "localStorage"` ✅

The default is `localStorage+cookie`. Using just `localStorage` is fine but means:
- PostHog won't set cookies (better for privacy/cookie banners)
- Cross-subdomain tracking won't work (not needed for us)

This is a valid choice for our simple landing page.

---

## Verification

- `npx next build` passes ✅
- No TypeScript errors ✅
- `instrumentation-client.ts` is in `src/` directory (correct for our `src` layout) ✅

---

## Remaining Considerations

1. **Environment variable**: `NEXT_PUBLIC_POSTHOG_KEY` must be set in Vercel project settings. If it's empty, PostHog silently does nothing (by design).

2. **Ad blocker testing**: Visit the site with uBlock Origin enabled and check if `/ingest/*` requests go through. If blocked, consider PostHog's [managed reverse proxy](https://posthog.com/docs/advanced/proxy/managed-reverse-proxy).

3. **Session replay**: If we want session replay, add `session_recording: { maskAllInputs: true }` to the init config (especially important since this is a kids' education platform).

4. **Future**: When adding feature flags or A/B tests, install `@posthog/react` and wrap the app in its `PostHogProvider` for hook access.
