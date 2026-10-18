import React from "react";
import { Metadata } from "next";
import { Mail, Clock, Globe, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us — Book a Performance & Tracking Discovery Session",
  description:
    "Get in touch with Master Ads Injection. Request a technical tracking audit, discuss your Google or Meta ad campaigns, or schedule a strategy consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Direct Technical Intake
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4 leading-tight">
              Let&apos;s Build Your Growth & Measurement Engine.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you need to recover lost conversion signals via server-side GTM, scale profitable Google Ads, or resolve complex Meta CAPI deduplication bugs, our engineering team is here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Information Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Channels Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Direct Contact Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Project Intake & Inquiries</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-blue-600 hover:underline font-mono"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Working Hours</p>
                      <p className="text-slate-600">{siteConfig.contact.workingHours}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Guaranteed response {siteConfig.contact.turnaroundTime.toLowerCase()}.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Global Client Coverage</p>
                      <p className="text-slate-600">{siteConfig.contact.officeLocation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  What Happens After You Submit?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      <strong>Preliminary Technical Review:</strong> A senior tracking and media specialist reviews your site and advertising footprint.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      <strong>Strategy Discovery Session:</strong> We discuss your current attribution hurdles, target unit economics, and campaign scaling goals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      <strong>Actionable Architecture Scope:</strong> You receive a transparent proposal with clear milestones, deliverables, and zero markups on media spend.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Booking Reminder */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <p className="text-xs text-slate-600">
                  Prefer direct correspondence? Email us at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-blue-600 font-semibold underline"
                  >
                    {siteConfig.contact.email}
                  </a>{" "}
                  with your website URL and current tracking challenges.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
