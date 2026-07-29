export type StatCard = {
  value: number;
  suffix: string;
  title: string;
  text: string;
};

export const problemStats: StatCard[] = [
  {
    value: 70,
    suffix: "%",
    title: "Lower operating cost potential",
    text: "Electric delivery fleets reduce fuel dependency and daily mobility costs versus fuel-powered alternatives.",
  },
  {
    value: 160,
    suffix: " km",
    title: "Range target per charge",
    text: "Designed around real delivery routes, township roads and daily fleet operations across South Africa.",
  },
  {
    value: 120,
    suffix: " kg",
    title: "Cargo capacity",
    text: "Built for food, groceries, parcels, pharmacy items and utility delivery missions in one platform.",
  },
];

export const problemPoints: string[] = [
  "High delivery costs and fuel dependency for informal and formal traders alike",
  "Slow, unreliable last-mile logistics in townships and peri-urban areas",
  "Limited delivery coverage for local shops competing with national e-commerce",
  "Disconnected informal businesses with no digital fulfilment layer",
];
