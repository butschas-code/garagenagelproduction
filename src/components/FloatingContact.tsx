"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { useContactDrawer } from "@/contexts/ContactDrawerContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function FloatingContact() {
  const { isOpen, close, open } = useContactDrawer();
  const { showBanner } = useCookieConsent();
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const focusable = panelRef.current.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <motion.button
          type="button"
          onClick={open}
          className={`fixed right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-red-800 text-white shadow-[0_8px_32px_rgb(200_16_46/0.45)] ring-4 ring-white/90 transition-[bottom,box-shadow] hover:shadow-[0_12px_40px_rgb(200_16_46/0.55)] sm:right-6 sm:h-16 sm:w-16 ${
            showBanner ? "bottom-[9.5rem] sm:bottom-44" : "bottom-5 sm:bottom-6"
          }`}
          aria-label="Kontaktformular öffnen"
          whileHover={reduce ? undefined : { scale: 1.06 }}
          whileTap={reduce ? undefined : { scale: 0.95 }}
        >
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[110] bg-black/45 backdrop-blur-[2px]"
              aria-label="Schliessen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-drawer-title"
              className="fixed top-0 right-0 z-[120] flex h-full max-h-[100dvh] w-full max-w-md flex-col bg-white shadow-2xl"
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { x: 0, opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-5 py-4">
                <div>
                  <h2
                    id="contact-drawer-title"
                    className="font-display text-lg font-bold text-primary"
                  >
                    Nachricht senden
                  </h2>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    Wir melden uns bei Ihnen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-primary"
                  aria-label="Schliessen"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
                <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950">
                  <strong className="font-semibold">Dringend?</strong> Bitte
                  anrufen — E-Mails werden nur sporadisch gelesen.
                  <a
                    href="tel:+41417402092"
                    className="mt-2 block font-semibold text-accent hover:text-accent-hover"
                  >
                    041 740 20 92
                  </a>
                </div>
                <ContactForm />
              </div>

              <div className="shrink-0 border-t border-neutral-100 bg-neutral-50/80 px-5 py-4 text-xs text-neutral-500">
                <p className="font-medium text-primary">Garage Nagel GmbH</p>
                <p>Sumpfstrasse 15, 6312 Steinhausen ZG</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
