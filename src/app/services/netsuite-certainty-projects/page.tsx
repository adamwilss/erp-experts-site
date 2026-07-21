import Link from "next/link";
export default function CertaintyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite Certainty Projects</h1>
      <p className="text-lg text-gray-600 mb-8">Fixed-price NetSuite projects with guaranteed outcomes.</p>
      <div className="prose max-w-none text-gray-700"><p>Our Certainty Projects deliver specific NetSuite outcomes at a fixed price. No surprises, no scope creep. You know exactly what you are getting and what it costs.</p></div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
