import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl text-foreground mb-2">Aurum</h3>
            <p className="font-accent text-xs tracking-[0.3em] text-primary uppercase">
              Fine Dining
            </p>
          </div>

          {/* Center - Quote */}
          <div className="text-center">
            <p className="font-accent text-lg italic text-muted-foreground">
              "La cocina es un arte que se saborea"
            </p>
            <p className="font-display text-sm text-foreground mt-2">
              — Marco Villanueva
            </p>
          </div>

          {/* Right - Contact */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Calle Gran Vía, 45<br />
              28013 Madrid, España
            </p>
            <p className="text-primary mt-2">+34 91 234 5678</p>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} Aurum Restaurant. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
