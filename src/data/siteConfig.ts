export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ebikes.civitasholdings.co.za";

export const siteName = "Civitas Cargo E-Bikes";

export const siteTagline = "Smart Electric Delivery Mobility for Africa";

export const siteDescription =
  "Civitas Cargo E-Bikes is a smart electric cargo mobility platform for African last-mile logistics, StreetShops deliveries, township commerce, fleet leasing and future smart-city charging infrastructure.";

export type NavLink = { href: string; label: string };
export type HeaderNavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  { href: "/product", label: "Product" },
  { href: "/technology", label: "Technology" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/fleet", label: "Fleet Platform" },
  { href: "/streetshops", label: "StreetShops" },
  { href: "/energy", label: "Charging & Energy" },
  { href: "/impact", label: "Impact" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const headerNavItems: HeaderNavItem[] = [
  {
    kind: "menu",
    label: "Vehicle",
    links: [
      { href: "/product", label: "Product showcase" },
      { href: "/technology", label: "Engineering & technology" },
      { href: "/use-cases", label: "Use cases" },
    ],
  },
  {
    kind: "menu",
    label: "Platform",
    links: [
      { href: "/fleet", label: "Fleet management platform" },
      { href: "/streetshops", label: "StreetShops integration" },
      { href: "/energy", label: "Charging & battery energy" },
    ],
  },
  { kind: "link", href: "/impact", label: "Impact" },
  { kind: "link", href: "/investors", label: "Investors" },
  {
    kind: "menu",
    label: "Company",
    links: [
      { href: "/about", label: "About Civitas Cargo" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Vehicle",
    links: [
      { href: "/product", label: "Product Showcase" },
      { href: "/technology", label: "Technology" },
      { href: "/use-cases", label: "Use Cases" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/fleet", label: "Fleet Platform" },
      { href: "/streetshops", label: "StreetShops" },
      { href: "/energy", label: "Charging & Energy" },
      { href: "/impact", label: "Impact" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/investors", label: "Investors" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/site-map", label: "Site Map" },
    ],
  },
];

export const contactEmails = [
  { label: "General", email: "info@civitasholdings.co.za" },
  { label: "Partnerships & Pilots", email: "partnerships@civitasholdings.co.za" },
  { label: "Investors", email: "invest@civitasholdings.co.za" },
] as const;

export const primaryCtas = {
  explore: { href: "/product", label: "Explore the E-Bike" },
  fleet: { href: "/fleet", label: "Fleet Solutions" },
  partner: { href: "/partner", label: "Request Partnership" },
  pilot: { href: "/partner", label: "Join Pilot Program" },
  invest: { href: "/investors", label: "Investor Relations" },
};
