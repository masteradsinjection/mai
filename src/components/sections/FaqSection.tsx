import React from "react";
import Link from "next/link";
import { generalFaqs } from "@/content/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/layout/Container";
import { FaqJsonLd } from "@/lib/seo/json-ld";

export function FaqSection({ limit }: { limit?: number }) {
  const displayFaqs = limit ? generalFaqs.slice(0, limit) : generalFaqs;

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/80" id="faq">
      <FaqJsonLd
        faqs={displayFaqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />
      <Container size="narrow">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Straightforward answers regarding our tracking architecture, working model, and ad management fees.
          </p>
        </div>

        <Accordion
          items={displayFaqs.map((f) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
          }))}
        />

        <div className="text-center mt-10 text-xs sm:text-sm text-slate-500">
          Have a specific technical question about your stack?{" "}
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact our engineering team directly
          </Link>
          .
        </div>
      </Container>
    </section>
  );
}
