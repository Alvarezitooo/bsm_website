"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ImageWrapper from "@/components/ImageWrapper";
import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";

import { motion } from "framer-motion";

const Atmosphere = () => {
  return (
    <Section id="ambiance">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <Reveal>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-gold">
                Une Ambiance Unique
              </h2>
              <motion.div 
                className="w-24 h-1 bg-accent-teal-soft my-6"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="prose prose-lg text-muted-text max-w-none">
                <p>
                  Plongez dans une atmosphère où l'élégance de la Riviera rencontre la convivialité d'une brasserie authentique. Notre salle lumineuse et notre terrasse ensoleillée sont une invitation à la détente.
                </p>
                <p>
                  Chaque détail, du mobilier chiné à l'éclairage tamisé en soirée, a été pensé pour faire de votre repas un moment mémorable, que ce soit pour un déjeuner d'affaires, un dîner romantique ou une célébration en famille.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Image Grid */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <ImageWrapper
                src="/images/atmosphere/ambiance-1.jpg"
                alt="Ambiance intérieure de la brasserie"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="space-y-4">
                <ImageWrapper
                  src="/images/atmosphere/ambiance-2.jpg"
                  alt="Détail de la décoration"
                  width={300}
                  height={184}
                  className="rounded-lg"
                />
                <ImageWrapper
                  src="/images/atmosphere/ambiance-3.jpg"
                  alt="Terrasse ensoleillée"
                  width={300}
                  height={184}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default Atmosphere;
