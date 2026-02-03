import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Carta", href: "#menu" },
  { name: "Galería", href: "#gallery" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <span className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
            Aurum
          </span>
          <span className="hidden sm:block text-primary text-xs tracking-[0.3em] uppercase font-accent">
            Fine Dining
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-accent text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <a href="#reservation">Reservar</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-accent text-lg tracking-wider text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>
                    Reservar Mesa
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
