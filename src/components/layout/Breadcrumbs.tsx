import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "@/lib/seo/json-ld";

export interface BreadcrumbStep {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbStep[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd
        items={allItems.map((item) => ({ name: item.name, url: item.href }))}
      />
      <nav aria-label="Breadcrumbs" className="flex items-center text-xs text-slate-500 py-3">
        <ol className="flex items-center flex-wrap gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1"
                    aria-label="Home"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-slate-900 font-medium truncate max-w-[220px]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
