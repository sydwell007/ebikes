import Reveal from "@/components/motion/Reveal";
import { ecosystemSteps } from "@/data/solutionData";

export default function EcosystemGrid() {
  return (
    <div className="ecosystemGrid">
      {ecosystemSteps.map((step, index) => (
        <Reveal key={step.num} delay={index * 60}>
          <div className="ecoStep">
            <span className="ecoStepNum">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
