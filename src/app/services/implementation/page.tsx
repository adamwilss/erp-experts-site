import Link from "next/link";
export default function ImplementationPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">NetSuite Implementation</h1>
      <p className="text-lg text-gray-600 mb-8">End-to-end NetSuite implementation tailored to your business.</p>
      <div className="prose max-w-none text-gray-700">
        <p>We deliver full NetSuite implementations from scoping through go-live. Our proven methodology ensures your system is configured correctly, your team is trained, and your data is migrated safely.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Our Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Discovery and scoping</li><li>Solution design and configuration</li><li>Data migration and testing</li><li>Training and go-live</li><li>Post-launch support</li>
        </ul>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Start a conversation</Link>
    </article>
  );
}
