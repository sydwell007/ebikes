import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about the Civitas Cargo e-bike, fleet leasing, pilots and StreetShops integration.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Quick Answers About Civitas Cargo"
        intro="Everything from vehicle specs to how the pilot program and investor process work."
      />

      <section>
        <div className="container">
          <div className="faqGrid">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
