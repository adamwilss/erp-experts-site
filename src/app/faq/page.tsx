export default function FAQPage() {
  const faqs = [
    { q: "What is NetSuite?", a: "NetSuite is a cloud-based ERP system that manages financials, operations, CRM, and e-commerce in one platform." },
    { q: "How long does implementation take?", a: "Typically 8 to 16 weeks depending on scope and complexity." },
    { q: "Do you offer support after implementation?", a: "Yes, we provide ongoing support, training, and optimisation services." },
    { q: "What are your office locations?", a: "Stafford (HQ), Manchester, and Dubai (EMEA)." },
    { q: "How do I get started?", a: "Contact us at 01785 336 253 or hello@erpexperts.co.uk for a free consultation." },
  ];
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">FAQ</h1>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}><h2 className="font-heading text-lg font-bold text-gray-900">{faq.q}</h2><p className="text-gray-600 mt-2">{faq.a}</p></div>
        ))}
      </div>
    </article>
  );
}
