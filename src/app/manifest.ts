import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Civitas Cargo",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#050807",
    theme_color: "#050807",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
