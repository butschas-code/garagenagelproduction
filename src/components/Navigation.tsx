"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContactDrawer } from "@/contexts/ContactDrawerContext";
import { SITE_LOGO_SRC } from "@/lib/site";

const navRoutes = [
  { label: "Startseite", href: "/" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Über uns", href: "/ueber-uns" },
];

const linkClass =
  "group relative text-sm font-medium text-neutral-600 transition-colors hover:text-primary";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();
  const { open: openContact } = useContactDrawer();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-neutral-200/80 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgb(12_12_15/0.08)]" : "shadow-sm"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
        aria-hidden
      />
      <nav className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="relative z-10 flex min-w-0 shrink-0 items-center" aria-label="Startseite">
          <span className="relative block aspect-[1240/360] w-[min(100%,9.25rem)] max-w-[calc(100vw-10rem)] sm:w-[11rem] sm:max-w-none lg:w-[13rem]">
            <Image
              src={SITE_LOGO_SRC}
              alt="Garage Nagel"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 148px, (max-width: 1024px) 176px, 208px"
              priority
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navRoutes.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-amber-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 lg:gap-4">
          <button
            type="button"
            onClick={openContact}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-primary shadow-sm transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
            aria-label="Nachricht senden"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </button>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            type="button"
            onClick={openContact}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-accent/50 hover:text-accent"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Nachricht senden
          </motion.button>
          <motion.a
            href="tel:+41417402092"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgb(200_16_46/0.35)] transition-shadow hover:shadow-[0_8px_28px_rgb(200_16_46/0.45)]"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            041 740 20 92
          </motion.a>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <motion.span
              className="block h-0.5 w-full bg-primary"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-primary"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-primary"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-0 z-40 bg-gradient-to-b from-white via-neutral-50 to-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {navRoutes.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl font-semibold text-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navRoutes.length * 0.05, duration: 0.3 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openContact();
                  }}
                  className="font-display text-2xl font-semibold text-primary transition-colors hover:text-accent"
                >
                  Nachricht senden
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: (navRoutes.length + 1) * 0.05, duration: 0.3 }}
              >
                <motion.a
                  href="tel:+41417402092"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-red-600 to-red-700 px-6 py-3 text-base font-semibold text-white shadow-[0_4px_24px_rgb(200_16_46/0.35)]"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  041 740 20 92
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
