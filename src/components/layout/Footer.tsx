import React from "react";
import Link from "next/link";
import { Mail, Globe, ShieldCheck, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  Master Ads Injection
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                  MAI • Performance Marketing & Tracking
                </span>
              </div>
            </Link>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping international businesses turn ad spend into measurable growth through strategic
              multi-channel advertising, server-side conversion tracking, and transparent marketing analytics.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Client Account & Data Ownership</span>
              </div>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link
                  href="/services/google-ads-management"
                  className="hover:text-blue-400 transition-colors"
                >
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/meta-ads-management"
                  className="hover:text-blue-400 transition-colors"
                >
                  Meta Ads Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/server-side-tracking"
                  className="hover:text-blue-400 transition-colors"
                >
                  Server-Side Tracking (sGTM)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/conversion-tracking"
                  className="hover:text-blue-400 transition-colors"
                >
                  Conversion Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-tag-manager"
                  className="hover:text-blue-400 transition-colors"
                >
                  Google Tag Manager
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ga4-analytics"
                  className="hover:text-blue-400 transition-colors"
                >
                  GA4 Setup & Reporting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 pt-1"
                >
                  View All 14 Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Resources & Agency
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Master Ads Injection
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                  Case Studies & Blueprints
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Technical Marketing Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Book Technical Consultation
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                  HTML Sitemap
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operating Model */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400">Inquiry & Project Intake</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white hover:text-blue-400 transition-colors font-mono"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400">Coverage</p>
                  <p className="text-slate-300">{siteConfig.contact.officeLocation}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                <p className="text-slate-400">Response SLA:</p>
                <p className="text-white font-medium">{siteConfig.contact.turnaroundTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Master Ads Injection (MAI). All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
