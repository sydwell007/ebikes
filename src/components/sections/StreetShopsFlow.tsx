import { streetshopsFlow } from "@/data/streetshopsData";

export default function StreetShopsFlow() {
  return (
    <div className="flowGrid">
      {streetshopsFlow.map((step) => (
        <div className="flowStep" key={step.title}>
          <b>{step.title}</b>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}
