// Safe, consent-aware analytics tracker

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type ConsentSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentSettings = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent(): ConsentSettings {
  if (typeof window === "undefined") return DEFAULT_CONSENT;
  try {
    const stored = localStorage.getItem("mai_cookie_consent");
    if (!stored) return DEFAULT_CONSENT;
    return JSON.parse(stored);
  } catch {
    return DEFAULT_CONSENT;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const consent = getStoredConsent();

  // Push to dataLayer (Google Tag Manager)
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
      consent_analytics: consent.analytics,
      consent_marketing: consent.marketing,
      timestamp: new Date().toISOString(),
    });
  }

  // Google Analytics 4 event
  if (consent.analytics && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Meta Pixel event (if marketing consent granted)
  if (consent.marketing && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
}

export function trackFormSubmission(data: { service: string; budget?: string }) {
  trackEvent("lead_form_submitted", {
    service_category: data.service,
    budget_range: data.budget || "unspecified",
  });
}

export function trackConsultationClick(source: string) {
  trackEvent("cta_consultation_click", {
    cta_source: source,
  });
}
