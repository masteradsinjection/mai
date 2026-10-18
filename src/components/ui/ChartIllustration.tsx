import React from "react";
import { TrendingUp, Activity, CheckCircle2, ArrowUpRight } from "lucide-react";

export function HeroDashboardIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-2xl border border-slate-200/90 bg-white p-4 md:p-6 shadow-floating overflow-hidden">
      {/* Decorative top bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
          </div>
          <span className="text-xs font-mono text-slate-400 pl-2">
            mai-telemetry-engine // live-attribution-feed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Server CAPI Active
          </span>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <p className="text-[11px] font-medium text-slate-500">Verified ROAS</p>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-xl font-bold text-slate-900">4.82x</span>
            <span className="text-[10px] font-semibold text-emerald-600 flex items-center">
              <TrendingUp className="w-3 h-3 inline mr-0.5" /> +24%
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Blended cross-channel</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <p className="text-[11px] font-medium text-slate-500">Event Match Quality</p>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-xl font-bold text-slate-900">9.4/10</span>
            <span className="text-[10px] font-semibold text-blue-600">Optimal</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">SHA-256 Normalized</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <p className="text-[11px] font-medium text-slate-500">Reclaimed Signal</p>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-xl font-bold text-slate-900">+28.4%</span>
            <span className="text-[10px] font-semibold text-emerald-600">sGTM</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Bypassing Safari ITP</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <p className="text-[11px] font-medium text-slate-500">Deduplication Rate</p>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-xl font-bold text-slate-900">100%</span>
            <span className="text-[10px] font-semibold text-emerald-600">
              <CheckCircle2 className="w-3 h-3 inline" />
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Zero double counts</p>
        </div>
      </div>

      {/* Main Chart Graphic Area */}
      <div className="p-4 md:p-5 rounded-xl bg-gradient-to-b from-blue-50/40 via-white to-white border border-blue-100/80 mb-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              Conversion Lift & Attribution Precision (Pre vs Post sGTM Implementation)
            </h4>
            <p className="text-[11px] text-slate-500">
              Illustrating verified revenue attribution recovery across 12 tracking intervals
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
              Server Verified (CAPI + OCI)
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-300" />
              Standard Browser Pixel
            </span>
          </div>
        </div>

        {/* SVG Area Chart */}
        <div className="w-full h-44 sm:h-52 relative">
          <svg
            viewBox="0 0 800 200"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="grayGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="0" y1="40" x2="800" y2="40" stroke="#F1F5F9" strokeWidth="1" />
            <line x1="0" y1="90" x2="800" y2="90" stroke="#F1F5F9" strokeWidth="1" />
            <line x1="0" y1="140" x2="800" y2="140" stroke="#F1F5F9" strokeWidth="1" />
            <line x1="0" y1="190" x2="800" y2="190" stroke="#E2E8F0" strokeWidth="1" />

            {/* Gray Area (Legacy Client Pixel) */}
            <path
              d="M 0,160 Q 150,150 300,140 T 500,145 T 700,135 L 800,130 L 800,200 L 0,200 Z"
              fill="url(#grayGradient)"
            />
            <path
              d="M 0,160 Q 150,150 300,140 T 500,145 T 700,135 L 800,130"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Blue Area (Server Verified Modern Pipeline) */}
            <path
              d="M 0,155 Q 150,130 300,100 T 500,60 T 700,35 L 800,20 L 800,200 L 0,200 Z"
              fill="url(#blueGradient)"
            />
            <path
              d="M 0,155 Q 150,130 300,100 T 500,60 T 700,35 L 800,20"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3.5"
            />

            {/* Data points */}
            <circle cx="300" cy="100" r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="500" cy="60" r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="700" cy="35" r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="800" cy="20" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between text-[10px] text-slate-400 pt-2 px-1 font-mono">
          <span>Week 01 (Baseline)</span>
          <span>Week 03 (sGTM Deployed)</span>
          <span>Week 06 (CAPI Synced)</span>
          <span>Week 09 (Enhanced Conv)</span>
          <span>Week 12 (Scale Mode)</span>
        </div>
      </div>

      {/* Bottom Live Signal Feeds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <span className="text-slate-600 font-medium">Google Ads Smart Bidding</span>
          <span className="font-mono text-emerald-600 font-semibold flex items-center">
            Synced <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <span className="text-slate-600 font-medium">Meta CAPI Deduplication</span>
          <span className="font-mono text-blue-600 font-semibold flex items-center">
            9.4 EMQ <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <span className="text-slate-600 font-medium">GA4 BigQuery Pipeline</span>
          <span className="font-mono text-slate-900 font-semibold flex items-center">
            0 Latency <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
