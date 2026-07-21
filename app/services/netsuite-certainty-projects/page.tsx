import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ProcessSteps, { ServiceCTA } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "NetSuite Certainty Projects",
  description:
    "Fixed-scope rescue work for NetSuite implementations that have gone sideways. We diagnose, fix and hand back a system you can trust.",
  alternates: {
    canonical: "https://www.erpexperts.co.uk/services/netsuite-certainty-projects",
  },
  openGraph: {
    title: "NetSuite Certainty Projects | ERP Experts",
    description:
      "Fixed-scope rescue work for NetSuite implementations that have gone sideways. Diagnose, fix and hand back a system you can trust.",
  },
};

const symptoms = [
  "Your implementation stalled and you are not live, or only partially live",
  "You went live but the numbers do not reconcile and nobody trusts them",
  "Your previous partner left and nobody else knows the system",
  "Workarounds have piled up and nobody remembers why they exist",
  "Your team has lost faith in NetSuite and is working around it",
  "You are spending more on support than you did on implementation",
];

const steps = [
  {
    title: "Rapid assessment",
    body: "In two weeks we assess your system against your business outcomes, pinpoint what is broken and what is working, and write a clear remediation plan.",
  },
  {
    title: "Fixed scope and price",
    body: "You get a fixed-scope remediation plan with a fixed price. No open-ended day rates, no scope creep. You know exactly what you are paying for before we start.",
  },
  {
    title: "Targeted remediation",
    body: "We fix the data, the customisations, the integrations and the processes that are causing pain, in priority order, with weekly progress you can see.",
  },
  {
    title: "Stabilisation",
    body: "We stabilise the system, reconcile the numbers and get your team back to trusting NetSuite as a single source of truth.",
  },
  {
    title: "Handover and independence",
    body: "We hand over documentation, train your team on the fixes and leave you with a system your own people can run without us in the room.",
  },
];

const guarantees = [
  {
    title: "Fixed scope, fixed price",
    body: "Certainty is in the name. You get a fixed scope and a fixed price before any remediation starts. If we overrun, we carry the cost.",
  },
  {
    title: "Honest diagnosis",
    body: "If the honest answer is that the system is beyond saving, we will tell you. We will not string you along for months of billable work.",
  },
  {
    title: "Senior rescue team",
    body: "The consultants who assess your system are the ones who fix it. No junior hand-off on the work that matters most.",
  },
  {
    title: "You stay independent",
    body: "We fix the system and hand it back. We are not in the business of making you dependent on us for every future change.",
  },
];

export default function CertaintyProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services / Certainty Projects"
        title={<>When your NetSuite project has gone sideways.</>}
        subtitle="Certainty Projects are fixed-scope, fixed-price rescue engagements for NetSuite implementations that have stalled, drifted or broken. We diagnose what is wrong, fix it and hand back a system you can trust."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Certainty Projects" }]}
      >
        <ServiceCTA />
      </PageHero>

      {/* Symptoms */}
      <section className="section bg-paper">
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="eyebrow">Sound familiar?</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              The signs a project needs rescuing.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              If any of these are true, a Certainty Project is probably
              the fastest route back to a system you can trust.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {symptoms.map((s, i) => (
              <Reveal key={s} delay={i * 60} as="li">
                <div className="flex items-start gap-3 rounded-xl border border-line bg-paper p-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 flex-none text-brand" aria-hidden="true">
                    <path d="M10 2L18 17H2L10 2Z" fill="currentColor" opacity="0.15" />
                    <path d="M10 8V12M10 14.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm text-ink leading-snug">{s}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">How a Certainty Project works</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight">
              Five steps back to certainty.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">What we guarantee</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Four things you can count on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="card card-hover h-full">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {g.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure if you need a rescue?"
        subtitle="If you are wondering, you probably do. A short conversation costs nothing and could save you months. Let us take a look and give you an honest read."
      />
    </SiteShell>
  );
}
