import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { IconBadge } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { useCases } from "@/data/useCasesData";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "One Civitas Cargo platform serves StreetShops deliveries, food delivery, pharmacy logistics, parcel delivery, campus mobility, security patrol, municipal services and advertising fleets.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title="One Platform, Many Delivery Missions"
        intro="The same vehicle architecture can serve commerce, logistics, security, municipal and campus mobility use cases across South Africa."
        actions={<ButtonLink href="/partner" variant="primary">Start a pilot</ButtonLink>}
      />

      <section>
        <div className="container">
          <div className="grid3">
            {useCases.map((useCase, index) => (
              <Reveal key={useCase.title} delay={index * 50}>
                <article className="card">
                  <IconBadge icon={useCase.icon} />
                  <h3>{useCase.title}</h3>
                  <p>{useCase.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
