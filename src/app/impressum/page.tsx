import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Impressum – Garage Nagel GmbH",
  description:
    "Impressum der Garage Nagel GmbH, Sumpfstrasse 15, 6312 Steinhausen. Rechtliche Informationen und Haftungsausschluss.",
};

export default function Impressum() {
  return (
    <main>
      <section className="py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Impressum
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-600">
              {/* Company Info */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Kontaktadresse
                </h2>
                <div className="mt-3 space-y-1">
                  <p className="font-semibold text-primary">Garage Nagel GmbH</p>
                  <p>Sumpfstrasse 15</p>
                  <p>6312 Steinhausen</p>
                  <p>Schweiz</p>
                </div>
                <div className="mt-4 space-y-1">
                  <p>
                    <span className="text-neutral-500">Inhaber:</span>{" "}
                    <span className="text-primary">Fredy Graf</span>
                  </p>
                  <p>
                    <span className="text-neutral-500">Telefon:</span>{" "}
                    <a href="tel:+41417402092" className="text-accent hover:text-accent-hover">
                      041 740 20 92
                    </a>
                  </p>
                  <p>
                    <span className="text-neutral-500">E-Mail:</span>{" "}
                    <a href="mailto:fredy.graf@garage-nagel.ch" className="text-accent hover:text-accent-hover">
                      fredy.graf@garage-nagel.ch
                    </a>
                  </p>
                  <p>
                    <span className="text-neutral-500">Website:</span>{" "}
                    <span className="text-primary">www.garage-nagel.ch</span>
                  </p>
                </div>
              </div>

              {/* Registration */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Handelsregistereintrag
                </h2>
                <div className="mt-3 space-y-1">
                  <p>
                    <span className="text-neutral-500">Rechtsform:</span>{" "}
                    Gesellschaft mit beschränkter Haftung (GmbH)
                  </p>
                  <p>
                    <span className="text-neutral-500">UID:</span>{" "}
                    CHE-xxx.xxx.xxx
                  </p>
                  <p>
                    <span className="text-neutral-500">Handelsregister:</span>{" "}
                    Kanton Zug
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Haftungsausschluss
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der
                    inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                    Zuverlässigkeit und Vollständigkeit der Informationen.
                  </p>
                  <p>
                    Haftungsansprüche gegen den Autor wegen Schäden materieller
                    oder immaterieller Art, welche aus dem Zugriff oder der
                    Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
                    durch Missbrauch der Verbindung oder durch technische
                    Störungen entstanden sind, werden ausgeschlossen.
                  </p>
                  <p>
                    Alle Angebote sind unverbindlich. Der Autor behält es sich
                    ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
                    ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
                    löschen oder die Veröffentlichung zeitweise oder endgültig
                    einzustellen.
                  </p>
                </div>
              </div>

              {/* External Links */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Haftung für Links
                </h2>
                <p className="mt-3">
                  Verweise und Links auf Webseiten Dritter liegen ausserhalb
                  unseres Verantwortungsbereichs. Es wird jegliche Verantwortung
                  für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
                  solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder
                  der Nutzerin.
                </p>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  Urheberrechte
                </h2>
                <p className="mt-3">
                  Die Urheber- und alle anderen Rechte an Inhalten, Bildern,
                  Fotos oder anderen Dateien auf der Website gehören
                  ausschliesslich der Garage Nagel GmbH oder den speziell
                  genannten Rechtsinhabern. Für die Reproduktion jeglicher
                  Elemente ist die schriftliche Zustimmung der Urheberrechtsträger
                  im Voraus einzuholen.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
