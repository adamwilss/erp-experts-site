import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real NetSuite implementations from ERP Experts. Read how we transformed a UK manufacturer from chaos to clarity in 12 weeks.",
  alternates: { canonical: "https://www.erpexperts.co.uk/case-studies" },
  openGraph: {
    title: "Case Studies | ERP Experts",
    description:
      "Real NetSuite implementations from ERP Experts. Read how we transformed a UK manufacturer from chaos to clarity in 12 weeks.",
  },
};

const studies = [
  {
    slug: "from-chaos-to-clarity",
    sector: "Manufacturing",
    title: "From chaos to clarity",
    summary:
      "A UK manufacturer running three disconnected systems, rekeying orders by hand and closing the books in two weeks. We replaced it all with one NetSuite implementation in 12 weeks.",
    stats: [
      { value: "40%", label: "Faster order processing" },
      { value: "3x", label: "Inventory accuracy" },
      { value: "60%", label: "Less manual data entry" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Case studies"
        title={<>Real implementations. Real outcomes.</>}
        subtitle="We let the work speak. Here are the stories of how we have made NetSuite work for businesses across the UK."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
      />

      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid gap-8">
            {studies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block rounded-2xl border border-line bg-paper p-6 md:p-10 transition-all hover:border-line-strong hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]"
                >
                  <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                          {study.sector}
                        </span>
                      </div>
                      <h2 className="mt-4 font-heading text-2xl md:text-4xl font-bold tracking-tight text-ink group-hover:text-brand transition-colors">
                        {study.title}
                      </h2>
                      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                        {study.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                        Read the case study
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                          <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:border-l lg:border-line lg:pl-8">
                      {study.stats.map((stat) => (
                        <div key={stat.label} className="text-center lg:text-left">
                          <div className="font-heading text-2xl md:text-3xl font-extrabold text-gradient-brand">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-xs text-muted leading-snug">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be our next case study?"
        subtitle="Every great case study starts with a conversation. Tell us what you are trying to fix and we will tell you honestly whether we can help."
      />
    </SiteShell>
  );
}
