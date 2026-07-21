import Link from "next/link";
export default function PartnersPage() {
  return (<article className="mx-auto max-w-4xl px-6 py-20"><h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Partners</h1><p className="text-lg text-gray-600 mb-8">We are proud to be an Oracle NetSuite Certified Partner.</p><div className="prose max-w-none text-gray-700"><p>As a certified partner, we have demonstrated expertise in NetSuite implementation and support. Our partnership with Oracle NetSuite gives us direct access to the platform&apos;s roadmap, training, and support resources.</p></div><Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Get in touch</Link></article>);
}
