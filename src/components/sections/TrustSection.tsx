import React from "react";
import { ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function TrustSection() {
  const standards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "100% Client Account Ownership",
      description:
        "We never build in proprietary holding accounts. You retain permanent administrative ownership of your Google Ads MCC link, Meta Business Portfolio, GTM containers, and cloud instances.",
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Direct Media Billing & Zero Markups",
      description:
        "Every single dollar of your ad budget is billed directly by Google or Meta to your corporate payment method. We charge a flat, transparent agency fee—no hidden percentages or media arbitrage.",
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      title: "Strict Data Privacy & SHA-256 Hashing",
      description:
        "All customer parameters used for Enhanced Conversions and Meta CAPI are normalized and hashed using one-way SHA-256 algorithms before transmission, fully respecting GDPR and ePrivacy standards.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "Engineered Code & API Standards",
      description:
        "We follow official developer protocols: Google Ads API v17, Meta Graph API v21, and W3C data layer conventions. We avoid fragile hacks or unverified third-party scraping scripts.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Institutional Trust & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Our Verifiable Operating Principles
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We operate with complete commercial and technical transparency. Here are the immutable standards governing every client engagement with Master Ads Injection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-card hover:border-blue-200 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-subtle shrink-0">
                {std.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {std.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
