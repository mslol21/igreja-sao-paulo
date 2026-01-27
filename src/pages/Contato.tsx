import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Cross, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-church.jpg";

const Contato = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Paróquia São Paulo Apóstolo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Estamos aqui para atendê-lo. Entre em contato conosco!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="sacred-divider">
            <Cross className="h-6 w-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. José Higino Neves, 1075<br />
                          Jardim São Paulo - SP
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <a href="tel:+551125553970" className="text-muted-foreground hover:text-accent transition-colors">
                          (11) 2555-3970
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Terça a Sexta: 9h às 12h e 13h30 às 17h<br />
                          Sábado: 9h às 12h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <a 
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre a paróquia." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale pelo WhatsApp
                  </a>
                </Button>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <a
                    href="https://instagram.com/paroquiaspaguaianases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Par%C3%B3quia-S%C3%A3o-Paulo-Ap%C3%B3stolo-Guaianases-100073569917650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com/paroquia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Envie uma Mensagem
              </h2>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(11) 99999-9999" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Sobre o que deseja falar?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 section-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Como Chegar
            </h2>
            <p className="text-muted-foreground">
              Encontre-nos no coração da cidade
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197590296618!2d-46.6388890845437!3d-23.561684267621082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1643723893121!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Paróquia"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
