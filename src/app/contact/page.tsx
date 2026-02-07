import React from "react";
import Section from "@/components/ui/Section";
import ContactMap from "@/components/sections/home/ContactMap";

export const metadata = {
  title: "Contact - Brasserie Saint Martin",
  description: "Contactez la Brasserie Saint Martin à Hyères. Trouvez notre adresse, téléphone, et plan d'accès.",
};

const ContactPage = () => {
  return (
    // We can reuse the component from the homepage sections
    // This ensures consistency
    <Section>
      <ContactMap />
    </Section>
  );
};

export default ContactPage;
