import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { siteInfo } from "@/data/siteInfo";

const ContactMap = () => {
  return (
    <Section id="contact" className="bg-alt-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-gold">
              Nous trouver
            </h2>
            <p className="mt-4 text-lg text-muted-text">
              Nous sommes impatients de vous accueillir. Réservez votre table ou contactez-nous pour toute question.
            </p>
            <div className="mt-8 space-y-4 text-text">
              <p><strong>Adresse :</strong> {siteInfo.address}</p>
              <p><strong>Téléphone :</strong> <a href={`tel:${siteInfo.phone}`} className="hover:text-brand-gold">{siteInfo.phone}</a></p>
              <p><strong>Email :</strong> <a href={`mailto:${siteInfo.email}`} className="hover:text-brand-gold">{siteInfo.email}</a></p>
            </div>
            <div className="mt-8">
              <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" size="lg">
                Réserver en ligne
              </Button>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.333309392293!2d6.126838676835863!3d43.12422837113618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c921e047215e15%3A0x992e355f53da71b!2sHy%C3%A8res!5e0!3m2!1sfr!2sfr!4v1678886456789!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation de la Brasserie Saint Martin"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default ContactMap;
