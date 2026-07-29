import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { energyCards } from "@/data/energyData";

export const metadata: Metadata = {
  title: "Charging & Energy",
  description:
    "Battery swapping, smart charging hubs and solar-ready fleet depots keep Civitas Cargo delivery fleets moving.",
};

export default function EnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Civitas Energy"
        title="Battery Swapping, Charging Hubs and Solar-Ready Fleet Infrastructure"
        intro="The long-term opportunity is not only selling e-bikes. It is building clean mobility infrastructure through battery swap stations, smart charging hubs, solar-powered fleet depots and energy analytics."
        actions={
          <>
            <ButtonLink href="/partner" variant="primary">
              Discuss a Depot Pilot
            </ButtonLink>
            <ButtonLink href="/fleet">Fleet platform</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Fleet energy infrastructure" kicker="Charging & Battery Systems">
            These are the three pillars of the Civitas Cargo energy roadmap.
          </SectionTitle>

          <div className="grid3">
            {energyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <div className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="callout topSpace">
            <b>About Civitas Energy:</b> Civitas Holdings also operates a dedicated EV charging, battery storage
            (BESS) and smart power infrastructure business serving public charging hubs, petrol-station
            integration and fleet depots more broadly. This page covers e-bike-specific battery-swap and depot
            charging; the wider Civitas Energy platform will be linked here once its site is live.
          </div>
        </div>
      </section>
    </>
  );
}
