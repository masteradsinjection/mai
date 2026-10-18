import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Google Ads Management",
  "Meta Ads Management",
  "Conversion Tracking & Setup",
  "Google Tag Manager (Web/Server)",
  "GA4 Setup & Audit",
  "Server-Side Tracking (sGTM/CAPI)",
  "Full Performance Marketing Audit",
  "Other / Custom Consultation",
] as const;

export const BUDGET_OPTIONS = [
  "Under $2,500 / month",
  "$2,500 – $5,000 / month",
  "$5,000 – $15,000 / month",
  "$15,000 – $50,000 / month",
  "$50,000+ / month",
  "One-time project / Audit only",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid business email address")
    .max(120, "Email address is too long"),
  website: z
    .string()
    .url("Please enter a valid URL starting with http:// or https://")
    .optional()
    .or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Please select the service you are interested in" }),
  }),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide at least a brief summary of your project or requirements (10+ characters)")
    .max(2500, "Message cannot exceed 2,500 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the privacy policy to submit this inquiry",
  }),
  // Honeypot field for anti-spam bots
  companyWebsiteExtra: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
