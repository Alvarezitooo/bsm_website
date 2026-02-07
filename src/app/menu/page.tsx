import React from "react";
import menuData from "@/data/menu.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export const metadata = {
  title: "La Carte - Brasserie Saint Martin",
  description: "Découvrez la carte complète de la Brasserie Saint Martin à Hyères. Entrées, plats, desserts et boissons.",
};

const MenuPage = () => {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-brand-gold">
              Notre Carte
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-text">
              Des saveurs authentiques, des produits frais et une passion pour la bonne cuisine.
            </p>
            <div className="mt-6">
              <Button href="/menu.pdf" variant="secondary" icon={Download} target="_blank">
                Télécharger la carte en PDF
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 max-w-4xl mx-auto">
          {menuData.categories.map((category, index) => (
            <Reveal key={index} className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-accent-teal-soft mb-6 pb-2 border-b-2 border-accent-teal-soft/20">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-text">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-muted-text mt-1">{item.description}</p>
                      )}
                    </div>
                    <p className="text-lg font-bold text-brand-gold flex-shrink-0 whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MenuPage;
