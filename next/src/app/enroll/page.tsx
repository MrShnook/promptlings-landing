import type { Metadata } from "next";
import { Suspense } from "react";
import { EnrollForm } from "./enroll-form";

export const metadata: Metadata = {
  title: "Pre-Register — Promptlings",
  description:
    "Pre-register your child for Promptlings AI literacy classes. Ages 8-18. Live, instructor-led, small group classes. Be first to know when your child's cohort is ready.",
  openGraph: {
    title: "Pre-Register — Promptlings",
    description:
      "Pre-register your child for Promptlings AI literacy classes. Ages 8-18. Live, instructor-led, small group classes.",
    url: "https://promptlings.ai/enroll",
  },
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Pre-Registration
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Reserve Your Spot
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tell us about your child and we&apos;ll notify you the moment their
            cohort is ready. Small groups. Live instruction. Real skills.
          </p>
        </div>

        {/* Form — wrapped in Suspense for useSearchParams */}
        <Suspense fallback={<EnrollFormSkeleton />}>
          <EnrollForm />
        </Suspense>
      </div>
    </div>
  );
}

function EnrollFormSkeleton() {
  return (
    <div className="glass-card p-8 md:p-10 animate-pulse">
      <div className="h-6 bg-white/5 rounded w-48 mb-6" />
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-36 bg-white/5 rounded-2xl" />
        ))}
      </div>
      <div className="h-12 bg-white/5 rounded-xl mb-4" />
      <div className="h-12 bg-white/5 rounded-xl mb-4" />
      <div className="h-24 bg-white/5 rounded-xl mb-6" />
      <div className="h-12 bg-violet/20 rounded-xl" />
    </div>
  );
}
