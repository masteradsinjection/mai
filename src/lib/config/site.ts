export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    supportEmail: string;
    phonePlaceholder?: string;
    officeLocation: string;
    workingHours: string;
    turnaroundTime: string;
  };
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    calendly?: string;
  };
  navigation: {
    main: Array<{ name: string; href: string; badge?: string }>;
    services: Array<{ name: string; href: string; description: string }>;
    resources: Array<{ name: string; href: string }>;
    legal: Array<{ name: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  name: "Master Ads Injection",
  shortName: "MAI",
  tagline: "Turn Ad Spend Into Measurable Growth.",
  description:
    "Master Ads Injection helps international businesses improve paid advertising performance through strategic multi-channel campaigns, server-side conversion tracking, and actionable marketing analytics.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://masteradsinjection.com",
  ogImage: "/images/og-default.svg",
  contact: {
    email: "contact@masteradsinjection.com",
    supportEmail: "support@masteradsinjection.com",
    officeLocation: "Serving International Clients Worldwide (Remote / Global)",
    workingHours: "Monday – Friday: 09:00 – 18:00 UTC",
    turnaroundTime: "Within 24 business hours",
  },
  links: {
    github: "https://github.com/masteradsinjection/mai",
    linkedin: "https://linkedin.com/company/masteradsinjection",
    twitter: "https://x.com/masteradsinject",
  },
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      {
        name: "Google Ads Management",
        href: "/services/google-ads-management",
        description: "High-intent Search, Shopping, Performance Max, and YouTube campaigns.",
      },
      {
        name: "Meta Ads Management",
        href: "/services/meta-ads-management",
        description: "Full-funnel creative testing, audience architecture, and CAPI scaling.",
      },
      {
        name: "Conversion Tracking & Measurement",
        href: "/services/conversion-tracking",
        description: "Accurate web and offline conversion pipelines with zero signal loss.",
      },
      {
        name: "Google Tag Manager Implementation",
        href: "/services/google-tag-manager",
        description: "Enterprise web and server GTM architecture, custom tags, and triggers.",
      },
      {
        name: "GA4 Setup & Configuration",
        href: "/services/ga4-analytics",
        description: "Clean event schemas, custom dimensions, BigQuery exports, and Looker dashboards.",
      },
      {
        name: "Server-Side Tracking",
        href: "/services/server-side-tracking",
        description: "First-party data infrastructure via Cloud Run or AWS to bypass ad-blockers.",
      },
    ],
    resources: [
      { name: "Case Studies", href: "/portfolio" },
      { name: "Technical Blog", href: "/blog" },
      { name: "HTML Sitemap", href: "/sitemap" },
      { name: "Book Consultation", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  },
};
