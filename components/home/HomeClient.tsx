"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const clients = [
  "Totalkare",
  "Rebellion",
  "Stiltz",
  "Kynetec",
  "Carallon",
];

const stats = [
  { value: 20, suffix: "+", label: "Years specialising in NetSuite" },
  { value: 200, suffix: "+", label: "Projects delivered" },
  { value: 5000, suffix: "+", label: "Support tickets resolved" },
];

const values = [
  {
    title: "Partners, not suppliers",
    body: "We stick around. Our team learns your business, your sector and your quirks, so the advice gets sharper every year, not more generic.",
  },
  {
    title: "Fixed pricing",
    body: "No open-ended day rates, no surprise invoices. We agree scope and price up front, and we carry the risk if it runs long.",
  },
  {
    title: "Your team independent, not dependent",
    body: "We build systems your own people can run. Knowledge transfer is a deliverable, not an afterthought, so you are never locked in.",
  },
];

const startingFresh = [
  "Requirements scoping",
  "NetSuite configuration",
  "Customisation",
  "Integration",
  "Data migration",
  "Go-live and handover",
];

const alreadyLive = [
  "Health audits",
  "Process optimisation",
  "Training",
  "Customisation fixes",
  "Integration reviews",
  "Ongoing support",
];

const caseStudyStats = [
  { value: "40%", label: "Faster order processing" },
  { value: "3x", label: "Inventory accuracy" },
  { value: "60%", label: "Less manual data entry" },
  { value: "12wk", label: "From kickoff to go-live" },
];

