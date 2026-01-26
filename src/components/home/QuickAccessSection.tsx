import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  MessageCircle, 
  Instagram, 
  Heart, 
  Users 
} from "lucide-react";

const quickLinks = [
  {
    title: "Horários de Missa",
    description: "Confira os horários das celebrações",
    icon: Clock,
    href: "/missas-sacramentos",
    color: "bg-primary",
  },
  {
    title: "Agenda Paroquial",
    description: "Eventos e atividades da comunidade",
    icon: Calendar,
    href: "/agenda",
    color: "bg-parish-blue-light",
  },
  {
    title: "Fale Conosco",
    description: "Entre em contato via WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5511999999999",
    external: true,
    color: "bg-green-600",
  },
  {
    title: "Instagram",
    description: "Siga-nos nas redes sociais",
    icon: Instagram,
    href: "https://instagram.com/paroquia",
    external: true,
    color: "bg-pink-600",
  },
  {
    title: "Pastorais",
    description: "Conheça nossos grupos e pastorais",
    icon: Users,
    href: "/sobre",
    color: "bg-accent",
  },
  {
    title: "Dízimo",
    description: "Contribua com nossa comunidade",
    icon: Heart,
    href: "/contato",
    color: "bg-red-600",
  },
];

export function QuickAccessSection() {
  return (
    <section className="py-16 lg:py-24 section-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Acesso Rápido
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre rapidamente o que você precisa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-all cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${link.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground hidden md:block">
                  {link.description}
                </p>
              </motion.div>
            );

            if (link.external) {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={link.title} to={link.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
