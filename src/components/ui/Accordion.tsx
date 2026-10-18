"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const [openItems, setOpenItems] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors focus:outline-none focus:bg-slate-50 cursor-pointer"
            >
              <span className="text-sm md:text-base leading-snug">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
                  isOpen && "transform rotate-180 text-blue-600"
                )}
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
