import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About ERP Experts",
  description:
    "A UK Oracle NetSuite Certified Partner that has been making NetSuite work for over two decades. Senior consultants, fixed pricing, your team independent.",
  alternates: { canonical: "https://www.erpexperts.co.uk/about" },
  openGraph: {
    title: "About ERP Experts",
    description:
      "A UK Oracle NetSuite Certified Partner that has been making NetSuite work for over two decades.",
  },
};

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

const offices = [
  { city: "Stafford", role: "Headquarters", note: "Where the senior consultants and the support team are based." },
  { city: "Manchester", role: "Northern office", note: "Our base for clients across the North West and Yorkshire." },
  { city: "Dubai", role: "Middle East office", note: "Serving clients across the GCC and wider Middle East." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About us"
        title={<>We make NetSuite work. We have done so for over two decades.</>}
        subtitle="ERP Experts is a UK Oracle NetSuite Certified Partner. We are not the biggest NetSuite partner, and we do not want to be. We are the partner that senior people call when they want the job done right."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="eyebrow">Our story</div>
            <div className="mt-6 space-y-5 text-base md:text-lg text-muted leading-relaxed">
              <p>
                We started ERP Experts with a simple conviction: most
                ERP implementations fail not because the software is bad,
                but because the people delivering it are not close enough
                to the business they are serving.
              </p>
              <p>
                So we built a different kind of NetSuite partner. One
                where the consultant who scopes your project is the one
                who builds it. Where pricing is fixed, not open-ended.
                Where knowledge transfer is a deliverable, not an
                afterthought. And where we run our own business on
                NetSuite, so every system we build has to meet one
                standard: would we be willing to use this ourselves?
              </p>
              <p>
                Two decades on, that conviction has not changed. We have
                delivered over 200 NetSuite projects, resolved thousands
                of support tickets and built a client base that stays
                with us for years rather than months. We are proud of
                that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-paper-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className="text-center md:border-l md:border-line first:border-l-0 md:px-6"
              >
                <div className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted leading-relaxed">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-paper">
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
            <p className="mt-6 text-base text-muted leading-relaxed">
              That is the test. If a configuration, a workflow or a
              customisation would not pass muster on our own books, it
              does not ship. It is a simple filter, and it is why our
              clients stay with us for years rather than months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-paper-soft">
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

      {/* Offices */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">Where we are</div>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Three offices, one standard.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 100}>
                <div className="card card-hover h-full">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {o.role}
                  </div>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                    {o.city}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {o.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        subtitle="Whether you are starting fresh with NetSuite or rescuing a project that has gone sideways, we would like to hear from you."
      />
    </SiteShell>
  );
}
