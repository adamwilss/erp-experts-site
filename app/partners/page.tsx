import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "ERP Experts is an Oracle NetSuite Certified Partner. Learn about our partnerships, certifications and the technology ecosystem we work within.",
  alternates: { canonical: "https://www.erpexperts.co.uk/partners" },
  openGraph: {
    title: "Partners | ERP Experts",
    description:
      "ERP Experts is an Oracle NetSuite Certified Partner. Learn about our partnerships and certifications.",
  },
};

const certifications = [
  {
    name: "Oracle NetSuite Certified Partner",
    body: "We are a certified NetSuite implementation and support partner, which means we have met Oracle's standards for delivery capability and hold the right to implement and support NetSuite for clients.",
  },
  {
    name: "SuiteCloud Developer Network",
    body: "As a member of the SuiteCloud Developer Network we build and maintain custom NetSuite applications, SuiteApps and integrations to the platform.",
  },
];

const clients = [
  "Totalkare",
  "Rebellion",
  "Stiltz",
  "Kynetec",
  "Carallon",
];

export default function PartnersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Partners"
        title={<>The partnerships and certifications behind our work.</>}
        subtitle="We work within a deliberately focused ecosystem. These are the partnerships and certifications that back the work we do."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
      />

      {/* Certifications */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Certifications</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Oracle NetSuite Certified Partner.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              We are a certified NetSuite partner. That is not a
              marketing label, it is a verification that we meet
              Oracle&apos;s standards for delivering NetSuite
              implementations and support.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 100}>
                <div className="card card-hover h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                        <path d="M11 2L19 6.5V15.5L11 20L3 15.5V6.5L11 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M7.5 11.5L10 14L15 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {c.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="section bg-paper-soft">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Trusted by</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Businesses that put their NetSuite in our hands.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              We are proud of the clients we work with. Some have been
              with us for years, some came to us mid-project to fix what
              had gone wrong. All of them trust us with the system that
              runs their business.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {clients.map((c) => (
                <div
                  key={c}
                  className="card flex items-center justify-center text-center font-heading text-lg font-semibold text-ink"
                >
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach to partnerships */}
      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Our approach</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Focused, not sprawling.
            </h2>
            <div className="mt-6 space-y-5 text-base text-muted leading-relaxed">
              <p>
                Some partners try to be everything to everyone. We do
                not. We focus on NetSuite, and within NetSuite we focus
                on implementation, support and rescue work for
                mid-market businesses.
              </p>
              <p>
                That focus is why our consultants are genuinely senior.
                They are not splitting their time across five different
                ERP platforms. They live and breathe NetSuite, which
                means the advice you get is specific, tested and
                grounded in real delivery experience.
              </p>
              <p>
                When a project needs capabilities we do not offer in
                house, we have a small, trusted network of specialist
                partners we bring in. We stay accountable for the whole
                engagement. You always know who is responsible.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to talk about a partnership?"
        subtitle="Whether you are a business looking for a NetSuite partner, or a specialist considering working with us, we would like to hear from you."
      />
    </SiteShell>
  );
}
