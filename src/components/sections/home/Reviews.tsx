"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/animations/Reveal";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const mockReviews = [
  {
    author: "Laura M.",
    source: "Google",
    rating: 5,
    content: "Un cadre magnifique et une cuisine à la hauteur. Le poulpe grillé est à tomber. Service impeccable, nous reviendrons !",
  },
  {
    author: "Julien P.",
    source: "TheFork",
    rating: 5,
    content: "La meilleure brasserie de Hyères, tout simplement. Les produits sont frais, les plats sont savoureux et l'ambiance est parfaite.",
  },
  {
    author: "Chloé D.",
    source: "TripAdvisor",
    rating: 4,
    content: "Très belle découverte. Le service était un peu lent car le restaurant était plein, mais la qualité des plats a largement compensé.",
  },
  {
    author: "Marc V.",
    source: "Google",
    rating: 5,
    content: "Le filet de bœuf Rossini est une pure merveille. Cuisson parfaite et saveurs incroyables. Une adresse à ne pas manquer.",
  },
  {
    author: "Sophie L.",
    source: "Facebook",
    rating: 5,
    content: "Terrasse très agréable avec vue sur le port. Idéal pour un déjeuner au soleil. Le personnel est adorable.",
  },
  {
    author: "Antoine B.",
    source: "Google",
    rating: 5,
    content: "Enfin un restaurant qui propose des plats traditionnels bien exécutés. Les frites maison sont un vrai plus. Bravo à toute l'équipe !",
  },
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollTo = React.useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const onInit = React.useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect();
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <Section id="avis">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-4xl md:text-5xl text-brand-gold">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-text">
            Votre satisfaction est notre plus grande récompense.
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex -ml-4">
              {mockReviews.map((review, index) => (
                <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4" key={index}>
                  <Reveal>
                    <Card className="h-full flex flex-col p-6 bg-alt-bg">
                      <div className="flex items-center mb-4">
                        <div className="flex text-brand-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-text text-sm mb-4 flex-grow">"{review.content}"</p>
                      <p className="font-bold text-text">{review.author} - <span className="font-normal text-muted-text">{review.source}</span></p>
                    </Card>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__dots flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot w-3 h-3 rounded-full bg-gray-300 transition-colors ${index === selectedIndex ? 'bg-brand-gold' : ''}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;