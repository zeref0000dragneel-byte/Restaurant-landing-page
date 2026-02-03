import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";

const galleryImages = [
  { src: gallery1, alt: "Salón privado", span: "col-span-2" },
  { src: gallery2, alt: "Bodega de vinos", span: "row-span-2" },
  { src: gallery3, alt: "Cocktail bar", span: "" },
  { src: dish1, alt: "Plato signature", span: "" },
  { src: gallery4, alt: "Mesa elegante", span: "" },
  { src: dish2, alt: "Mariscos frescos", span: "" },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Galería
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Momentos de <span className="text-gradient-gold">elegancia</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-accent text-sm tracking-wider text-foreground">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
