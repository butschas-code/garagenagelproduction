import Image from "next/image";
import Link from "next/link";
import ContactTrigger from "@/components/ContactTrigger";
import CookieSettingsLink from "@/components/CookieSettingsLink";

const services = [
  { label: "Service & Wartung", href: "/dienstleistungen#service" },
  { label: "Reparaturen", href: "/dienstleistungen#reparaturen" },
  { label: "Reifenservice", href: "/dienstleistungen#reifen" },
  { label: "MFK & Prüfungen", href: "/dienstleistungen#mfk" },
  { label: "Unfallreparatur", href: "/dienstleistungen#unfall" },
  { label: "Scheiben & Zubehör", href: "/dienstleistungen#scheiben" },
];

const mapsQuery =
  "https://maps.google.com/?q=Garage+Nagel+GmbH+Sumpfstrasse+15+6312+Steinhausen";

export default function Footer() {
  return (
    <footer className="relative bg-section-deep text-white footer-glow-top">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 inline-block rounded-lg bg-white p-2 shadow-sm">
              <span className="relative block h-9 w-[11.5rem] sm:h-10 sm:w-[13.5rem]">
                <Image
                  src="/images/logo.jpg"
                  alt="Garage Nagel"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 184px, 216px"
                />
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Nur faire und saubere Arbeit zahlt sich aus.
            </p>
            <div className="flex flex-col gap-1 text-xs text-neutral-500">
              <span>Mitglied AGVS Schweiz</span>
              <span>Partner LeGarage</span>
            </div>
          </div>

          {/* Dienstleistungen */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Dienstleistungen
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Anfahrt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Kontakt &amp; Anfahrt
            </h3>
            <address className="space-y-4 not-italic">
              <div>
                <p className="text-sm font-semibold text-white">Garage Nagel GmbH</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                  Sumpfstrasse 15
                  <br />
                  6312 Steinhausen
                  <br />
                  Kanton Zug, Schweiz
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Telefon
                </p>
                <a
                  href="tel:+41417402092"
                  className="mt-1 inline-block text-sm font-medium text-amber-200/90 transition-colors hover:text-white"
                >
                  041 740 20 92
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  E-Mail
                </p>
                <a
                  href="mailto:fredy.graf@garage-nagel.ch"
                  className="mt-1 inline-block break-all text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  fredy.graf@garage-nagel.ch
                </a>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href={mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800/50 px-4 py-2.5 text-xs font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Google Maps
                </a>
                <Link
                  href="/#standort"
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-4 py-2.5 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
                >
                  Karte auf Startseite
                </Link>
              </div>
            </address>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Öffnungszeiten
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex flex-col gap-1 border-b border-neutral-800 pb-3">
                <span className="font-medium text-neutral-300">Montag – Donnerstag</span>
                <span>07:30 – 12:00</span>
                <span>13:15 – 17:30</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-neutral-800 pb-3">
                <span className="font-medium text-neutral-300">Freitag</span>
                <span>07:30 – 12:00</span>
                <span>13:15 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-neutral-300">Samstag</span>
                <span className="text-neutral-500">geschlossen</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-neutral-300">Sonntag</span>
                <span className="text-neutral-500">geschlossen</span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-500/25 bg-amber-950/30 p-4">
              <p className="text-xs leading-relaxed text-amber-100/90">
                <strong className="text-amber-50">Wichtig:</strong> In dringenden
                Fällen rufen Sie uns bitte an — E-Mails werden nur sporadisch
                geprüft.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <ContactTrigger className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 text-sm font-semibold text-white shadow-[0_4px_20px_rgb(200_16_46/0.35)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-[0_8px_28px_rgb(200_16_46/0.45)]">
                Nachricht senden
              </ContactTrigger>
              <a
                href="tel:+41417402092"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-600 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-800/50"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © 2024 Garage Nagel GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            <Link
              href="/impressum"
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-300"
            >
              Datenschutz
            </Link>
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
