import { marqueeItems } from "@/data/marqueeData";

export default function MarqueeStrip() {
  return (
    <div className="marquee" aria-label="Built for African commerce and logistics">
      <div className="marqueeTrack">
        {Array.from({ length: 2 }).flatMap((_, loop) =>
          marqueeItems.map((item) => (
            <span key={`${loop}-${item}`}>
              {item} <i aria-hidden="true" />
            </span>
          ))
        )}
      </div>
    </div>
  );
}
