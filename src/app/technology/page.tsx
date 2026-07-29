import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { IconBadge, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import ComparisonTable from "@/components/sections/ComparisonTable";
import { technologyCards } from "@/data/technologyData";

export const metadata: Metadata = {
  title: "Engineering & Technology",
  description:
    "Civitas Cargo is built like a fleet asset: reinforced structural frame, dual battery BMS, IoT tracking and a full safety layer.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering & Technology"
        title="Built Like a Fleet Asset"
        intro="The Civitas Cargo platform is designed around serviceability, fleet uptime, safety, modularity and future integration into Civitas Fleet Software Services and Civitas Energy."
        chips={["60V / 1000W drivetrain", "203mm hydraulic brakes", "IP65 weather target", "BMS-managed batteries"]}
        actions={<ButtonLink href="/partner" variant="primary">Request Partnership</ButtonLink>}
      />

      <section>
        <div className="container">
          <SectionTitle title="Four engineering pillars" kicker="Platform Architecture">
            Structural durability, power electronics, connected telematics, and safety are designed together, not
            bolted on afterward.
          </SectionTitle>

          <div className="techGrid">
            {technologyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <article className="card">
                  <IconBadge icon={card.icon} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="More Than a Delivery Bicycle" kicker="Why Civitas Is Different">
            Civitas Cargo is not just an e-bike. It is a connected African mobility infrastructure platform.
          </SectionTitle>
          <ComparisonTable />
        </div>
      </section>
    </>
  );
}
