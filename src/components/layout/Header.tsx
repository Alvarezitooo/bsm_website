"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteInfo } from "@/data/siteInfo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "La Carte", href: "/menu" },
  { name: "L'ambiance", href: "/#ambiance" },
  { name: "Avis", href: "/#avis" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    },
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0px 0px 0px rgb(0 0 0 / 0)",
    },
  };

  const linkColorClass = isScrolled ? "text-text" : "text-white";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full h-20 flex items-center"
      variants={headerVariants}
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Page d'accueil">
          <Image
            src="/logo.svg"
            alt={siteInfo.name}
            width={140}
            height={40}
            priority
            className={`h-10 w-auto transition-colors ${isScrolled ? '' : 'invert'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={`text-sm font-medium transition-colors hover:text-brand-gold ${linkColorClass}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center">
          <div className="hidden md:block">
            <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" size="sm">
              Réserver
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="sm" aria-label="Ouvrir le menu">
              <span className={linkColorClass}>
                {isMenuOpen ? <X /> : <Menu />}
              </span>
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full h-screen bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-2xl font-medium text-text hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Button href={siteInfo.reservationLink} target="_blank" rel="noopener noreferrer" size="lg" className="mt-8">
                Réserver une table
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;