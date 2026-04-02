import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactTrigger from "@/components/ContactTrigger";
import GradientLink from "@/components/GradientLink";
import HeroAmbience from "@/components/HeroAmbience";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import { homeServiceCards } from "@/data/home-services";
import { reviews } from "@/data/reviews";
import { pageHeroSectionClassName } from "@/lib/page-hero";
import { HOME_HERO_SRC } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage Nagel GmbH – Ihre Vertrauensgarage in Steinhausen ZG",
  description:
    "Service, Reparaturen und Reifenservice für fast alle Marken. Über 40 Jahre Erfahrung – ehrlich, verlässlich, persönlich. Garage Nagel GmbH in Steinhausen, Kanton Zug.",
};

function AggregateStars({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-7 w-7 sm:h-8 sm:w-8 ${i < Math.floor(rating) ? "text-accent" : "text-neutral-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={pageHeroSectionClassName}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HOME_HERO_SRC}
            alt="Garage Nagel GmbH – Werkstatt in Steinhausen"
            fill
            className="animate-ken-burns object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="hero-vignette absolute inset-0 z-[2]" />
        <HeroAmbience />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-amber-100/90 drop-shadow-md">
            Ihre Vertrauensgarage in Steinhausen
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl [text-shadow:0_4px_40px_rgb(0_0_0/0.45)]">
            Nur faire und saubere Arbeit{" "}
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200/90 bg-clip-text text-transparent">
              zahlt sich aus
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl [text-shadow:0_2px_16px_rgb(0_0_0/0.35)]">
            Service, Reparaturen und Reifenservice für fast alle Marken — seit
            über 40 Jahren Erfahrung. Ehrlich, verlässlich, persönlich.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ContactTrigger className="btn-shine inline-flex h-14 items-center rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 px-8 text-base font-semibold text-white shadow-[0_8px_32px_rgb(200_16_46/0.45)] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgb(200_16_46/0.55)] active:scale-[0.98]">
              Termin vereinbaren
            </ContactTrigger>
            <Link
              href="/dienstleistungen"
              className="inline-flex h-14 items-center rounded-full border-2 border-white/50 bg-white/10 px-8 text-base font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2)] backdrop-blur-md transition-all duration-300 hover:border-white/80 hover:bg-white/20"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-neutral-200/80 bg-trust-bar">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: "40+", label: "Jahre Erfahrung" },
              { value: "AGVS", label: "Mitglied" },
              { value: "4.9★", label: "Bewertung" },
              { value: "Alle", label: "Marken" },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl py-2 transition-transform duration-300 hover:scale-[1.04]"
              >
                <p className="font-display text-2xl font-bold sm:text-3xl">
                  <span className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                    {item.value}
                  </span>
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-500 transition-colors group-hover:text-neutral-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-section-mesh">
        <div
          className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl animate-gradient-shift"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-500/15 to-transparent blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Leistungen
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Unsere{" "}
                <span className="text-gradient-accent">Dienstleistungen</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Kompetente Betreuung für Ihr Fahrzeug — von der Wartung bis zur
                Unfallreparatur.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((card, i) => (
              <ScrollReveal key={card.href} delay={Math.min(i * 0.08, 0.4)} className="h-full">
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <GradientLink
              href="/dienstleistungen"
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-3.96a.75.75 0 111.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06l3.96-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              }
            >
              Alle Leistungen ansehen
            </GradientLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-section-frost">
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-bl from-accent/10 to-transparent blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Stimmen
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Was unsere Kunden{" "}
                <span className="text-gradient-accent">sagen</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Ehrliche Bewertungen von zufriedenen Kunden aus der Region Zug.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mx-auto mt-12 max-w-xl">
            <div className="rounded-2xl border border-neutral-200/80 bg-white/80 px-6 py-8 text-center shadow-sm backdrop-blur-sm">
              <p className="font-display text-5xl font-bold text-primary sm:text-6xl">
                4.9
              </p>
              <div className="mt-3">
                <AggregateStars rating={5} />
              </div>
              <p className="mt-3 text-sm text-neutral-500">
                Aus {reviews.length} Bewertungen (Google, local.ch)
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <ScrollReveal
                key={`${review.name}-${review.date}-${review.source}`}
                delay={Math.min(i * 0.06, 0.36)}
              >
                <ReviewCard
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                  source={review.source}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14 text-center">
            <p className="text-base text-neutral-600">
              Zufrieden mit unserem Service? Wir freuen uns über Ihre Bewertung.
            </p>
            <a
              href="https://g.page/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 px-7 text-sm font-semibold text-white shadow-[0_6px_24px_rgb(200_16_46/0.35)] transition-[transform,box-shadow] hover:scale-[1.02]"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Bewertung auf Google schreiben
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-cta-animated">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgb(200_16_46/0.35),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal scale={false}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl [text-shadow:0_4px_32px_rgb(0_0_0/0.3)]">
                Bereit für{" "}
                <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200/80 bg-clip-text text-transparent">
                  erstklassigen Service?
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                Vereinbaren Sie einen Termin oder rufen Sie uns direkt an.
                Wir kümmern uns persönlich um Ihr Anliegen.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+41417402092"
                  className="btn-shine inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-[0_8px_32px_rgb(0_0_0/0.2)] transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_12px_40px_rgb(255_255_255/0.15)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  041 740 20 92
                </a>
                <ContactTrigger className="btn-shine inline-flex h-14 items-center rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 px-8 text-base font-semibold text-white shadow-[0_8px_28px_rgb(200_16_46/0.45)] transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_14px_36px_rgb(200_16_46/0.55)]">
                  Kontaktformular
                </ContactTrigger>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Standort & Google Maps */}
      <section
        id="standort"
        className="scroll-mt-24 bg-section-mesh py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Anfahrt
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                So finden Sie <span className="text-gradient-accent">uns</span>
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Zentral in Steinhausen ZG — mit Parkplätzen in der Nähe.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <ScrollReveal className="lg:col-span-5" delay={0.05}>
              <div className="glass-card h-full rounded-3xl px-8 py-10 sm:px-10">
                <div className="space-y-2 text-lg text-neutral-600">
                  <p className="font-display text-xl font-semibold text-primary">
                    Garage Nagel GmbH
                  </p>
                  <p>Sumpfstrasse 15</p>
                  <p>6312 Steinhausen, Kanton Zug</p>
                  <p className="pt-2">
                    <a
                      href="tel:+41417402092"
                      className="font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      041 740 20 92
                    </a>
                  </p>
                </div>
                <div className="mt-8 border-t border-neutral-200/80 pt-8 text-base text-neutral-500">
                  <p className="font-medium text-primary">Öffnungszeiten</p>
                  <p className="mt-2">Mo–Do: 07:30–12:00 &amp; 13:15–17:30</p>
                  <p>Fr: 07:30–12:00 &amp; 13:15–17:00</p>
                  <p>Sa &amp; So: geschlossen</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Garage+Nagel+GmbH+Sumpfstrasse+15+6312+Steinhausen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent via-red-600 to-red-800 text-sm font-semibold text-white shadow-[0_6px_24px_rgb(200_16_46/0.35)] transition-[transform,box-shadow] hover:scale-[1.02] sm:w-auto sm:px-8"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  In Google Maps öffnen
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7" delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-200/40 shadow-[0_12px_40px_rgb(12_12_15/0.08)]">
                <div className="relative aspect-[4/3] min-h-[280px] w-full sm:aspect-video sm:min-h-[320px] lg:min-h-[420px]">
                  <iframe
                    title="Standort Garage Nagel GmbH, Sumpfstrasse 15, 6312 Steinhausen"
                    src="https://www.google.com/maps?q=Garage+Nagel+GmbH,+Sumpfstrasse+15,+6312+Steinhausen,+Schweiz&output=embed&z=16&hl=de"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
