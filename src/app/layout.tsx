import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERP Experts | Trusted NetSuite Implementation Partner",
  description:
    "We make NetSuite work for UK businesses. NetSuite implementation, support, and consultancy since 2007.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
      {children}
    </Link>
  );
}

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-1">
        {label}
        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black first:rounded-t-lg last:rounded-b-lg">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const servicesItems = [
    { href: "/services/implementation", label: "Implementation" },
    { href: "/services/support", label: "Support" },
    { href: "/services/netsuite-certainty-projects", label: "NetSuite Certainty Projects" },
    { href: "/what-is-netsuite", label: "What is NetSuite?" },
  ];
  const companyItems = [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en-GB">
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased`}>
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-heading">E</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">ERP Experts</span>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <NavDropdown label="Services" items={servicesItems} />
              <NavDropdown label="Company" items={companyItems} />
              <NavLink href="/contact">01785 336 253</NavLink>
              <Link href="/contact" className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                Start a conversation
              </Link>
            </div>
            <button className="lg:hidden flex items-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-950 text-gray-400">
          <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm font-heading">E</span>
                </div>
                <span className="font-heading text-lg font-bold text-white">ERP Experts</span>
              </div>
              <p className="text-sm leading-relaxed">We make NetSuite work for UK businesses since 2007.</p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {servicesItems.map((s) => <li key={s.href}><Link href={s.href} className="hover:text-white transition-colors">{s.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {companyItems.map((c) => <li key={c.href}><Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>01785 336 253</li>
                <li>hello@erpexperts.co.uk</li>
                <li className="pt-2 text-xs">Stafford (HQ) | Manchester | Dubai</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between text-xs">
            <p>&copy; {new Date().getFullYear()} ERP Experts. All rights reserved.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
