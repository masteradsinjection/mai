import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow focus:ring-blue-500",
      secondary:
        "bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 focus:ring-slate-400",
      outline:
        "border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 focus:ring-blue-500 shadow-sm",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-300",
      white:
        "bg-white hover:bg-slate-50 text-slate-900 shadow hover:shadow-md focus:ring-white",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
