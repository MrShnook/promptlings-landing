import { Hero } from "@/components/hero";
import { TrustSignals } from "@/components/trust-signals";
import { WhatIsPromptlings } from "@/components/what-is-promptlings";
import { CourseTiers } from "@/components/course-tiers";
import { HowItWorks } from "@/components/how-it-works";
import { MidPageCta } from "@/components/mid-page-cta";
import { MeetFounder } from "@/components/meet-founder";
import { ForParents } from "@/components/for-parents";
import { FaqSection } from "@/components/faq-section";
import { FooterCta } from "@/components/footer-cta";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <SectionDivider />
      <WhatIsPromptlings />
      <SectionDivider />
      <CourseTiers />
      <SectionDivider />
      <HowItWorks />
      <MidPageCta />
      <SectionDivider />
      <MeetFounder />
      <SectionDivider />
      <ForParents />
      <SectionDivider />
      <FaqSection />
      <FooterCta />
    </>
  );
}
