"use client";

import { useState } from "react";

type QA = { q: string; a: string };

type Props = {
  items: QA[];
};

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base md:text-lg font-semibold text-ink">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-ink transition-transform ${
                  isOpen ? "rotate-45 bg-ink text-paper border-ink" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-12 text-sm md:text-base text-muted leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
