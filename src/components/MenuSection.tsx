import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const menuCategories = ["Entrantes", "Principales", "Postres"] as const;

const menuItems = {
  Entrantes: [
    {
      name: "Tartar de Atún Rojo",
      description: "Aguacate, sésamo negro, ponzu de yuzu y chips de wonton",
      price: "32€",
      image: dish1,
    },
    {
      name: "Carpaccio de Wagyu A5",
      description: "Trufa negra rallada, parmesano 36 meses y aceite de oliva arbequina",
      price: "45€",
    },
    {
      name: "Foie Gras Mi-Cuit",
      description: "Compota de higos, brioche tostado y escamas de sal Maldon",
      price: "38€",
    },
    {
      name: "Vieira Escocesa",
      description: "Coliflor texturizada, velouté de curry suave y caviar oscietra",
      price: "42€",
    },
  ],
  Principales: [
    {
      name: "Bogavante Bretón",
      description: "Bisque reducida, espárragos verdes y mantequilla de coral",
      price: "85€",
      image: dish2,
    },
    {
      name: "Solomillo de Buey Gallego",
      description: "Maduración 45 días, tuétano asado y reducción de Oporto",
      price: "68€",
    },
    {
      name: "Lubina Salvaje",
      description: "Escamas crujientes, hinojo braseado y beurre blanc de champagne",
      price: "52€",
    },
    {
      name: "Cordero Lechal",
      description: "24 horas a baja temperatura, cremoso de patata trufada",
      price: "58€",
    },
  ],
  Postres: [
    {
      name: "Esfera de Chocolate 70%",
      description: "Interior de passion fruit, crumble de avellana y helado de vainilla Bourbon",
      price: "22€",
      image: dish3,
    },
    {
      name: "Tarta Tatin",
      description: "Manzana caramelizada, helado de canela y crème fraîche",
      price: "18€",
    },
    {
      name: "Soufflé Grand Marnier",
      description: "Crema inglesa de naranja y cristales de azúcar",
      price: "24€",
    },
    {
      name: "Selección de Quesos",
      description: "5 variedades artesanales con membrillo y nueces caramelizadas",
      price: "28€",
    },
  ],
};

export function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<typeof menuCategories[number]>("Entrantes");

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra Carta
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            El sabor de la <span className="text-gradient-gold">excelencia</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada plato es una obra de arte cuidadosamente elaborada con los mejores
            ingredientes de temporada y la técnica de nuestro equipo culinario.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-accent text-sm md:text-base tracking-wider uppercase px-4 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-4">
                {item.image && (
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg text-primary flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 h-px bg-border group-hover:bg-primary/30 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Menú degustación disponible · IVA incluido · Alérgenos bajo petición
        </motion.p>
      </div>
    </section>
  );
}
