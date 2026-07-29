import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { MiniList, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import FleetDashboardPreview from "@/components/sections/FleetDashboardPreview";
import { fleetFeatures } from "@/data/fleetData";

export const metadata: Metadata = {
  title: "Fleet Management Platform",
  description:
    "Monitor Civitas Cargo vehicles, deliveries, riders, battery status, maintenance alerts and uptime from one connected fleet dashboard.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet Management Platform"
        title="Live Operations, Battery Health and Delivery Analytics"
        intro="Fleet operators can monitor vehicles, deliveries, riders, battery status, maintenance alerts and uptime from one connected dashboard."
        actions={
          <>
            <ButtonLink href="/partner" variant="primary">
              Request Fleet Leasing
            </ButtonLink>
            <ButtonLink href="/energy">Charging & battery infrastructure</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="What the platform tracks" kicker="Fleet Telemetry">
            Every Civitas Cargo vehicle reports live status back to a single operations dashboard.
          </SectionTitle>

          <FleetDashboardPreview />

          <div className="callout topSpace">
            <b>Fleet software roadmap:</b> route optimisation, automated dispatch, and predictive maintenance are
            planned extensions of the current telemetry layer.
          </div>

          <div className="topSpace">
            <MiniList items={fleetFeatures} />
          </div>
        </div>
      </section>
    </>
  );
}
