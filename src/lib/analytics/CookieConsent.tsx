"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Cookie, Settings, Check, X } from "lucide-react";
import Link from "next/link";
import { ConsentSettings, DEFAULT_CONSENT, getStoredConsent } from "./tracker";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(DEFAULT_CONSENT);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("mai_cookie_consent");
    if (!stored) {
      setIsOpen(true);
    } else {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        setSettings(DEFAULT_CONSENT);
      }
    }
  }, []);

  const saveConsent = (newSettings: ConsentSettings) => {
    setSettings(newSettings);
    localStorage.setItem("mai_cookie_consent", JSON.stringify(newSettings));
    setIsOpen(false);
    setIsModalOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("mai_consent_updated", { detail: newSettings }));
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    saveConsent(settings);
  };

  if (!mounted || !isOpen) return null;

  return (
    <>
      {/* Banner */}
      <div
        role="region"
        aria-label="Cookie consent banner"
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-all"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Data Privacy & Tracking Transparency
              </p>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                As a performance and tracking agency, Master Ads Injection respects your privacy.
                We use strictly essential cookies for site functionality and optional analytics/marketing cookies to measure campaign performance. Learn more in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              Preferences
            </button>
            <button
              onClick={handleRejectNonEssential}
              type="button"
              className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              type="button"
              className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span id="cookie-preferences-title">Cookie & Tracking Preferences</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close preferences modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs text-slate-600">
              {/* Essential */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Essential Cookies</p>
                  <p className="text-slate-500 mt-0.5">
                    Required for site security, navigation, and core form operation. Cannot be disabled.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full shrink-0">
                  Always Active
                </span>
              </div>

              {/* Analytics */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Analytics & Measurement</p>
                  <p className="text-slate-500 mt-0.5">
                    Allows us to count visits, traffic sources, and page interactions via GA4 without storing personal data.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) =>
                    setSettings({ ...settings, analytics: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 mt-1 cursor-pointer"
                  aria-label="Allow analytics cookies"
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Marketing & Attribution</p>
                  <p className="text-slate-500 mt-0.5">
                    Used to measure ad effectiveness across Meta and Google Ads campaigns.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) =>
                    setSettings({ ...settings, marketing: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 mt-1 cursor-pointer"
                  aria-label="Allow marketing and attribution cookies"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
