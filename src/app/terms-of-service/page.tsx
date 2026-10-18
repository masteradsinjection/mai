import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description:
    "Master Ads Injection (MAI) Terms of Service. Governs use of our website, consulting engagements, tracking implementations, and advertising management services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: "Terms of Service", href: "/terms-of-service" }]} />

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Commercial Terms
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3 leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: {lastUpdated} • Version 1.0
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Engagement Scope:</strong> These general Terms of Service govern the public use of this website. Formal client engagements, ongoing campaign management, and server-side tracking implementations are additionally governed by individual Statements of Work (SOW) executed between Master Ads Injection and the client.
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-8 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Master Ads Injection website (
                <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded text-xs">
                  {siteConfig.url}
                </code>
                ) or submitting a project inquiry, you agree to be bound by these Terms of Service and our{" "}
                <Link href="/privacy-policy" className="text-blue-600 underline">
                  Privacy Policy
                </Link>
                . If you do not agree with these terms, you should discontinue using our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Agency Services & Scope of Work
              </h2>
              <p>
                Master Ads Injection provides professional paid advertising strategy, campaign execution, Google Tag Manager engineering, conversion tracking architecture, and analytics reporting. Specific deliverables, project milestones, and pricing schedules are detailed in written Statements of Work (SOW) or master service agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Advertising Spend & Account Ownership
              </h2>
              <p>
                To maintain total transparency and client protection, the following operational rules strictly apply:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Direct Platform Invoicing:</strong> All media advertising spend (including Google Ads, Meta Ads, TikTok Ads) is billed directly to the Client&apos;s corporate credit card or credit facility by the respective advertising platform. Master Ads Injection never marks up or holds client media budgets.
                </li>
                <li>
                  <strong>Client Account Ownership:</strong> The Client retains 100% legal ownership of their advertising accounts, GTM containers, analytics properties, and cloud servers. Master Ads Injection operates solely via delegated partner access.
                </li>
                <li>
                  <strong>Client Billing Continuity:</strong> The Client is solely responsible for maintaining valid payment methods with ad platforms to prevent campaign interruption.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Third-Party Platform Dependencies & Disclaimers
              </h2>
              <p>
                Digital advertising performance depends on algorithms and technical infrastructure owned by third-party platforms (e.g. Google, Meta, Apple, Shopify). Master Ads Injection does not control:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Third-party platform policy updates, account suspensions, or ad disapprovals caused by client creative or landing page content.</li>
                <li>Algorithmic fluctuations or auction volatility in competitive keyword spaces.</li>
                <li>Browser-level changes (such as updates to Apple Safari ITP or Google Chrome privacy sandboxes) outside W3C standards.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Intellectual Property
              </h2>
              <p>
                All website content, proprietary tracking methodologies, documentation, brand logos, and graphics displayed on this site are the intellectual property of Master Ads Injection. Clients retain full ownership of their proprietary business data, customer records, and custom ad creatives developed under paid agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                6. Payment Terms & Cancellations
              </h2>
              <p>
                Agency management fees and tracking setup fees are billed in advance per agreed milestones. Ongoing management engagements operate on 30-day rolling cycles unless otherwise stated in writing. For full details on cancellations and fees, review our{" "}
                <Link href="/refund-policy" className="text-blue-600 underline">
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Master Ads Injection shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits or revenues, arising out of your access to our website or third-party ad platform disruptions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                8. Contact Information
              </h2>
              <p>
                For questions regarding these Terms of Service, contact:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <p>Master Ads Injection (MAI)</p>
                <p>Email: {siteConfig.contact.email}</p>
                <p>Support: {siteConfig.contact.supportEmail}</p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
