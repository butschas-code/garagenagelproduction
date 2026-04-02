/** localStorage key for Swiss-style opt-in / opt-out (nDSG / DSG-konforme Praxis). */
export const COOKIE_CONSENT_STORAGE_KEY = "garage-nagel-cookie-consent-v1";

export type CookieConsentValue = "accepted" | "declined";

export function readStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

export function writeStoredConsent(value: CookieConsentValue): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* private mode */
  }
}

export function clearStoredConsent(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
