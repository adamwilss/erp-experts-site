import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ProcessSteps, { ServiceCTA } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "NetSuite Implementation",
  description:
    "Fixed-price NetSuite implementation from a UK Oracle Certified Partner. Discovery to go-live in weeks, not years, with senior consultants on every project.",
  alternates: { canonical: "https://www.erpexperts.co.uk/services/implementation" },
  openGraph: {
    title: "NetSuite Implementation | ERP Experts",
    description:
      "Fixed-price NetSuite implementation from a UK Oracle Certified Partner. Senior delivery, fixed pricing, no surprises.",
  },
};

const outcomes = [
  {
    title: "A system you can trust",
    body: "Clean data, reconciled processes and a single source of truth from the first day you go live.",
  },
  {
    title: "Your team, confident",
    body: "Knowledge transfer built in, so your own people can run the system the day we hand over the keys.",
  },
  {
    title: "No scope creep",
    body: "We agree scope and price up front. If it runs long, we carry the cost, not you.",
  },
  {
    title: "Built to grow",
    body: "The foundations we lay are the ones you scale on for the next five years, not a shortcut you unwind later.",
  },
];

const steps = [
  {
    title: "Discovery and scoping",
    body: "We sit with your team, map your processes end to end and agree exactly what success looks like before any work starts. You get a fixed scope and a fixed price.",
  },
  {
    title: "Solution design",
    body: "We design the NetSuite configuration, customisations and integrations that will deliver your outcomes. You sign off the design before we build.",
  },
  {
    title: "Configuration and build",
    body: "Our senior consultants configure NetSuite, build customisations and stand up integrations in a sandbox you can watch take shape.",
  },
  {
    title: "Data migration",
    body: "We migrate your legacy data, reconcile it and run user acceptance testing with your team until the numbers tie out.",
  },
  {
    title: "Training and go-live",
    body: "We train your team on your processes, not generic NetSuite, then cut over with on-site support for go-live week.",
  },
  {
    title: "Post-go-live support",
    body: "We stay close for the first 90 days, fixing the inevitable niggles and tuning the system as your team finds its feet.",
  },
];

export default function ImplementationPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services / Implementation"
        title={<>NetSuite implementation, done right.</>}
        subtitle="Most implementations fail on the same two things: unclear scope and junior delivery. We fix both. You get a fixed price, senior consultants on every project, and a system your own team can run."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Implementation" }]}
      >
        <ServiceCTA />
      </PageHero>

      {/* Outcomes */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">What you walk away with</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Four things every implementation should deliver.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <div className="card card-hover h-full">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">How we work</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight">
              Six phases. One fixed price.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              No mystery, no open-ended day rates. You always know what
              is happening, what is next and what it costs.
            </p>
          </Reveal>
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Why ERP Experts</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl">
              Senior consultants, fixed pricing, your team independent.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="card h-full">
                <h3 className="font-heading text-lg font-semibold">
                  Senior delivery
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  The consultant who scopes your project is the one who
                  builds it. No bait and switch to a junior team after
                  the contract is signed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card h-full">
                <h3 className="font-heading text-lg font-semibold">
                  Fixed pricing
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  We agree scope and price up front and carry the risk
                  if it runs long. The number on the quote is the number
                  on the invoice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card h-full">
                <h3 className="font-heading text-lg font-semibold">
                  Independent, not dependent
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  We build systems your team can run. Knowledge transfer
                  is a deliverable, so you are never locked into us for
                  every minor change.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-10">
              <Link href="/case-studies/from-chaos-to-clarity" className="text-sm font-semibold text-brand hover:underline underline-offset-4">
                See it in practice: read our manufacturing case study
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
