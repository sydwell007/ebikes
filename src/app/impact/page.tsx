import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { impactCards } from "@/data/impactData";

export const metadata: Metadata = {
  title: "Manufacturing & African Impact",
  description:
    "Civitas Cargo creates opportunities for local assembly, rider employment, maintenance hubs, youth skills development and township economic growth.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing & African Impact"
        title="Local Assembly, Jobs and Mobility Innovation"
        intro="Civitas Cargo creates opportunities for local assembly, rider employment, maintenance hubs, youth skills development and township economic growth."
        actions={<ButtonLink href="/partner" variant="primary">Partner With Us</ButtonLink>}
      />

      <section>
        <div className="container">
          <SectionTitle title="Where the impact lands" kicker="Community & Economy">
            Every fleet deployed creates knock-on opportunity beyond the delivery itself.
          </SectionTitle>

          <div className="grid3">
            {impactCards.map((card, index) => (
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
    </>
  );
}
