export type FleetMetric = {
  label: string;
  value: string;
  tone?: "green";
};

export const fleetMetrics: FleetMetric[] = [
  { label: "Active E-Bikes", value: "24" },
  { label: "Average Battery", value: "78%" },
  { label: "Deliveries Today", value: "186" },
  { label: "Fleet Uptime", value: "96%" },
  { label: "Maintenance Alerts", value: "3" },
  { label: "Live GPS Status", value: "Online", tone: "green" },
];

export const fleetDotPositions = [
  { top: "25%", left: "35%" },
  { top: "55%", left: "68%" },
  { top: "70%", left: "28%" },
];

export const fleetFeatures: string[] = [
  "Live vehicle location and geofencing across every active delivery",
  "Battery state-of-charge, health, and swap-cycle tracking per unit",
  "Rider identification, shift logs, and delivery performance scoring",
  "Automated maintenance alerts based on telemetry and usage patterns",
];
