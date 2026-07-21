import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ServiceCTA } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "NetSuite Support",
  description:
    "Ongoing NetSuite support from a team that knows your system. UK Oracle Certified Partner. Senior consultants, fast response, no call centres.",
  alternates: { canonical: "https://www.erpexperts.co.uk/services/support" },
  openGraph: {
    title: "NetSuite Support | ERP Experts",
    description:
      "Ongoing NetSuite support from a team that knows your system. Senior consultants, fast response, no call centres.",
  },
};

const tiers = [
  {
    name: "Essentials",
    tagline: "For systems that just need a safety net",
    features: [
      "Business hours response",
      "Email and portal support",
      "Monthly health check",
      "Quarterly optimisation review",
      "Minor changes and fixes",
    ],
  },
  {
    name: "Partner",
    tagline: "Our most popular support relationship",
    features: [
      "Priority response, same day",
      "Email, phone and portal",
      "Monthly health check",
      "Monthly optimisation work",
      "Dedicated account lead",
      "Customisation and integration support",
    ],
    featured: true,
  },
  {
    name: "Embedded",
    tagline: "For teams that need us close",
    features: [
      "Priority response, extended hours",
      "All channels, including Slack",
      "Weekly health check",
      "Dedicated consultant time each month",
      "Roadmap and architecture reviews",
      "On-site days included",
    ],
  },
];

const principles = [
  {
    title: "We know your system",
    body: "The team that supports you is the team that knows your configuration. You do not re-explain your business every time you call.",
  },
  {
    title: "Senior consultants answer",
    body: "No tier-one triage, no scripts. The person who picks up your ticket is a NetSuite consultant who can actually fix the problem.",
  },
  {
    title: "Proactive, not reactive",
    body: "We watch your system, flag issues before they bite and run regular health checks so problems are caught early.",
  },
  {
    title: "Transparent reporting",
    body: "Monthly reports on tickets, resolutions and system health, so you always know what you are paying for.",
  },
];

export default function SupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services / Support"
        title={<>NetSuite support that knows your system.</>}
        subtitle="Most NetSuite support is reactive, generic and slow. Ours is not. We learn your configuration, fix issues at the source and stop them coming back. Your team gets answers, not ticket numbers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
      >
        <ServiceCTA />
      </PageHero>

      {/* Principles */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">How our support is different</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Four principles we will not break.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card card-hover h-full">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section bg-paper-soft">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Support relationships</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Three ways to work with us.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              Every support relationship is tailored to your system and
              your team. These are the starting points, not a menu.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <div
                  className={`card h-full flex flex-col ${
                    tier.featured
                      ? "border-brand/40 shadow-[0_24px_50px_-24px_rgba(225,29,72,0.28)]"
                      : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="mb-4 inline-flex self-start rounded-full bg-brand px-3 py-1 text-xs font-semibold text-paper">
                      Most popular
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-ink"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 flex-none text-brand" aria-hidden="true">
                          <path
                            d="M4 9.5L7.5 13L14 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-muted">
              Not sure which fits?{" "}
              <a href="/contact" className="text-brand font-medium hover:underline underline-offset-4">
                Talk to us
              </a>{" "}
              and we will help you work it out.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we support */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">What we cover</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              From a broken workflow to a new module.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Day-to-day fixes", b: "Broken workflows, failed saved searches, permission issues, the lot." },
              { t: "Customisation work", b: "SuiteScript changes, form tweaks, custom records and fields." },
              { t: "Integrations", b: "Diagnosing and fixing integration failures, adding new endpoints." },
              { t: "Upgrades and releases", b: "Preparing for and rolling out NetSuite releases without disruption." },
              { t: "New modules", b: "Turning on and configuring modules you have licensed but not used." },
              { t: "Training", b: "Refresher training and onboarding for new starters on your system." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 70}>
                <div className="card card-hover h-full">
                  <h3 className="font-heading text-lg font-semibold text-ink">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
