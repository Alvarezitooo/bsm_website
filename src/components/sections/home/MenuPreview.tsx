import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { Download, BookOpen } from "lucide-react";

const MenuPreview = () => {
  return (
    <Section className="bg-alt-bg">
      <Container className="text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold">
            Découvrez Notre Carte
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-text">
            Une cuisine de saison qui sublime les produits frais et locaux de notre région.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/menu" variant="primary" size="lg" icon={BookOpen}>
              Voir la carte complète
            </Button>
            <Button href="/menu.pdf" variant="secondary" size="lg" icon={Download} target="_blank">
              Télécharger le PDF
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
};

export default MenuPreview;
