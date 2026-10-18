import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Compass, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-b from-slate-50 to-white">
      <Container size="narrow" className="text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-semibold border border-blue-200/60 mb-6">
          HTTP 404 — Page Not Located
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
          Looking for a Tracking Route?
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          The page or resource you requested may have moved, been renamed, or is currently undergoing maintenance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Button href="/" size="lg">
            <Home className="w-4 h-4 mr-1.5" /> Return to Homepage
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Agency Services
          </Button>
        </div>

        {/* Helpful links */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-md mx-auto text-left">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Popular Destinations
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link
                href="/services/server-side-tracking"
                className="text-blue-600 hover:underline flex items-center justify-between"
              >
                <span>Server-Side Tracking (sGTM)</span>
                <span className="text-slate-400 font-mono text-[11px]">→</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/google-ads-management"
                className="text-blue-600 hover:underline flex items-center justify-between"
              >
                <span>Google Ads Management</span>
                <span className="text-slate-400 font-mono text-[11px]">→</span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline flex items-center justify-between"
              >
                <span>Case Studies & Blueprints</span>
                <span className="text-slate-400 font-mono text-[11px]">→</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-600 hover:underline flex items-center justify-between"
              >
                <span>Book Technical Consultation</span>
                <span className="text-slate-400 font-mono text-[11px]">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
