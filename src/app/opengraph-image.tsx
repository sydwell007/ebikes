import { ImageResponse } from "next/og";
import { siteTagline } from "@/data/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(34,230,120,0.35), transparent 55%), radial-gradient(circle at 90% 0%, rgba(53,183,255,0.3), transparent 55%), linear-gradient(135deg, #050807, #0b1110)",
          color: "#f5fff9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            fontWeight: 900,
            color: "#22e678",
          }}
        >
          CIVITAS CARGO E-BIKES
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 900, marginTop: 24, maxWidth: 980, lineHeight: 1.08 }}>
          {siteTagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 28, color: "rgba(245,255,249,0.78)", maxWidth: 880 }}>
          Smart electric cargo mobility for African last-mile logistics and StreetShops deliveries.
        </div>
      </div>
    ),
    { ...size }
  );
}
