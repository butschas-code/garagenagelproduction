import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactTrigger from "@/components/ContactTrigger";
import HeroAmbience from "@/components/HeroAmbience";
import ScrollReveal from "@/components/ScrollReveal";
import { pageHeroSectionClassName } from "@/lib/page-hero";

export const metadata: Metadata = {
  title: "Über uns – Garage Nagel GmbH",
  description:
    "Lernen Sie Fredy Graf kennen: Über 40 Jahre Erfahrung, Leidenschaft für Autos und ein Grundsatz – ehrlich währt am längsten. Garage Nagel GmbH in Steinhausen ZG.",
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Ehrlichkeit",
    description: "Wir reparieren nur, was wirklich nötig ist, und zeigen Ihnen die defekten Teile. Keine versteckten Kosten.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Leidenschaft",
    description: "Über 40 Jahre Erfahrung aus Begeisterung für Autos und Technik. Jedes Fahrzeug wird mit Sorgfalt behandelt.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Persönlich",
    description: "Ein Ansprechpartner für alles. Fredy nimmt sich Zeit und erklärt alles verständlich — auch Frauen fühlen sich bestens aufgehoben.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Fairness",
    description: "Kostenbewusste Reparaturen, ehrliche Beratung zu Original- und Nachbauteilen, transparente Preisgestaltung.",
  },
];

export default function UeberUns() {
  return (
    <main>
      {/* Hero */}
      <section className={pageHeroSectionClassName}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/workshop.jpg"
            alt="Werkstatt der Garage Nagel GmbH"
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
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Über uns
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Die Geschichte hinter der Garage Nagel — und dem Mann mit Benzin im Herzen.
          </p>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/workshop.jpg"
                    alt="Fredy Graf – Inhaber der Garage Nagel GmbH"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                  Der Mann mit Benzin im Herzen
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
                  <p>
                    Fredy Graf hat die Garage Nagel im Jahr 2017 von Roly Nagel
                    übernommen und führt sie seither mit der gleichen Leidenschaft,
                    die ihn schon als junger Mann in der Lehre angetrieben hat.
                  </p>
                  <p>
                    Aufgewachsen in Wengen im Berner Oberland, machte er seine
                    Lehre als Automechaniker bei VW/Audi in Interlaken. Danach
                    folgten 26 prägende Jahre bei Toyota in Rotkreuz, wo er sich
                    vom Mechaniker zum erfahrenen Allrounder entwickelte. Als
                    Werkstattchef bei Toyota/Lexus in Baar übernahm er anschliessend
                    vier Jahre lang die volle Verantwortung für eine grosse Werkstatt.
                  </p>
                  <p>
                    Seit 2017 verwirklicht er sich den Traum einer eigenen,
                    gut ausgerüsteten Garage. In der Garage Nagel GmbH an der
                    Sumpfstrasse 15 in Steinhausen bietet er persönlichen Service
                    mit über 40 Jahren Berufserfahrung.
                  </p>

                  <h3 className="pt-4 font-display text-xl font-bold text-primary">
                    Philosophie: Reparieren statt ersetzen
                  </h3>
                  <p>
                    Fredys Grundsatz ist einfach: kostenbewusste Reparaturen,
                    ehrliche Beratung und volle Transparenz. Er repariert, was
                    repariert werden kann, bevor er Teile ersetzt. Wenn neue
                    Teile nötig sind, berät er seine Kunden ehrlich über die
                    Vor- und Nachteile von Original- und Nachbauteilen.
                  </p>
                  <p>
                    Was Fredy besonders auszeichnet: Er zeigt seinen Kunden immer
                    die defekten und die ausgetauschten Teile. So kann jeder
                    nachvollziehen, was gemacht wurde und warum. Dieses
                    Vertrauensprinzip ist der Kern seines Geschäfts.
                  </p>
                  <p>
                    Auch Frauen fühlen sich in der Garage Nagel bestens
                    aufgehoben, weil Fredy alles geduldig und verständlich
                    erklärt — ohne Fachjargon und ohne Herablassung.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 text-xl font-medium italic text-primary">
                    &ldquo;Ehrlich währt am längsten.&rdquo;
                    <span className="mt-2 block text-base font-normal not-italic text-neutral-500">
                      — Fredy Graf, Inhaber
                    </span>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Unsere Werte
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Was uns antreibt und was Sie von uns erwarten können.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Mitgliedschaften
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Qualität und Vertrauen, bestätigt durch anerkannte Verbände.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 flex flex-col items-center justify-center gap-12 sm:flex-row">
            <ScrollReveal delay={0}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  AGVS Schweiz
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Auto Gewerbe Verband Schweiz
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 3h-8l-2 4h12z" />
                    <circle cx="12" cy="14" r="3" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  LeGarage
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Netzwerk unabhängiger Garagen
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Lernen Sie uns kennen
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                Besuchen Sie uns in Steinhausen oder rufen Sie einfach an.
                Wir freuen uns auf Sie.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+41417402092"
                  className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-base font-semibold text-primary transition-colors hover:bg-neutral-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  041 740 20 92
                </a>
                <ContactTrigger className="inline-flex h-14 items-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-hover">
                  Kontakt aufnehmen
                </ContactTrigger>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
