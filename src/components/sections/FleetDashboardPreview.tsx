import { fleetDotPositions, fleetMetrics } from "@/data/fleetData";

export default function FleetDashboardPreview() {
  return (
    <>
      <div className="fleetDashboard" aria-label="Illustrative fleet dashboard preview">
        <div className="fleetMap" role="img" aria-label="Illustrative live fleet map">
          {fleetDotPositions.map((pos, index) => (
            <span className="fleetDot" key={index} style={{ top: pos.top, left: pos.left }} />
          ))}
        </div>

        <div className="dataList">
          {fleetMetrics.map((metric) => (
            <div className="dataItem" key={metric.label}>
              <span>{metric.label}</span>
              <strong style={metric.tone === "green" ? { color: "var(--green)" } : undefined}>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <p className="fleetCaption">
        Illustrative fleet dashboard - connects to live telemetry once pilot fleets are deployed.
      </p>
    </>
  );
}
