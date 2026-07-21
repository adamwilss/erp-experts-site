import type { Metadata } from "next";
import { SERVICES_PAGES } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return SERVICES_PAGES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const svc = SERVICES_PAGES.find((s) => s.slug === slug);
  if (!svc) return { title: "Not Found" };
  return {
    title: `NetSuite ${svc.name} | ERP Experts`,
    description: svc.description,
  };
}

export default async function NetSuiteServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const svc = SERVICES_PAGES.find((s) => s.slug === slug);
  if (!svc) return <p>Not found.</p>;

  return (
    <SiteShell>
      <PageHero
        eyebrow="NetSuite Services"
        title={<>NetSuite {svc.name}</>}
        subtitle={svc.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: svc.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">What We Offer</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Specialist {svc.name.toLowerCase()} from experienced consultants.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              ERP Experts provides specialist NetSuite {svc.name.toLowerCase()} for businesses across the UK. With over two decades of hands-on NetSuite experience, our consultants deliver practical, results-driven solutions. We work closely with your team to understand your requirements and deliver a solution that works for your specific context.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Senior delivery", body: "The consultant who scopes your project is the one who delivers it." },
                { title: "Fixed pricing", body: "We agree scope and price up front. No surprise invoices." },
                { title: "Knowledge transfer", body: "Your team learns to run the system, not depend on us." },
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
