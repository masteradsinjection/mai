import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { portfolioProjects } from "@/content/portfolio";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies & Tracking Architecture Blueprints",
  description:
    "Explore representative implementation blueprints and case studies for server-side GTM, Meta CAPI, Google Ads value-based bidding, and GA4 BigQuery pipelines.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "Case Studies & Portfolio", href: "/portfolio" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Verified Technical Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              Architecture Blueprints & Case Studies
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore how Master Ads Injection designs and deploys robust measurement pipelines, resolves complex ad-blocker signal loss, and aligns advertising algorithms with verified business revenue.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-white">
        <Container>
          {/* Transparency Notice */}
          <div className="mb-12 p-4 md:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3.5 max-w-4xl">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Transparency Statement:</strong> As an ethical agency, we never publish confidential client corporate data, fabricated revenue figures, or unverified ROAS screenshots. The projects below represent our verified technical architectures and implementation frameworks used to solve real-world tracking and growth hurdles.
            </div>
          </div>

          {/* Interactive Filterable Projects Grid */}
          <PortfolioGrid projects={portfolioProjects} />
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
