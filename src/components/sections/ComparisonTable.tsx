import { comparisonRows } from "@/data/differenceData";

export default function ComparisonTable() {
  return (
    <div className="comparisonWrap">
      <table className="comparisonTable">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Civitas Cargo</th>
            <th>Traditional Bikes</th>
            <th>Fuel Scooters</th>
            <th>Generic Delivery E-Bikes</th>
            <th>Other Fleet Rivals</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.capability}>
              <td>{row.capability}</td>
              <td className="good">{row.civitas}</td>
              <td>{row.traditional}</td>
              <td>{row.fuelScooter}</td>
              <td>{row.genericEbike}</td>
              <td>{row.fleetRivals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
