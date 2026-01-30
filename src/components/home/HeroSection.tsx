import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sao-paulo.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fachada da Paróquia São Paulo Apóstolo"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Bem-vindos à nossa comunidade
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Paróquia São Paulo
              <span className="block text-accent">Apóstolo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              "Uma comunidade de fé, oração e serviço no coração do Jardim São Paulo. 
              Juntos caminhamos na luz de Cristo."
            </p>

            {/* Quick Access Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/missas-sacramentos">
                  <Clock className="mr-2 h-5 w-5" />
                  Horários de Missa
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/agenda">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agenda Paroquial
                </Link>
              </Button>
            </div>

            {/* Secondary Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://wa.me/5511998677292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/paroquiaspaguaianases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Cross Pattern */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
          <rect x="45" y="10" width="10" height="80" className="text-primary-foreground" />
          <rect x="25" y="30" width="50" height="10" className="text-primary-foreground" />
        </svg>
      </div>
    </section>
  );
}
