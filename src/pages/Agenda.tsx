import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, Cross } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-sao-paulo.jpg";

const events = [
  {
    id: 1,
    title: "Adoração ao Santíssimo",
    date: "28 Janeiro 2024",
    day: "28",
    month: "Jan",
    time: "19h - 21h",
    location: "Igreja Matriz",
    category: "Oração",
  },
  {
    id: 2,
    title: "Encontro de Casais",
    date: "01 Fevereiro 2024",
    day: "01",
    month: "Fev",
    time: "20h",
    location: "Salão Paroquial",
    category: "Pastoral",
  },
  {
    id: 3,
    title: "Retiro de Quaresma",
    date: "10 Fevereiro 2024",
    day: "10",
    month: "Fev",
    time: "8h - 17h",
    location: "Casa de Retiros São José",
    category: "Retiro",
  },
  {
    id: 4,
    title: "Bazar Beneficente",
    date: "15 Fevereiro 2024",
    day: "15",
    month: "Fev",
    time: "9h - 15h",
    location: "Pátio da Igreja",
    category: "Eventos",
  },
  {
    id: 5,
    title: "Via Sacra",
    date: "16 Fevereiro 2024",
    day: "16",
    month: "Fev",
    time: "19h",
    location: "Igreja Matriz",
    category: "Quaresma",
  },
  {
    id: 6,
    title: "Formação de Ministros",
    date: "22 Fevereiro 2024",
    day: "22",
    month: "Fev",
    time: "19h30",
    location: "Salão Paroquial",
    category: "Formação",
  },
  {
    id: 7,
    title: "Missa de Cinzas",
    date: "14 Fevereiro 2024",
    day: "14",
    month: "Fev",
    time: "7h, 12h e 19h",
    location: "Igreja Matriz",
    category: "Quaresma",
  },
  {
    id: 8,
    title: "Reunião do Conselho Pastoral",
    date: "25 Fevereiro 2024",
    day: "25",
    month: "Fev",
    time: "15h",
    location: "Sala de Reuniões",
    category: "Pastoral",
  },
];

const categoryColors: Record<string, string> = {
  "Oração": "bg-parish-blue text-primary-foreground",
  "Pastoral": "bg-accent text-accent-foreground",
  "Retiro": "bg-green-600 text-white",
  "Eventos": "bg-pink-600 text-white",
  "Quaresma": "bg-purple-600 text-white",
  "Formação": "bg-orange-600 text-white",
};


const Agenda = () => {
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
              Agenda Paroquial
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Confira todos os eventos, celebrações e atividades da nossa comunidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="sacred-divider">
            <Cross className="h-6 w-6 text-accent" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Próximos Eventos
            </h2>
            <p className="text-muted-foreground">
              Participe das atividades da comunidade
            </p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-stretch">
                      {/* Date Column */}
                      <div className="flex flex-col items-center justify-center w-20 md:w-24 bg-primary text-primary-foreground py-4 flex-shrink-0">
                        <span className="text-2xl md:text-3xl font-bold">{event.day}</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">{event.month}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {event.title}
                          </h3>
                          <Badge className={categoryColors[event.category] || "bg-muted text-muted-foreground"}>
                            {event.category}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Para mais informações sobre os eventos, entre em contato com a secretaria paroquial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regular Activities */}
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
              Atividades Semanais
            </h2>
            <p className="text-muted-foreground">
              Encontros e grupos que se reúnem regularmente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { day: "Segunda", activity: "Missa pelas Almas", time: "20h" },
              { day: "Terça", activity: "Confissões", time: "13h30 - 17h" },
              { day: "Terça", activity: "Terço dos Homens", time: "20h" },
              { day: "Terça", activity: "Mães que Oram pelos Filhos", time: "20h" },
              { day: "Quarta", activity: "Grupo de Oração Dom Bosco", time: "19h30" },
              { day: "Sexta", activity: "Missa Semanal", time: "10h" },
            ].map((item, index) => (
              <motion.div
                key={`${item.day}-${item.activity}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <p className="text-accent font-medium text-sm uppercase tracking-wider mb-1">
                      {item.day}
                    </p>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.activity}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agenda;
