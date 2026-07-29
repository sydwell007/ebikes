import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import StreetShopsFlow from "@/components/sections/StreetShopsFlow";

export const metadata: Metadata = {
  title: "StreetShops Integration",
  description:
    "Civitas Cargo becomes the logistics layer for StreetShops, connecting township shops, riders and customers through one digital delivery workflow.",
};

export default function StreetShopsPage() {
  return (
    <>
      <PageHero
        eyebrow="StreetShops Integration"
        title="From Local Shop to Customer Doorstep"
        intro="Civitas Cargo can become the logistics layer for StreetShops, connecting township shops, riders and customers through one digital workflow."
        actions={
          <>
            <ButtonLink href="/partner" variant="primary">
              Start a StreetShops Pilot
            </ButtonLink>
            <ButtonLink href="https://streetshops.co.za">Visit StreetShops</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="The delivery flow" kicker="Order to Doorstep">
            One digital workflow moves an order from a StreetShops listing to a completed, tracked delivery.
          </SectionTitle>
          <StreetShopsFlow />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Built for township commerce:</b> local shops gain delivery reach without building their own fleet,
            and riders earn income through the Civitas Cargo delivery network.
          </div>
        </div>
      </section>
    </>
  );
}
