import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

type Props = {
  title: string;
  eyebrow?: string;
  updated?: string;
  children: ReactNode;
};

/**
 * Layout for legal / policy pages.
 */
export default function LegalLayout({
  title,
  eyebrow = "Legal",
  updated,
  children,
}: Props) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      >
        {updated && (
          <p className="text-sm text-paper/60">Last updated: {updated}</p>
        )}
      </PageHero>

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <div className="prose-content">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-line text-sm text-muted">
            <p>
              {SITE.legalName}
              <br />
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand">
                {SITE.email}
              </a>
              <br />
              Phone:{" "}
              <a href={SITE.phoneHref} className="text-brand" data-cta="phone">
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
