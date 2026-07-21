import type { MetadataRoute } from "next";
import { INDUSTRIES, LOCATIONS, SERVICES_PAGES } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://erpexperts.co.uk";
  const staticPages = [
    "", "/services/implementation", "/services/support", "/services/netsuite-certainty-projects",
    "/what-is-netsuite", "/about", "/case-studies", "/case-studies/from-chaos-to-clarity",
    "/resources", "/resources/is-netsuite-right-for-your-business", "/resources/future-of-work-generative-ai",
    "/resources/4-skills-cfos-need-now", "/partners", "/faq", "/contact", "/privacy", "/cookies", "/terms",
  ];
  const urls = staticPages.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 }));
  INDUSTRIES.forEach((i) => urls.push({ url: `${base}/netsuite-for/${i.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }));
  LOCATIONS.forEach((l) => urls.push({ url: `${base}/netsuite-implementation/${l.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }));
  SERVICES_PAGES.forEach((s) => urls.push({ url: `${base}/netsuite-services/${s.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }));
  return urls;
}
