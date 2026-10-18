import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { portfolioProjects } from "@/content/portfolio";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col justify-between border-slate-200 hover:border-blue-300 transition-all"
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge variant="blue">{project.clientType}</Badge>
                      <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {project.label}
                      </span>
                    </div>

                    <CardTitle className="text-lg">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="text-xs mt-2 line-clamp-3">
                      {project.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div>
                        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          Tracking Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.architectureDetails.trackingTech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          Implementation Timeline
                        </p>
                        <p className="text-xs text-slate-700 font-mono">
                          {project.architectureDetails.timeline}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read Architecture Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
