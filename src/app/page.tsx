import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrackingVisualizer } from "@/components/sections/TrackingVisualizer";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Container } from "@/components/layout/Container";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Dashboard Illustration */}
      <HeroSection />

      {/* 2. Value Proposition on Precision Tracking */}
      <ValueProposition />

      {/* 3. Interactive Server-Side Tracking Visualizer */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Interactive Signal Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
              Under the Hood: Server-Side Measurement
            </h2>
            <p className="text-base text-slate-600">
              See how Master Ads Injection bridges the gap between browser ad-blockers and ad platform machine learning using dedicated cloud containers.
            </p>
          </div>
          <TrackingVisualizer />
        </Container>
      </section>

      {/* 4. Services Overview */}
      <ServicesOverview limit={6} />

      {/* 5. Process Section (How We Work) */}
      <ProcessSection />

      {/* 6. Selected Case Studies & Blueprints */}
      <PortfolioPreview />

      {/* 7. Target Audience & Compatible Industries */}
      <TargetAudienceSection />

      {/* 8. Trust & Verifiable Standards */}
      <TrustSection />

      {/* 9. Useful FAQ Section */}
      <FaqSection limit={6} />

      {/* 10. Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
