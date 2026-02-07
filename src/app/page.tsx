import Hero from "@/components/sections/home/Hero";
import InfoBar from "@/components/sections/home/InfoBar";
import Atmosphere from "@/components/sections/home/Atmosphere";
import MenuPreview from "@/components/sections/home/MenuPreview";
import Reviews from "@/components/sections/home/Reviews";
import ContactMap from "@/components/sections/home/ContactMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBar />
      <Atmosphere />
      <MenuPreview />
      <Reviews />
      <ContactMap />
    </>
  );
}
