import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "What is NetSuite?",
  description:
    "A plain-English guide to NetSuite, the leading cloud ERP. What it is, what it does, who it is for and whether your business should be running on it.",
  alternates: { canonical: "https://www.erpexperts.co.uk/what-is-netsuite" },
  openGraph: {
    title: "What is NetSuite? | ERP Experts",
    description:
      "A plain-English guide to NetSuite, the leading cloud ERP. What it is, what it does and who it is for.",
  },
};

const modules = [
  { name: "Financial management", body: "General ledger, accounts payable and receivable, multi-currency, multi-entity consolidation and revenue recognition." },
  { name: "Inventory and warehouse", body: "Real-time stock across locations, warehouse management, lot and serial tracking, demand planning." },
  { name: "Order management", body: "Quote to cash, order routing, pick pack ship, returns, pricing and promotions." },
  { name: "CRM", body: "Customer records, sales pipeline, marketing automation, customer service case management." },
  { name: "Ecommerce", body: "SuiteCommerce storefronts that share one source of truth with your ERP, inventory and CRM." },
  { name: "Manufacturing", body: "Bill of materials, routing, work orders, production scheduling, MRP and shop floor control." },
  { name: "Supply chain", body: "Demand planning, purchasing, supplier records and supply chain analytics in one system." },
  { name: "Human resources", body: "Employee records, payroll integration, time tracking, expense management and reporting." },
];

const fitSignals = [
  "You are running multiple systems that do not talk to each other",
  "Your finance team spends days rekeying data every month end",
  "You have outgrown entry-level accounting software like Xero or Sage 50",
  "You operate across multiple entities, currencies or countries",
  "Your inventory numbers and your finance numbers never agree",
  "You need real-time visibility across multiple locations",
];

const notFitSignals = [
  "You are a sole trader or a very small team with simple books",
  "Your turnover is under £1m and growth is not on the agenda",
  "You need deep industry-specific features that NetSuite does not offer out of the box",
];

export default function WhatIsNetSuitePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Primer"
        title={<>What is NetSuite?</>}
        subtitle="A plain-English guide to the leading cloud ERP. What it is, what it does, who it is for and whether your business should be running on it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "What is NetSuite?" }]}
      />

      {/* What it is */}
      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">The short answer</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance">
              NetSuite is a cloud ERP system.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              ERP stands for enterprise resource planning. In practice,
              that means a single system that runs your finance, your
              inventory, your orders, your CRM, your ecommerce and your
              reporting, all from one database, in the cloud, with no
              servers for you to look after.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              NetSuite is owned by Oracle and is one of the most widely
              used cloud ERPs in the world. It is the system of choice
              for mid-market businesses that have outgrown entry-level
              accounting software but do not want the cost and
              complexity of legacy on-premise ERP.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section className="section bg-paper-soft">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">What it does</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              One system, every part of your business.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              NetSuite is modular. You start with what you need and turn
              on more as you grow, without migrating to a new platform.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="card card-hover h-full">
                  <h3 className="font-heading text-base font-semibold text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Is it right for you */}
      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full border-brand/20">
                <div className="eyebrow text-brand">Likely a good fit</div>
                <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight">
                  NetSuite is probably right for you if:
                </h2>
                <ul className="mt-6 space-y-3">
                  {fitSignals.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-ink">
                      <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 flex-none text-brand" aria-hidden="true">
                        <path d="M4 9.5L7.5 13L14 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full">
                <div className="eyebrow">Probably not a fit</div>
                <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight">
                  You might want to look elsewhere if:
                </h2>
                <ul className="mt-6 space-y-3">
                  {notFitSignals.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-ink">
                      <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 flex-none text-muted" aria-hidden="true">
                        <path d="M5 5L13 13M13 5L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-muted">
              Still unsure? Read our guide on{" "}
              <Link href="/resources/is-netsuite-right-for-your-business" className="text-brand font-medium hover:underline underline-offset-4">
                whether NetSuite is right for your business
              </Link>
              , or just{" "}
              <Link href="/contact" className="text-brand font-medium hover:underline underline-offset-4">
                talk to us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cloud vs on-premise */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Why cloud</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Cloud ERP vs on-premise: the short version.
            </h2>
            <div className="mt-8 space-y-5 text-base text-muted leading-relaxed">
              <p>
                On-premise ERP runs on your own servers. You buy it
                once, then pay for upgrades, support and hardware for as
                long as you run it. Upgrades are projects. Hardware is
                your problem. Security is your problem.
              </p>
              <p>
                Cloud ERP like NetSuite runs on the vendor&apos;s
                infrastructure. You subscribe, rather than buy, and
                upgrades happen automatically twice a year with no
                projects on your side. You get the latest features
                without lifting a finger.
              </p>
              <p>
                For most mid-market businesses, the cloud model is now
                the default. The total cost of ownership is lower, the
                risk is lower and you stop spending IT budget on keeping
                the lights on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Wondering if NetSuite fits your business?"
        subtitle="We will give you an honest answer. No hard sell, no commission-driven advice. Just a senior consultant who has seen hundreds of businesses like yours."
      />
    </SiteShell>
  );
}
