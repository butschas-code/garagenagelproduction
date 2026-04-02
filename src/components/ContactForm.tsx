"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS_EMAIL } from "@/lib/site";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

/** Viele Browser limitieren mailto:-URLs; darunter bleibt es zuverlässig. */
const MAILTO_MAX_LENGTH = 1800;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) next.firstName = "Vorname ist erforderlich";
    if (!formData.lastName.trim()) next.lastName = "Nachname ist erforderlich";
    if (!formData.email.trim()) {
      next.email = "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }
    if (!formData.message.trim()) next.message = "Nachricht ist erforderlich";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    const subject = `Website-Kontakt: ${firstName} ${lastName}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (href.length > MAILTO_MAX_LENGTH) {
      setSubmitError(
        `Die Nachricht ist zu lang für eine automatische E-Mail. Bitte kürzen oder direkt an ${BUSINESS_EMAIL} schreiben.`,
      );
      return;
    }

    window.location.href = href;
    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-primary">
          E-Mail-Programm geöffnet
        </h3>
        <p className="mb-6 text-neutral-500">
          Wenn sich nichts geöffnet hat, schreiben Sie uns direkt an{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="font-medium text-accent hover:text-accent-hover">
            {BUSINESS_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          Neue Nachricht vorbereiten
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      {submitError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {submitError}
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-primary">
            Vorname <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-accent ${
              errors.firstName ? "border-accent" : "border-neutral-200"
            }`}
            placeholder="Max"
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-xs text-accent" role="alert">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-primary">
            Nachname <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-accent ${
              errors.lastName ? "border-accent" : "border-neutral-200"
            }`}
            placeholder="Muster"
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-xs text-accent" role="alert">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
            E-Mail <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-accent ${
              errors.email ? "border-accent" : "border-neutral-200"
            }`}
            placeholder="max@beispiel.ch"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-accent" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="+41 79 000 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Nachricht <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-accent ${
            errors.message ? "border-accent" : "border-neutral-200"
          }`}
          placeholder="Wie können wir Ihnen helfen?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-accent" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Nachricht senden
        </button>
        <p className="mt-3 text-xs text-neutral-500">
          Öffnet Ihr E-Mail-Programm mit ausgefüllter Nachricht an {BUSINESS_EMAIL}.
        </p>
      </div>
    </form>
  );
}
