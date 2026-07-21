// Central site configuration. Single source of truth for contact details,
// nav structure, social links, and the canonical domain.

export const SITE = {
  name: "ERP Experts",
  shortName: "ERP Experts",
  legalName: "ERP Experts Ltd",
  url: "https://www.erpexperts.co.uk",
  description:
    "ERP Experts is a UK Oracle NetSuite Certified Partner. For over two decades we have implemented, supported and optimised NetSuite for businesses across the UK and beyond.",
  email: "hello@erpexperts.co.uk",
  phone: "01785 336 253",
  phoneHref: "tel:+441785336253",
  offices: [
    {
      city: "Stafford",
      role: "Headquarters",
      address: ["ERP Experts", "Stafford", "United Kingdom"],
    },
    {
      city: "Manchester",
      role: "Northern Office",
      address: ["ERP Experts", "Manchester", "United Kingdom"],
    },
    {
      city: "Dubai",
      role: "Middle East Office",
      address: ["ERP Experts", "Dubai", "United Arab Emirates"],
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/erp-experts" },
    { label: "X", href: "https://x.com/erpexperts" },
  ],
  hours: "Monday to Friday, 9am to 5:30pm",
} as const;

export const NAV = {
  services: [
    {
      label: "NetSuite Implementation",
      href: "/services/implementation",
      blurb: "Go live right, with fixed pricing and senior delivery.",
    },
    {
      label: "NetSuite Support",
      href: "/services/support",
      blurb: "Ongoing support from a team that knows your system.",
    },
    {
      label: "NetSuite Certainty Projects",
      href: "/services/netsuite-certainty-projects",
      blurb: "Fixed-scope rescue work for systems that have gone sideways.",
    },
    {
      label: "What is NetSuite?",
      href: "/what-is-netsuite",
      blurb: "A plain-English primer on the leading cloud ERP.",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Partners", href: "/partners" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = { label: string; href: string; blurb?: string };
