import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-heading text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-paper text-sm font-bold">
                E
              </span>
              <span>
                ERP<span className="text-brand"> Experts</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-paper/70 leading-relaxed">
              We make NetSuite work, and have done so for over two decades.
              UK Oracle NetSuite Certified Partner.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-paper hover:text-brand-soft transition-colors"
              data-cta="phone"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3 2.5C3 2.22386 3.22386 2 3.5 2H5.5C5.77614 2 6 2.22386 6 2.5L6.5 5.5C6.5 5.77614 6.27614 6 6 6H5C5.5 8 7 9.5 9 10V9C9 8.72386 9.22386 8.5 9.5 8.5L12.5 9C12.7761 9 13 9.22386 13 9.5V11.5C13 11.7761 12.7761 12 12.5 12C7.25329 12 3 7.74671 3 2.5Z"
                  fill="currentColor"
                />
              </svg>
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block text-sm text-paper/70 hover:text-brand-soft transition-colors"
            >
              {SITE.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-paper/80">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-paper/80">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-paper/80">
              Offices
            </h3>
            <ul className="mt-4 space-y-3">
              {SITE.offices.map((office) => (
                <li key={office.city}>
                  <div className="text-sm font-medium text-paper">
                    {office.city}
                  </div>
                  <div className="text-xs text-paper/60">{office.role}</div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              {SITE.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-paper/70 hover:text-brand-soft transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-paper/60">
            (c) {year} {SITE.legalName}. All rights reserved.
            Oracle and NetSuite are trademarks of Oracle Corporation.
          </p>
          <p className="text-xs text-paper/50">
            Registered in England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
