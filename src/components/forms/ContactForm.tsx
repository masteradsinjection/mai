"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from "lucide-react";
import {
  contactFormSchema,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  ContactFormData,
} from "@/lib/validation/contact";
import { trackFormSubmission } from "@/lib/analytics/tracker";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    website: "",
    service: SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[2],
    message: "",
    privacyConsent: false,
    companyWebsiteExtra: "", // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });
    setFieldErrors({});

    // 1. Client-side Zod validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!formattedErrors[field]) {
          formattedErrors[field] = err.message;
        }
      });
      setFieldErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you! Your inquiry has been received.",
        });

        // Trigger analytics event
        trackFormSubmission({
          service: formData.service,
          budget: formData.budget,
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          website: "",
          service: SERVICE_OPTIONS[0],
          budget: BUDGET_OPTIONS[2],
          message: "",
          privacyConsent: false,
          companyWebsiteExtra: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Unable to process your inquiry. Please check the fields and try again.",
        });
        if (result.errors) {
          const apiErrors: Record<string, string> = {};
          Object.keys(result.errors).forEach((key) => {
            apiErrors[key] = result.errors[key][0];
          });
          setFieldErrors(apiErrors);
        }
      }
    } catch (err) {
      console.error("Network or submission error:", err);
      setSubmitStatus({
        type: "error",
        message: "A network error occurred while submitting. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-card">
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Discuss Your Project & Architecture
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Tell us about your advertising goals, current tracking setup, and monthly budget. We will respond within 24 business hours.
        </p>
      </div>

      {submitStatus.type === "success" && (
        <div
          role="alert"
          className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-fade-in"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Inquiry Received</h4>
            <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      {submitStatus.type === "error" && (
        <div
          role="alert"
          className="mb-8 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 animate-fade-in"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Submission Error</h4>
            <p className="text-xs text-red-700 mt-1 leading-relaxed">
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam honeypot - invisible to human users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsiteExtra">Leave this empty</label>
          <input
            id="companyWebsiteExtra"
            name="companyWebsiteExtra"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.companyWebsiteExtra}
            onChange={handleChange}
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.fullName
                  ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
            {fieldErrors.fullName && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.email
                  ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Website URL */}
        <div>
          <label
            htmlFor="website"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Company Website / Storefront URL <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourbrand.com"
            value={formData.website}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              fieldErrors.website
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          {fieldErrors.website && (
            <p className="text-xs text-red-600 mt-1">{fieldErrors.website}</p>
          )}
        </div>

        {/* Row 3: Service Selection & Monthly Ad Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Primary Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Estimated Monthly Ad Spend
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Project Summary & Challenges <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Describe your current advertising channels, key challenges (e.g. signal loss, high CPA, tracking bugs), and target outcomes..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              fieldErrors.message
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
          )}
        </div>

        {/* Row 5: Privacy consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 mt-0.5 cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I acknowledge the{" "}
              <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
                Privacy Policy
              </Link>{" "}
              and authorize Master Ads Injection to contact me regarding this inquiry.
            </span>
          </label>
          {fieldErrors.privacyConsent && (
            <p className="text-xs text-red-600 mt-1 ml-7">{fieldErrors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Validating & Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Project Inquiry</span>
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Strict confidentiality. Your information is never sold or shared.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
