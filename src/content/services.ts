export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: "Paid Advertising" | "Tracking & Analytics" | "CRO & Strategy";
  shortDescription: string;
  fullDescription: string;
  whoNeedsIt: string[];
  problemsSolved: string[];
  deliverables: string[];
  processSteps: Array<{ step: string; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  isFeatured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "google-ads-management",
    slug: "google-ads-management",
    name: "Google Ads Management",
    category: "Paid Advertising",
    shortDescription:
      "High-intent Search, Shopping, Performance Max, and YouTube campaigns engineered for profitable acquisition.",
    fullDescription:
      "Google Ads is the single most powerful intent-driven advertising platform in the world. However, automated bidding models fail when fed inaccurate conversion signals or poorly structured account architecture. Master Ads Injection builds robust Google Ads engines: precision keyword negative sculpting, value-based Smart Bidding setups, audience layering, and ad copy engineered for high Quality Scores.",
    whoNeedsIt: [
      "E-commerce brands looking to scale Google Shopping and Performance Max with positive net margins.",
      "B2B and SaaS businesses capturing bottom-of-funnel search intent with high contract value.",
      "Lead generation firms struggling with low lead quality or excessive cost-per-acquisition (CPA).",
      "Companies spending $3,000+ per month on Google Ads with stagnant or declining ROAS.",
    ],
    problemsSolved: [
      "Wasted ad spend on low-intent search terms and irrelevant search partner networks.",
      "Smart Bidding algorithms optimizing for the wrong conversion actions or low-quality form fills.",
      "Performance Max cannibalizing branded search and existing remarketing segments.",
      "Ad copy fatigue and low Quality Scores driving up cost-per-click (CPC).",
    ],
    deliverables: [
      "Comprehensive account audit, keyword research, and negative match list construction.",
      "Granular campaign structuring: exact-match capture, target CPA/ROAS bid strategy alignment.",
      "High-converting responsive search ad (RSA) copy variations and callout/sitelink asset extensions.",
      "Enhanced conversion tracking setup tied to validated revenue metrics.",
      "Ongoing bid optimization, search query mining, and weekly performance reporting.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Account & Competitor Audit",
        description:
          "We analyze past spend, search query reports, impression share losses, and competitor positioning.",
      },
      {
        step: "02",
        title: "Structure & Signal Alignment",
        description:
          "We rebuild campaign hierarchies, install clean conversion tags, and calibrate initial target CPA/tROAS benchmarks.",
      },
      {
        step: "03",
        title: "Continuous Optimization & Scaling",
        description:
          "Weekly negative query scrubbing, ad creative testing, asset group refreshes, and budget allocation to top-performing segments.",
      },
    ],
    faqs: [
      {
        question: "How long does it take for Google Ads campaigns to gain traction?",
        answer:
          "Google's Smart Bidding algorithms typically require 2 to 3 weeks of consistent conversion volume (at least 30 conversions per month per campaign) to exit learning phase and begin stabilizing cost per acquisition.",
      },
      {
        question: "Do you take ownership of our Google Ads account?",
        answer:
          "Never. You retain 100% legal ownership and administrative rights to your Google Ads account, billing profile, and historical data. We operate via delegated manager link (MCC).",
      },
    ],
    isFeatured: true,
  },
  {
    id: "meta-ads-management",
    slug: "meta-ads-management",
    name: "Meta Ads Management",
    category: "Paid Advertising",
    shortDescription:
      "Full-funnel creative testing, audience segmentation, and Meta Conversions API (CAPI) infrastructure for scale.",
    fullDescription:
      "Scaling paid social across Facebook and Instagram in a post-iOS14.5 landscape demands more than standard lookalikes. It requires high-velocity creative testing, robust server-to-server Conversions API (CAPI) deduplication, and Advantage+ campaign structures that allow Meta's machine learning to find your highest-LTV buyers.",
    whoNeedsIt: [
      "Direct-to-consumer (DTC) brands needing scalable purchase volume.",
      "SaaS and digital product companies generating trial sign-ups and demo bookings.",
      "Agencies looking for specialized paid social media buying support.",
    ],
    problemsSolved: [
      "Pixel signal degradation caused by Safari ITP, iOS privacy prompts, and browser ad-blockers.",
      "Rapid creative fatigue causing CPA spikes after 7 to 10 days of campaign launch.",
      "Over-segmentation restricting Meta's algorithm from exiting the learning phase.",
    ],
    deliverables: [
      "Full account architecture redesign utilizing Advantage+ Shopping / Lead campaigns.",
      "Meta Conversions API (CAPI) deployment via server container for 9.0+ Event Quality Match score.",
      "Creative testing matrix: hook variations, UGC concepts, and static feature callouts.",
      "Cross-channel deduplication and custom attribution windows.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Tracking & Pixel Verification",
        description:
          "We verify browser pixel + CAPI deduplication and configure Aggregated Event Measurement priorities.",
      },
      {
        step: "02",
        title: "Creative Testing Framework",
        description:
          "Deploy dynamic creative tests (DCT) to systematically isolate winning angles, hooks, and visual formats.",
      },
      {
        step: "03",
        title: "Horizontal & Vertical Scaling",
        description:
          "Incrementally expand ad spend on validated winners while maintaining target blended MER (Marketing Efficiency Ratio).",
      },
    ],
    faqs: [
      {
        question: "Why do we need Meta Conversions API (CAPI) in addition to the standard browser pixel?",
        answer:
          "Browser pixels lose between 15% to 35% of conversion events due to ad blockers, browser privacy restrictions, and cookie expiration. Meta CAPI sends events directly from your server, restoring lost signals and boosting Event Quality Match scores.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "paid-strategy",
    slug: "paid-search-social-strategy",
    name: "Paid Search & Paid Social Strategy",
    category: "Paid Advertising",
    shortDescription:
      "Holistic cross-channel acquisition strategies that connect search intent with social discovery.",
    fullDescription:
      "Paid advertising works best when channels reinforce rather than compete with one another. We orchestrate comprehensive multi-touch acquisition strategies: capturing active commercial demand on Google Search, stimulating latent demand on Meta and LinkedIn, and re-engaging prospects with personalized remarketing sequences.",
    whoNeedsIt: [
      "Growing companies moving from single-channel dependence to diversified paid acquisition.",
      "Businesses needing clear attribution and budget allocation frameworks across platforms.",
    ],
    problemsSolved: [
      "Over-reliance on one channel leaving business vulnerable to sudden platform policy shifts.",
      "Channel conflict where Google and Meta both claim 100% credit for the same sale.",
    ],
    deliverables: [
      "Channel mix roadmap and budget allocation models based on expected customer lifetime value.",
      "Cross-platform messaging architecture tailored to each customer journey stage.",
      "Blended reporting framework (MER, CAC, LTV) to evaluate true business profitability.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Unit Economics & Funnel Mapping",
        description: "Review margins, target CAC, payback periods, and historical customer journeys.",
      },
      {
        step: "02",
        title: "Channel Allocation Blueprint",
        description: "Build an omni-channel media plan with defined roles for search, social, and retargeting.",
      },
      {
        step: "03",
        title: "Unified Execution",
        description: "Deploy coordinated campaigns with aligned messaging, tracking, and attribution.",
      },
    ],
    faqs: [
      {
        question: "What budget size is recommended for a multi-channel paid strategy?",
        answer:
          "We generally advise a minimum aggregate monthly ad budget of $4,000 to ensure sufficient statistical data across both search and social channels.",
      },
    ],
  },
  {
    id: "google-tag-manager",
    slug: "google-tag-manager",
    name: "Google Tag Manager Implementation",
    category: "Tracking & Analytics",
    shortDescription:
      "Enterprise-grade GTM architecture for web and server containers, custom triggers, and data layer schemas.",
    fullDescription:
      "Google Tag Manager is the nervous system of your digital marketing ecosystem. A disorganized GTM container leads to slow website performance, duplicated tracking tags, and corrupted analytics. We engineer clean, modular GTM setups with unified data layer variables, standardized naming conventions, and rigorous Consent Mode v2 integration.",
    whoNeedsIt: [
      "Companies with messy legacy containers containing hundreds of unverified or broken tags.",
      "Modern Single Page Applications (Next.js, React, Vue) needing rock-solid virtual pageview tracking.",
      "Businesses implementing Google Consent Mode v2 to comply with EEA regulatory standards.",
    ],
    problemsSolved: [
      "Tags firing out of order or before user consent is registered.",
      "Missing eCommerce purchase parameters (currency, value, transaction_id, items array).",
      "Page load delays caused by unoptimized third-party tracking scripts.",
    ],
    deliverables: [
      "Standardized data layer specification and developer implementation guide.",
      "Custom GTM web container with modular tags, triggers, and lookup tables.",
      "Google Consent Mode v2 implementation (ad_storage, analytics_storage, ad_user_data, ad_personalization).",
      "GTM QA testing, preview verification, and version-controlled container documentation.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Tag Audit & Governance Review",
        description: "Inventory existing tags, remove orphan scripts, and document data layer dependencies.",
      },
      {
        step: "02",
        title: "Container Architecture & Schema Build",
        description: "Implement unified data layer listeners and configure centralized trigger rules.",
      },
      {
        step: "03",
        title: "Live QA & Console Verification",
        description: "Validate payloads across Tag Assistant, network requests, and debug consoles.",
      },
    ],
    faqs: [
      {
        question: "Does GTM slow down my website?",
        answer:
          "When configured properly with asynchronous loading and centralized data layer triggers, GTM improves site speed by consolidating disparate hardcoded vendor scripts into a single organized management pipeline.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "ga4-analytics",
    slug: "ga4-analytics",
    name: "GA4 Setup & Configuration",
    category: "Tracking & Analytics",
    shortDescription:
      "Accurate event schemas, custom dimensions, BigQuery raw data pipelines, and Looker Studio dashboards.",
    fullDescription:
      "Google Analytics 4 is fundamentally different from Universal Analytics. Operating on an event-based data model, GA4 requires thoughtful custom event structuring, parameter definition, and conversion scoping. We configure GA4 to reflect your real business milestones—from multi-step lead funnels to complex e-commerce checkouts.",
    whoNeedsIt: [
      "Businesses who migrated to default GA4 and are struggling to find meaningful reports.",
      "Companies requiring raw event export to Google BigQuery for advanced business intelligence.",
      "Founders who need clear, executive-level Looker Studio dashboards rather than confusing UI tables.",
    ],
    problemsSolved: [
      "Thresholding and missing data caused by misconfigured Google Signals.",
      "Unassigned traffic channels skewing source/medium acquisition attribution.",
      "Inaccurate session counting and missing cross-domain referral exclusions.",
    ],
    deliverables: [
      "Clean GA4 property setup: custom events, user properties, and calculated metrics.",
      "Data stream calibration: enhanced measurement tuning, internal IP exclusions, unassigned channel fixes.",
      "Automated daily BigQuery raw export configuration for permanent first-party data ownership.",
      "Interactive Looker Studio dashboard connected to GA4 and advertising sources.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Measurement Planning",
        description: "Define KPIs, conversion definitions, and custom parameter requirements.",
      },
      {
        step: "02",
        title: "GA4 Property Architecture",
        description: "Configure custom dimensions, data retention settings (14 months), and conversion markers.",
      },
      {
        step: "03",
        title: "Reporting & Dashboard Delivery",
        description: "Construct executive Looker Studio dashboards with channel attribution and funnel breakdown.",
      },
    ],
    faqs: [
      {
        question: "Why does GA4 show '(not set)' or 'Unassigned' in traffic reports?",
        answer:
          "This typically occurs due to missing or non-standard UTM parameter conventions, late-firing session_start events, or redirection stripping tracking parameters before page render.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "conversion-tracking",
    slug: "conversion-tracking",
    name: "Conversion Tracking & Event Measurement",
    category: "Tracking & Analytics",
    shortDescription:
      "Complete conversion pipelines for lead forms, phone calls, calendar bookings, and e-commerce transactions.",
    fullDescription:
      "If you cannot measure conversions with pinpoint accuracy, ad networks cannot optimize your campaigns. We build resilient conversion measurement ecosystems that track the entire user journey: form submissions, dynamic phone call tracking, HubSpot/CRM pipeline stages, and completed transactions.",
    whoNeedsIt: [
      "Service businesses losing visibility after a prospect schedules a meeting via Calendly or HubSpot.",
      "Companies with complex multi-step application funnels or iframe embed widgets.",
      "Advertisers whose reported conversions do not match actual CRM revenue.",
    ],
    problemsSolved: [
      "Discrepancies between ad platform reported conversions and real bank deposits.",
      "Double-counting conversions due to page reloads or lack of unique transaction ID deduplication.",
      "Blind spots on third-party calendar embeds and embedded payment gateways.",
    ],
    deliverables: [
      "End-to-end tracking for native forms, AJAX submissions, and embedded widgets.",
      "Unique transaction ID generation to guarantee zero double-counting.",
      "Cross-domain tracking between marketing landing pages and checkout/application portals.",
      "Real-time validation protocol verifying every firing event against ad platform endpoints.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Funnel & Conversion Audit",
        description: "Identify all conversion touchpoints, form types, call buttons, and embedded elements.",
      },
      {
        step: "02",
        title: "Listener & Payload Setup",
        description: "Deploy robust data layer event listeners capturing dynamic user values safely.",
      },
      {
        step: "03",
        title: "Multi-Platform Dispatch",
        description: "Route verified conversion payloads simultaneously to Google Ads, Meta, and GA4.",
      },
    ],
    faqs: [
      {
        question: "Can you track bookings made inside embedded tools like Calendly or Typeform?",
        answer:
          "Yes. We configure postMessage event listeners and webhook integrations that capture completion events directly into the data layer and dispatch them to your advertising pixels.",
      },
    ],
  },
  {
    id: "server-side-tracking",
    slug: "server-side-tracking",
    name: "Server-Side Tracking Implementation",
    category: "Tracking & Analytics",
    shortDescription:
      "First-party cloud infrastructure (GCP Cloud Run / AWS) to eliminate ad-blocker loss and extend cookie life.",
    fullDescription:
      "Client-side tracking is increasingly compromised by browser restrictions (Safari ITP, Firefox ETP), ad blockers, and network timeouts. Server-side tracking routes analytics data through your own custom first-party subdomain (e.g. data.yourdomain.com), giving you complete control over data privacy, extending cookie lifespans, and restoring lost conversion signals.",
    whoNeedsIt: [
      "High-volume e-commerce brands losing 20-35% of conversion attribution to ad-blockers.",
      "Privacy-conscious enterprises requiring strict redaction of sensitive PII before third-party transmission.",
      "Businesses wanting faster website speed by offloading third-party JavaScript to cloud servers.",
    ],
    problemsSolved: [
      "Safari 7-day and 24-hour cookie expiration truncating user attribution history.",
      "Browser ad-blockers preventing conversion and event tags from loading.",
      "Excessive client-side CPU overhead slowing down Core Web Vitals.",
    ],
    deliverables: [
      "Dedicated server-side Google Tag Manager (sGTM) deployment on Google Cloud Platform or AWS.",
      "First-party subdomain routing (e.g. tracking.yourdomain.com) with SSL certificate provisioning.",
      "Client-to-server data transformation, PII scrubbing, and hash generation (SHA-256).",
      "Direct server-to-server tag dispatch for Meta CAPI, Google Ads, GA4, and TikTok Events API.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Cloud Infrastructure Provisioning",
        description: "Set up auto-scaling cloud containers and configure DNS first-party subdomain mappings.",
      },
      {
        step: "02",
        title: "Server Container Configuration",
        description: "Configure GA4 web stream client as server data receiver and set up vendor server tags.",
      },
      {
        step: "03",
        title: "Signal Deduplication & Stress Test",
        description: "Verify event deduplication between client and server, ensuring 100% data integrity.",
      },
    ],
    faqs: [
      {
        question: "How much does server-side hosting cost per month?",
        answer:
          "For most websites handling under 500,000 monthly events, Google Cloud Run hosting typically costs between $10 and $35 per month, which is vastly outweighed by the reclaimed conversion attribution.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "meta-pixel-capi",
    slug: "meta-pixel-conversions-api",
    name: "Meta Pixel & Conversions API (CAPI)",
    category: "Tracking & Analytics",
    shortDescription:
      "Redundant browser + server tracking architecture with automatic event deduplication and high EMQ scores.",
    fullDescription:
      "Meta's advertising algorithm relies heavily on Event Match Quality (EMQ) to find prospective customers. By pairing the client-side Meta Pixel with the server-side Conversions API using identical event_id parameters, we ensure reliable delivery of purchase, lead, and add-to-cart events directly to Meta's servers.",
    whoNeedsIt: [
      "Brands running Facebook and Instagram campaigns with Event Match Quality scores below 7.0.",
      "E-commerce stores experiencing discrepancies between Shopify/WooCommerce orders and Meta Ads Manager.",
    ],
    problemsSolved: [
      "Unmatched conversion events preventing Meta from properly training custom lookalike audiences.",
      "Under-reported return on ad spend (ROAS) inside Meta Ads reporting.",
    ],
    deliverables: [
      "Complete Meta CAPI integration via server GTM or direct API webhook.",
      "Dynamic SHA-256 customer data hashing (email, phone, city, zip, external_id).",
      "Rigorous event deduplication preventing double-counted purchases.",
      "Target Event Match Quality (EMQ) score optimization of 8.0+ across key conversion events.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Pixel & CAPI Diagnostics",
        description: "Inspect current EMQ scores, payload parameters, and deduplication match rates.",
      },
      {
        step: "02",
        title: "Server Tag & Hash Alignment",
        description: "Configure normalized user data parameters with automatic SHA-256 hashing.",
      },
      {
        step: "03",
        title: "Event Manager Validation",
        description: "Monitor Meta Events Manager for zero duplicate errors and improved match quality.",
      },
    ],
    faqs: [
      {
        question: "What is Event Match Quality (EMQ) and why does it matter?",
        answer:
          "EMQ is Meta's score (out of 10) rating how effectively customer parameters (hashed email, phone, IP, user agent) match an active Facebook/Instagram account. Higher EMQ directly lowers your cost per conversion.",
      },
    ],
  },
  {
    id: "google-ads-conversion-tracking",
    slug: "google-ads-conversion-tracking",
    name: "Google Ads Conversion Tracking & Enhanced Conversions",
    category: "Tracking & Analytics",
    shortDescription:
      "Enhanced Conversions with first-party customer data hashing and offline conversion imports (OCI).",
    fullDescription:
      "Google Ads Enhanced Conversions securely sends hashed first-party customer data (email, phone, address) alongside standard conversion tags. This bridges cross-device and cross-browser attribution gaps, giving Google's Smart Bidding the high-fidelity signals required to optimize bids for higher-value buyers.",
    whoNeedsIt: [
      "Advertisers relying on Smart Bidding (Target CPA / Target ROAS) without Enhanced Conversions enabled.",
      "B2B organizations with long sales cycles needing Offline Conversion Tracking (OCT) from CRM deals.",
    ],
    problemsSolved: [
      "Cross-device conversion loss when a user clicks an ad on mobile and converts on desktop.",
      "Lack of offline deal value visibility inside Google Ads campaigns.",
    ],
    deliverables: [
      "Google Ads Enhanced Conversions implementation via Google Tag Manager.",
      "Dynamic first-party user data variable configuration with automatic privacy hashing.",
      "Offline Conversion Import pipeline linking GCLID / GBRAID / WBRAID parameters to closed CRM sales.",
      "Conversion action categorization (Primary vs Secondary) for clean algorithmic bid optimization.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Conversion Action Architecture",
        description: "Audit primary vs secondary conversion goals to prevent algorithm confusion.",
      },
      {
        step: "02",
        title: "Enhanced Conversions Deployment",
        description: "Implement user-provided data parameters via GTM or Google Tag.",
      },
      {
        step: "03",
        title: "Google Ads Diagnostic Verification",
        description: "Verify active Enhanced Conversions status in Google Ads Conversion diagnostics panel.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Primary and Secondary conversion actions?",
        answer:
          "Primary conversion actions are used directly by Google's Smart Bidding algorithms to optimize bids. Secondary actions are for observation only and do not influence automated bidding.",
      },
    ],
  },
  {
    id: "ecommerce-tracking",
    slug: "ecommerce-tracking-enhanced-measurement",
    name: "E-commerce Tracking & Enhanced Measurement",
    category: "Tracking & Analytics",
    shortDescription:
      "Full e-commerce funnel instrumentation: view_item, add_to_cart, begin_checkout, and purchase events.",
    fullDescription:
      "Accurate e-commerce tracking is the bedrock of retail growth. We implement comprehensive e-commerce event instrumentation across Shopify, WooCommerce, Magento, and custom headless storefronts—ensuring 100% item-level accuracy, currency conversions, and multi-currency reporting.",
    whoNeedsIt: [
      "Online retailers seeing purchase count discrepancies between platform dashboards and actual orders.",
      "Stores with headless or custom checkout flows lacking standard data layer hooks.",
    ],
    problemsSolved: [
      "Missing items array parameters (item_id, item_name, price, item_category, quantity).",
      "Refunds and cancelled orders falsely inflating advertising ROAS figures.",
    ],
    deliverables: [
      "Complete GA4 e-commerce data layer specification matching standard schema.",
      "Event instrumentation: view_item_list, select_item, view_item, add_to_cart, view_cart, remove_from_cart, begin_checkout, add_shipping_info, add_payment_info, purchase.",
      "Server-side order confirmation backup listeners for 99%+ transaction accuracy.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Storefront Architecture Review",
        description: "Assess checkout flows, app integrations, and existing data layer schemas.",
      },
      {
        step: "02",
        title: "Data Layer Instrumentation",
        description: "Inject standardized e-commerce payloads with validated currency and tax parameters.",
      },
      {
        step: "03",
        title: "End-to-End Test Orders",
        description: "Execute live checkout tests to verify payload accuracy across all downstream destinations.",
      },
    ],
    faqs: [
      {
        question: "Can you configure tracking on custom or headless e-commerce builds?",
        answer:
          "Yes. We specialize in custom Next.js, Remix, and Headless Shopify stores, providing custom data layer hooks and server-to-server webhook ingestion.",
      },
    ],
  },
  {
    id: "marketing-analytics-reporting",
    slug: "marketing-analytics-reporting",
    name: "Marketing Analytics & Reporting",
    category: "Tracking & Analytics",
    shortDescription:
      "Unified executive dashboards in Looker Studio bringing Google Ads, Meta, and GA4 into one single source of truth.",
    fullDescription:
      "Stop wasting hours stitching together disconnected spreadsheets from four different ad networks. We build automated, real-time marketing analytics dashboards in Looker Studio that calculate your true blended metrics: Customer Acquisition Cost (CAC), Marketing Efficiency Ratio (MER), and Lifetime Value (LTV).",
    whoNeedsIt: [
      "Founders and CMOs who need clear, instant visibility into daily ad spend and revenue generation.",
      "Marketing directors tired of manual weekly spreadsheet updates.",
    ],
    problemsSolved: [
      "Data silos preventing a cohesive view of marketing performance.",
      "Over-reporting from platform attribution windows claiming duplicate credit.",
    ],
    deliverables: [
      "Custom Looker Studio executive dashboard with automated daily data sync.",
      "Blended performance scorecards: Total Spend, Total Revenue, Blended ROAS, Blended MER.",
      "Granular campaign breakdown views with click-through rate, cost-per-click, and conversion rates.",
      "Automated scheduled email reports sent directly to leadership every Monday morning.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Metric & KPI Definition",
        description: "Align on core business metrics, blended calculations, and stakeholder reporting requirements.",
      },
      {
        step: "02",
        title: "Data Pipeline Connection",
        description: "Connect native API connectors, GA4 properties, and ad accounts to Looker Studio.",
      },
      {
        step: "03",
        title: "Dashboard Delivery & Walkthrough",
        description: "Deploy finalized dashboards with automated scheduled exports and interactive filter controls.",
      },
    ],
    faqs: [
      {
        question: "Do the dashboards update automatically?",
        answer:
          "Yes. All dashboards connect directly via live platform APIs and refresh automatically every 1 to 12 hours based on your preference.",
      },
    ],
  },
  {
    id: "tracking-audits",
    slug: "tracking-audits-troubleshooting",
    name: "Tracking Audits & Troubleshooting",
    category: "Tracking & Analytics",
    shortDescription:
      "Comprehensive diagnostic audit of your tags, pixels, GTM container, and consent setup to identify signal loss.",
    fullDescription:
      "Tracking errors cost businesses thousands of dollars in misdirected ad spend. Our comprehensive tracking audit inspects your entire measurement stack: tag sequencing, data layer payloads, Consent Mode v2 compliance, and conversion deduplication. You receive an actionable technical report detailing exact fixes.",
    whoNeedsIt: [
      "Companies noticing significant data discrepancies between ad accounts and internal sales systems.",
      "Teams preparing to scale ad spend who want to verify measurement integrity before increasing budget.",
    ],
    problemsSolved: [
      "Unidentified script errors blocking conversion tags on specific device or browser combinations.",
      "Broken triggers following website theme updates or CMS migrations.",
    ],
    deliverables: [
      "Complete 40+ point technical tracking audit report.",
      "Issue severity matrix (Critical, Moderate, Low) with clear prioritization.",
      "Step-by-step developer implementation guidelines or direct remediation implementation.",
      "Follow-up verification check after fixes are deployed.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Container & Script Extraction",
        description: "Inspect GTM containers, network payload requests, and client console logs.",
      },
      {
        step: "02",
        title: "Discrepancy Analysis",
        description: "Compare platform reported metrics against server logs and verified order numbers.",
      },
      {
        step: "03",
        title: "Audit Delivery & Action Plan",
        description: "Present detailed findings along with code snippets and remediation steps.",
      },
    ],
    faqs: [
      {
        question: "What access is needed to conduct a tracking audit?",
        answer:
          "We require read-only access to your Google Tag Manager container, Google Analytics 4 property, Google Ads account, and Meta Events Manager.",
      },
    ],
  },
  {
    id: "cro-landing-page",
    slug: "landing-page-cro",
    name: "Landing Page & Conversion Rate Optimization",
    category: "CRO & Strategy",
    shortDescription:
      "High-velocity landing page architecture, UX friction removal, and A/B testing to maximize conversion yield.",
    fullDescription:
      "Driving cheap traffic to an unoptimized landing page is wasted ad spend. We optimize the post-click experience: eliminating visual friction, improving mobile loading speed, clarifying value propositions, and implementing strategic form UX that converts visitors into qualified leads.",
    whoNeedsIt: [
      "Campaigns experiencing high bounce rates or low conversion rates from qualified traffic.",
      "Businesses launching new products or high-ticket lead generation campaigns.",
    ],
    problemsSolved: [
      "High bounce rates caused by slow mobile loading speeds.",
      "Unclear call-to-action (CTA) hierarchy confusing prospective customers.",
    ],
    deliverables: [
      "Landing page heuristic analysis and user session recording review.",
      "Dedicated high-converting landing page designs and copy frameworks.",
      "Lightweight Next.js or page-builder landing page builds optimized for 95+ Mobile PageSpeed.",
      "Structured A/B testing roadmap focusing on headline, hero layout, and form placement.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Heuristic & Funnel Analysis",
        description: "Analyze heatmaps, scroll depth, form abandonment rates, and mobile usability.",
      },
      {
        step: "02",
        title: "Hypothesis & Variant Wireframe",
        description: "Formulate data-backed hypotheses and design responsive conversion variants.",
      },
      {
        step: "03",
        title: "Deployment & Statistical Testing",
        description: "Launch controlled split tests until statistical significance is achieved.",
      },
    ],
    faqs: [
      {
        question: "Do you build the landing pages or only provide recommendations?",
        answer:
          "We offer both: full end-to-end development using modern responsive code, or detailed design and wireframe specifications for your internal web team.",
      },
    ],
  },
  {
    id: "campaign-performance-analysis",
    slug: "campaign-performance-analysis",
    name: "Campaign Performance Analysis",
    category: "CRO & Strategy",
    shortDescription:
      "Deep-dive statistical performance reviews identifying underperforming ad assets and budget reallocation opportunities.",
    fullDescription:
      "Ad accounts quickly accumulate waste: bids set too high on fatigued audiences, underperforming ad creatives draining budget, and unprofitable geographic targets. Our performance analysis provides a mathematical breakdown of where every dollar went and where it should be redeployed.",
    whoNeedsIt: [
      "Marketing teams needing an independent, unbiased review of agency or in-house campaign results.",
      "Companies wanting to trim inefficient spend before entering a peak seasonal period.",
    ],
    problemsSolved: [
      "Plateaued account performance where adding budget increases cost without increasing revenue.",
      "Hidden budget bleed in automated network placements and unsegmented match types.",
    ],
    deliverables: [
      "Asset-level profitability review (creatives, audiences, keywords, placement networks).",
      "Wasted spend calculation with immediate budget reallocation recommendations.",
      "Bidding strategy calibration suggestions tailored to current market conditions.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Historical Data Extraction",
        description: "Pull 90 to 180 days of granular campaign, keyword, and creative performance data.",
      },
      {
        step: "02",
        title: "Efficiency Clustering",
        description: "Segment assets into clear buckets: Scale Winners, Test Candidates, and Immediate Cuts.",
      },
      {
        step: "03",
        title: "Executive Roadmap Delivery",
        description: "Deliver a concise, prioritized roadmap for restructuring spend to maximize net return.",
      },
    ],
    faqs: [
      {
        question: "How often should an account undergo performance analysis?",
        answer:
          "We recommend quarterly comprehensive performance reviews, supplemented by bi-weekly tactical adjustments.",
      },
    ],
  },
];
