import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { contactEmails } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Civitas Holdings collects, uses and protects personal information submitted through the Civitas Cargo website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Civitas Holdings collects, uses and protects the personal information you share with us."
      updated="29 July 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by Civitas Holdings for the Civitas Cargo E-Bikes platform. We are the
        responsible party for personal information collected through this site, in line with the Protection of
        Personal Information Act (POPIA).
      </p>

      <h2>2. What we collect</h2>
      <p>When you submit a partnership request, investor pack request, or contact form, we collect:</p>
      <ul>
        <li>Full name, email address, and phone number (where provided)</li>
        <li>Organisation or company name (where provided)</li>
        <li>The content of your message and your selected interest area</li>
        <li>Consent and marketing-preference status</li>
        <li>Technical attribution data: source page, referrer, and campaign parameters</li>
        <li>A privacy-preserving hash of your IP address, used only for abuse and rate-limit protection</li>
      </ul>

      <h2>3. How we use your information</h2>
      <p>We use the information you provide to:</p>
      <ul>
        <li>Respond to partnership, investor, and general enquiries</li>
        <li>Evaluate and progress fleet leasing, pilot, and partnership requests</li>
        <li>Send updates you have explicitly opted in to receive</li>
        <li>Maintain a compliance record of consent and submission attribution</li>
        <li>Protect the platform against abuse, spam, and automated submissions</li>
      </ul>

      <h2>4. Legal basis and consent</h2>
      <p>
        We process your information on the basis of your explicit consent, given when you submit a form on this
        site. You may withdraw consent at any time by contacting us using the details below.
      </p>

      <h2>5. Data sharing</h2>
      <p>
        We do not sell your personal information. It is stored on our Afrihost-hosted MySQL database and is
        accessible only to authorised Civitas Holdings personnel who need it to respond to your enquiry.
      </p>

      <h2>6. Data retention</h2>
      <p>
        Lead and enquiry records are retained for as long as reasonably necessary to respond to your request and
        maintain compliance records, after which they are deleted or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>Under POPIA, you have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at {contactEmails[0].email}.</p>

      <h2>8. Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${contactEmails[0].email}`}>{contactEmails[0].email}</a>.
      </p>
    </LegalPage>
  );
}
