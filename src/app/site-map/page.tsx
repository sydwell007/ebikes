import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import { footerLinkGroups } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Site Map",
  description: "All pages on the Civitas Cargo E-Bikes website.",
  robots: { index: true, follow: true },
};

export default function SiteMapPage() {
  return (
    <>
      <PageHero eyebrow="Site Map" title="Every Page on This Site" intro="A complete list of Civitas Cargo pages, grouped by topic." />

      <section>
        <div className="container">
          <div className="siteMapGrid">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
