"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-site flex h-16 items-center justify-between gap-4 md:h-18"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-paper font-heading text-sm font-bold">
            E
          </span>
          <span className="text-ink">
            ERP<span className="text-brand"> Experts</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/services") || isActive("/what-is-netsuite")
                  ? "text-brand"
                  : "text-ink hover:text-brand"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2 w-80">
                <div className="rounded-2xl border border-line bg-paper shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] p-2">
                  {NAV.services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-paper-warm transition-colors"
                    >
                      <div className="font-heading text-sm font-semibold text-ink">
                        {item.label}
                      </div>
                      {item.blurb && (
                        <div className="text-xs text-muted mt-0.5">
                          {item.blurb}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                ["/about", "/case-studies", "/resources", "/partners", "/faq", "/contact"].some(
                  isActive
                )
                  ? "text-brand"
                  : "text-ink hover:text-brand"
              }`}
              aria-expanded={companyOpen}
              aria-haspopup="true"
            >
              Company
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className={`transition-transform ${companyOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {companyOpen && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-2xl border border-line bg-paper shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] p-2">
                  {NAV.company.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-warm hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="text-sm font-medium text-ink hover:text-brand transition-colors"
            data-cta="phone"
          >
            {SITE.phone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Start a conversation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6H17M3 10H17M3 14H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-site py-4 space-y-4">
            <div>
              <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Services
              </div>
              {NAV.services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-warm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Company
              </div>
              {NAV.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-warm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-line space-y-2">
              <a
                href={SITE.phoneHref}
                className="block px-3 py-2 text-sm font-medium text-ink"
                data-cta="phone"
              >
                {SITE.phone}
              </a>
              <Link href="/contact" className="btn btn-primary w-full">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
