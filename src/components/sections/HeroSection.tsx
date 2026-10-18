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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6 shadow-subtle animate-fade-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span>International Paid Advertising & Tracking Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-6 animate-fade-up">
            Turn Ad Spend Into{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Measurable Growth.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 animate-fade-up [animation-delay:150ms]">
            Master Ads Injection helps international businesses scale paid advertising performance through
            precision multi-channel campaigns, server-side conversion tracking, and transparent marketing analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10 animate-fade-up [animation-delay:300ms]">
            <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
              Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto hover:bg-slate-50 transition-all active:scale-[0.98]"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Trust Highlights Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-xs text-slate-600 font-medium w-full max-w-3xl pt-4 border-t border-slate-100 animate-fade-up [animation-delay:450ms]">
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-lg hover:bg-slate-50/80 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Account Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-lg hover:bg-slate-50/80 transition-colors">
              <Zap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Consent Mode v2 Setup</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-lg hover:bg-slate-50/80 transition-colors">
              <Activity className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Server-Side CAPI & sGTM</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-lg hover:bg-slate-50/80 transition-colors">
              <Database className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Zero Markups on Media</span>
            </div>
          </div>
        </div>

        {/* Dashboard Visualizer with Floating Pills */}
        <div className="mt-4 relative animate-fade-up [animation-delay:600ms]">
          {/* Floating badge 1 (Top Left) */}
          <div className="hidden sm:flex absolute -top-5 -left-3 lg:-left-6 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-medium">Measurement Stream</p>
              <p className="text-xs font-bold text-slate-900">99.8% Signal Accuracy</p>
            </div>
          </div>

          {/* Floating badge 2 (Bottom Right) */}
          <div className="hidden sm:flex absolute -bottom-5 -right-2 lg:-right-6 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-float-delayed">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-medium">Meta CAPI + sGTM</p>
              <p className="text-xs font-bold text-emerald-600">+28.4% Attribution Lift</p>
            </div>
          </div>

          <HeroDashboardIllustration />
        </div>
      </Container>
    </section>
  );
}
