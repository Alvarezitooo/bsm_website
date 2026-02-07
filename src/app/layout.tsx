import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brasserie Saint Martin - Restaurant à Hyères",
  description: "Découvrez une cuisine authentique et une ambiance chaleureuse à la Brasserie Saint Martin, votre nouvelle destination gourmande à Hyères.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { siteInfo } from "@/data/siteInfo";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: siteInfo.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteInfo.address.split(',')[0],
    addressLocality: 'Hyères',
    postalCode: '83400',
    addressCountry: 'FR'
  },
  telephone: siteInfo.phone,
  servesCuisine: 'French',
  priceRange: '€€-€€€',
  url: 'https://www.brasseriesaintmartin.com', // Replace with actual domain
  image: 'https://www.brasseriesaintmartin.com/og-image.jpg', // Replace with actual domain and image
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '12:00',
      closes: '14:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '19:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '12:00',
      closes: '14:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '19:00',
      closes: '23:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '15:00'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-bg text-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}