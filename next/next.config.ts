import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: true,

  // PostHog reverse proxy — prevents ad blockers from blocking analytics
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },

  // Required for PostHog reverse proxy to work
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
