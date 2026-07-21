import Link from "next/link";
import { SITE } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
};

/**
 * Standard end-of-page CTA band used across service and content pages.
 */
export default function CTASection({
  title = "Ready to transform your business with NetSuite?",
  subtitle = "Talk to a senior NetSuite consultant today. No call centres, no sales scripts, just straight answers from people who run their own business on NetSuite.",
  className = "",
}: Props) {
  return (
    <section className={`section bg-ink text-paper ${className}`}>
      <div className="container-site text-center max-w-3xl mx-auto">
        <div className="eyebrow justify-center text-brand-soft reveal-1">
          Let&apos;s talk
        </div>
        <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance reveal-2">
          {title}
        </h2>
        <p className="mt-5 text-base md:text-lg text-paper/70 leading-relaxed reveal-3">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 reveal-4">
          <Link href="/contact" className="btn btn-accent">
            Start a conversation
          </Link>
          <a
            href={SITE.phoneHref}
            className="btn btn-ghost"
            data-cta="phone"
          >
            Book a call: {SITE.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-paper/50 reveal-5">
          Or email us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-soft hover:text-brand underline underline-offset-4"
          >
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
