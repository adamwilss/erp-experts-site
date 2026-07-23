import type { MetadataRoute } from "next";
import { INDUSTRIES, LOCATIONS, SERVICES_PAGES, COMPARISONS, MODULES, ROLES } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://erpexperts.co.uk";
  const now = new Date();

  const staticPages = [
    "", "/services/implementation", "/services/support", "/services/netsuite-certainty-projects",
    "/what-is-netsuite", "/about", "/case-studies", "/case-studies/from-chaos-to-clarity",
    "/resources", "/resources/is-netsuite-right-for-your-business", "/resources/future-of-work-generative-ai",
    "/resources/4-skills-cfos-need-now", "/partners", "/faq", "/contact", "/privacy", "/cookies", "/terms",
    "/seo-index",
  ];

  const urls: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  INDUSTRIES.forEach((i) => urls.push({ url: `${base}/netsuite-for/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 }));
  LOCATIONS.forEach((l) => {
    urls.push({ url: `${base}/netsuite-implementation/${l.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 });
  });
  SERVICES_PAGES.forEach((s) => urls.push({ url: `${base}/netsuite-services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }));
  COMPARISONS.forEach((c) => urls.push({ url: `${base}/netsuite-vs/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }));
  MODULES.forEach((m) => urls.push({ url: `${base}/netsuite-modules/${m.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }));
  ROLES.forEach((r) => urls.push({ url: `${base}/netsuite-for-role/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }));

  // Industry × Location combo pages
  for (const industry of INDUSTRIES) {
    for (const location of LOCATIONS) {
      urls.push({
        url: `${base}/netsuite-for-in/netsuite-for-${industry.slug}-in/${location.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.4,
      });
    }
  }

  return urls;
}