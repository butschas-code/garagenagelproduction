/** Public business contact (also used as default recipient for the contact API). */
export const BUSINESS_EMAIL = "fredy.graf@garage-nagel.ch";

/** Brand logo in `public/images/` — keep file in sync with Desktop `Screenshot 2026-04-02 at 18.55.32.png` (`npm run copy-logo`). */
export const SITE_LOGO_SRC = "/images/logo.png" as const;

export const CANONICAL_SITE_ORIGIN = "https://www.garage-nagel.ch" as const;

export const siteLogoAbsoluteUrl = `${CANONICAL_SITE_ORIGIN}${SITE_LOGO_SRC}` as const;

/** Startseiten-Hero (nur `/`) — Datei aus `~/Downloads/hero header.jpg` nach `public/images/home-hero.jpg` kopieren (`npm run copy-home-hero`). */
export const HOME_HERO_SRC = "/images/home-hero.jpg" as const;
