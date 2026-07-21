import type { Metadata } from "next";
import { INDUSTRIES, LOCATIONS } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  const params: { path: string; location: string }[] = [];
  for (const industry of INDUSTRIES) {
    for (const location of LOCATIONS) {
      params.push({ path: `netsuite-for-${industry.slug}-in`, location: location.slug });
    }
  }
  return params.slice(0, 400);
}

export async function generateMetadata({ params }: { params: Promise<{ path: string; location: string }> }): Promise<Metadata> {
  const { path, location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  const pathMatch = path.match(/^netsuite-for-(.+)-in$/);
  const industrySlug = pathMatch ? pathMatch[1] : null;
  const ind = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  if (!loc || !ind) return { title: "Not Found" };
  return {
    title: `NetSuite for ${ind.name} in ${loc.name} | ERP Experts`,
    description: `NetSuite implementation, support, and consultancy for ${ind.name.toLowerCase()} businesses in ${loc.name}, ${loc.region}.`,
  };
}

export default async function NetSuiteIndustryLocationPage({ params }: { params: Promise<{ path: string; location: string }> }) {
  const { path, location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  const pathMatch = path.match(/^netsuite-for-(.+)-in$/);
  const industrySlug = pathMatch ? pathMatch[1] : null;
  const ind = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  if (!loc || !ind) return <p>Not found.</p>;

  return (
    <SiteShell>
      <PageHero
        eyebrow={`${ind.name} in ${loc.name}`}
        title={<>NetSuite for {ind.name} in {loc.name}</>}
        subtitle={`Specialist NetSuite implementation, support, and consultancy for ${ind.name.toLowerCase()} businesses in ${loc.name}, ${loc.region}.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: ind.name, href: `/netsuite-for/${ind.slug}` }, { label: loc.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Local Expertise</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              {ind.name} in {loc.name}, powered by NetSuite.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              ERP Experts provides NetSuite services for {ind.name.toLowerCase()} companies in {loc.name} and across {loc.region}. {ind.description} From initial implementation through ongoing support, our team has the experience to deliver.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Industry expertise", body: `We understand the specific challenges facing ${ind.name.toLowerCase()} businesses in ${loc.name}.` },
                { title: "Local presence", body: `Serving ${loc.name} and ${loc.region} with senior consultants.` },
                { title: "Fixed pricing", body: "Clear scope and price agreed up front. No surprises." },
                { title: "20+ years experience", body: "Two decades of NetSuite implementations across every sector." },
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

      <CTASection />
    </SiteShell>
  );
}
