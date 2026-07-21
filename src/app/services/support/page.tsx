import Link from "next/link";
export default function SupportPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite Support</h1>
      <p className="text-lg text-gray-600 mb-8">Ongoing NetSuite support and maintenance from experienced consultants.</p>
      <div className="prose max-w-none text-gray-700">
        <p>Our support team provides ongoing assistance for your NetSuite environment. From troubleshooting to enhancements, we keep your system running smoothly.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Support Services</h2>
        <ul className="list-disc pl-6 space-y-2"><li>Issue resolution and bug fixes</li><li>System enhancements and customisation</li><li>Health audits and performance reviews</li><li>Training and team enablement</li></ul>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Explore support</Link>
    </article>
  );
}
