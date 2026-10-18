import React from "react";
import { Search, Cog, Rocket, BarChart3 } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Technical Audit & Discovery",
      icon: <Search className="w-5 h-5 text-blue-600" />,
      description:
        "We inspect your historical ad spend, Google Tag Manager container, data layer payloads, and CRM pipelines to identify signal loss and budget waste.",
      deliverable: "40+ Point Diagnostic Report & Architecture Blueprint",
    },
    {
      step: "02",
      title: "Server Infrastructure & GTM Deployment",
      icon: <Cog className="w-5 h-5 text-blue-600" />,
      description:
        "We provision dedicated server GTM cloud containers on Google Cloud Run, map first-party subdomains, configure Consent Mode v2, and set up Meta CAPI with deduplication.",
      deliverable: "Live First-Party Subdomain & Verified EMQ 9.0+",
    },
    {
      step: "03",
      title: "Campaign Structuring & Signal Calibration",
      icon: <Rocket className="w-5 h-5 text-blue-600" />,
      description:
        "We restructure Google and Meta accounts: exact-intent search ad groups, Advantage+ testing frameworks, value-based offline conversion imports, and negative sculpting.",
      deliverable: "Production Campaign Launch with Clean Algorithmic Bidding",
    },
    {
      step: "04",
      title: "Attribution Modeling & Profit Scaling",
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      description:
        "We deploy executive Looker Studio dashboards joined with BigQuery, monitor blended MER, and iteratively allocate budget toward top-performing segments.",
      deliverable: "Automated Executive Dashboards & Weekly Strategy Reviews",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200/80">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Systematic Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            How Master Ads Injection Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We follow an engineering-first framework that eliminates guesswork. Every campaign decision is backed by verified conversion telemetry and clear unit economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 font-mono group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className: "w-5 h-5 text-blue-600 group-hover:text-white transition-colors",
                    })}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Key Deliverable
                </p>
                <p className="text-xs font-medium text-blue-700 mt-1">
                  {item.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
