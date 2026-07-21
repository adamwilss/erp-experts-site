import Link from "next/link";
export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">About ERP Experts</h1>
      <p className="text-lg text-gray-600 mb-8">We make NetSuite work for UK businesses. And have done so for over two decades.</p>
      <div className="prose max-w-none text-gray-700">
        <p>ERP Experts is an Oracle NetSuite Certified Partner based in Stafford with offices in Manchester and Dubai. We have been implementing and supporting NetSuite for over 20 years.</p>
        <p>We use NetSuite to run our own business. Every system we build has to meet one standard: would we be willing to use this ourselves?</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2"><li>Partners, not suppliers</li><li>Fixed pricing</li><li>Your team independent, not dependent</li></ul>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Our Locations</h2>
        <ul className="list-disc pl-6 space-y-2"><li>Stafford (HQ)</li><li>Manchester</li><li>Dubai (EMEA)</li></ul>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Get in touch</Link>
    </article>
  );
}
