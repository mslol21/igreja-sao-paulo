import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Cross, Calendar, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-sao-paulo.jpg";

const news = [
  {
    id: 1,
    title: "Inscrições Abertas para Catequese 2024",
    excerpt: "As inscrições para a catequese de Primeira Eucaristia e Crisma estão abertas. Procure a secretaria paroquial para mais informações e documentação necessária.",
    date: "25 Janeiro 2024",
    category: "Catequese",
    priority: true,
  },
  {
    id: 2,
    title: "Festa do Padroeiro - Programação Completa",
    excerpt: "Prepare-se para a nossa festa patronal! Teremos novena solene, procissão, quermesse e apresentações culturais. Confira a programação completa.",
    date: "20 Janeiro 2024",
    category: "Festas",
    priority: true,
  },
  {
    id: 3,
    title: "Campanha de Arrecadação de Alimentos",
    excerpt: "Durante o mês de fevereiro, estaremos arrecadando alimentos não-perecíveis para famílias carentes do bairro. Sua contribuição faz a diferença!",
    date: "18 Janeiro 2024",
    category: "Solidariedade",
    priority: false,
  },
  {
    id: 4,
    title: "Novos Horários de Atendimento da Secretaria",
    excerpt: "A partir de fevereiro, a secretaria paroquial funcionará em novo horário: Segunda a Sexta das 9h às 18h, Sábados das 9h às 12h.",
    date: "15 Janeiro 2024",
    category: "Avisos",
    priority: false,
  },
  {
    id: 5,
    title: "Retiro de Quaresma: Inscrições Abertas",
    excerpt: "Prepare seu coração para a Páscoa! O retiro acontecerá nos dias 10 e 11 de fevereiro na Casa de Retiros São José. Vagas limitadas.",
    date: "12 Janeiro 2024",
    category: "Espiritualidade",
    priority: false,
  },
  {
    id: 6,
    title: "Mensagem do Pároco: Novo Ano, Nova Esperança",
    excerpt: "Que este novo ano seja repleto de bênçãos para cada família da nossa comunidade. Que possamos caminhar juntos no amor de Cristo...",
    date: "01 Janeiro 2024",
    category: "Pastoral",
    priority: false,
  },
];

const categoryColors: Record<string, string> = {
  "Catequese": "bg-parish-blue text-primary-foreground",
  "Festas": "bg-accent text-accent-foreground",
  "Solidariedade": "bg-green-600 text-white",
  "Avisos": "bg-muted text-muted-foreground",
  "Espiritualidade": "bg-purple-600 text-white",
  "Pastoral": "bg-primary text-primary-foreground",
};

const Noticias = () => {
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
            style={{ objectPosition: 'center 20%' }}
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
              Notícias e Avisos
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Fique por dentro das últimas novidades da nossa comunidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="sacred-divider">
            <Cross className="h-6 w-6 text-accent" />
          </div>

          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Destaques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.filter(n => n.priority).map((item, index) => (
                <Card key={item.id} className="card-hover border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={categoryColors[item.category]}>
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent">
                      Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* All News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Todas as Notícias
            </h2>
            <div className="grid gap-4">
              {news.filter(n => !n.priority).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className={categoryColors[item.category]}>
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {item.date}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {item.excerpt}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="flex-shrink-0">
                          Ler mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bulletin Section */}
      <section className="py-16 lg:py-24 section-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Boletim Paroquial
            </h2>
            <p className="text-muted-foreground mb-6">
              Baixe o boletim semanal com os avisos, reflexões e programação da paróquia.
            </p>
            <Button size="lg">
              Baixar Boletim da Semana
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Noticias;
