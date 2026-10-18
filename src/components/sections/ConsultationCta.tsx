import React from "react";
import { ArrowRight, ShieldCheck, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/config/site";

export function ConsultationCta() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-blue-900/60">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-700/60 text-blue-200 text-xs font-semibold mb-6">
              <Calendar className="w-3.5 h-3.5" />
              <span>Project Intake & Discovery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              Ready to Turn Ad Spend Into Measurable Growth?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Schedule a technical discovery session. We will evaluate your current conversion tracking signals, audit your campaign architecture, and provide a clear roadmap for scaling profitable acquisition.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button
                href="/contact"
                size="lg"
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 shadow-lg font-bold"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-slate-700 bg-transparent hover:bg-slate-800/60 hover:text-white"
              >
                Review Technical Blueprints
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero high-pressure sales pitch
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-400" />
                Direct review by senior performance engineers
              </span>
              <span>Response within 24 business hours</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
