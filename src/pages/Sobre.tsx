import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Cross, Heart, Users, Target, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-sao-paulo.jpg";

const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "Amar a Deus sobre todas as coisas e ao próximo como a nós mesmos.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Construir uma comunidade acolhedora, onde todos se sintam parte da família de Deus.",
  },
  {
    icon: BookOpen,
    title: "Evangelização",
    description: "Levar a Palavra de Deus a todos, com alegria e testemunho de vida.",
  },
  {
    icon: Target,
    title: "Serviço",
    description: "Servir aos mais necessitados, seguindo o exemplo de Jesus Cristo.",
  },
];

const pastoralTeam = [
  {
    name: "Pe. João da Silva",
    role: "Pároco",
    description: "Ordenado há 15 anos, lidera nossa comunidade com dedicação e amor pastoral.",
  },
  {
    name: "Pe. Carlos Santos",
    role: "Vigário Paroquial",
    description: "Responsável pela pastoral juvenil e catequese de adultos.",
  },
  {
    name: "Diác. Antônio Oliveira",
    role: "Diácono Permanente",
    description: "Coordena as pastorais sociais e o grupo de ministros da Eucaristia.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
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
              Sobre a Paróquia
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Conheça nossa história, missão e os valores que guiam nossa comunidade de fé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sacred-divider">
                <Cross className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                Nossa História
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  A Paróquia São Paulo Apóstolo é um marco de fé e devoção na Zona Leste de São Paulo. 
                  Nossa comunidade nasceu do desejo de evangelizar e acolher os fiéis, 
                  seguindo o exemplo do "Apóstolo das Gentes".
                </p>
                <p>
                  Localizada no Jardim São Paulo, nossa igreja matriz é um espaço de oração, 
                  celebração e encontro fraterno. Com uma arquitetura que convida ao recolhimento, 
                  acolhemos a todos que buscam a paz e a Palavra de Deus.
                </p>
                <p>
                  Hoje, somos uma comunidade vibrante, com diversas pastorais e movimentos, 
                  sempre empenhados em servir e testemunhar o Evangelho em nossa região.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Missão e Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa missão é anunciar Jesus Cristo e formar discípulos missionários, 
              construindo uma comunidade de fé, esperança e caridade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastoral Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Equipe Pastoral
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os pastores que guiam nossa comunidade no caminho da fé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pastoralTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
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

export default Sobre;
