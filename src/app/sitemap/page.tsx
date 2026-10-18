import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, Briefcase, BookOpen, Shield } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { servicesData } from "@/content/services";
import { portfolioProjects } from "@/content/portfolio";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "HTML Sitemap — All Pages & Directory",
  description:
    "Complete human-readable HTML sitemap for Master Ads Injection. Directory of main pages, services, case studies, blog articles, and legal documents.",
  path: "/sitemap",
});

export default function HtmlSitemapPage() {
  return (
    <>
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "HTML Sitemap", href: "/sitemap" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Site Navigation Index
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3 leading-tight">
              Website Sitemap & Page Index
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              A comprehensive directory of all public-facing pages, specialized service guides, technical blueprints, and engineering articles published on Master Ads Injection.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main Pages */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3>Primary Pages</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                    Home (/)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
                    About Us (/about)
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">
                    Services Directory (/services)
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-700 hover:text-blue-600 transition-colors">
                    Case Studies & Portfolio (/portfolio)
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition-colors">
                    Technical Blog (/blog)
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                    Contact Us (/contact)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Individual Services */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <Layers className="w-5 h-5 text-blue-600" />
                <h3>Specialized Service Pages ({servicesData.length})</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
                {servicesData.map((service) => (
                  <div key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors block"
                    >
                      {service.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Case Studies */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3>Case Studies & Blueprints</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {portfolioProjects.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Articles */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3>Technical Blog Articles</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3>Legal & Compliance</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy (/privacy-policy)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Terms of Service (/terms-of-service)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Refund Policy (/refund-policy)
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-mono text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Dynamic XML Sitemap (/sitemap.xml)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="/robots.txt"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-mono text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Robots Directive (/robots.txt)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
