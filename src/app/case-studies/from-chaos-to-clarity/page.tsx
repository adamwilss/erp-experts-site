import Link from "next/link";
export default function ChaosToClarityPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/case-studies" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; All case studies</Link>
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">From chaos to clarity</h1>
      <p className="text-lg text-gray-600 mb-8">Manufacturing</p>
      <div className="prose max-w-none text-gray-700">
        <p>A manufacturing business struggling with manual processes and disconnected systems. We implemented NetSuite to unify their operations.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-8">
          <div><div className="text-3xl font-heading font-bold text-green-600">40%</div><div className="text-sm text-gray-600">Faster order processing</div></div>
          <div><div className="text-3xl font-heading font-bold text-green-600">3x</div><div className="text-sm text-gray-600">Inventory accuracy</div></div>
          <div><div className="text-3xl font-heading font-bold text-green-600">60%</div><div className="text-sm text-gray-600">Less manual data entry</div></div>
          <div><div className="text-3xl font-heading font-bold text-green-600">12wk</div><div className="text-sm text-gray-600">Implementation time</div></div>
        </div>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
