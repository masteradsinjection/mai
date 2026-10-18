"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Layers, ArrowRight, ShieldCheck } from "lucide-react";
import { PortfolioProject } from "@/content/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Tracking Architecture", "Google Ads", "Analytics & BI"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200/80">
        {categories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all cursor-pointer flex items-center gap-2",
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm ring-1 ring-blue-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              <span>{category}</span>
              <span
                className={cn(
                  "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                  activeCategory === category
                    ? "bg-blue-500/80 text-white"
                    : "bg-slate-200 text-slate-600"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between border-slate-200 hover:border-blue-300 hover:shadow-card transition-all bg-white"
          >
            <div>
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="blue">{project.clientType}</Badge>
                  <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {project.label}
                  </span>
                </div>

                <CardTitle className="text-lg leading-snug">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {project.title}
                  </Link>
                </CardTitle>

                <CardDescription className="text-xs mt-2 line-clamp-3 leading-relaxed">
                  {project.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Tracking Technologies
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.architectureDetails.trackingTech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Implementation Timeline
                    </p>
                    <p className="text-xs text-slate-700 font-mono">
                      {project.architectureDetails.timeline}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>

            <CardFooter className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-500">
                {project.architectureDetails.platforms.length} Platforms Integrated
              </span>
              <Link
                href={`/portfolio/${project.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
              >
                <span>Read Blueprint</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-700">No case studies found in this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="text-xs font-semibold text-blue-600 hover:underline mt-2 cursor-pointer"
          >
            Reset filter to view all blueprints
          </button>
        </div>
      )}
    </div>
  );
}
