import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Adoração ao Santíssimo",
    date: "28 Jan",
    time: "19h - 21h",
    location: "Igreja Matriz",
  },
  {
    id: 2,
    title: "Encontro de Casais",
    date: "01 Fev",
    time: "20h",
    location: "Salão Paroquial",
  },
  {
    id: 3,
    title: "Retiro de Quaresma",
    date: "10 Fev",
    time: "8h - 17h",
    location: "Casa de Retiros",
  },
  {
    id: 4,
    title: "Bazar Beneficente",
    date: "15 Fev",
    time: "9h - 15h",
    location: "Pátio da Igreja",
  },
];

export function EventsSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Agenda</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Próximos Eventos
            </h2>
          </div>
          <Button asChild variant="secondary">
            <Link to="/agenda">
              Ver agenda completa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-accent rounded-lg text-accent-foreground">
                  <span className="text-xs font-medium uppercase">
                    {event.date.split(' ')[1]}
                  </span>
                  <span className="text-xl font-bold leading-none">
                    {event.date.split(' ')[0]}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold flex-1">
                  {event.title}
                </h3>
              </div>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
