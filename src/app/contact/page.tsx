import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import { contactEmails } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Civitas Cargo team for general enquiries, partnerships, media or support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Civitas Cargo Team"
        intro="For fleet leasing, StreetShops pilots, municipal or campus partnerships, use the partnership form instead - it routes faster. Everything else, send it here."
      />

      <section>
        <div className="container">
          <div className="grid2">
            <div>
              <SectionTitle title="Reach us directly" kicker="Contact Details">
                We aim to respond to every enquiry within two business days.
              </SectionTitle>
              <div className="card">
                <ul className="miniList" style={{ listStyle: "none", padding: 0 }}>
                  {contactEmails.map((entry) => (
                    <li key={entry.email}>
                      <b>{entry.label}:</b>{" "}
                      <a href={`mailto:${entry.email}`} style={{ color: "var(--green)" }}>
                        {entry.email}
                      </a>
                    </li>
                  ))}
                  <li>South Africa</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3>Send a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
