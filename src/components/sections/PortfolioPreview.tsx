import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/content/portfolio";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function PortfolioPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Verified Technical Architectures
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-3">
              Case Studies & Implementation Blueprints
            </h2>
            <p className="text-base text-slate-600">
              Explore representative architecture blueprints detailing how we solve complex tracking hurdles, align offline sales with Google Ads, and streamline data pipelines.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
          >
            <span>View All Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-slate-200/90 hover:border-blue-300"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="blue">{project.clientType}</Badge>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {project.label}
                    </span>
                  </div>
                  <CardTitle className="text-base sm:text-lg">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-3 mt-2">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Technical Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architectureDetails.trackingTech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-4 border-t border-slate-100">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
