import type { Metadata } from "next";
import { INDUSTRIES } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `NetSuite for ${industry.name} | ERP Experts`,
    description: industry.description,
  };
}

export default async function NetSuiteForIndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return <p>Not found.</p>;

  const relatedIndustries = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 6);

  return (
    <SiteShell>
      <PageHero
        eyebrow="NetSuite by Industry"
        title={<>NetSuite for {industry.name}</>}
        subtitle={industry.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: industry.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Why NetSuite</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              A unified platform for {industry.name.toLowerCase()}.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              NetSuite gives {industry.name.toLowerCase()} businesses a single system to manage financials, operations, inventory, and customer relationships. No more disconnected spreadsheets, no more rekeying data between systems. One source of truth, accessible from anywhere.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Real-time visibility", body: "See your financials, operations, and KPIs in real time, not at month-end." },
                { title: "Automated processes", body: "Eliminate manual data entry and reduce errors across your operations." },
                { title: "Scalable architecture", body: "NetSuite grows with your business, from 10 employees to 1,000." },
                { title: "Built-in compliance", body: "Financial reporting, audit trails, and regulatory compliance out of the box." },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Our Expertise</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Two decades of {industry.name.toLowerCase()} implementations.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We have delivered NetSuite implementations for {industry.name.toLowerCase()} businesses ranging from growing SMEs to established enterprises. Our team understands your workflows, compliance requirements, and growth objectives. We do not just configure software, we design systems that fit how your business actually works.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">Related industries</h3>
              <div className="flex flex-wrap gap-2">
                {relatedIndustries.map((ind) => (
                  <Link key={ind.slug} href={`/netsuite-for/${ind.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:border-brand hover:text-brand transition-colors">
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
