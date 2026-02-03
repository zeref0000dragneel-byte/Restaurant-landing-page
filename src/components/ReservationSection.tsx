import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";

export function ReservationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
    alert("¡Gracias! Confirmaremos su reserva en breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Reservas
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Reserve su <span className="text-gradient-gold">experiencia</span>
            </h2>
            <div className="divider-gold mb-8 mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para asegurar la mejor experiencia posible, le recomendamos realizar
              su reserva con al menos 48 horas de antelación. Para grupos mayores
              de 8 personas o eventos privados, contáctenos directamente.
            </p>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-foreground font-display">+34 91 234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-display">reservas@aurum.es</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-card p-6 border border-border">
              <h3 className="font-display text-xl text-foreground mb-4">
                Horarios
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes</span>
                  <span className="text-foreground">Cerrado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Martes - Viernes</span>
                  <span className="text-foreground">13:30 - 15:30 / 20:30 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado - Domingo</span>
                  <span className="text-foreground">13:00 - 16:00 / 20:00 - 23:30</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 border border-border shadow-elegant"
            >
              <h3 className="font-display text-2xl text-foreground mb-8 text-center">
                Solicitar Reserva
              </h3>

              <div className="grid gap-6">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-12 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-12 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-12 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-12 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-12 py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Seleccionar hora</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border px-12 py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <textarea
                  name="message"
                  placeholder="Peticiones especiales, alergias, ocasión..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-secondary border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />

                {/* Submit */}
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Confirmar Reserva
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Le confirmaremos su reserva en las próximas 24 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
