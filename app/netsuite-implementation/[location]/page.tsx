import type { Metadata } from "next";
import { LOCATIONS } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location: slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: "Not Found" };
  return {
    title: `NetSuite Implementation in ${loc.name} | ERP Experts`,
    description: `NetSuite implementation, support, and consultancy in ${loc.name}, ${loc.region}. Trusted UK partner with 20+ years experience.`,
  };
}

export default async function NetSuiteLocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return <p>Not found.</p>;

  return (
    <SiteShell>
      <PageHero
        eyebrow="NetSuite by Location"
        title={<>NetSuite in {loc.name}</>}
        subtitle={`Trusted NetSuite implementation, support, and consultancy for businesses in ${loc.name}, ${loc.region}.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: loc.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Local Expertise</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              NetSuite services in {loc.name}, {loc.region}.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              ERP Experts is an Oracle NetSuite Certified Partner serving businesses in {loc.name} and across {loc.region}. We provide end-to-end NetSuite services including implementation, support, customisation, and training. Whether you are implementing NetSuite for the first time, upgrading an existing instance, or need ongoing support, we are here to help.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Full implementation", body: "From discovery to go-live, we manage the entire NetSuite implementation process." },
                { title: "Ongoing support", body: "Issue resolution, enhancements, and optimisation from experienced consultants." },
                { title: "Customisation and integration", body: "Tailor NetSuite to your exact requirements and connect it to your other systems." },
                { title: "Training and enablement", body: "Get your team confident and capable on NetSuite, fast." },
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
            <div className="eyebrow">Why ERP Experts in {loc.name}?</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Senior consultants. Fixed pricing. Your team independent.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              With offices in Stafford and Manchester and over 20 years of NetSuite experience, we combine enterprise-grade expertise with personal, local service. Every project is led by senior consultants who have delivered NetSuite for businesses just like yours in {loc.name} and across {loc.region}.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
