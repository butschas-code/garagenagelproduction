import type { Metadata } from "next";
import Image from "next/image";
import ContactTrigger from "@/components/ContactTrigger";
import HeroAmbience from "@/components/HeroAmbience";
import LeistungShowcase from "@/components/LeistungShowcase";
import LeistungenJumpNav from "@/components/LeistungenJumpNav";
import ScrollReveal from "@/components/ScrollReveal";
import { leistungen } from "@/data/leistungen";
import { pageHeroSectionClassName } from "@/lib/page-hero";

export const metadata: Metadata = {
  title: "Dienstleistungen – Garage Nagel GmbH",
  description:
    "Autoservice mit Leidenschaft: Wartung, Reparaturen, Reifen, MFK, Unfall, Scheiben, Zubehör und Ersatzwagen — Garage Nagel in Steinhausen ZG.",
};

export default function Dienstleistungen() {
  return (
    <main>
      {/* Hero */}
      <section className={pageHeroSectionClassName}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/leistungen-hero.jpg"
            alt="Garage Nagel — Dienstleistungen und Werkstatt"
            fill
            className="animate-ken-burns object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="hero-vignette absolute inset-0 z-[2]" />
        <HeroAmbience />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Leidenschaft am Auto
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_4px_40px_rgb(0_0_0/0.45)]">
              Wir sind{" "}
              <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200/90 bg-clip-text text-transparent">
                nicht nur Mechaniker
              </span>
              <br />
              <span className="text-white/95">— wir sind Autofans.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/88 sm:text-xl [text-shadow:0_2px_20px_rgb(0_0_0/0.4)]">
              Jeder bei uns fährt selbst, schraubt selbst und weiss, wie es sich
              anfühlt, wenn das Auto «stimmt». Deshalb arbeiten wir präzise,
              ehrlich und mit Respekt vor Ihrem Fahrzeug.
            </p>
            <p className="mt-4 text-base font-medium text-amber-100/90 sm:text-lg [text-shadow:0_2px_16px_rgb(0_0_0/0.35)]">
              Kompletter Service aus einer Hand — fair, kompetent, persönlich.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="relative overflow-hidden bg-section-warm">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8102e' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal scale={false}>
            <blockquote className="font-display text-2xl font-semibold leading-snug text-primary sm:text-3xl lg:text-[2rem]">
              «Technik ist Handwerk. Ein gutes Auto verdient Menschen, die{" "}
              <span className="text-gradient-accent">mitdenken</span>, nicht nur
              abhaken.»
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Ob Alltagsauto oder Liebling auf vier Rädern: Wir behandeln jedes
              Fahrzeug so, wie wir unser eigenes behandeln würden — mit Sorgfalt,
              Transparenz und dem Anspruch, es richtig zu machen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <LeistungenJumpNav />

      {/* Service showcases */}
      <div className="bg-section-mesh">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          {leistungen.map((entry, i) => (
            <LeistungShowcase
              key={entry.id}
              entry={entry}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-cta-animated">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-30%,rgb(200_16_46/0.3),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal scale={false}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-gradient-to-r from-white to-amber-100/80 bg-clip-text text-transparent">
                  Lust auf ehrlichen Service?
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                Rufen Sie uns an oder schreiben Sie uns — wir freuen uns auf Ihr
                Projekt und Ihr Auto.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+41417402092"
                  className="btn-shine inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg transition-[transform,box-shadow] hover:scale-[1.03]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  041 740 20 92
                </a>
                <ContactTrigger className="btn-shine inline-flex h-14 items-center rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 px-8 text-base font-semibold text-white shadow-[0_8px_28px_rgb(200_16_46/0.4)] transition-[transform,box-shadow] hover:scale-[1.03]">
                  Nachricht senden
                </ContactTrigger>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
