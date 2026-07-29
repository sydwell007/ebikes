import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import ProductShowcase from "@/components/sections/ProductShowcase";

export const metadata: Metadata = {
  title: "Product Showcase",
  description:
    "Civitas Cargo is a reinforced long-tail electric cargo e-bike with a modular cargo box, dual removable batteries, hydraulic brakes and IoT fleet tracking.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Showcase"
        title="Engineered for Real Delivery Work"
        intro="A reinforced long-tail cargo e-bike with heavy-duty frame, modular cargo box, smart dashboard, dual removable batteries, hydraulic brakes and IoT fleet tracking."
        chips={["120 kg payload", "100-160 km range target", "Dual swappable batteries", "IoT fleet telematics"]}
        actions={
          <>
            <ButtonLink href="/partner" variant="primary">
              Request Partnership
            </ButtonLink>
            <ButtonLink href="/technology">Engineering deep-dive</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Hotspots, specs and build quality" kicker="Vehicle Detail">
            Every component is chosen for fleet durability - not just consumer riding - because the vehicle is a
            revenue-generating fleet asset from day one.
          </SectionTitle>
          <ProductShowcase />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Note on imagery:</b> product renders on this site are placeholders pending final photography and
            CAD renders of the production Civitas Cargo e-bike. Specifications reflect current engineering targets
            and may be refined before production tooling is finalised.
          </div>
        </div>
      </section>
    </>
  );
}
