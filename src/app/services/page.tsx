import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { servicesData } from "@/content/services";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

export const metadata: Metadata = constructMetadata({
  title: "Specialized Paid Advertising & Tracking Services",
  description:
    "Explore Master Ads Injection's complete catalog of 14 digital marketing services: Google Ads, Meta Ads, Server-Side Tracking (sGTM), GA4 configuration, and CRO.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Agency Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              Enterprise Paid Media & Signal Architecture Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide the complete technical and strategic infrastructure required to scale international advertising: precision campaign execution, robust server-side measurement pipelines, and executive business analytics.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Interactive Services Grid */}
      <ServicesOverview />

      {/* Detailed Services Catalog Table / Deep Dive */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Comprehensive Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2 mb-3">
              All 14 Practice Areas Detailed
            </h2>
            <p className="text-sm text-slate-600">
              Click any service to view full technical specifications, deliverables, and implementation timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service) => (\r
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={service.category === "Paid Advertising" ? "blue" : "emerald"}>
                      {service.category}
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {service.deliverables.length} Verified Deliverables
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
