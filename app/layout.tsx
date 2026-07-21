import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ERP Experts | We Make NetSuite Work",
    template: "%s | ERP Experts",
  },
  description:
    "ERP Experts is a UK Oracle NetSuite Certified Partner. For over two decades we have implemented, supported and optimised NetSuite for businesses across the UK and beyond.",
  keywords: [
    "NetSuite implementation",
    "NetSuite support",
    "NetSuite partner UK",
    "ERP implementation",
    "Oracle NetSuite",
    "NetSuite customisation",
    "NetSuite integration",
    "ERP Experts",
  ],
  authors: [{ name: "ERP Experts" }],
  creator: "ERP Experts",
  publisher: "ERP Experts",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: "ERP Experts",
    title: "ERP Experts | We Make NetSuite Work",
    description:
      "UK Oracle NetSuite Certified Partner. For over two decades we have made NetSuite work for businesses across the UK and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Experts | We Make NetSuite Work",
    description:
      "UK Oracle NetSuite Certified Partner. We make NetSuite work, and have done so for over two decades.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
