import React from "react";
import { Crosshair, Cpu, Database, PieChart, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function ValueProposition() {
  const pillars = [
    {
      icon: <Crosshair className="w-6 h-6 text-blue-600" />,
      title: "Reclaiming Lost Conversion Signals",
      description:
        "Standard client-side pixels lose 20% to 35% of conversions to browser sandboxes and ad-blockers. We engineer resilient first-party data pipelines that capture every transaction.",
      bullets: [
        "First-party server endpoints bypass client ad-blockers",
        "Overcomes Safari ITP 7-day cookie caps via HTTP-only flags",
        "Deterministic event deduplication eliminates double-counted metrics",
      ],
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "Feeding Ad Algorithms High-Quality Data",
      description:
        "Smart Bidding on Google and Advantage+ on Meta are only as intelligent as the conversion data they receive. We feed ad platforms validated customer values and offline sales.",
      bullets: [
        "Higher Event Match Quality (EMQ 9.0+) lowers customer acquisition costs",
        "Enhanced Conversions with automated SHA-256 PII normalization",
        "Offline Conversion Tracking (OCT) aligns bidding with CRM revenue",
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Permanent First-Party Data Ownership",
      description:
        "Never lose historical marketing intelligence to third-party interface deprecations. We pipe raw event logs directly into Google BigQuery for total data independence.",
      bullets: [
        "Bypass GA4 UI data sampling and 14-month retention caps",
        "Full client administrative control and zero vendor lock-in",
        "Cross-domain user journey stitching without third-party cookies",
      ],
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-600" />,
      title: "Unvarnished Multi-Touch Attribution",
      description:
        "Stop letting Google and Meta claim 100% credit for the same customer purchase. We build unified Looker Studio dashboards calculating real blended CAC and MER.",
      bullets: [
        "True Marketing Efficiency Ratio (MER) mapped to bank revenue",
        "Multi-touch position-based and data-driven attribution models",
        "Daily automated executive reporting with zero manual spreadsheets",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-y border-slate-200/80">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            The MAI Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Why Accurate Measurement Dictates Advertising ROAS
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            In modern paid advertising, creative testing and budget allocation are secondary to data integrity.
            When you provide advertising algorithms with pristine conversion signals, acquisition costs naturally plummet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-slate-200/80 bg-white group hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mb-4 border border-blue-100 group-hover:border-blue-500 group-hover:scale-105">
                  {React.cloneElement(pillar.icon, {
                    className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors",
                  })}
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
