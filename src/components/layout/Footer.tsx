import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

import { siteInfo } from "@/data/siteInfo";
import Container from "@/components/ui/Container";

const socialIcons = {
  instagram: <Instagram className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  tripadvisor: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13.3a3.3 3.3 0 1 0 0-6.6a3.3 3.3 0 0 0 0 6.6m-5.4-3.3a5.4 5.4 0 1 1 10.8 0a5.4 5.4 0 0 1-10.8 0m5.4 8.4a9.5 9.5 0 0 1-6.5-2.8c-3.8-3.8-3.8-10.3 0-14c3.8-3.8 10.3-3.8 14 0c.8.8 1.3 1.7 1.7 2.8h-3.2c-.3-1.2-1.3-2.2-2.5-2.2c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7h3.2c0 4.6-3.3 8.4-7.7 9.2Z"/></svg>,
};

const Footer = () => {
  return (
    <footer className="bg-alt-bg text-muted-text">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Col 1: Logo & About */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.svg"
                alt={siteInfo.name}
                width={160}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm">{siteInfo.description}</p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteInfo.phone}`} className="flex items-center hover:text-brand-gold transition-colors">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>{siteInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={siteInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-gold transition-colors">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>{siteInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horaires */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li>Lundi - Jeudi: 12h-14h30, 19h-22h</li>
              <li>Vendredi - Samedi: 12h-14h30, 19h-23h</li>
              <li>Dimanche: 12h-15h</li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-text mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {Object.entries(siteInfo.socials).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-text hover:text-brand-gold transition-colors"
                  aria-label={`Suivez-nous sur ${key}`}
                >
                  {socialIcons[key as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0">
            Site réalisé par <a href="https://matthieuvanes.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-brand-gold">Matthieu</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;