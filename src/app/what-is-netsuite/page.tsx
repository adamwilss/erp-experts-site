import Link from "next/link";
export default function WhatIsNetSuitePage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">What is NetSuite?</h1>
      <p className="text-lg text-gray-600 mb-8">NetSuite is the world&apos;s leading cloud ERP platform.</p>
      <div className="prose max-w-none text-gray-700">
        <p>Oracle NetSuite is a unified cloud business management system that includes ERP, CRM, e-commerce, and inventory management in a single platform. It is designed for growing and mid-sized businesses that need enterprise-grade capabilities without the cost and complexity of traditional ERP systems.</p>
        <h2 className="font-heading text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2"><li>Financial management and reporting</li><li>CRM and sales force automation</li><li>Inventory and warehouse management</li><li>Order management and fulfilment</li><li>E-commerce (SuiteCommerce)</li><li>Business intelligence and analytics</li></ul>
      </div>
      <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Talk to us</Link>
    </article>
  );
}
