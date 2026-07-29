"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

export const partnershipInterests = [
  "Fleet Leasing",
  "StreetShops Delivery Pilot",
  "Municipality Partnership",
  "Campus Mobility",
  "Investor Interest",
  "Manufacturing / Supplier",
] as const;

export default function PartnershipForm({
  defaultInterest,
  submitLabel = "Submit Partnership Request",
}: {
  defaultInterest?: (typeof partnershipInterests)[number];
  submitLabel?: string;
}) {
  const { state, message, submit } = useLeadForm("/api/partnerships/apply");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interestType: String(formData.get("interestType") ?? ""),
      message: String(formData.get("message") ?? ""),
      consentGiven: formData.get("consent") === "on",
      marketingOptIn: formData.get("marketingOptIn") === "on",
    });

    if (ok) {
      form.reset();
      setFormKey((key) => key + 1);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Civitas Cargo partnership request form" key={formKey}>
      <div className="row2">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="organization">Company / organisation</label>
          <input id="organization" name="organization" type="text" placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+27" />
        </div>
      </div>

      <div>
        <label htmlFor="interestType">Partnership interest</label>
        <select id="interestType" name="interestType" required defaultValue={defaultInterest ?? ""}>
          <option value="" disabled>
            Select one
          </option>
          {partnershipInterests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message">Tell us what you want to explore with Civitas Cargo</label>
        <textarea id="message" name="message" placeholder="Fleet size, delivery volumes, region, timeline..." />
      </div>

      <FormConsent idPrefix="partnership" />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : submitLabel}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
