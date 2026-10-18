"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { servicesData, ServiceItem } from "@/content/services";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ServicesOverview({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Paid Advertising", "Tracking & Analytics", "CRO & Strategy"];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "All") return true;
    return service.category === activeCategory;
  });

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section className="py-20 md:py-28 bg-white" id="services-overview">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Specialized Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-3">
              Full-Spectrum Paid Advertising & Tracking Solutions
            </h2>
            <p className="text-base text-slate-600">
              We engineer the complete growth loop: high-intent acquisition campaigns, resilient server-side tracking, and executive marketing analytics.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
          >
            <span>View All 14 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service: ServiceItem) => (
            <Card
              key={service.id}
              className="flex flex-col justify-between border-slate-200/90 hover:border-blue-300 transition-all"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={service.category === "Paid Advertising" ? "blue" : "emerald"}>
                      {service.category}
                    </Badge>
                    {service.isFeatured && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Core Service
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-3 mt-2">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </p>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-4 border-t border-slate-100">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                >
                  <span>Explore Service Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
