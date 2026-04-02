"use client";

import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieSettingsLink() {
  const { resetConsent } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="text-xs text-neutral-500 transition-colors hover:text-neutral-300"
    >
      Cookie-Einstellungen
    </button>
  );
}
