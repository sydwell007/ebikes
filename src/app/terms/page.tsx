import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { contactEmails } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the Civitas Cargo E-Bikes website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms that apply when you use this website and submit information through it."
      updated="29 July 2026"
    >
      <h2>1. Acceptance of terms</h2>
      <p>By using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.</p>

      <h2>2. Informational and pre-launch content</h2>
      <p>
        Civitas Cargo is currently in pilot and partnership formation. Vehicle specifications, imagery, fleet
        dashboard figures, and rollout timelines described on this site are illustrative and subject to change as
        engineering and commercial arrangements are finalised.
      </p>

      <h2>3. No offer or guarantee</h2>
      <p>
        Content on this site does not constitute a binding offer to sell vehicles, lease fleets, or provide
        services. Fleet leasing, pilot, and partnership arrangements are subject to a separate written agreement.
      </p>

      <h2>4. Investment disclaimer</h2>
      <p>
        Nothing on this site constitutes an offer or solicitation to buy or sell securities, and nothing should be
        construed as investment, legal, or financial advice. Prospective investors should conduct their own due
        diligence and consult independent advisers.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to misuse this site, including by attempting to gain unauthorised access to our systems, submitting fraudulent form data, or interfering with the normal operation of the site.</p>

      <h2>6. Intellectual property</h2>
      <p>
        All content on this site, including text, graphics, and the Civitas Cargo and Civitas Holdings names and
        marks, is owned by or licensed to Civitas Holdings and may not be reproduced without permission.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        This site is provided &quot;as is&quot; without warranties of any kind. Civitas Holdings is not liable for
        any indirect or consequential loss arising from your use of this site.
      </p>

      <h2>8. Changes to these terms</h2>
      <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of the Republic of South Africa.</p>

      <h2>10. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${contactEmails[0].email}`}>{contactEmails[0].email}</a>.
      </p>
    </LegalPage>
  );
}
