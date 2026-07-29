import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/marketing/HomeHero";
import Reveal from "@/components/motion/Reveal";
import { IconBadge, SectionTitle } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { ButtonLink } from "@/components/ui/Button";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FleetDashboardPreview from "@/components/sections/FleetDashboardPreview";
import StreetShopsFlow from "@/components/sections/StreetShopsFlow";
import { problemStats } from "@/data/problemData";
import { useCases } from "@/data/useCasesData";
import { energyCards } from "@/data/energyData";
import { revenueCards } from "@/data/investorsData";
import { technologyCards } from "@/data/technologyData";

export const metadata: Metadata = {
  title: "Smart Electric Delivery Mobility for Africa",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="marquee" aria-label="Built for African commerce and logistics">
        <div className="marqueeTrack">
          {Array.from({ length: 2 }).flatMap((_, loop) =>
            ["StreetShops", "Township Commerce", "Fleet Operators", "Municipalities", "Campuses", "Food Delivery", "Pharmacy Logistics"].map(
              (item) => <span key={`${loop}-${item}`}>{item} <i aria-hidden="true" /></span>
            )
          )}
        </div>
      </div>

      <section id="problem">
        <div className="container">
          <SectionTitle title="Africa Needs Smarter Last-Mile Mobility" kicker="The Market Problem">
            Local commerce is growing, but many communities still face high delivery costs, fuel dependency, slow
            logistics, limited township delivery coverage and disconnected informal businesses.
          </SectionTitle>

          <div className="grid3">
            {problemStats.map((stat, index) => (
              <Reveal key={stat.title} delay={index * 80}>
                <div className="card">
                  <StatTile value={stat.value} suffix={stat.suffix} label={stat.title} />
                  <p className="topSpace">{stat.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="solution">
        <div className="container">
          <SectionTitle
            title="Connected Delivery Infrastructure, Not Just an E-Bike"
            kicker="The Civitas Solution"
            action={<ButtonLink href="/streetshops">See StreetShops flow</ButtonLink>}
          >
            Civitas Cargo links vehicles, riders, shops, customers, fleet software and future charging
            infrastructure into one scalable African mobility ecosystem.
          </SectionTitle>

          <EcosystemGrid />
        </div>
      </section>

      <section id="product">
        <div className="container">
          <SectionTitle
            title="Engineered for Real Delivery Work"
            kicker="Product Showcase"
            action={<ButtonLink href="/product" variant="primary">Explore the E-Bike</ButtonLink>}
          >
            A reinforced long-tail cargo e-bike with heavy-duty frame, modular cargo box, smart dashboard, dual
            removable batteries, hydraulic brakes and IoT fleet tracking.
          </SectionTitle>

          <div className="grid3">
            {technologyCards.slice(0, 3).map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <article className="card">
                  <IconBadge icon={card.icon} />
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="different">
        <div className="container">
          <SectionTitle
            title="More Than a Delivery Bicycle"
            kicker="Why Civitas Is Different"
            action={<ButtonLink href="/technology">Full technology brief</ButtonLink>}
          >
            Civitas Cargo is not just an e-bike. It is a connected African mobility infrastructure platform.
          </SectionTitle>

          <ComparisonTable />
        </div>
      </section>

      <section id="usecases">
        <div className="container">
          <SectionTitle
            title="One Platform, Many Delivery Missions"
            kicker="Use Cases"
            action={<ButtonLink href="/use-cases">All use cases</ButtonLink>}
          >
            The same vehicle architecture can serve commerce, logistics, security, municipal and campus mobility
            use cases.
          </SectionTitle>

          <div className="grid3">
            {useCases.slice(0, 6).map((useCase, index) => (
              <Reveal key={useCase.title} delay={index * 60}>
                <article className="card">
                  <IconBadge icon={useCase.icon} />
                  <h4>{useCase.title}</h4>
                  <p>{useCase.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet">
        <div className="container">
          <SectionTitle
            title="Live Operations, Battery Health and Delivery Analytics"
            kicker="Fleet Management Platform"
            action={<ButtonLink href="/fleet">Fleet platform details</ButtonLink>}
          >
            Fleet operators can monitor vehicles, deliveries, riders, battery status, maintenance alerts and uptime
            from one connected dashboard.
          </SectionTitle>

          <Reveal>
            <FleetDashboardPreview />
          </Reveal>
        </div>
      </section>

      <section id="streetshops">
        <div className="container">
          <SectionTitle
            title="From Local Shop to Customer Doorstep"
            kicker="StreetShops Integration"
            action={<ButtonLink href="/streetshops">How it works</ButtonLink>}
          >
            Civitas Cargo becomes the logistics layer for StreetShops, connecting township shops, riders and
            customers through one digital workflow.
          </SectionTitle>

          <Reveal>
            <StreetShopsFlow />
          </Reveal>
        </div>
      </section>

      <section id="energy">
        <div className="container">
          <div className="energyPanel">
            <span className="eyebrow">Civitas Energy</span>
            <h2>Battery Swapping, Charging Hubs and Solar-Ready Fleet Infrastructure</h2>
            <p className="heroLead">
              The long-term opportunity is not only selling e-bikes. It is building clean mobility infrastructure
              through battery swap stations, smart charging hubs, solar-powered fleet depots and energy analytics.
            </p>

            <div className="grid3 topSpace">
              {energyCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 70}>
                  <div className="card">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="heroActions">
              <ButtonLink href="/energy" variant="primary">
                Charging & energy details
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="investors">
        <div className="container">
          <div className="innerHeroCard">
            <div className="heroOverlay" aria-hidden="true" />
            <div className="innerHeroBlob" aria-hidden="true" />
            <div className="heroInner">
              <span className="badge">For investors</span>
              <h2 className="innerH1">A Scalable Mobility, Logistics, Software and Energy Platform</h2>
              <p className="heroSub">
                Revenue can come from vehicle sales, fleet leasing, delivery commissions, software subscriptions,
                maintenance contracts, advertising panels and charging infrastructure.
              </p>
              <div className="grid3 topSpace">
                {revenueCards.map((card) => (
                  <div className="card" key={card.title}>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
              <div className="heroActions">
                <ButtonLink href="/investors" variant="primary">
                  Investor Relations
                </ButtonLink>
                <ButtonLink href="/partner">Request Partnership</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot">
        <div className="container">
          <div className="ctaBand">
            <span className="eyebrow">Pilot Program</span>
            <h2>Partner With Civitas Cargo</h2>
            <p className="heroLead">
              Join the pilot program for fleet leasing, StreetShops delivery integration, municipal partnerships,
              campus operations or investor engagement.
            </p>
            <div className="heroActions">
              <ButtonLink href="/partner" variant="primary">
                Request Partnership
              </ButtonLink>
              <ButtonLink href="/contact">Contact the team</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Ready to get involved?</b> Whether you&apos;re a fleet operator, a StreetShops merchant, a
            municipality, or an investor, our <Link href="/contact">contact page</Link> routes your message to the
            right Civitas team.
          </div>
        </div>
      </section>
    </>
  );
}
