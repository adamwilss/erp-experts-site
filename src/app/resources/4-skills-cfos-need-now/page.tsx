import Link from "next/link";
export default function CFOsSkillsPage() {
  return (<article className="mx-auto max-w-4xl px-6 py-20"><Link href="/resources" className="text-sm text-pink-600 hover:underline mb-4 inline-block">&larr; All resources</Link><h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">4 Skills CFOs Need Now</h1><div className="prose max-w-none text-gray-700"><p>The role of the CFO is evolving. Here are four essential skills for modern finance leaders navigating digital transformation.</p></div><Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">Talk to us</Link></article>);
}
