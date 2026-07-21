export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-lg text-gray-600 mb-8">Speak to our team about your NetSuite requirements.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Phone</h2>
          <p className="text-gray-600">01785 336 253</p>
          <h2 className="font-heading text-lg font-bold text-gray-900 mt-6 mb-2">Email</h2>
          <p className="text-gray-600">hello@erpexperts.co.uk</p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Locations</h2>
          <ul className="text-gray-600 space-y-1"><li>Stafford (HQ)</li><li>Manchester</li><li>Dubai (EMEA)</li></ul>
        </div>
      </div>
    </article>
  );
}
