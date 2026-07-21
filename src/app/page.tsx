import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-[96px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/80 mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Oracle NetSuite Certified Partner
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              We Make NetSuite{" "}
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                Work.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              And have done so for over two decades. From implementation through support, we deliver NetSuite systems that businesses actually want to use.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                Start a conversation
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/what-is-netsuite" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
                What is NetSuite?
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Trusted by</span>
            {["Totalkare", "Rebellion", "Stiltz", "Kynetec", "Carallon"].map((name) => (
              <span key={name} className="text-sm font-medium text-gray-600">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 leading-relaxed">
              We use NetSuite to run our own business. Every system we build has to meet one standard: would we be willing to use this ourselves?
            </p>
          </blockquote>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              "Partners, not suppliers",
              "Fixed pricing",
              "Your team independent, not dependent",
            ].map((value) => (
              <div key={value} className="flex items-center gap-2 text-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full shrink-0" />
                <span className="text-sm font-medium text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "20+", label: "Years specialising in NetSuite" },
            { value: "200+", label: "Projects delivered" },
            { value: "5,000+", label: "Support tickets resolved" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl sm:text-6xl font-heading font-extrabold text-gray-900">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">Your NetSuite Journey</h2>
            <p className="mt-3 text-lg text-gray-500">Where are you on your journey?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Starting Fresh</h3>
              <p className="text-blue-100 mb-6">Let's get you started with a clean, custom implementation.</p>
              <ul className="space-y-2 mb-6">
                {["Customisation", "Integration", "And more..."].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="text-blue-300">&#9654;</span> {item}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-white text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">Start a conversation</Link>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-purple-800 text-white rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Already Live</h3>
              <p className="text-purple-200 mb-6">Let's make it better with audits, training, and optimisation.</p>
              <ul className="space-y-2 mb-6">
                {["Health Audits", "Training", "And more..."].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="text-purple-300">&#9654;</span> {item}</li>
                ))}
              </ul>
              <Link href="/services/support" className="inline-block bg-white text-purple-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors">Explore support</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Featured Case Study</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">From chaos to clarity</h2>
              <p className="text-gray-500 mt-2">Manufacturing</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["40%", "Faster order processing"],
                  ["3x", "Inventory accuracy"],
                  ["60%", "Less manual data entry"],
                  ["12wk", "Implementation time"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-heading font-bold text-green-600">{value}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-studies/from-chaos-to-clarity" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline">Read the full story &rarr;</Link>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-lg text-gray-700 leading-relaxed">We couldn't keep up with orders before NetSuite. ERP Experts turned our operations around completely.</blockquote>
              <p className="mt-4 font-semibold text-gray-900">Steve Leach, CTO, Totalkare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 leading-relaxed max-w-2xl mx-auto">
            Would I recommend ERP Experts? <span className="text-green-600">In a heartbeat.</span>
          </blockquote>
          <p className="mt-4 font-semibold text-gray-700">David Hall, CEO, Totalkare</p>
          <Link href="/case-studies" className="mt-6 inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">View all case studies</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 py-20 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Ready to transform your business with NetSuite?</h2>
          <p className="mt-4 text-lg text-white/80">Speak to our team today about your requirements.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">Start a conversation</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">Book a call</Link>
          </div>
          <p className="mt-4 text-sm text-white/60">Or call 01785 336 253</p>
        </div>
      </section>
    </>
  );
}