import type { ReactNode } from "react";
import PageHero from "@/components/marketing/PageHero";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section>
        <div className="container">
          <p className="legalUpdated">Last updated: {updated}</p>
          <div className="legalBody">{children}</div>
        </div>
      </section>
    </>
  );
}
