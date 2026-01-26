import { motion } from "framer-motion";
import { Bell, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const announcements = [
  {
    id: 1,
    title: "Inscrições Abertas para Catequese 2024",
    description: "As inscrições para a catequese de Primeira Eucaristia e Crisma estão abertas. Procure a secretaria paroquial.",
    date: "25 Jan 2024",
    priority: true,
  },
  {
    id: 2,
    title: "Festa do Padroeiro",
    description: "Prepare-se para a nossa festa patronal! Programação especial durante toda a semana.",
    date: "20 Jan 2024",
    priority: false,
  },
  {
    id: 3,
    title: "Campanha de Arrecadação",
    description: "Participe da nossa campanha de arrecadação de alimentos para famílias carentes.",
    date: "18 Jan 2024",
    priority: false,
  },
];

export function AnnouncementsSection() {
  return (
    <section className="py-16 lg:py-24">
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
              <Bell className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Avisos</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Avisos da Semana
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/noticias">
              Ver todos os avisos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`card-hover h-full ${announcement.priority ? 'border-l-4 border-l-accent' : ''}`}>
                <CardContent className="p-6">
                  {announcement.priority && (
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                      Importante
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground mb-2">{announcement.date}</p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {announcement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
