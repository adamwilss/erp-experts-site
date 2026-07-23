import type { Metadata } from "next";
import { COMPARISONS, MODULES, ROLES } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor: slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);
  if (!comp) return { title: "Not Found" };
  return {
    title: `NetSuite vs ${comp.name} | ERP Comparison | ERP Experts`,
    description: comp.description,
  };
}

export default async function NetSuiteComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor: slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);
  if (!comp) return <p>Not found.</p>;

  const related = COMPARISONS.filter((c) => c.slug !== slug).slice(0, 6);

  return (
    <SiteShell>
      <PageHero
        eyebrow="ERP Comparison"
        title={<>NetSuite vs {comp.name}</>}
        subtitle={comp.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Comparisons", href: "/seo-index" }, { label: comp.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">The Comparison</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              {comp.name} or NetSuite? We have worked with both.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              As a UK NetSuite partner with over two decades of ERP experience, we have helped businesses evaluate NetSuite against {comp.name}. The right choice depends on your specific needs: scale, industry, budget, and growth plans. Here is our honest analysis based on real implementation experience, not marketing brochures.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Cloud architecture", body: `NetSuite is cloud-native. ${comp.name} may have cloud and on-premise options. We help you understand the real implications.` },
                { title: "Total cost of ownership", body: "Licence, implementation, and ongoing costs. We break down the numbers with no sales pitch." },
                { title: "Implementation timeline", body: "How long does it take to go live? We share real project timelines from our delivery experience." },
                { title: "Scalability and fit", body: "Which system grows with your business? We assess based on your actual trajectory, not a generic checklist." },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">Other comparisons</h3>
              <div className="flex flex-wrap gap-2">
                {related.map((c) => (
                  <Link key={c.slug} href={`/netsuite-vs/${c.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:border-brand hover:text-brand transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Want an honest comparison?" subtitle="Talk to a senior consultant who has delivered both platforms. No sales pitch, just real experience." />
    </SiteShell>
  );
}