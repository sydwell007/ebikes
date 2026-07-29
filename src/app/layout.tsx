import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/data/siteConfig";
import "./globals.css";

const title = `${siteName} | ${siteTagline}`;
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
  keywords: [
    "electric cargo e-bike",
    "last-mile delivery Africa",
    "StreetShops delivery",
    "fleet leasing South Africa",
    "battery swap e-bike",
    "township delivery logistics",
    "smart city mobility",
  ],
  creator: "Civitas Holdings",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050807",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  email: "info@civitasholdings.co.za",
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  knowsAbout: [
    "Electric cargo mobility",
    "Last-mile delivery logistics",
    "Fleet management software",
    "Battery-swap charging infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        <MarqueeStrip />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
