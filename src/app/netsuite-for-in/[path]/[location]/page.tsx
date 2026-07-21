import { Metadata } from "next";
import { INDUSTRIES, LOCATIONS } from "../../../../data/seo";
import Link from "next/link";

export function generateStaticParams() {
  const params: { path: string; location: string }[] = [];
  for (const industry of INDUSTRIES) {
    for (const location of LOCATIONS) {
      params.push({ path: `netsuite-for-${industry.slug}-in`, location: location.slug });
    }
  }
  return params.slice(0, 400);
}

export async function generateMetadata({ params }: { params: Promise<{ path: string; location: string }> }): Promise<Metadata> {
  const { path, location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  const pathMatch = path.match(/^netsuite-for-(.+)-in$/);
  const industrySlug = pathMatch ? pathMatch[1] : null;
  const ind = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  if (!loc || !ind) return { title: "Not Found" };
  return {
    title: `NetSuite for ${ind.name} in ${loc.name} | ERP Experts`,
    description: `NetSuite implementation, support, and consultancy for ${ind.name.toLowerCase()} businesses in ${loc.name}, ${loc.region}.`,
  };
}

export default async function NetSuiteIndustryLocationPage({ params }: { params: Promise<{ path: string; location: string }> }) {
  const { path, location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  const pathMatch = path.match(/^netsuite-for-(.+)-in$/);
  const industrySlug = pathMatch ? pathMatch[1] : null;
  const ind = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  if (!loc || !ind) return <p className="p-10">Page not found.</p>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; Back to home</Link>
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite for {ind.name} in {loc.name}</h1>
      <p className="text-lg text-gray-600 mb-8">Specialist NetSuite implementation, support, and consultancy for {ind.name.toLowerCase()} businesses in {loc.name}, {loc.region}.</p>
      <div className="prose max-w-none text-gray-700">
        <p>ERP Experts provides NetSuite services for {ind.name.toLowerCase()} companies in {loc.name} and across {loc.region}. From initial implementation through ongoing support, our team has the experience to deliver.</p>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
