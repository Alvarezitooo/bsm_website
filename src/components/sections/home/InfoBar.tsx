import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";

import Container from "@/components/ui/Container";
import OpenStatusBadge from "@/components/OpenStatusBadge";
import { siteInfo } from "@/data/siteInfo";
import Reveal from "@/components/animations/Reveal";

const InfoBar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <Container className="py-4">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-muted-text">
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0" />
              <a href={siteInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
                {siteInfo.address}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
              <a href={`tel:${siteInfo.phone}`} className="hover:text-text transition-colors">
                {siteInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <OpenStatusBadge />
            </div>
            
            <div className="flex items-center gap-3 justify-start md:justify-end">
              <a href={siteInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="font-bold text-text hover:text-brand-gold transition-colors flex items-center">
                Itinéraire <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>

          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default InfoBar;
