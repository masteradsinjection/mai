import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, AlertCircle } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Master Ads Injection (MAI) Privacy Policy. Explains how we collect, process, and protect your information, cookies, and tracking practices.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: {lastUpdated} • Version 1.0
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          {/* Transparency Disclaimer Notice */}
          <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Legal Notice:</strong> This document outlines the standard privacy and data handling practices of Master Ads Injection (&ldquo;MAI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Formal corporate details, registered business addresses, and local jurisdictions are subject to final operational registration and client service agreements.
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-8 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Introduction & Overview
              </h2>
              <p>
                Master Ads Injection provides digital marketing, paid advertising management, conversion tracking engineering, and marketing analytics services to international commercial clients. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website (
                <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded text-xs">
                  {siteConfig.url}
                </code>
                ) or interact with our lead intake forms and consultation scheduling systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Information We Collect
              </h2>
              <p>We may collect information directly from you and automatically through your use of our website:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Contact and Inquiry Information:</strong> When you complete our contact or consultation form, we collect your full name, business email address, company or website URL, service selection, estimated monthly advertising budget, and any message details you provide.
                </li>
                <li>
                  <strong>Technical & Usage Telemetry:</strong> When you visit our website with your consent, we may collect non-identifying technical data including your IP address (anonymized), browser type, operating system, referring URL, pages viewed, and session duration.
                </li>
                <li>
                  <strong>Cookie & Consent Preferences:</strong> We store your cookie consent preferences locally in your browser to remember whether you accepted or declined optional measurement scripts.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Lawful Basis & Purposes for Processing
              </h2>
              <p>We process your personal information under the following lawful bases:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Legitimate Business Interests:</strong> Responding to your inquiries, delivering technical audits, evaluating project compatibility, and preventing spam submissions.
                </li>
                <li>
                  <strong>Explicit Consent:</strong> Loading non-essential analytics (Google Analytics 4) and marketing attribution tags (Meta Pixel, Google Ads). You may grant or withdraw consent at any time.
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> Executing statements of work, managing paid media accounts, and delivering contracted tracking implementations.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Cookies, Tracking & Consent Mode v2
              </h2>
              <p>
                As a tracking and analytics consultancy, we practice what we preach. We do not drop invasive third-party tracking cookies by default.
              </p>
              <p>
                Our website utilizes Google Consent Mode v2. Non-essential tags are strictly blocked until you explicitly grant consent through our Cookie Banner. You can adjust your consent at any time via the Preferences button on our cookie banner.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Server-Side Data Protection & SHA-256 Hashing
              </h2>
              <p>
                In client engagements involving server-side tracking (sGTM) or Meta Conversions API (CAPI), we adhere strictly to privacy-by-design standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Customer email addresses, phone numbers, and identifying parameters are normalized (trimmed, lowercased) and cryptographically hashed with SHA-256 before transmission to vendor APIs.</li>
                <li>No unhashed PII is stored in raw server access logs.</li>
                <li>Payment credit card numbers and banking credentials are never processed, captured, or transmitted through our tracking containers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                6. Data Sharing & Third-Party Service Providers
              </h2>
              <p>
                We never sell, rent, or trade your personal data. We disclose information only to trusted service providers who assist us in operating our website and delivering client services, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Cloud hosting providers (Google Cloud Platform, AWS, Vercel)</li>
                <li>Transactional email delivery gateways (Resend, SMTP providers)</li>
                <li>Analytics platforms (Google Analytics 4, only upon consent)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                7. Data Retention & Security
              </h2>
              <p>
                We retain contact form inquiries for as long as necessary to fulfill project evaluation or ongoing contractual agreements. We maintain appropriate administrative, technical, and physical security measures to safeguard against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                8. Your Rights (GDPR, CCPA & International Protections)
              </h2>
              <p>
                Depending on your location, you may have rights to access, rectify, erase, restrict, or port your personal information, or to object to its processing. To exercise any of these rights, contact our data protection contact at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-blue-600 underline font-mono"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                9. Changes to This Policy & Contact Information
              </h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our legal obligations or technical practices. For questions regarding this policy, contact us at:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <p>Master Ads Injection (MAI)</p>
                <p>Email: {siteConfig.contact.email}</p>
                <p>Support: {siteConfig.contact.supportEmail}</p>
                <p>Location: {siteConfig.contact.officeLocation}</p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
