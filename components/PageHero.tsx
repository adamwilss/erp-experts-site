import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
};

/**
 * Standard inner-page hero: dark ink background with subtle gradient,
 * eyebrow, H1, subtitle, and optional CTA children.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 hero-radial" aria-hidden="true" />
      <div
        className="absolute inset-0 hero-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-paper-soft"
        aria-hidden="true"
      />

      <div className="relative container-site pt-28 pb-16 md:pt-36 md:pb-24">
        {breadcrumbs && (
          <div className="mb-6 text-paper/60 [&_a]:text-paper/70 [&_a:hover]:text-brand-soft [&_span]:text-paper/40">
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((crumb, i) => {
                  const last = i === breadcrumbs.length - 1;
                  return (
                    <li key={i} className="flex items-center gap-2">
                      {crumb.href && !last ? (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      ) : (
                        <span
                          className={
                            last ? "text-paper font-medium" : ""
                          }
                        >
                          {crumb.label}
                        </span>
                      )}
                      {!last && <span aria-hidden="true">/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        )}

        {eyebrow && <div className="eyebrow text-brand-soft">{eyebrow}</div>}
        <h1 className="mt-4 font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-paper/70 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
