"use client";

import type { ReactNode } from "react";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";
import { ContactDrawerProvider } from "@/contexts/ContactDrawerContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      <ContactDrawerProvider>
        {children}
        <FloatingContact />
        <CookieBanner />
      </ContactDrawerProvider>
    </CookieConsentProvider>
  );
}
