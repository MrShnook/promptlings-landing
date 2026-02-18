"use client";

import posthog from "posthog-js";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrackedDownloadProps {
  href: string;
  label: string;
  resourceName: string;
}

export function TrackedDownload({ href, label, resourceName }: TrackedDownloadProps) {
  return (
    <Button
      asChild
      className="bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-xs font-semibold"
      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
    >
      <Link
        href={href}
        onClick={() =>
          posthog.capture("resource_download", {
            resource_name: resourceName,
            download_url: href,
          })
        }
      >
        <Download className="w-4 h-4 mr-2" />
        {label}
      </Link>
    </Button>
  );
}
