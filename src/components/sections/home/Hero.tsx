import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { siteInfo } from "@/data/siteInfo";

const Hero = () => {
  return (
    <section className="relative bg-alt-bg overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt=""
          width={800}
          height={284}
          className="h-auto w-3/4 max-w-4xl opacity-20"
          aria-hidden="true"
          priority
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/30" />

      <Container className="relative z-10 flex min-h-[80vh] items-center text-center sm:items-end sm:text-left">
        <div className="w-full py-20 sm:pb-32 sm:pt-0">
          
          <Reveal>
            <h1 className="font-serif text-4xl text-white sm:sr-only">
              Brasserie Saint Martin
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-white/90 mx-auto sm:mx-0">
              Une expérience culinaire authentique à Hyères, quartier Saint Martin.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
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
