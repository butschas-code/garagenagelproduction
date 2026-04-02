import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Garage Nagel GmbH | Ihre Vertrauensgarage in Steinhausen ZG",
  description:
    "Garage Nagel GmbH in Steinhausen, Kanton Zug – Ihre zuverlässige Autowerkstatt für Service, Reparaturen, MFK-Vorbereitung, Diagnose und Pneu-Service. Faire Preise, kompetente Beratung und über Jahre bewährte Qualität. Jetzt Termin vereinbaren.",
  keywords: [
    "Garage Steinhausen",
    "Autowerkstatt Zug",
    "MFK Vorbereitung",
    "Autoservice Steinhausen",
    "Garage Nagel",
    "Autoreparatur Zug",
    "Pneu-Service",
    "Klimaservice Auto",
    "AGVS Garage",
    "Werkstatt Steinhausen",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Garage Nagel GmbH | Ihre Vertrauensgarage in Steinhausen ZG",
    description:
      "Zuverlässige Autowerkstatt in Steinhausen ZG – Service, Reparaturen, MFK-Vorbereitung und mehr. Faire Preise und kompetente Beratung.",
    url: "https://www.garage-nagel.ch",
    siteName: "Garage Nagel GmbH",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "https://www.garage-nagel.ch/images/logo.jpg",
        width: 630,
        height: 464,
        alt: "Garage Nagel GmbH",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Garage Nagel GmbH",
  image: "https://www.garage-nagel.ch/images/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sumpfstrasse 15",
    addressLocality: "Steinhausen",
    postalCode: "6312",
    addressRegion: "ZG",
    addressCountry: "CH",
  },
  telephone: "+41417402092",
  email: "fredy.graf@garage-nagel.ch",
  url: "https://www.garage-nagel.ch",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:30",
      closes: "12:00",
    },
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "13:15",
      closes: "17:30",
    },
    { dayOfWeek: "Friday", opens: "07:30", closes: "12:00" },
    { dayOfWeek: "Friday", opens: "13:15", closes: "17:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "6",
  },
  priceRange: "$$",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1964,
    longitude: 8.4864,
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh font-body">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
