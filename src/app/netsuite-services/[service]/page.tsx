import { Metadata } from "next";
import { SERVICES_PAGES } from "../../../data/seo";
import Link from "next/link";

export function generateStaticParams() {
  return SERVICES_PAGES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const svc = SERVICES_PAGES.find((s) => s.slug === slug);
  if (!svc) return { title: "Not Found" };
  return {
    title: `NetSuite ${svc.name} | ERP Experts`,
    description: svc.description,
  };
}

export default async function NetSuiteServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const svc = SERVICES_PAGES.find((s) => s.slug === slug);
  if (!svc) return <p className="p-10">Service not found.</p>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; Back to home</Link>
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite {svc.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{svc.description}</p>
      <div className="prose max-w-none text-gray-700">
        <p>ERP Experts provides specialist NetSuite {svc.name.toLowerCase()} for businesses across the UK. With over two decades of hands-on NetSuite experience, our consultants deliver practical, results-driven solutions.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
        <p>Our {svc.name.toLowerCase()} services are designed to help your business get the most from NetSuite. We work closely with your team to understand your requirements and deliver a solution that works for your specific context.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Get Started</h2>
        <p>Contact our team today to discuss your NetSuite {svc.name.toLowerCase()} requirements.</p>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
