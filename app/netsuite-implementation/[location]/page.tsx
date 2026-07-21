import { Metadata } from "next";
import { LOCATIONS } from "@/data/seo";
import Link from "next/link";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location: slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: "Not Found" };
  return {
    title: `NetSuite Implementation in ${loc.name} | ERP Experts`,
    description: `NetSuite implementation, support, and consultancy in ${loc.name}, ${loc.region}. Trusted UK partner with 20+ years experience.`,
  };
}

export default async function NetSuiteLocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return <p className="p-10">Location not found.</p>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; Back to home</Link>
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite Implementation in {loc.name}</h1>
      <p className="text-lg text-gray-600 mb-8">Trusted NetSuite implementation, support, and consultancy for businesses in {loc.name}, {loc.region}.</p>
      <div className="prose max-w-none text-gray-700">
        <p>ERP Experts is an Oracle NetSuite Certified Partner serving businesses in {loc.name} and across the {loc.region} region. We provide end-to-end NetSuite services including implementation, support, customisation, and training.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Local NetSuite Expertise</h2>
        <p>Our team understands the unique needs of businesses in {loc.name}. Whether you are implementing NetSuite for the first time, upgrading an existing instance, or need ongoing support, we are here to help.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Services Available in {loc.name}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full NetSuite implementation and deployment</li>
          <li>Ongoing support and maintenance</li>
          <li>Customisation and integration</li>
          <li>Health audits and optimisation</li>
          <li>Team training and enablement</li>
          <li>Data migration from legacy systems</li>
        </ul>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose ERP Experts in {loc.name}?</h2>
        <p>With offices in Stafford and Manchester and over 20 years of NetSuite experience, we combine enterprise-grade expertise with personal, local service. Every project is led by senior consultants who have delivered NetSuite for businesses just like yours.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Get Started</h2>
        <p>Ready to explore NetSuite for your {loc.name} business? Contact us today for a free, no-obligation consultation.</p>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
