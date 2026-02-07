export const siteInfo = {
  name: "Brasserie Saint Martin",
  description: "Cuisine traditionnelle et ambiance conviviale au cœur de Hyères.",
  address: "1 Place Saint-Martin, 83400 Hyères, France",
  phone: "+33494000000",
  email: "contact@brasseriesaintmartin.com",
  mapsLink: "https://goo.gl/maps/example",
  reservationLink: "https://www.thefork.fr/restaurant/brasserie-saint-martin-rXXXXXX",
  socials: {
    instagram: "https://instagram.com/brasseriesaintmartin",
    facebook: "https://facebook.com/brasseriesaintmartin",
    tripadvisor: "https://www.tripadvisor.fr/Restaurant_Review-gXXXX-dXXXX-Reviews-Brasserie_Saint_Martin-Hyeres_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html",
  },
  hours: {
    // 0 = Sunday, 1 = Monday, etc.
    monday: { open: 12, close: 14.5, open2: 19, close2: 22 },
    tuesday: { open: 12, close: 14.5, open2: 19, close2: 22 },
    wednesday: { open: 12, close: 14.5, open2: 19, close2: 22 },
    thursday: { open: 12, close: 14.5, open2: 19, close2: 22 },
    friday: { open: 12, close: 14.5, open2: 19, close2: 23 },
    saturday: { open: 12, close: 14.5, open2: 19, close2: 23 },
    sunday: { open: 12, close: 15, open2: null, close2: null }, // Continuous service for lunch
  },
  legal: {
    owner: "SAS Saint Martin",
    siret: "123 456 789 00010",
    rcs: "RCS Toulon 123 456 789",
    capital: "10 000 €",
    tva: "FR 00 123456789",
  }
};

export type SiteInfo = typeof siteInfo;
