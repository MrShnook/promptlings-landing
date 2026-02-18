import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";

if (POSTHOG_KEY && typeof window !== "undefined") {
  posthog.init(POSTHOG_KEY, {
    // Route through our Vercel reverse proxy to bypass ad blockers
    api_host: "/ingest",
    ui_host: "https://us.i.posthog.com",

    // We handle pageviews manually via PostHogPageView component
    capture_pageview: false,
    capture_pageleave: true,

    persistence: "localStorage",

    // Track all visitors including anonymous
    person_profiles: "always",

    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") ph.debug();
    },
  });
}
