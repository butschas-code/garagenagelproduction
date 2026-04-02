import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Garage Nagel GmbH",
  description:
    "Datenschutzerklärung der Garage Nagel GmbH. Informationen zum Schutz Ihrer personenbezogenen Daten.",
};

export default function Datenschutz() {
  return (
    <main>
      <section className="py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-base text-neutral-500">
              Zuletzt aktualisiert: April 2026
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-600">
              {/* Intro */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  1. Allgemeine Hinweise
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                    Anliegen. Wir verarbeiten Ihre Daten daher ausschliesslich
                    auf Grundlage der gesetzlichen Bestimmungen, insbesondere
                    des Schweizerischen Bundesgesetzes über den Datenschutz (DSG)
                    sowie der anwendbaren kantonalen Datenschutzbestimmungen.
                  </p>
                  <p>
                    In dieser Datenschutzerklärung informieren wir Sie über die
                    wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
                    Website.
                  </p>
                </div>
              </div>

              {/* Controller */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  2. Verantwortliche Stelle
                </h2>
                <div className="mt-3 space-y-1">
                  <p className="font-semibold text-primary">Garage Nagel GmbH</p>
                  <p>Sumpfstrasse 15</p>
                  <p>6312 Steinhausen</p>
                  <p>Schweiz</p>
                  <p className="mt-2">
                    E-Mail:{" "}
                    <a href="mailto:fredy.graf@garage-nagel.ch" className="text-accent hover:text-accent-hover">
                      fredy.graf@garage-nagel.ch
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a href="tel:+41417402092" className="text-accent hover:text-accent-hover">
                      041 740 20 92
                    </a>
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  3. Erhebung und Verarbeitung von Daten
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Beim Besuch unserer Website werden automatisch bestimmte
                    technische Daten erfasst:
                  </p>
                  <ul className="list-inside list-disc space-y-1 pl-2">
                    <li>IP-Adresse (anonymisiert)</li>
                    <li>Datum und Uhrzeit der Anfrage</li>
                    <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                    <li>Inhalt der Anforderung (konkrete Seite)</li>
                    <li>Zugriffsstatus/HTTP-Statuscode</li>
                    <li>Jeweils übertragene Datenmenge</li>
                    <li>Website, von der die Anforderung kommt (Referrer)</li>
                    <li>Browser und Betriebssystem</li>
                  </ul>
                  <p>
                    Diese Daten werden ausschliesslich zur Sicherstellung
                    eines reibungslosen Verbindungsaufbaus der Website, zur
                    Gewährleistung einer komfortablen Nutzung und zur
                    Auswertung der Systemsicherheit erhoben.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  4. Kontaktformular
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Wenn Sie uns über das Kontaktformular kontaktieren
                    (Button unten rechts oder «Nachricht senden» im Fusszeile),
                    wird Ihr E-Mail-Programm mit einer vorbefüllten Nachricht an
                    uns geöffnet. Die Angaben (Name, E-Mail-Adresse,
                    Telefonnummer, Nachricht) verlassen Ihr Gerät erst, wenn Sie
                    die E-Mail in Ihrem Programm absenden.
                  </p>
                  <p>
                    Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung,
                    indem Sie die E-Mail versenden. Sie können diesen Vorgang
                    abbrechen, bevor die Nachricht abgeht.
                  </p>
                  <p>
                    Sobald die E-Mail bei uns eintrifft, behandeln wir den Inhalt
                    wie jede andere Geschäftskorrespondenz und löschen ihn, wenn
                    die Anfrage erledigt ist und keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  5. Zweck der Datenverarbeitung
                </h2>
                <div className="mt-3 space-y-3">
                  <p>Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
                  <ul className="list-inside list-disc space-y-1 pl-2">
                    <li>Beantwortung Ihrer Anfragen</li>
                    <li>Erbringung unserer Dienstleistungen</li>
                    <li>Terminvereinbarungen</li>
                    <li>Verbesserung unseres Webangebots</li>
                    <li>Erfüllung gesetzlicher Pflichten</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  6. Cookies
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Beim ersten Besuch erscheint ein Cookie-Hinweis. Sie können
                    zwischen «Alle akzeptieren» (einschliesslich optionaler Cookies
                    für Statistik und Marketing) und «Nur notwendige» wählen. Ihre
                    Entscheidung speichern wir lokal in Ihrem Browser
                    (localStorage), damit der Hinweis nicht bei jedem Aufruf
                    erscheint. Über «Cookie-Einstellungen» in der Fusszeile können Sie
                    die Auswahl zurücksetzen.
                  </p>
                  <p>
                    Technisch notwendige Cookies und Speicher sind erforderlich,
                    um die Website korrekt darzustellen und grundlegende Funktionen
                    zu gewährleisten. Sie können Ihren Browser zudem so einstellen,
                    dass Sie über das Setzen von Cookies informiert werden.
                  </p>
                </div>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  7. Drittanbieter-Dienste
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    <strong className="text-primary">Google Maps:</strong>{" "}
                    Unsere Website nutzt den Kartendienst Google Maps. Beim
                    Laden der Karte werden Daten an Google LLC übertragen.
                    Weitere Informationen finden Sie in der{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover"
                    >
                      Datenschutzerklärung von Google
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-primary">Hosting:</strong>{" "}
                    Unsere Website wird bei einem professionellen
                    Hosting-Anbieter in der Schweiz bzw. im europäischen
                    Wirtschaftsraum gehostet. Die Server-Logfiles werden
                    gemäss den geltenden Datenschutzbestimmungen gespeichert.
                  </p>
                </div>
              </div>

              {/* Rights */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  8. Ihre Rechte
                </h2>
                <div className="mt-3 space-y-3">
                  <p>
                    Sie haben gemäss dem Schweizerischen Datenschutzgesetz
                    folgende Rechte:
                  </p>
                  <ul className="list-inside list-disc space-y-1 pl-2">
                    <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                    <li>Recht auf Berichtigung unrichtiger Daten</li>
                    <li>Recht auf Löschung Ihrer Daten</li>
                    <li>Recht auf Einschränkung der Datenverarbeitung</li>
                    <li>Recht auf Datenherausgabe und Datenübertragung</li>
                    <li>Widerspruchsrecht gegen die Datenverarbeitung</li>
                  </ul>
                  <p>
                    Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die
                    oben genannte verantwortliche Stelle.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  9. Kontakt für Datenschutzanfragen
                </h2>
                <div className="mt-3 space-y-1">
                  <p>
                    Bei Fragen zum Datenschutz erreichen Sie uns unter:
                  </p>
                  <p className="mt-2 font-semibold text-primary">Garage Nagel GmbH</p>
                  <p>Sumpfstrasse 15, 6312 Steinhausen</p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:fredy.graf@garage-nagel.ch" className="text-accent hover:text-accent-hover">
                      fredy.graf@garage-nagel.ch
                    </a>
                  </p>
                </div>
              </div>

              {/* Changes */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary">
                  10. Änderungen
                </h2>
                <p className="mt-3">
                  Wir können diese Datenschutzerklärung jederzeit ohne
                  Vorankündigung anpassen. Es gilt die jeweils aktuelle,
                  auf unserer Website publizierte Fassung.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
