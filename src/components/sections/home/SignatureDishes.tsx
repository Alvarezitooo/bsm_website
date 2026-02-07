import React from "react";
import signatureDishes from "@/data/signature.json";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageWrapper from "@/components/ImageWrapper";
import StaggerContainer from "@/components/animations/Stagger";
import Reveal from "@/components/animations/Reveal";

const SignatureDishes = () => {
  return (
    <Section className="bg-alt-bg">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-4xl md:text-5xl text-brand-gold">
            Nos Plats Signature
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-text">
            Une sélection de nos créations les plus appréciées, préparées avec passion.
          </p>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <Reveal key={index}>
              <Card className="h-full flex flex-col">
                <ImageWrapper
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  containerClassName="w-full"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-text">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text flex-grow">
                    {dish.description}
                  </p>
                  <p className="mt-4 font-bold text-lg text-brand-gold">
                    {dish.price}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default SignatureDishes;
