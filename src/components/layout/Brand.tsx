import Link from "next/link";
import { Zap } from "lucide-react";

export default function Brand({ tagline = "Smart Electric Logistics" }: { tagline?: string }) {
  return (
    <Link className="brand" href="/" aria-label="Civitas Cargo E-Bikes Home">
      <span className="logo" aria-hidden="true">
        <Zap size={21} strokeWidth={2.4} fill="currentColor" />
      </span>
      <span className="brandCopy">
        <b>Civitas Cargo</b>
        <small>{tagline}</small>
      </span>
    </Link>
  );
}
