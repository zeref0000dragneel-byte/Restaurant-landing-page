import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Encuéntranos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Nuestra <span className="text-gradient-gold">ubicación</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6234795675!2d-3.6942!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df23%3A0x8b2e4f8b2e4f8b2e!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1629789012345!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
            <div className="absolute inset-0 pointer-events-none border border-primary/20" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Dirección
                  </h3>
                  <p className="text-muted-foreground">
                    Calle Gran Vía, 45<br />
                    28013 Madrid, España
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Horario
                  </h3>
                  <p className="text-muted-foreground">
                    Mar - Vie: 13:30 - 15:30 / 20:30 - 23:00<br />
                    Sáb - Dom: 13:00 - 16:00 / 20:00 - 23:30<br />
                    <span className="text-primary">Lunes cerrado</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+34912345678"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 91 234 5678
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@aurum.es"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@aurum.es
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="pt-6 border-t border-border">
                <p className="font-accent text-sm text-muted-foreground tracking-wider uppercase mb-4">
                  Síguenos
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-secondary flex items-center justify-center hover:bg-primary group transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-secondary flex items-center justify-center hover:bg-primary group transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
