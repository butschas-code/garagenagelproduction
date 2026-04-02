export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export const reviews: Review[] = [
  {
    name: "Thomas M.",
    rating: 5,
    text: "Herr Graf ist ein ehrlicher und kompetenter Mechaniker. Er hat mir die Probleme am Fahrzeug gezeigt und nur das Nötige repariert. Faire Preise und top Arbeit!",
    date: "2024",
    source: "Google",
  },
  {
    name: "Sandra K.",
    rating: 5,
    text: "Endlich eine Garage, der man vertrauen kann! Fredy nimmt sich Zeit, erklärt alles verständlich und die Preise sind sehr fair. Kann ich nur weiterempfehlen.",
    date: "2024",
    source: "local.ch",
  },
  {
    name: "Marco B.",
    rating: 5,
    text: "Seit Jahren bringe ich meine Autos zu Fredy. Zuverlässig, ehrlich und handwerklich top. Der beste Mechaniker in der Region Zug.",
    date: "2023",
    source: "Google",
  },
  {
    name: "Ursula W.",
    rating: 5,
    text: "Als Frau fühle ich mich bei Fredy bestens aufgehoben. Er erklärt alles geduldig und ohne Fachjargon. Beim letzten Service hat er sogar ein Problem entdeckt, das eine andere Garage übersehen hatte. Sehr empfehlenswert!",
    date: "2024",
    source: "Google",
  },
  {
    name: "Daniel R.",
    rating: 5,
    text: "MFK-Vorbereitung war perfekt. Fredy hat alles geprüft, die nötigen Reparaturen fair berechnet und mein Auto ist ohne Beanstandung durch die Prüfung gekommen. Top Service.",
    date: "2023",
    source: "local.ch",
  },
  {
    name: "Petra & Hans L.",
    rating: 5,
    text: "Wir bringen beide unsere Autos seit der Eröffnung zu Fredy. Was uns überzeugt: Er zeigt immer die alten Teile und erklärt, warum etwas gemacht werden musste. So eine Transparenz ist selten. Absolute Vertrauenssache.",
    date: "2024",
    source: "Google",
  },
];
