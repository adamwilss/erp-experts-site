"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  INDUSTRIES, LOCATIONS, SERVICES_PAGES,
  COMPARISONS, MODULES, ROLES,
  type SEOIndustry, type SEOLocation, type SEOService,
  type SEOComparison, type SEOModule, type SEORole,
} from "@/data/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type PageEntry = {
  href: string;
  label: string;
  category: string;
  desc?: string;
};

function buildAllPages(): PageEntry[] {
  const pages: PageEntry[] = [];

  // Main/static pages
  [
    { href: "/", label: "Home", desc: "ERP Experts home page" },
    { href: "/about", label: "About Us", desc: "About ERP Experts" },
    { href: "/case-studies", label: "Case Studies", desc: "Our NetSuite case studies" },
    { href: "/case-studies/from-chaos-to-clarity", label: "From Chaos to Clarity", desc: "How we replaced three systems with one NetSuite implementation" },
    { href: "/contact", label: "Contact", desc: "Get in touch with ERP Experts" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/faq", label: "FAQ", desc: "Frequently asked questions" },
    { href: "/partners", label: "Partners", desc: "Our partnerships and certifications" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/resources", label: "Resources", desc: "Guides and resources" },
    { href: "/resources/is-netsuite-right-for-your-business", label: "Is NetSuite Right For Your Business?", desc: "A practical framework for evaluating NetSuite" },
    { href: "/resources/future-of-work-generative-ai", label: "The Future of Work and Generative AI", desc: "How generative AI is changing ERP and finance" },
    { href: "/resources/4-skills-cfos-need-now", label: "4 Skills CFOs Need Now", desc: "The finance leadership playbook for the AI era" },
    { href: "/seo-index", label: "Pages Index", desc: "Full site page index" },
    { href: "/services/implementation", label: "NetSuite Implementation", desc: "End-to-end NetSuite implementation" },
    { href: "/services/support", label: "NetSuite Support", desc: "Ongoing support and maintenance" },
    { href: "/services/netsuite-certainty-projects", label: "NetSuite Certainty Projects", desc: "Fixed-scope rescue projects" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/what-is-netsuite", label: "What Is NetSuite?", desc: "A plain-English primer on NetSuite" },
  ].forEach((p) => pages.push({ ...p, category: "Main" }));

  INDUSTRIES.forEach((i) =>
    pages.push({ href: `/netsuite-for/${i.slug}`, label: `NetSuite for ${i.name}`, category: "Industry", desc: i.description })
  );

  LOCATIONS.forEach((l) =>
    pages.push({ href: `/netsuite-implementation/${l.slug}`, label: `NetSuite Implementation in ${l.name}`, category: "Location", desc: `NetSuite in ${l.name}, ${l.region}` })
  );

  SERVICES_PAGES.forEach((s) =>
    pages.push({ href: `/netsuite-services/${s.slug}`, label: `NetSuite ${s.name}`, category: "Services", desc: s.description })
  );

  COMPARISONS.forEach((c) =>
    pages.push({ href: `/netsuite-vs/${c.slug}`, label: `NetSuite vs ${c.name}`, category: "Comparison", desc: c.description })
  );

  MODULES.forEach((m) =>
    pages.push({ href: `/netsuite-modules/${m.slug}`, label: `NetSuite ${m.name}`, category: "Module", desc: m.description })
  );

  ROLES.forEach((r) =>
    pages.push({ href: `/netsuite-for-role/${r.slug}`, label: `NetSuite for ${r.name}s`, category: "Role", desc: r.description })
  );

  // Industry × Location combo pages
  for (const ind of INDUSTRIES) {
    for (const loc of LOCATIONS) {
      pages.push({
        href: `/netsuite-for-in/netsuite-for-${ind.slug}-in/${loc.slug}`,
        label: `NetSuite for ${ind.name} in ${loc.name}`,
        category: "Industry × Location",
        desc: `NetSuite implementation, support and consultancy for ${ind.name.toLowerCase()} businesses in ${loc.name}, ${loc.region}.`,
      });
    }
  }

  return pages;
}

const ALL_PAGES = buildAllPages();
const CATEGORIES = [...new Set(ALL_PAGES.map((p) => p.category))];

export default function SearchableIndex() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_PAGES.filter((p) => {
      if (q && !p.label.toLowerCase().includes(q) && !(p.desc?.toLowerCase().includes(q))) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      return true;
    });
  }, [query, selectedCategories]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const categoryCounts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = ALL_PAGES.filter((p) => p.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="section">
          <div className="container-site max-w-4xl">
            <div className="text-center mb-10">
              <div className="eyebrow justify-center">Sitemap</div>
              <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight">
                Search all pages.
              </h1>
              <p className="mt-3 text-muted text-base">
                {ALL_PAGES.length.toLocaleString()} pages on erpexperts.co.uk. Type to filter.
              </p>
            </div>

            {/* Search bar */}
            <div className="relative mb-8">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
              >
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keyword, industry, location, or page name..."
                className="w-full rounded-2xl border border-line bg-paper pl-12 pr-5 py-4 text-base text-ink placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                autoFocus
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedCategories([])}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  selectedCategories.length === 0
                    ? "bg-ink text-paper"
                    : "border border-line text-muted hover:border-brand hover:text-brand"
                }`}
              >
                All ({ALL_PAGES.length.toLocaleString()})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedCategories.includes(cat)
                      ? "bg-brand text-white"
                      : "border border-line text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {cat} ({categoryCounts[cat]?.toLocaleString()})
                </button>
              ))}
            </div>

            {/* Results */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg text-muted">No pages match your search.</p>
                <p className="text-sm text-muted mt-1">Try a different keyword or clear filters.</p>
              </div>
            ) : (
              <>
                <div className="text-xs text-muted mb-4">
                  Showing {filtered.length.toLocaleString()} of {ALL_PAGES.length.toLocaleString()} pages
                </div>
                <div className="grid gap-1">
                  {filtered.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group flex items-baseline justify-between gap-3 rounded-lg px-4 py-2.5 hover:bg-paper-soft transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">
                          {p.label}
                        </span>
                        {p.desc && (
                          <span className="hidden sm:inline text-xs text-muted ml-3 truncate">
                            — {p.desc}
                          </span>
                        )}
                      </div>
                      <span className="shrink-0 text-xs text-muted/60 font-mono hidden sm:inline">
                        {p.href}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="mt-16 pt-8 border-t border-line text-center">
              <p className="text-xs text-muted">
                {ALL_PAGES.length.toLocaleString()} pages indexed across {CATEGORIES.length} categories. All links point to erpexperts.co.uk.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
