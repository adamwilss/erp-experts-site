import Link from "next/link";
export default function CaseStudiesPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
      <p className="text-lg text-gray-600 mb-8">Real results for real businesses.</p>
      <Link href="/case-studies/from-chaos-to-clarity" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
        <h2 className="font-heading text-xl font-bold text-gray-900">From chaos to clarity</h2>
        <p className="text-gray-600 mt-1">Manufacturing</p>
        <div className="mt-4 flex gap-6 text-sm text-gray-700">
          <span><strong className="text-green-600">40%</strong> faster order processing</span>
          <span><strong className="text-green-600">3x</strong> inventory accuracy</span>
          <span><strong className="text-green-600">12wk</strong> implementation</span>
        </div>
      </Link>
    </article>
  );
}
