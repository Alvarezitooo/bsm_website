import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { siteInfo } from "@/data/siteInfo";

const Hero = () => {
  return (
    <section className="bg-alt-bg">
      <Container className="flex min-h-[90vh] items-center justify-center text-center">
        <div className="py-24 sm:py-32">
          <Reveal>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text">
              Brasserie Saint Martin
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-text">
              Une expérience culinaire authentique à Hyères, quartier Saint Martin.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" size="lg">
                Réserver une Table
              </Button>
              <Button href="/menu" variant="secondary" size="lg">
                Voir le Menu
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
