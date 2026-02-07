"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteInfo } from "@/data/siteInfo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinksLeft = [
  { name: "La Carte", href: "/menu" },
  { name: "L'ambiance", href: "/#ambiance" },
];

const navLinksRight = [
  { name: "Avis", href: "/#avis" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const headerVariants = {
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0px 0px 0px rgb(0 0 0 / 0)",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  };

  const linkColorClass = isScrolled ? "text-text" : "text-white";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      variants={headerVariants}
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Container className="flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 w-1/3 justify-start">
          {navLinksLeft.map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-brand-gold ${linkColorClass}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Centered Logo */}
        <div className="w-1/3 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt={siteInfo.name}
                width={160}
                height={57}
                priority
                className="h-14 w-auto"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right Nav & Actions */}
        <div className="w-1/3 flex justify-end items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinksRight.map((link) => (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-brand-gold ${linkColorClass}`}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block ml-8">
            <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" size="sm">
              Réserver
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="sm" className={linkColorClass}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <nav className="flex flex-col items-center space-y-4 p-8">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <Link key={link.name} href={link.href} className="text-lg font-medium text-text hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" className="mt-4">
              Réserver une table
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
