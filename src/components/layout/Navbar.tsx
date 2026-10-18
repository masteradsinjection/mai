"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-subtle"
          : "bg-white border-b border-slate-100"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Master Ads Injection Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                Master Ads Injection
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
                Paid Ads & Analytics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === "/"
                  ? "text-blue-600 bg-blue-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1",
                  pathname.startsWith("/services")
                    ? "text-blue-600 bg-blue-50/70"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    servicesDropdownOpen && "transform rotate-180"
                  )}
                />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-2 bg-white rounded-2xl shadow-floating border border-slate-200 animate-fade-in z-50">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Core Agency Services
                    </span>
                  </div>
                  <div className="space-y-1">
                    {siteConfig.navigation.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-slate-100 mt-1">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-between p-1.5"
                    >
                      <span>Explore all 14 service areas</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname.startsWith("/portfolio")
                  ? "text-blue-600 bg-blue-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === "/about"
                  ? "text-blue-600 bg-blue-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              About
            </Link>

            <Link
              href="/blog"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname.startsWith("/blog")
                  ? "text-blue-600 bg-blue-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === "/contact"
                  ? "text-blue-600 bg-blue-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" size="sm" variant="primary">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-2xl p-6 transition-all animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3 pb-6 border-b border-slate-100">
            <Link
              href="/"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname === "/" ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-700"
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname.startsWith("/services")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700"
              )}
            >
              Services (All 14 Areas)
            </Link>
            <div className="pl-6 space-y-2 border-l-2 border-slate-100 ml-3">
              {siteConfig.navigation.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-xs text-slate-600 hover:text-blue-600 py-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/portfolio"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname.startsWith("/portfolio")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700"
              )}
            >
              Case Studies & Portfolio
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname === "/about" ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-700"
              )}
            >
              About Agency
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname.startsWith("/blog")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700"
              )}
            >
              Technical Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-base font-medium py-2 px-3 rounded-lg",
                pathname === "/contact"
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700"
              )}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-6">
            <Button href="/contact" size="lg" className="w-full">
              Book a Strategy Consultation
            </Button>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Client Account & Data Ownership</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
