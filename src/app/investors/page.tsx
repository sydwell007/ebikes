import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/marketing/PageHero";
import { MiniList, SectionTitle } from "@/components/ui/Card";
import PartnershipForm from "@/components/forms/PartnershipForm";
import { investmentHighlights, revenueCards } from "@/data/investorsData";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Civitas Cargo is a scalable mobility, logistics, software and energy platform. Request the investor pack to review the rollout plan and revenue model.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Opportunity"
        title="A Scalable Mobility, Logistics, Software and Energy Platform"
        intro="Revenue can come from vehicle sales, fleet leasing, delivery commissions, software subscriptions, maintenance contracts, advertising panels and charging infrastructure."
      />

      <section>
        <div className="container">
          <SectionTitle title="Revenue streams" kicker="How Civitas Cargo Makes Money">
            Three stacked revenue lines, each strengthened by the others as the fleet network grows.
          </SectionTitle>

          <div className="grid3">
            {revenueCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <div className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid2">
            <div className="panelCard card">
              <h3>Investment highlights</h3>
              <MiniList items={investmentHighlights} />
            </div>
            <div className="card">
              <h3>Request the investor pack</h3>
              <p>
                Tell us a little about your fund or firm and we&apos;ll follow up with the rollout plan, unit
                economics, and revenue model.
              </p>
              <PartnershipForm defaultInterest="Investor Interest" submitLabel="Request Investor Pack" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
