import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "emerald" | "slate" | "purple" | "amber";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "blue",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full select-none";

  const variants = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200/60",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200/60",
    amber: "bg-amber-50 text-amber-700 border border-amber-200/60",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
