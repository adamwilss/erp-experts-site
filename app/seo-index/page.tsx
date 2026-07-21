import { INDUSTRIES, LOCATIONS, SERVICES_PAGES } from "@/data/seo";
import Link from "next/link";

export default function SEOIndexPage() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-2">NetSuite Resources Index</h1>
      <p className="text-gray-600 mb-12">Browse all of our NetSuite guides, industry pages, and location pages.</p>

      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">NetSuite by Industry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.slug} href={`/netsuite-for/${ind.slug}`} className="text-sm text-pink-600 hover:underline">
              NetSuite for {ind.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">NetSuite by Location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {LOCATIONS.map((loc) => (
            <Link key={loc.slug} href={`/netsuite-implementation/${loc.slug}`} className="text-sm text-pink-600 hover:underline">
              NetSuite in {loc.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">NetSuite Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {SERVICES_PAGES.map((svc) => (
            <Link key={svc.slug} href={`/netsuite-services/${svc.slug}`} className="text-sm text-pink-600 hover:underline">
              {svc.name}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
