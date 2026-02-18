"use client";

import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Tracks client-side navigations as $pageview events.
 *
 * PostHog is initialized in instrumentation-client.ts (runs before React
 * hydration), so posthog.capture() is guaranteed to work here — no race
 * condition with init.
 */
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthog.__loaded) return; // guard: no key / init failed

    const url =
      window.origin +
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Wraps children with PostHog pageview tracking.
 *
 * Init is handled by instrumentation-client.ts (module-scope, runs once
 * before hydration). This component only provides the pageview tracker.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
}
