import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Layers, Clock, Laptop } from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/content/portfolio";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Technical Blueprint`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Case Studies", href: "/portfolio" },
              { name: project.title, href: `/portfolio/${project.slug}` },
            ]}
          />

          <div className="max-w-4xl mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="blue">{project.clientType}</Badge>
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                {project.label}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              {project.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button href="/contact" size="lg">
                Discuss Similar Architecture <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to All Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Challenge, Strategy, Implementation */}
            <div className="lg:col-span-2 space-y-12">
              {/* Business Challenge */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                  The Problem
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1 mb-4">
                  The Technical Challenge
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution & Strategy */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Engineering Solution
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1 mb-4">
                  Strategy & Architectural Approach
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.strategy}
                </p>
              </div>

              {/* Implementation Steps */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Step-by-Step Delivery
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1 mb-6">
                  Implementation Breakdown
                </h2>

                <div className="space-y-4">
                  {project.implementationSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Methodologies */}
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Engineering Standards
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Why This Architecture Is Proven & Reproducible
                </h3>
                <ul className="space-y-2.5">
                  {project.verifiedMethodology.map((meth, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{meth}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Takeaway */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Key Strategic Insight
                </span>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {project.keyTakeaways}
                </p>
              </div>
            </div>

            {/* Right 1 Col: Architecture Specs Card */}
            <div>
              <div className="sticky top-28 p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    Architecture Specs
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                        Target Client Type
                      </p>
                      <p className="text-slate-900 font-medium mt-0.5">{project.clientType}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                        Deployment Timeline
                      </p>
                      <p className="text-slate-900 font-medium mt-0.5 font-mono">
                        {project.architectureDetails.timeline}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] mb-1.5">
                        Platforms Integrated
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.architectureDetails.platforms.map((p, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] mb-1.5">
                        Tracking Technologies
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.architectureDetails.trackingTech.map((t, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 border border-blue-200/60 px-2 py-0.5 rounded text-[11px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] mb-1.5">
                        Core Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.architectureDetails.focusAreas.map((f, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-200/70 text-slate-800 px-2 py-0.5 rounded text-[11px]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Button href="/contact" size="sm" className="w-full">
                    Request an Audit for Your Stack
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
