import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Brand from "@/components/layout/Brand";
import { ButtonLink } from "@/components/ui/Button";
import { contactEmails, footerLinkGroups, primaryCtas, siteDescription } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerLead">
          <div>
            <span className="eyebrow">Pilot the platform</span>
            <h2>One fleet can prove the model for a continent.</h2>
          </div>
          <div className="footerLeadActions">
            <ButtonLink href={primaryCtas.partner.href} variant="primary">
              Request Partnership
            </ButtonLink>
            <ButtonLink href="/investors">Investor Relations</ButtonLink>
          </div>
        </div>

        <div className="footGrid">
          <div className="footerBrand">
            <Brand tagline="Powered by Civitas Holdings" />
            <p className="small footerCopy">{siteDescription}</p>

            <a className="footerMail" href={`mailto:${contactEmails[0].email}`}>
              <Mail size={16} aria-hidden="true" />
              {contactEmails[0].email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="footLinkGrid">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <div className="miniLinks footColumn">
                  {group.links.map((link) => (
                    <Link href={link.href} key={`footer-${link.href}`}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footerBottom">
          <p className="small copyright">© {year} Civitas Holdings. All rights reserved.</p>
          <p className="small">Civitas Mobility · Civitas Energy · Civitas Fleet Software · StreetShops</p>
        </div>
      </div>
    </footer>
  );
}
