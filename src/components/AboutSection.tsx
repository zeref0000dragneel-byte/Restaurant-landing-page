import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/chef.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={chefImage}
                alt="Chef Ejecutivo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 -z-10" />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-primary p-6 shadow-elegant"
            >
              <p className="font-display text-4xl text-primary-foreground">25+</p>
              <p className="font-accent text-sm text-primary-foreground/80 tracking-wider">
                Años de Excelencia
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8"
          >
            <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Pasión por la
              <br />
              <span className="text-gradient-gold">alta cocina</span>
            </h2>
            <div className="divider-gold mb-8 mx-0" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Desde 1998, Aurum ha sido sinónimo de excelencia gastronómica en el
                corazón de la ciudad. Fundado por el Chef Marco Villanueva, nuestro
                restaurante nació de un sueño: crear un espacio donde cada plato
                cuente una historia.
              </p>
              <p>
                Nuestra filosofía se basa en el respeto por los ingredientes de
                temporada, la técnica clásica francesa y la osadía de la cocina
                contemporánea. Cada detalle, desde la selección de productos locales
                hasta la presentación final, refleja nuestro compromiso con la
                perfección.
              </p>
              <p>
                Con una estrella Michelin y múltiples reconocimientos internacionales,
                continuamos innovando mientras honramos las tradiciones que nos
                definieron.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="font-display text-2xl italic text-foreground">
                Marco Villanueva
              </p>
              <p className="font-accent text-sm text-muted-foreground tracking-wider mt-1">
                Chef Ejecutivo & Fundador
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
