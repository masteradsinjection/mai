import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CreditCard, ShieldCheck, RefreshCw } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy",
  description:
    "Master Ads Injection (MAI) Refund Policy. Details our transparent refund rules regarding ad network spend, agency management fees, and tracking setup services.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: "Refund Policy", href: "/refund-policy" }]} />

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Commercial Policy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3 leading-tight">
              Refund Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: {lastUpdated} • Subject to Final Owner Approval
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          {/* Owner Approval & Transparency Callout */}
          <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Commercial Transparency Notice:</strong> Master Ads Injection operates with complete financial clarity. This policy establishes the strict distinction between media spend paid directly to third-party ad platforms (Google, Meta) and professional agency engineering and management fees.
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-8 text-slate-700">
            {/* Section 1: Ad Spend Paid Directly to Platforms */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span>1. Advertising Media Spend (Google, Meta, TikTok)</span>
              </div>
              <p className="text-sm text-slate-600">
                <strong>Non-Refundable by Agency:</strong> Advertising media spend is paid directly by the Client to the respective advertising platform (Google LLC, Meta Platforms, Inc., etc.) via the Client&apos;s linked corporate payment method.
              </p>
              <p className="text-sm text-slate-600">
                Master Ads Injection never receives, marks up, or handles your media budget. Consequently, Master Ads Injection has no authority or mechanism to issue refunds for ad spend incurred on third-party networks. Any disputes regarding ad spend billing must be directed to the respective ad platform support.
              </p>
            </section>

            {/* Section 2: One-Time Tracking Setups and Audits */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Technical Tracking Setups & Audits
              </h2>
              <p>
                One-time implementation projects (such as Server-Side GTM Deployment, Meta CAPI Setup, or a 40-Point Tracking Diagnostic Audit) require substantial upfront cloud provisioning, custom code authoring, and engineering hours.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Prior to Work Commencement:</strong> If a client requests cancellation before engineering work or technical auditing has begun, a full refund of any prepaid setup fee will be issued, minus any third-party transaction processing fees.
                </li>
                <li>
                  <strong>Work in Progress:</strong> Once discovery access is delegated, data layer specifications are authored, or cloud containers are provisioned, setup fees become non-refundable to cover expended engineering hours.
                </li>
                <li>
                  <strong>Verification & QA Guarantee:</strong> We do not conclude an implementation until all agreed tracking tags fire accurately and verified Event Match Quality (EMQ) scores or conversion triggers are documented in the client inspection sign-off.
                </li>
              </ul>
            </section>

            {/* Section 3: Monthly Management Engagements */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Ongoing Monthly Advertising Management
              </h2>
              <p>
                Ongoing campaign management fees are billed on a recurring 30-day cycle in advance of each service period:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Cancellation Notice:</strong> Clients may cancel ongoing management engagements at any time by providing written notice at least 14 days prior to their next billing renewal date.
                </li>
                <li>
                  <strong>Mid-Cycle Cancellations:</strong> Management fees for the current active 30-day cycle are non-refundable, and agency optimization services will continue through the end of the paid period.
                </li>
                <li>
                  <strong>No Unfair Lock-in:</strong> We do not enforce multi-year restrictive retention locks. Engagements can be terminated with standard advance notice as defined in your Statement of Work.
                </li>
              </ul>
            </section>

            {/* Section 4: Refund Request Procedure */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Refund Request Procedure
              </h2>
              <p>
                To submit an inquiry or formal refund request regarding agency service fees:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                <li>
                  Submit a written request to{" "}
                  <a
                    href={`mailto:${siteConfig.contact.supportEmail}`}
                    className="text-blue-600 underline font-mono"
                  >
                    {siteConfig.contact.supportEmail}
                  </a>{" "}
                  with your invoice number and service agreement reference.
                </li>
                <li>Detail the specific reason for your request and any relevant documentation.</li>
                <li>Our management team will review and respond within 3 business days. Approved refunds are credited to the original payment method within 5 to 10 business days depending on your financial institution.</li>
              </ol>
            </section>

            {/* Section 5: Contact Information */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Billing Inquiries
              </h2>
              <p>For questions regarding billing or invoices, contact our financial intake team:</p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <p>Master Ads Injection (MAI) — Billing Operations</p>
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
