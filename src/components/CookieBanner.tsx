"use client";

import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieBanner() {
  const { showBanner, accept, decline } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[105] flex justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4"
      role="region"
      aria-label="Cookie-Hinweis"
    >
      <div
        className="pointer-events-auto w-full max-w-4xl rounded-2xl border border-neutral-200/90 bg-white/95 px-4 py-4 shadow-[0_-8px_40px_rgb(12_12_15/0.12)] backdrop-blur-md sm:px-6 sm:py-5"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
      >
        <h2
          id="cookie-banner-title"
          className="font-display text-base font-bold text-primary sm:text-lg"
        >
          Cookies &amp; Datenschutz
        </h2>
        <p
          id="cookie-banner-desc"
          className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]"
        >
          Wir verwenden Cookies und ähnliche Technologien, die für den Betrieb dieser Website
          nötig sind. Mit «Alle akzeptieren» willigen Sie zusätzlich ein, dass wir optionale
          Cookies zu Statistik und Marketing nutzen dürfen (gemäss unserer{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent-hover"
          >
            Datenschutzerklärung
          </Link>
          ). Mit «Nur notwendige» lehnen Sie optionale Cookies ab; die Website bleibt nutzbar.
        </p>
        <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={decline}
            className="order-2 min-h-11 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-neutral-300 hover:bg-neutral-50 sm:order-1 sm:w-auto sm:min-w-[10rem]"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={accept}
            className="order-1 min-h-11 w-full rounded-xl bg-gradient-to-r from-accent via-red-600 to-red-800 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgb(200_16_46/0.35)] transition-[transform,box-shadow] hover:shadow-[0_6px_24px_rgb(200_16_46/0.45)] sm:order-2 sm:w-auto sm:min-w-[10rem]"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
