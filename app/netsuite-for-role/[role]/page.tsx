import type { Metadata } from "next";
import { ROLES, INDUSTRIES } from "@/data/seo";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return ROLES.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role: slug } = await params;
  const role = ROLES.find((r) => r.slug === slug);
  if (!role) return { title: "Not Found" };
  return {
    title: `NetSuite for ${role.name}s | ERP Experts`,
    description: role.description,
  };
}

export default async function NetSuiteRolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role: slug } = await params;
  const role = ROLES.find((r) => r.slug === slug);
  if (!role) return <p>Not found.</p>;

  const related = ROLES.filter((r) => r.slug !== slug).slice(0, 6);
  const relatedIndustries = INDUSTRIES.slice(0, 6);

  return (
    <SiteShell>
      <PageHero
        eyebrow="NetSuite by Role"
        title={<>NetSuite for {role.name}s</>}
        subtitle={role.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Roles", href: "/seo-index" }, { label: role.name }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Role-specific</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              NetSuite, through the lens of a {role.name}.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              NetSuite is a broad platform, but what matters to you depends on your role. As a {role.name.toLowerCase()}, you need specific capabilities: real-time visibility, accurate reporting, and tools that make your team more effective. We have worked with {role.name.toLowerCase()}s across dozens of industries and understand what matters most to you.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Role-specific dashboards", body: `NetSuite gives ${role.name.toLowerCase()}s a personalised view of what matters: KPIs, alerts, and reports configured for your priorities.` },
                { title: "Real-time visibility", body: "No waiting for month-end reports. See your numbers, pipeline, and operational metrics in real time." },
                { title: "Controls and compliance", body: "Role-based access, audit trails, and approval workflows that give you confidence in the numbers." },
                { title: "Strategic decision support", body: "Move from data collection to strategic analysis. NetSuite handles the heavy lifting so you can focus on decisions." },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.body.replace(/\{role\.name\}/g, role.name)}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">Other roles</h3>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link key={r.slug} href={`/netsuite-for-role/${r.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:border-brand hover:text-brand transition-colors">
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">By Industry</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              {role.name} challenges vary by industry.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We have worked with {role.name.toLowerCase()}s across manufacturing, retail, financial services, professional services, and more. Explore our industry-specific NetSuite guides below.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {relatedIndustries.map((ind) => (
                <Link key={ind.slug} href={`/netsuite-for/${ind.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:border-brand hover:text-brand transition-colors">
                  {ind.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title={`NetSuite guidance for ${role.name.toLowerCase()}s`} subtitle="Talk to a senior consultant who understands what matters in your role. Practical advice, no scripts." />
    </SiteShell>
  );
}