export default function HomeClient() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-ink text-paper">
        {/* Animated aurora blobs */}
        <div className="absolute inset-0 hero-radial" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob b1" />
          <div className="aurora-blob b2" />
          <div className="aurora-blob b3" />
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 hero-grid opacity-60"
          aria-hidden="true"
        />
        {/* Bottom fade to paper */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-paper"
          aria-hidden="true"
        />

        <div className="relative container-site pt-32 pb-24 md:pt-44 md:pb-36">
          <div className="max-w-4xl">
            <div className="reveal-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-paper/80 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              Oracle NetSuite Certified Partner
            </div>

            <h1 className="reveal-2 mt-7 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-balance">
              We Make
              <br />
              NetSuite{" "}
              <span className="relative inline-block">
                <span className="text-gradient-brand">Work.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 11C70 4 230 2 298 6"
                    stroke="url(#underline-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-grad"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#e11d48" />
                      <stop offset="0.5" stopColor="#ff2d6f" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="reveal-3 mt-7 max-w-xl text-lg md:text-xl text-paper/70 leading-relaxed">
              and have done so for over two decades. We implement, support
              and optimise NetSuite for ambitious businesses across the UK
              and beyond.
            </p>

            <div className="reveal-4 mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/contact" className="btn btn-accent">
                Start a conversation
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn btn-ghost"
                data-cta="phone"
              >
                Book a call: {SITE.phone}
              </a>
            </div>

            {/* Trust bar */}
            <div className="reveal-5 mt-14">
              <div className="text-xs uppercase tracking-[0.2em] text-paper/40">
                Trusted by
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="font-heading text-lg md:text-xl font-semibold text-paper/55"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className="text-center md:border-l md:border-line first:border-l-0 md:px-6"
              >
                <div className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-2 text-sm text-muted leading-relaxed">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="eyebrow">Our standard</div>
            <blockquote className="mt-6 font-heading text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-ink text-balance">
              We use NetSuite to run our own business. Every system we
              build has to meet one standard:{" "}
              <span className="text-gradient-brand">
                would we be willing to use this ourselves?
              </span>
            </blockquote>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              That is the test. If a configuration, a workflow or a
              customisation would not pass muster on our own books, it
              does not ship. It is a simple filter, and it is why our
              clients stay with us for years rather than months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">What you get</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Three commitments we make to every client.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} as="article">
                <div className="card card-hover h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper font-heading font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY (TWO PATHS) ===================== */}
      <section className="section bg-paper-soft">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Where you are</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Two paths. One standard.
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              Whether you are starting fresh with NetSuite or already
              live and looking to get more from it, we meet you where you
              are.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card card-hover h-full border-brand/20">
                <div className="flex items-center justify-between">
                  <div className="eyebrow text-brand">Starting fresh</div>
                  <span className="text-xs font-medium text-muted">
                    Not live yet
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                  You are new to NetSuite
                </h3>
                <p className="mt-2 text-sm text-muted">
                  From discovery to go-live, we build the right
                  foundations so your system grows with you, not against
                  you.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {startingFresh.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 9.5L7.5 13L14 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-brand"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/implementation"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                >
                  Explore implementation
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path
                      d="M2 7H12M12 7L7 2M12 7L7 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card card-hover h-full">
                <div className="flex items-center justify-between">
                  <div className="eyebrow">Already live</div>
                  <span className="text-xs font-medium text-muted">
                    On NetSuite today
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                  You want more from your system
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Whether your implementation has drifted, or you just
                  want to push further, we audit, fix and optimise what
                  you already have.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {alreadyLive.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 9.5L7.5 13L14 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-brand"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/support"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                >
                  Explore support
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path
                      d="M2 7H12M12 7L7 2M12 7L7 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY ===================== */}
      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="eyebrow">Case study</div>
              <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
                From chaos to clarity.
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
                A UK manufacturer was running three systems that did not
                talk to each other. Orders were rekeyed by hand,
                inventory numbers were guesses and month-end took two
                weeks. We replaced all of it with one NetSuite
                implementation in twelve weeks.
              </p>
              <p className="mt-3 text-base text-muted leading-relaxed">
                The result: a single source of truth, a finance team
                that closes in days not weeks, and a warehouse that
                trusts its own numbers.
              </p>
              <Link
                href="/case-studies/from-chaos-to-clarity"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
              >
                Read the full case study
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M2 7H12M12 7L7 2M12 7L7 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {caseStudyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card text-center border-line"
                  >
                    <div className="font-heading text-3xl md:text-4xl font-extrabold text-gradient-brand">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-muted leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIAL ===================== */}
      <section className="section bg-ink text-paper">
        <div className="container-site max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center gap-1 text-brand-soft">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
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

      {/* ===================== RESOURCES ===================== */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="eyebrow">Resources</div>
                <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight">
                  Guides worth reading.
                </h2>
              </div>
              <Link
                href="/resources"
                className="text-sm font-semibold text-brand hover:underline underline-offset-4"
              >
                View all resources
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/resources/is-netsuite-right-for-your-business",
                tag: "Buyers guide",
                title: "Is NetSuite right for your business?",
                excerpt:
                  "A practical framework for deciding whether NetSuite is the right ERP for your scale, sector and ambitions.",
              },
              {
                href: "/resources/future-of-work-generative-ai",
                tag: "Trends",
                title: "The future of work and generative AI",
                excerpt:
                  "How generative AI is changing ERP, finance and operations, and what it means for your NetSuite roadmap.",
              },
              {
                href: "/resources/4-skills-cfos-need-now",
                tag: "Leadership",
                title: "4 skills CFOs need now",
                excerpt:
                  "The finance leadership playbook for an era of automation, real-time data and AI-assisted decision making.",
              },
            ].map((r, i) => (
              <Reveal key={r.href} delay={i * 100} as="article">
                <Link href={r.href} className="card card-hover block h-full group">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {r.tag}
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {r.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Read guide
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path
                        d="M2 7H12M12 7L7 2M12 7L7 12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="section bg-paper-soft">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <div className="eyebrow justify-center">Ready when you are</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Ready to transform your business with NetSuite?
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Talk to a senior NetSuite consultant today. No call
              centres, no sales scripts, just straight answers from
              people who run their own business on NetSuite.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn btn-outline"
                data-cta="phone"
              >
                Book a call: {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SEO INDEX LINK ===================== */}
      <section className="border-t border-line py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link href="/seo-index" className="text-sm text-muted hover:text-brand transition-colors">
            Browse all NetSuite resources (500+ pages) &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
