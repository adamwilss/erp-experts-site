import type { ReactNode } from "react";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

type Props = {
  eyebrow: string;
  title: string;
  excerpt: string;
  readTime: string;
  children: ReactNode;
};

/**
 * Shared layout for resource guides. Renders a hero, a long-form prose
 * column, and the standard CTA.
 */
export default function GuideLayout({
  eyebrow,
  title,
  excerpt,
  readTime,
  children,
}: Props) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: title },
        ]}
      >
        <span className="text-sm text-paper/60">{readTime}</span>
      </PageHero>

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <article className="prose-content">
              {children}
            </article>
          </Reveal>

          <div className="mt-12 pt-8 border-t border-line">
            <Link
              href="/resources"
              className="text-sm font-semibold text-brand hover:underline underline-offset-4"
            >
              &larr; Back to all resources
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
