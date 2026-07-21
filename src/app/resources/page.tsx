import Link from "next/link";
export default function ResourcesPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Resources</h1>
      <p className="text-lg text-gray-600 mb-8">Guides and insights from our NetSuite experts.</p>
      <div className="space-y-4">
        <Link href="/resources/is-netsuite-right-for-your-business" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"><h2 className="font-heading text-lg font-bold text-gray-900">Is NetSuite Right for Your Business?</h2><p className="text-gray-600 mt-1 text-sm">A guide to help you decide if NetSuite is the right fit.</p></Link>
        <Link href="/resources/future-of-work-generative-ai" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"><h2 className="font-heading text-lg font-bold text-gray-900">The Future of Work: Leveraging the Potential of Generative AI</h2><p className="text-gray-600 mt-1 text-sm">How generative AI is changing business operations.</p></Link>
        <Link href="/resources/4-skills-cfos-need-now" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"><h2 className="font-heading text-lg font-bold text-gray-900">4 Skills CFOs Need Now</h2><p className="text-gray-600 mt-1 text-sm">Essential skills for modern finance leaders.</p></Link>
      </div>
    </article>
  );
}
