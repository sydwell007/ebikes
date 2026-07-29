import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { SectionTitle } from "@/components/ui/Card";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Partner With Civitas Cargo",
  description:
    "Join the Civitas Cargo pilot program for fleet leasing, StreetShops delivery integration, municipal partnerships, campus operations or investor engagement.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilot Program"
        title="Partner With Civitas Cargo"
        intro="Join the pilot program for fleet leasing, StreetShops delivery integration, municipal partnerships, campus operations or investor engagement."
      />

      <section>
        <div className="container">
          <div className="grid2">
            <div>
              <SectionTitle title="What happens after you submit" kicker="Partnership Process">
                We review every request personally - no automated rejections, no black box.
              </SectionTitle>
              <div className="card">
                <ul className="miniList" style={{ listStyle: "none", padding: 0 }}>
                  <li>1. We review your interest area and region within 2 business days.</li>
                  <li>2. A short call to understand fleet size, delivery volumes, or investment interest.</li>
                  <li>3. We scope a bounded pilot with clear success criteria and a review date.</li>
                  <li>4. Successful pilots move into a scaled fleet leasing or partnership agreement.</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3>Partnership request</h3>
              <PartnershipForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
