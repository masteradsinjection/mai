export interface FaqItem {
  id: string;
  category: "General & Working Model" | "Tracking & Data Accuracy" | "Paid Advertising" | "Pricing & Billing";
  question: string;
  answer: string;
}

export const generalFaqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "General & Working Model",
    question: "Who owns our ad accounts, tracking containers, and data?",
    answer:
      "You retain 100% legal ownership and administrative access to all your advertising accounts (Google Ads MCC link, Meta Business Portfolio), Google Tag Manager containers, cloud tracking instances, and Google Analytics properties. We operate strictly via delegated partner or manager access.",
  },
  {
    id: "faq-2",
    category: "Tracking & Data Accuracy",
    question: "Why does our ad account report more conversions than our bank account or CRM?",
    answer:
      "This is one of the most common issues in paid marketing. Ad platforms operate with default attribution windows (e.g. 7-day click, 1-day view) and each platform claims 100% credit for conversions it touches. Without server-side deduplication, unique transaction IDs, and clean data layer hygiene, numbers inevitably duplicate and inflate.",
  },
  {
    id: "faq-3",
    category: "Tracking & Data Accuracy",
    question: "What is Google Consent Mode v2 and do we need it?",
    answer:
      "Google Consent Mode v2 is mandatory for advertisers running Google Ads targeted at users in the European Economic Area (EEA) and the UK. It dynamically adjusts Google tags based on user consent states (ad_storage, analytics_storage, ad_user_data, ad_personalization). Without it, Google Ads cannot model conversion data or build remarketing audiences for European traffic.",
  },
  {
    id: "faq-4",
    category: "Paid Advertising",
    question: "Do you require long-term lock-in contracts?",
    answer:
      "No. We believe client retention should be earned through performance and transparency, not restrictive multi-year contracts. Our ongoing management engagements operate on month-to-month or quarterly review agreements with a standard 30-day cancellation notice.",
  },
  {
    id: "faq-5",
    category: "Paid Advertising",
    question: "How do you handle ad creative development for Meta Ads?",
    answer:
      "We build a systematic creative testing matrix: crafting compelling hook variations, value propositions, and static asset variations. For user-generated content (UGC) or video production, we either collaborate with your internal creative team or provide detailed creative briefs and storyboards.",
  },
  {
    id: "faq-6",
    category: "Pricing & Billing",
    question: "How is ad spend billed vs. agency management fees?",
    answer:
      "Your advertising media spend is billed directly by Google, Meta, or the respective ad network to your corporate credit card or invoicing credit line. Master Ads Injection never marks up ad spend or handles your media budget directly. Our agency fees are billed separately for strategy, tracking engineering, and active management.",
  },
  {
    id: "faq-7",
    category: "Tracking & Data Accuracy",
    question: "What is the difference between client-side and server-side tracking?",
    answer:
      "Client-side tracking runs scripts inside the visitor's browser, making it susceptible to ad-blockers, Safari cookie restrictions (ITP), and network drops. Server-side tracking routes data through your own custom cloud subdomain (e.g. data.yourdomain.com), giving you total control over privacy, extending cookie longevity, and eliminating signal loss.",
  },
  {
    id: "faq-8",
    category: "General & Working Model",
    question: "How do we get started with Master Ads Injection?",
    answer:
      "Every engagement starts with a thorough Technical & Account Discovery. You submit your project details via our contact form, we review your current tracking architecture and ad spend, and schedule a technical consultation to present an actionable scope of work.",
  },
];
