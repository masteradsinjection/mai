export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  clientType: "E-commerce" | "B2B SaaS" | "Healthcare & Lead Gen" | "Enterprise Retail";
  category: "Tracking Architecture" | "Google Ads" | "Meta Ads" | "Analytics & BI";
  summary: string;
  isDemonstration: boolean; // Clearly indicates illustrative / architecture demonstration
  label: string; // e.g. "Architecture Blueprint", "Implementation Study"
  challenge: string;
  strategy: string;
  architectureDetails: {
    platforms: string[];
    trackingTech: string[];
    timeline: string;
    focusAreas: string[];
  };
  implementationSteps: Array<{ title: string; detail: string }>;
  verifiedMethodology: string[];
  keyTakeaways: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ecommerce-server-side-tracking",
    slug: "ecommerce-server-side-tracking",
    title: "High-Volume E-commerce Server-Side Tracking & Meta CAPI Architecture",
    clientType: "E-commerce",
    category: "Tracking Architecture",
    summary:
      "A representative architecture blueprint showing how high-volume direct-to-consumer storefronts recover ad-blocker signal loss through server-side GTM and Meta Conversions API.",
    isDemonstration: true,
    label: "Architecture Blueprint & Case Study",
    challenge:
      "Modern e-commerce brands lose an estimated 18% to 32% of conversion signals to iOS privacy controls, Safari ITP 7-day cookie caps, and client-side ad-blocking extensions. This leads to under-reported ROAS and sub-optimal algorithmic bidding on Meta and Google Ads.",
    strategy:
      "Deploy a dedicated server-side Google Tag Manager (sGTM) cluster on Google Cloud Platform with first-party subdomain routing, alongside client-side deduplicated payloads using unique transaction IDs and SHA-256 hashed customer parameters.",
    architectureDetails: {
      platforms: ["Shopify Plus", "Google Cloud Run", "Meta Ads", "Google Ads"],
      trackingTech: ["Server GTM", "Meta Conversions API (CAPI)", "Enhanced Conversions", "GA4 Measurement Protocol"],
      timeline: "3-Week Implementation Blueprint",
      focusAreas: ["Signal Loss Recovery", "Event Match Quality", "Deduplication", "Cookie Extension"],
    },
    implementationSteps: [
      {
        title: "Cloud Infrastructure Setup",
        detail:
          "Provisioned auto-scaling Cloud Run containers under a custom subdomain (e.g. data.store.com) with managed SSL certificates to ensure true first-party context.",
      },
      {
        title: "Dual-Stream Event Deduplication",
        detail:
          "Instrumented client-side and server-side event streams with synchronized event_id and order_id parameters, ensuring zero double-counting in Meta Events Manager.",
      },
      {
        title: "Enhanced User Data Hashing",
        detail:
          "Implemented automated normalization and SHA-256 hashing for billing email, phone number, and postal code prior to API transmission, elevating Event Match Quality (EMQ).",
      },
      {
        title: "Validation & Attribution Reconnection",
        detail:
          "Stress-tested webhook reliability under simulated checkout loads, verifying seamless synchronization with GA4 BigQuery raw event tables.",
      },
    ],
    verifiedMethodology: [
      "W3C and RFC compliant cookie handling using HTTP-only secure cookies.",
      "Deterministic event deduplication matching Meta and Google developer documentation.",
      "Strict data minimization ensuring no plaintext payment credentials or unhashed PII traverse vendor endpoints.",
    ],
    keyTakeaways:
      "Transitioning from purely client-side scripts to a hybrid server-side architecture restores visibility into actual buyer journeys without relying on third-party tracking scripts.",
  },
  {
    id: "b2b-lead-generation-google-ads",
    slug: "b2b-lead-generation-google-ads",
    title: "B2B SaaS Google Ads Restructure & Value-Based Offline Conversion Tracking",
    clientType: "B2B SaaS",
    category: "Google Ads",
    summary:
      "An illustrative implementation framework detailing how B2B software companies link closed CRM deals back to Google Ads Smart Bidding using Offline Conversion Imports (OCI).",
    isDemonstration: true,
    label: "Strategy & Tracking Blueprint",
    challenge:
      "B2B campaigns frequently suffer when Smart Bidding optimizes for shallow top-of-funnel conversions (e.g. eBook downloads or junk form fills) rather than qualified demo calls and closed sales pipeline value.",
    strategy:
      "Re-architect Google Ads campaigns into single-theme search ad groups (STAGs), implement hidden GCLID capture across all lead forms, and feed HubSpot deal stage changes back to Google Ads as secondary and primary value milestones.",
    architectureDetails: {
      platforms: ["Google Ads Search", "HubSpot CRM", "WordPress / Next.js", "Looker Studio"],
      trackingTech: ["Google Ads OCI", "GCLID Webhook Listener", "Enhanced Conversions for Leads"],
      timeline: "4-Week Phased Restructure",
      focusAreas: ["Lead Quality", "Value-Based Bidding", "CRM Sync", "Negative Sculpting"],
    },
    implementationSteps: [
      {
        title: "GCLID & Lead Attribution Plumbing",
        detail:
          "Added hidden form fields capturing Google Click Identifiers (GCLID, GBRAID, WBRAID) alongside UTM parameters into CRM contact records.",
      },
      {
        title: "CRM Deal Stage Mapping",
        detail:
          "Mapped sales milestones: 'Demo Booked', 'Sales Qualified Opportunity (SQO)', and 'Contract Closed Won' to distinct Google Ads conversion actions.",
      },
      {
        title: "Account Negative & Match-Type Sculpting",
        detail:
          "Eliminated generic consumer search queries through proactive shared negative keyword libraries, re-allocating budget toward high-intent solution keywords.",
      },
      {
        title: "Transition to Target CPA on Qualified Milestones",
        detail:
          "Gradually shifted campaign bidding from raw lead volume to cost per Sales Qualified Opportunity once conversion density reached required thresholds.",
      },
    ],
    verifiedMethodology: [
      "Strict alignment with Google Ads Offline Conversion Tracking API v17.",
      "Privacy-preserving lead matching adhering to GDPR/CCPA consent states.",
      "Zero reliance on black-box vanity metrics in favor of verified pipeline velocity.",
    ],
    keyTakeaways:
      "Aligning automated bidding with downstream CRM sales data prevents ad algorithms from generating useless cheap leads and forces them to target high-intent enterprise buyers.",
  },
  {
    id: "saas-meta-ads-conversion-audit",
    slug: "saas-meta-ads-conversion-audit",
    title: "SaaS Multi-Touch Attribution & GA4 BigQuery Analytics Pipeline",
    clientType: "B2B SaaS",
    category: "Analytics & BI",
    summary:
      "A demonstration architecture for SaaS companies combining web analytics, subscription billing webhooks (Stripe), and advertising channels into an automated Looker Studio executive model.",
    isDemonstration: true,
    label: "BI & Data Pipeline Blueprint",
    challenge:
      "SaaS organizations struggle to evaluate customer acquisition economics because user trials, initial monthly subscriptions, and annual renewals occur across disparate systems with different billing IDs.",
    strategy:
      "Build an automated data pipeline streaming raw GA4 event logs into Google BigQuery, join them with Stripe invoice webhooks on a unified user ID, and visualize blended CAC and LTV metrics in Looker Studio.",
    architectureDetails: {
      platforms: ["Google BigQuery", "Looker Studio", "Stripe API", "GA4"],
      trackingTech: ["SQL Data Modeling", "Scheduled Cloud Functions", "Custom GA4 Dimensions"],
      timeline: "2-Week Data Pipeline Build",
      focusAreas: ["First-Party Data Warehouse", "True CAC Calculation", "Cohort Retention"],
    },
    implementationSteps: [
      {
        title: "BigQuery Raw Export Configuration",
        detail:
          "Enabled streaming and daily export from GA4 into BigQuery to bypass GA4 UI thresholding, sampling, and 14-month retention limits.",
      },
      {
        title: "Stripe Revenue Webhook Integration",
        detail:
          "Ingested recurring subscription events and calculated net revenue after payment processing fees and refunds.",
      },
      {
        title: "Multi-Touch Attribution Modeling",
        detail:
          "Applied position-based and data-driven attribution models in SQL to assign realistic credit to top-of-funnel paid social and bottom-of-funnel paid search.",
      },
      {
        title: "Executive Looker Dashboard Deployment",
        detail:
          "Created interactive views enabling executives to inspect customer acquisition cost by campaign, cohort payback curves, and monthly churn rates.",
      },
    ],
    verifiedMethodology: [
      "Server-to-server data joins using anonymized pseudo-IDs for user privacy.",
      "Automated partition indexing in BigQuery for cost-efficient query performance.",
      "Direct verification of financial numbers against bank deposit statements.",
    ],
    keyTakeaways:
      "When marketing attribution is unified with real financial transaction data, leadership can allocate growth budgets with mathematical certainty.",
  },
];
