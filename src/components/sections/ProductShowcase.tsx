import Reveal from "@/components/motion/Reveal";
import { productHotspots, productSpecs } from "@/data/productData";

export default function ProductShowcase() {
  return (
    <>
      <div className="showcase">
        <Reveal>
          <div className="renderBox" role="img" aria-label="Civitas Cargo e-bike product render placeholder">
            <span className="renderCaption">Product render / side profile / exploded view</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hotspotList">
            {productHotspots.map((hotspot) => (
              <div className="hotspot" key={hotspot.title}>
                <h3>{hotspot.title}</h3>
                <p>{hotspot.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="specGrid">
          {productSpecs.map((spec) => (
            <div className="specTile" key={spec.label}>
              <strong>{spec.value}</strong>
              <span>{spec.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
