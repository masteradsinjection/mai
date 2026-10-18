import React from "react";
import { ShoppingBag, Laptop, Building2, Briefcase, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
      title: "E-Commerce & DTC Brands",
      focus: "Scaling Storefront Net Margins",
      description:
        "For stores spending $5,000 to $100,000+ monthly across Google Shopping and Meta. We fix broken item parameters, eliminate ad-blocker signal loss, and scale winning creatives.",
      outcomes: [
        "Server-side Meta CAPI with 9.0+ EMQ",
        "GA4 e-commerce funnel instrumentation",
        "Performance Max budget protection",
      ],
    },
    {
      icon: <Laptop className="w-5 h-5 text-blue-600" />,
      title: "B2B SaaS & Tech Companies",
      focus: "Generating Qualified Pipeline",
      description:
        "For software companies targeting high-LTV business buyers. We connect Google Search with CRM deal stages to bid on pipeline value rather than junk form downloads.",
      outcomes: [
        "Offline Conversion Tracking (OCT) from CRM",
        "High-intent exact match search capture",
        "Stripe subscription revenue attribution",
      ],
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      title: "High-Ticket Lead Generation",
      focus: "Lowering Cost Per Qualified Lead",
      description:
        "For legal, finance, healthcare, and consultancy firms where each customer is worth thousands. We eliminate spam leads and optimize for verified phone calls and consultations.",
      outcomes: [
        "Dynamic call tracking and attribution",
        "Multi-step lead form optimization",
        "Shared negative keyword libraries",
      ],
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      title: "Agencies & Development Shops",
      focus: "White-Label & Tracking Support",
      description:
        "For digital agencies that need specialized server-side tracking, GTM architecture, and Consent Mode v2 implementation to support their client accounts seamlessly.",
      outcomes: [
        "Clean server GTM deployments on Cloud Run",
        "Consent Mode v2 compliance audits",
        "Developer-ready data layer documentation",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200/80">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Client Compatibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Who Master Ads Injection Is Built For
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We partner with performance-driven businesses that value measurable returns, transparent attribution, and direct data ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between border-slate-200/90 bg-white">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 border border-blue-100">
                  {item.icon}
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mt-0.5">
                  {item.focus}
                </span>
                <CardDescription className="text-xs mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="pt-3 border-t border-slate-100">
                  <ul className="space-y-1.5">
                    {item.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
