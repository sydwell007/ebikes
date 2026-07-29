export type Hotspot = {
  title: string;
  text: string;
};

export type Spec = {
  value: string;
  label: string;
};

export const productHotspots: Hotspot[] = [
  {
    title: "Reinforced Long-Tail Frame",
    text: "Designed for load stability, durability and African road conditions, including unpaved township routes.",
  },
  {
    title: "Modular Cargo Box",
    text: "Interchangeable food, grocery, pharmacy, parcel, advertising and mobile-vending modules on one chassis.",
  },
  {
    title: "Dual Battery System",
    text: "Low-mounted removable packs for range, balance and rapid swap-station readiness.",
  },
  {
    title: "Smart Fleet Telematics",
    text: "GPS, battery monitoring, rider ID, diagnostics and remote immobilisation built in from day one.",
  },
];

export const productSpecs: Spec[] = [
  { value: "60V", label: "Electrical architecture" },
  { value: "1000W", label: "High-torque rear hub motor" },
  { value: "203mm", label: "Hydraulic disc brakes" },
  { value: "IP65", label: "Weather resistance target" },
];
