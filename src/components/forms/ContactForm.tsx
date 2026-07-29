"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const inquiryTypes = ["General", "Partnership", "Media / Press", "Support", "Other"] as const;

export default function ContactForm() {
  const { state, message, submit } = useLeadForm("/api/contact");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      inquiryType: String(formData.get("inquiryType") ?? ""),
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
    <form className="form" onSubmit={handleSubmit} aria-label="Contact Civitas Cargo form" key={formKey}>
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
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+27" />
        </div>
        <div>
          <label htmlFor="inquiryType">Reason for contact</label>
          <select id="inquiryType" name="inquiryType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="How can we help?" required />
      </div>

      <FormConsent idPrefix="contact" />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="info@civitasholdings.co.za" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
