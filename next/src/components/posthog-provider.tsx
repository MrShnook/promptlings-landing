"use client";

import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!POSTHOG_KEY || !posthog.__loaded) return;
    const url =
      window.origin +
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    posthog.init(POSTHOG_KEY, {
      // Route through our Vercel reverse proxy to bypass ad blockers
      api_host: "/ingest",
      ui_host: "https://us.i.posthog.com",
      capture_pageview: false, // We handle manually via PostHogPageView
      capture_pageleave: true,
      persistence: "localStorage",
      person_profiles: "identified_only", // Only create profiles for identified users
    });
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
}
