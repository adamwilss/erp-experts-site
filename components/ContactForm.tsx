"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site: no backend. We hand off to a mailto link so the
    // enquiry still lands in the inbox even without a server.
    const subject = encodeURIComponent(
      `Website enquiry from ${form.name || "a prospect"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@erpexperts.co.uk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  if (submitted) {
    return (
      <div className="card border-brand/30 bg-paper">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-heading text-xl font-semibold text-ink">
            Thank you.
          </h3>
        </div>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          Your email client should now have opened with your enquiry
          pre-filled. Just hit send and a senior consultant will get
          back to you within one working day.
        </p>
        <p className="mt-3 text-sm text-muted">
          Prefer to talk now? Call us on{" "}
          <a href="tel:+441785336253" className="text-brand font-medium" data-cta="phone">
            01785 336 253
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full rounded-lg border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={update("company")}
            className="w-full rounded-lg border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
            placeholder="Company name"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full rounded-lg border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className="w-full rounded-lg border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
            placeholder="01785 336 253"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          How can we help? <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="w-full rounded-lg border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-y"
          placeholder="Tell us a little about what you are trying to achieve, or what has gone wrong."
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted">
          We respond within one working day. No call centres, no scripts.
        </p>
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
