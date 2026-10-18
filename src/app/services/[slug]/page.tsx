import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import { servicesData, ServiceItem } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, FaqJsonLd } from "@/lib/seo/json-ld";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.name} — Agency Specifications`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.shortDescription}
        url={`/services/${service.slug}`}
        serviceType={service.category}
      />
      {service.faqs && service.faqs.length > 0 && (
        <FaqJsonLd faqs={service.faqs} />
      )}

      {/* Hero Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />

          <div className="max-w-4xl mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant={service.category === "Paid Advertising" ? "blue" : "emerald"}>
                {service.category}
              </Badge>
              {service.isFeatured && (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Core Practice
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              {service.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button href="/contact" size="lg">
                Discuss Your {service.name} Needs <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-1" /> All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Breakdown: Who Needs It & Problems Solved */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-20">
            {/* Who Needs It */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Ideal Client Profile
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-2 mb-6">
                Who Needs This Service?
              </h2>
              <ul className="space-y-4">
                {service.whoNeedsIt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problems Solved */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Friction Elimination
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-2 mb-6">
                Common Problems We Resolve
              </h2>
              <ul className="space-y-4">
                {service.problemsSolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope of Deliverables */}
          <div className="mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Verified Deliverables
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
                What You Receive in This Engagement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Specification
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Phased Process */}
          <div className="mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Implementation Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
                Phased Implementation Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <span className="text-2xl font-black font-mono text-blue-600">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="max-w-3xl mx-auto pt-8 border-t border-slate-100">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Service Specifics
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Questions About {service.name}
                </h3>
              </div>

              <Accordion
                items={service.faqs.map((faq, idx) => ({
                  id: `faq-${idx}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
          )}
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
