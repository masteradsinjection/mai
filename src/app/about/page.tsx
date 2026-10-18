import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Cpu, CheckCircle2, ArrowRight, Database, Users } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

export const metadata: Metadata = constructMetadata({
  title: "About Us — Performance Marketing & Measurement Philosophy",
  description:
    "Learn about Master Ads Injection (MAI), our data-first marketing philosophy, server-side tracking expertise, and transparent working model for international businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Agency Mission & Philosophy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              We Believe Advertising Performance Starts with Mathematical Truth.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Master Ads Injection (MAI) was founded on a straightforward observation: the digital marketing industry is overflowing with vanity metrics, opaque agency markups, and broken attribution pipelines. We build marketing systems that deliver transparent, measurable growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To equip international founders and growth teams with resilient paid advertising engines and uncompromised server-side tracking, ensuring every marketing dollar is accountable to net business revenue.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A digital ecosystem where brands maintain 100% first-party data ownership, customer privacy is protected by design, and advertising machine learning is trained only on verified, high-value signals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Operating Ethos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero vanity metrics. No opaque ad spend markups. Direct client account ownership. We measure success by your bank balance and verified customer acquisition cost (CAC), not platform click volume.
              </p>
            </div>
          </div>

          {/* Deep-Dive Story & Problems Solved */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                The Problem We Solve
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2 mb-5">
                The Disconnect Between Ad Dashboards and Reality
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Most business owners have experienced the frustration of logging into Meta Ads Manager or Google Ads and seeing reported ROAS of 4.5x, only to check their bank account and wonder where the revenue went.
                </p>
                <p>
                  This discrepancy happens because advertising platforms use overlapping attribution windows and optimistic modeling to claim credit for every purchase. Meanwhile, privacy blockers (Safari ITP, Brave shields, ad-blocking DNS) cause actual conversion drops of 25% or more.
                </p>
                <p>
                  At Master Ads Injection, we eliminate this friction. We build custom server-side Google Tag Manager (sGTM) containers on Cloud Run or AWS, normalize user data with SHA-256 hashes, deduplicate transactions with unique order IDs, and pipe raw event streams directly to Google BigQuery and Looker Studio.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                What You Receive Working with MAI
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>
                    <strong>100% Direct Account Ownership:</strong> We manage via Google Ads MCC and Meta Business Manager. You own your accounts, pixels, and data forever.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>
                    <strong>Transparent Billing:</strong> Media spend is charged directly to your card by Google/Meta. We never markup media spend.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>
                    <strong>Engineering-First Rigor:</strong> We write maintainable code, test edge cases, and follow official W3C data layer schemas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>
                    <strong>European & International Compliance:</strong> Native support for Google Consent Mode v2, ePrivacy directives, and GDPR safeguards.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Engagement Process Section */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Clear Roadmap
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
              How We Onboard & Engage New Clients
            </h2>
            <p className="text-base text-slate-600">
              No endless delays or disorganized handoffs. Our structured 4-step onboarding gets you from diagnostic discovery to live, optimized campaigns smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Stage 1
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">Technical Discovery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Initial intake call and access delegation. We audit your tracking container and past advertising performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Stage 2
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">Architecture Blueprint</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deliver a clear remediation plan: server GTM setup, CAPI deduplication specs, and campaign restructure targets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Stage 3
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">Implementation & QA</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy tags, configure cloud containers, verify Event Match Quality scores (9.0+), and launch structured campaigns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Stage 4
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">Continuous Growth</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weekly search term optimization, creative testing, automated Looker Studio reporting, and scale management.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
