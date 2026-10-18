import React from "react";
import { ArrowRight, ShieldCheck, Database, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroDashboardIllustration } from "@/components/ui/ChartIllustration";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>International Paid Advertising & Tracking Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Turn Ad Spend Into{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Measurable Growth.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            Master Ads Injection helps international businesses scale paid advertising performance through
            precision multi-channel campaigns, server-side conversion tracking, and transparent marketing analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
            <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-md">
              Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Trust Highlights Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-xs text-slate-600 font-medium w-full max-w-3xl pt-4 border-t border-slate-100">
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Account Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Consent Mode v2 Setup</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Server-Side CAPI & sGTM</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Database className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Zero Markups on Media</span>
            </div>
          </div>
        </div>

        {/* Dashboard Visualizer */}
        <div className="mt-4">
          <HeroDashboardIllustration />
        </div>
      </Container>
    </section>
  );
}
