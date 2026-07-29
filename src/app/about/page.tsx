import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { IconBadge, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { aboutPillars, missionStatement } from "@/data/aboutData";

export const metadata: Metadata = {
  title: "About Civitas Cargo",
  description:
    "Civitas Cargo is Civitas Holdings' smart electric cargo mobility platform, built alongside Civitas Energy, Civitas Fleet Software and StreetShops.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Civitas Cargo"
        title="Part of the Civitas Holdings Mobility, Energy and Commerce Group"
        intro={missionStatement}
        actions={
          <>
            <ButtonLink href="/investors" variant="primary">
              Investor Relations
            </ButtonLink>
            <ButtonLink href="/contact">Contact the team</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Four pillars, one ecosystem" kicker="Civitas Holdings">
            Civitas Cargo is designed to work with sibling Civitas businesses, not in isolation.
          </SectionTitle>

          <div className="grid2">
            {aboutPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 70}>
                <article className="card">
                  <IconBadge icon={pillar.icon} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Where we are today:</b> Civitas Cargo is in pilot and partnership formation - working with fleet
            operators, StreetShops merchants, municipalities and campuses to prove the model before wider rollout.
          </div>
        </div>
      </section>
    </>
  );
}
