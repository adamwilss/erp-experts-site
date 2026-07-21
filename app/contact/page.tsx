import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a senior NetSuite consultant at ERP Experts. No call centres, no sales scripts, just straight answers. Phone 01785 336 253.",
  alternates: { canonical: "https://www.erpexperts.co.uk/contact" },
  openGraph: {
    title: "Contact ERP Experts",
    description:
      "Talk to a senior NetSuite consultant. No call centres, no sales scripts, just straight answers.",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s start a conversation.</>}
        subtitle="Tell us what you are trying to achieve, or what has gone wrong. A senior consultant will get back to you within one working day. No call centres, no sales scripts, just straight answers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            {/* Contact details */}
            <Reveal delay={100} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    By phone
                  </h3>
                  <a
                    href={SITE.phoneHref}
                    className="mt-2 block text-2xl font-heading font-bold text-brand"
                    data-cta="phone"
                  >
                    {SITE.phone}
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    {SITE.hours}
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    By email
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-2 block text-base font-medium text-brand hover:underline underline-offset-4"
                  >
                    {SITE.email}
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    We reply within one working day.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    Our offices
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {SITE.offices.map((office) => (
                      <li key={office.city} className="text-sm">
                        <div className="font-medium text-ink">
                          {office.city}
                        </div>
                        <div className="text-muted">{office.role}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
