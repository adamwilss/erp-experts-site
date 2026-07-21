import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "ERP Experts | We Make NetSuite Work",
  description:
    "UK Oracle NetSuite Certified Partner. For over two decades we have made NetSuite work for businesses across the UK and beyond. Implementation, support and optimisation.",
  alternates: { canonical: "https://www.erpexperts.co.uk" },
  openGraph: {
    title: "ERP Experts | We Make NetSuite Work",
    description:
      "UK Oracle NetSuite Certified Partner. We make NetSuite work, and have done so for over two decades.",
    url: "https://www.erpexperts.co.uk",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <HomeClient />
    </SiteShell>
  );
}
