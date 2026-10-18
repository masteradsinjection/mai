import React from "react";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  label,
  value,
  subtext,
  trend,
  icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle flex flex-col justify-between transition-all hover:border-blue-200 hover:shadow-card",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        {icon && (
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            {icon}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            {value}
          </span>
          {trend && (
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {trend}
            </span>
          )}
        </div>
        {subtext && (
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{subtext}</p>
        )}
      </div>
    </div>
  );
}
