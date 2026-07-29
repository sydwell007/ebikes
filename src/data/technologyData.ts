export type TechCard = {
  icon: string;
  title: string;
  text: string;
};

export const technologyCards: TechCard[] = [
  {
    icon: "⚙",
    title: "Structural Frame",
    text: "Reinforced steel or aluminium frame, integrated cargo subframe and heavy-load centre stand.",
  },
  {
    icon: "🔋",
    title: "Battery System",
    text: "Dual removable battery packs, BMS monitoring, thermal protection and swap-ready layout.",
  },
  {
    icon: "📡",
    title: "IoT Tracking",
    text: "Live GPS, telemetry, rider ID, route history, theft prevention and predictive maintenance.",
  },
  {
    icon: "🛡",
    title: "Safety Layer",
    text: "Hydraulic brakes, lighting, reflectors, panic alert, overload warnings and smart lock.",
  },
];
