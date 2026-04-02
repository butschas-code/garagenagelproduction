/**
 * Leistungs-Bilder: `public/images/leistungen/*.jpg`
 * — dieselben Pfade auf Startseite (Preview) und /dienstleistungen.
 *
 * | id         | Datei                 | Quelle |
 * |------------|----------------------|--------|
 * | service    | service-wartung.jpg  | kate-ibragimova (Unsplash) |
 * | reparaturen| reparaturen.jpg      | c-joyful (Unsplash) |
 * | reifen     | reifen.jpg           | tekton (Unsplash) |
 * | mfk        | mfk.jpg              | leistungen hero (Projekt) |
 * | unfall     | unfall.jpg           | joseph-pillado (Unsplash) |
 * | scheiben   | scheiben.jpg         | unverändert |
 * | zubehoer   | zubehoer.jpg         | unverändert |
 * | ersatzwagen| ersatzwagen.jpg      | Ford Mustang (Unsplash) |
 *
 * Nach neuen Fotos: `LEISTUNG_IMAGE_CACHE_BUST` erhöhen (und ggf. Dateien in `public/` ersetzen).
 */
/** Bump so Browser & Next Image nicht alte gecachte Versionen zeigen. */
export const LEISTUNG_IMAGE_CACHE_BUST = "20260403b";

function leistungJpeg(basename: string): string {
  return `/images/leistungen/${basename}.jpg?v=${LEISTUNG_IMAGE_CACHE_BUST}`;
}

export type LeistungEntry = {
  id: string;
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  callout?: { title: string; body: string };
  bullets?: string[];
  tailParagraphs?: string[];
};

