"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { clearStoredConsent, readStoredConsent, writeStoredConsent } from "@/lib/cookie-consent";

export type ConsentUiStatus = "pending" | "accepted" | "declined";

type CookieConsentContextValue = {
  /** After hydration: has the user already chosen? */
  status: ConsentUiStatus;
  hydrated: boolean;
  /** True while choice still required (shows banner). */
  showBanner: boolean;
  accept: () => void;
  decline: () => void;
  /** Clears choice so the banner appears again (footer link). */
  resetConsent: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentUiStatus>("pending");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) setStatus(stored);
    setHydrated(true);
  }, []);

  const accept = useCallback(() => {
    writeStoredConsent("accepted");
    setStatus("accepted");
    window.dispatchEvent(new CustomEvent("garage-nagel-cookie-consent", { detail: "accepted" }));
  }, []);

  const decline = useCallback(() => {
    writeStoredConsent("declined");
    setStatus("declined");
    window.dispatchEvent(new CustomEvent("garage-nagel-cookie-consent", { detail: "declined" }));
  }, []);

  const resetConsent = useCallback(() => {
    clearStoredConsent();
    setStatus("pending");
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      status,
      hydrated,
      showBanner: hydrated && status === "pending",
      accept,
      decline,
      resetConsent,
    }),
    [status, hydrated, accept, decline, resetConsent],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

/** Optional hook for sections that may load only with consent (e.g. analytics). */
export function hasAnalyticsConsent(status: ConsentUiStatus): boolean {
  return status === "accepted";
}
