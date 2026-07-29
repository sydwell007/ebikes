import { ButtonLink } from "@/components/ui/Button";
import { primaryCtas } from "@/data/siteConfig";

const pillHighlights = [
  { label: "Range Target", value: "100-160 km" },
  { label: "Battery System", value: "Dual Swappable" },
  { label: "Fleet Tracking", value: "IoT Live GPS" },
  { label: "Cargo Payload", value: "120 kg" },
  { label: "Delivery Network", value: "StreetShops" },
  { label: "Built For", value: "African Terrain" },
];

export default function HomeHero() {
  return (
    <header className="homeHero">
      <div className="container">
        <div className="heroGrid">
          <div>
            <span className="eyebrow">Civitas Holdings · Mobility · Energy · Software</span>
            <h1>Smart Electric Delivery Mobility for Africa</h1>
            <p className="heroLead">
              Built for African roads, local commerce, smart logistics, and the future of last-mile delivery -
              Civitas Cargo links vehicles, riders, shops, customers and fleet software into one platform.
            </p>

            <div className="heroActions">
              <ButtonLink href={primaryCtas.explore.href} variant="primary">
                Explore the E-Bike
              </ButtonLink>
              <ButtonLink href={primaryCtas.fleet.href}>Fleet Solutions</ButtonLink>
              <ButtonLink href={primaryCtas.partner.href}>Request Partnership</ButtonLink>
              <ButtonLink href={primaryCtas.pilot.href} variant="ghost">
                Join Pilot Program
              </ButtonLink>
            </div>

            <div className="pillGrid" aria-label="Vehicle and platform highlights">
              {pillHighlights.map((item) => (
                <div className="pillCard" key={item.label}>
                  <strong>{item.value}</strong>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="productStage" aria-label="Civitas Cargo e-bike showcase">
            <div className="bikeVisual">
              <span className="placeholderNote">Civitas Cargo E-Bike hero render</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