export const leistungen: LeistungEntry[] = [
  {
    id: "service",
    title: "Service & Wartung",
    tagline: "Damit Ihr Auto so fährt, wie es soll",
    imageSrc: leistungJpeg("service-wartung"),
    imageAlt: "Fahrzeugservice und Wartung in der Werkstatt",
    paragraphs: [
      "Regelmässiger Service ist das Fundament für ein langlebiges, sicheres Auto. Wir kennen das selbst von unseren eigenen Fahrzeugen: Wer pflegt, fährt sorgenfrei.",
      "Wir führen alle vorgeschriebenen Wartungsarbeiten für nahezu alle Marken herstellerkonform aus — transparent kalkuliert und ohne Schnickschnack. Ölwechsel, Filter, Bremsflüssigkeit, Klimaanlage: was wirklich nötig ist, sagen wir Ihnen ehrlich.",
      "Ihre Herstellergarantie bleibt erhalten — auch ohne Markengarage.",
    ],
  },
  {
    id: "reparaturen",
    title: "Reparaturen",
    tagline: "Technik verstehen, nicht ersetzen",
    imageSrc: leistungJpeg("reparaturen"),
    imageAlt: "Fahrzeugreparatur und Werkstatt",
    paragraphs: [
      "Vom kleinen Defekt bis zur grösseren Revision: Wir reparieren, weil wir die Technik mögen — Bremsen, Kupplung, Getriebe, Auspuff, Lenkung, Fahrwerk, Elektrik.",
      "Vor dem Start bekommen Sie eine klare Kosteneinschätzung. Wir zeigen defekte Teile, erklären verständlich und setzen auf Reparatur statt blindem Tausch, wo es sinnvoll ist.",
      "Unser Massstab: Nur das, was wirklich nötig ist.",
    ],
  },
  {
    id: "reifen",
    title: "Reifenservice",
    tagline: "Grip, Sicherheit, Saison",
    imageSrc: leistungJpeg("reifen"),
    imageAlt: "Autoreifen und Profil",
    paragraphs: [
      "Reifen sind der einzige Kontakt zur Strasse — deshalb nehmen wir das ernst. Verkauf, Montage, Auswuchten, Einlagerung im Reifenhotel: alles aus einer Hand.",
      "Starke Marken wie Continental, Uniroyal, Barum und Semperit zu fairen Konditionen. Inklusive Beratung, welche Mischung wirklich zu Ihrem Fahrzeug passt.",
    ],
    callout: {
      title: "Hinweis",
      body: "Reifenmontage für extern (z. B. über Reifendirekt) gekaufte Reifen führen wir nicht durch.",
    },
  },
  {
    id: "mfk",
    title: "MFK & Prüfungen",
    tagline: "Ruhe vor der Kontrolle",
    imageSrc: leistungJpeg("mfk"),
    imageAlt: "Fahrzeugcheck und Detailkontrolle am Auto",
    paragraphs: [
      "Die MFK nervt — wir wissen es. Deshalb bereiten wir Ihr Auto so vor, dass sicherheitsrelevante Punkte stimmen und Sie möglichst entspannt zur Prüfung fahren.",
      "Wir sind anerkannte RBV-Stelle des Strassenverkehrsamtes Kanton Zug: Bestimmte Prüfungen erledigen wir direkt bei uns — ohne extra Fahrt zum Amt.",
    ],
  },
  {
    id: "unfall",
    title: "Unfallreparatur",
    tagline: "Ein Ansprechpartner, klare Abläufe",
    imageSrc: leistungJpeg("unfall"),
    imageAlt: "Karosserie und Lack — Unfallreparatur",
    paragraphs: [
      "Nach einem Unfall zählt schnelle, saubere Abwicklung. Wir koordinieren mit Ihrer Versicherung und unseren Partnern für Karosserie und Lack — damit Sie nicht zwischen Stühlen sitzen.",
      "Schadenaufnahme, Kostenvoranschlag, Reparatur, Endkontrolle: Sie haben einen festen Ansprechpartner bei uns.",
      "Auf Wunsch stellen wir einen Ersatzwagen zur Verfügung.",
    ],
  },
  {
    id: "scheiben",
    title: "Scheiben & Steinschlag",
    tagline: "Klarer Blick, faire Lösung",
    imageSrc: leistungJpeg("scheiben"),
    imageAlt: "Frontpartie eines Fahrzeugs mit Windschutzscheibe",
    paragraphs: [
      "Steinschlag? Je nach Grösse und Position reparieren wir direkt — schnell und oft deutlich günstiger als ein Scheibentausch. Muss getauscht werden, kümmern wir uns um Bestellung und fachgerechten Einbau.",
      "Wir arbeiten mit gängigen Versicherungen; oft deckt die Teilkasko die Kosten.",
    ],
  },
  {
    id: "zubehoer",
    title: "Zubehör & Einbau",
    tagline: "Was Ihr Auto noch kann",
    imageSrc: leistungJpeg("zubehoer"),
    imageAlt: "Modernes Fahrzeug-Cockpit und Infotainment",
    paragraphs: [
      "Gutes Zubehör will fachgerecht verbaut sein. Wir beraten, was technisch und rechtlich Sinn macht, und bauen es sauber ein.",
    ],
    bullets: [
      "DAB/DAB+-Geräte und Autoradios",
      "Anhängerkupplungen",
      "Fahrradträger und Dachboxen",
      "Einparkhilfen und Rückfahrkameras",
      "Weiteres Zubehör auf Anfrage",
    ],
    tailParagraphs: [
      "Fragen Sie uns einfach — wir finden die passende Lösung für Ihr Fahrzeug.",
    ],
  },
  {
    id: "ersatzwagen",
    title: "Ersatzwagen",
    tagline: "Mobil bleiben",
    imageSrc: leistungJpeg("ersatzwagen"),
    imageAlt: "Ford Mustang — Ersatzwagen / Leihfahrzeug",
    paragraphs: [
      "Während die Reparatur läuft, soll das Leben nicht stehen bleiben. Sprechen Sie uns bei der Terminvereinbarung auf einen Ersatzwagen an — wir klären Verfügbarkeit frühzeitig.",
      "Bei grösseren Arbeiten oder Unfallschäden ist ein Ersatzfahrzeug in der Regel organisierbar.",
    ],
  },
];
