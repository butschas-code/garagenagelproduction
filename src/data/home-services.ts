import { leistungen } from "./leistungen";

/** Gleiche Einträge / Bilder wie die entsprechenden Sektionen auf /dienstleistungen (Reihenfolge Startseite). */
const HOME_PREVIEW_ORDER = [
  "service",
  "reparaturen",
  "reifen",
  "mfk",
  "unfall",
  "scheiben",
] as const;

type HomePreviewId = (typeof HOME_PREVIEW_ORDER)[number];

/** Kurztexte & Links der Startseiten-Karten (Titel/Bild kommen aus `leistungen`). */
const HOME_CARD_COPY: Record<
  HomePreviewId,
  { description: string; href: string; titleOverride?: string }
> = {
  service: {
    description:
      "Regelmässiger Service für fast alle Marken und Modelle. Ihr Fahrzeug in besten Händen.",
    href: "/dienstleistungen#service",
  },
  reparaturen: {
    description:
      "Fachgerechte Reparaturen aller Art — von Bremsen bis Motor. Ehrlich und transparent.",
    href: "/dienstleistungen#reparaturen",
  },
  reifen: {
    description:
      "Reifenverkauf, Montage und Reifenhotel. Top-Konditionen für Continental, Uniroyal, Barum und Semperit.",
    href: "/dienstleistungen#reifen",
  },
  mfk: {
    description:
      "MFK-Bereitstellung und anerkannte RBV-Stelle des Strassenverkehrsamtes Kanton Zug.",
    href: "/dienstleistungen#mfk",
  },
  unfall: {
    description:
      "Koordination mit Versicherungen, qualifizierte Partner für Karosserie und Lackierung.",
    href: "/dienstleistungen#unfall",
  },
  scheiben: {
    titleOverride: "Scheiben & Zubehör",
    description:
      "Steinschlag-Reparatur, Scheibenersatz, DAB-Geräte, Anhängerkupplungen und mehr.",
    href: "/dienstleistungen#scheiben",
  },
};

export const homeServiceCards = HOME_PREVIEW_ORDER.map((id) => {
  const entry = leistungen.find((l) => l.id === id);
  if (!entry) {
    throw new Error(`homeServiceCards: missing leistung id "${id}"`);
  }
  const copy = HOME_CARD_COPY[id];
  return {
    title: copy.titleOverride ?? entry.title,
    description: copy.description,
    href: copy.href,
    imageSrc: entry.imageSrc,
    imageAlt: entry.imageAlt,
  };
});
