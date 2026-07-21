import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "From Chaos to Clarity | Manufacturing Case Study",
  description:
    "How ERP Experts transformed a UK manufacturer running three disconnected systems into a single NetSuite operation in 12 weeks. 40% faster order processing, 3x inventory accuracy.",
  alternates: {
    canonical: "https://www.erpexperts.co.uk/case-studies/from-chaos-to-clarity",
  },
  openGraph: {
    title: "From Chaos to Clarity | Manufacturing Case Study",
    description:
      "How ERP Experts transformed a UK manufacturer into a single NetSuite operation in 12 weeks. 40% faster order processing, 3x inventory accuracy.",
  },
};

const challenge = [
  "Three separate systems for sales, stock and finance, none of which talked to each other.",
  "Orders were rekeyed by hand between systems, introducing errors and delays.",
  "Inventory numbers were effectively guesses; physical counts never matched the books.",
  "Month-end close took two weeks because of endless reconciliation work.",
  "The team had lost faith in the numbers and was working around the system.",
];

const solution = [
  "We ran a two-week discovery to map every process end to end and agree the target state.",
  "We configured NetSuite financial management, inventory, order management and manufacturing in a single instance.",
  "We migrated and reconciled years of legacy data so the new system started on a clean footing.",
  "We replaced manual rekeying with automated workflows between sales, stock and finance.",
  "We trained the team on their own processes, not generic NetSuite, and supported them through go-live.",
];

const results = [
  { value: "40%", label: "Faster order processing" },
  { value: "3x", label: "Inventory accuracy" },
  { value: "60%", label: "Less manual data entry" },
  { value: "12wk", label: "From kickoff to go-live" },
];

export default function CaseStudyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Case study / Manufacturing"
        title={<>From chaos to clarity.</>}
        subtitle="A UK manufacturer was running three systems that did not talk to each other. Orders were rekeyed by hand, inventory numbers were guesses and month-end took two weeks. We replaced all of it with one NetSuite implementation in twelve weeks."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
          { label: "From chaos to clarity" },
        ]}
      />

      {/* Results */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">The results</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Four numbers that tell the story.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((r, i) => (
              <Reveal key={r.label} delay={i * 80}>
                <div className="card text-center">
                  <div className="font-heading text-4xl md:text-5xl font-extrabold text-gradient-brand">
                    {r.value}
                  </div>
                  <div className="mt-2 text-sm text-muted leading-snug">
                    {r.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">The challenge</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              A business held together by spreadsheets.
            </h2>
            <ul className="mt-8 space-y-4">
              {challenge.map((c) => (
                <li key={c} className="flex items-start gap-3 text-base text-ink">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 flex-none text-brand" aria-hidden="true">
                    <path d="M10 2L18 17H2L10 2Z" fill="currentColor" opacity="0.15" />
                    <path d="M10 8V12M10 14.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Solution */}
      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">What we did</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              One system, one source of truth.
            </h2>
            <ul className="mt-8 space-y-4">
              {solution.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-ink">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 flex-none text-brand" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
                    <path d="M6 10.5L9 13.5L14 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Outcome narrative */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">The outcome</div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold tracking-tight">
              A finance team that trusts the numbers.
            </h2>
            <div className="mt-6 space-y-5 text-base text-muted leading-relaxed">
              <p>
                Twelve weeks after kickoff, the manufacturer went live
                on a single NetSuite instance. Orders flow from the
                sales team to the warehouse without a single rekey.
                Inventory counts match the books because they are the
                books. Month-end close, which used to absorb two weeks
                of finance time, now takes days.
              </p>
              <p>
                The warehouse team trusts its own numbers for the first
                time in years. The finance team has moved from
                reconciling data to actually analysing it. And the
                leadership team has the real-time visibility they need
                to make decisions, instead of waiting for a monthly
                report that was already out of date.
              </p>
              <p>
                None of this is magic. It is what happens when you
                replace three disconnected systems with one
                well-configured one, and when the people building it
                actually understand the business they are building for.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-ink text-paper">
        <div className="container-site max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center gap-1 text-brand-soft">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-6 font-heading text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-balance">
              &ldquo;Would I recommend ERP Experts? In a heartbeat.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-paper/70">
              <span className="font-semibold text-paper">David Hall</span>
              <br />
              CEO, Totalkare
            </figcaption>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        subtitle="This is what happens when you replace chaos with one well-configured system. If that sounds like what you need, let us talk."
      />
    </SiteShell>
  );
}
