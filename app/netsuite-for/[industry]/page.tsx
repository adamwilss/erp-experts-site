import { Metadata } from "next";
import { INDUSTRIES } from "@/data/seo";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `NetSuite for ${industry.name} | ERP Experts`,
    description: industry.description,
  };
}

export default async function NetSuiteForIndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return <p className="p-10">Industry not found.</p>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; Back to home</Link>
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite for {industry.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{industry.description}</p>
      <div className="prose max-w-none text-gray-700">
        <p>At ERP Experts, we specialise in implementing NetSuite for {industry.name.toLowerCase()} businesses across the UK. With over two decades of experience, we understand the unique challenges your industry faces and how NetSuite can address them.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Why NetSuite for {industry.name}?</h2>
        <p>NetSuite is the world&apos;s leading cloud ERP platform, trusted by thousands of businesses across every sector. For {industry.name.toLowerCase()} companies, NetSuite provides a unified platform that integrates financials, operations, CRM, and more into a single source of truth.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Our {industry.name} Expertise</h2>
        <p>We have delivered successful NetSuite implementations for {industry.name.toLowerCase()} businesses ranging from growing SMEs to established enterprises. Our team understands your workflows, compliance requirements, and growth objectives.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Get Started</h2>
        <p>Ready to explore what NetSuite can do for your {industry.name.toLowerCase()} business? Contact our team today for a free consultation.</p>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
