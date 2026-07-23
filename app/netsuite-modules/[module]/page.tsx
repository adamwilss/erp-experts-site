import type { Metadata } from "next";
import { MODULES } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = MODULES.find((m) => m.slug === slug);
  if (!mod) return { title: "Not Found" };
  return {
    title: `NetSuite ${mod.name} | ERP Experts`,
    description: mod.description,
  };
}

export default async function NetSuiteModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params;
  const mod = MODULES.find((m) => m.slug === slug);
  if (!mod) return <p>Not found.</p>;

  const related = MODULES.filter((m) => m.slug !== slug).slice(0, 6);

  return (
    <SiteShell>
      <PageHero
        eyebrow="NetSuite Modules"
        title={<>NetSuite {mod.name}</>}
        subtitle={mod.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Modules", href: "/seo-index" }, { label: mod.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Module Overview</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to know about NetSuite {mod.name}.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              NetSuite {mod.name} is a core part of the NetSuite ERP platform. As a UK NetSuite partner with over 20 years of implementation experience, we have configured this module for businesses across every sector. From initial setup to ongoing optimisation, we understand the capabilities, limitations, and best practices for getting the most from {mod.name}.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Built for the cloud", body: "NetSuite modules are cloud-native, which means automatic updates, no server maintenance, and access from anywhere." },
                { title: "Fully integrated", body: `${mod.name} integrates seamlessly with the rest of NetSuite. No separate systems, no data silos, no middleware.` },
                { title: "Configurable, not just customisable", body: "Configure {mod.name} to match your processes without custom code. And when you need code, SuiteScript is there." },
                { title: "Proven at scale", body: "We have implemented {mod.name} for businesses from 10 to 1,000+ employees. It scales with you." },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.body.replace(/\{mod\.name\}/g, mod.name)}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">Explore more modules</h3>
              <div className="flex flex-wrap gap-2">
                {related.map((m) => (
                  <Link key={m.slug} href={`/netsuite-modules/${m.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:border-brand hover:text-brand transition-colors">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title={`Need help with ${mod.name}?`} subtitle="Talk to a consultant who has configured this module for businesses like yours." />
    </SiteShell>
  );
}