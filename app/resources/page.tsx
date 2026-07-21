import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and resources on NetSuite, ERP and finance leadership from ERP Experts. Written by senior consultants, not marketers.",
  alternates: { canonical: "https://www.erpexperts.co.uk/resources" },
  openGraph: {
    title: "Resources | ERP Experts",
    description:
      "Guides and resources on NetSuite, ERP and finance leadership from ERP Experts.",
  },
};

const guides = [
  {
    slug: "is-netsuite-right-for-your-business",
    tag: "Buyers guide",
    readTime: "8 min read",
    title: "Is NetSuite right for your business?",
    excerpt:
      "A practical framework for deciding whether NetSuite is the right ERP for your scale, sector and ambitions. Read this before you sign anything.",
  },
  {
    slug: "future-of-work-generative-ai",
    tag: "Trends",
    readTime: "6 min read",
    title: "The future of work and generative AI",
    excerpt:
      "How generative AI is changing ERP, finance and operations, and what it means for your NetSuite roadmap over the next few years.",
  },
  {
    slug: "4-skills-cfos-need-now",
    tag: "Leadership",
    readTime: "7 min read",
    title: "4 skills CFOs need now",
    excerpt:
      "The finance leadership playbook for an era of automation, real-time data and AI-assisted decision making.",
  },
];

export default function ResourcesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Resources"
        title={<>Guides worth reading.</>}
        subtitle="Written by senior NetSuite consultants, not marketers. No gated PDFs, no sales fluff. Just practical guidance you can use."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 100} as="article">
                <Link href={`/resources/${g.slug}`} className="card card-hover block h-full group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {g.tag}
                    </span>
                    <span className="text-xs text-muted">{g.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {g.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Read guide
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question we have not answered?"
        subtitle="If there is a topic you would like us to cover, or a question you need answering now, get in touch. We answer honestly."
      />
    </SiteShell>
  );
}
