import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Cross, Clock, Phone, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sacramentos = [
  {
    id: "batismo",
    title: "Batismo",
    description: "O primeiro sacramento que nos torna filhos de Deus e membros da Igreja.",
    requirements: [
      "Certidão de nascimento da criança",
      "Documentos dos pais e padrinhos",
      "Curso de preparação para os pais (sábados, 14h)",
      "Padrinhos devem ser batizados e crismados",
    ],
    schedule: "Domingos às 12h30 (mediante agendamento)",
  },
  {
    id: "eucaristia",
    title: "Primeira Eucaristia",
    description: "A preparação para receber Jesus na Eucaristia pela primeira vez.",
    requirements: [
      "Idade mínima: 9 anos",
      "Certidão de batismo",
      "2 anos de catequese",
      "Participação na missa dominical",
    ],
    schedule: "Catequese: Sábados das 9h às 10h30",
  },
  {
    id: "crisma",
    title: "Crisma",
    description: "O sacramento que confirma e fortalece a graça do Batismo.",
    requirements: [
      "Idade mínima: 14 anos",
      "Certidão de batismo",
      "2 anos de preparação",
      "Participação ativa na comunidade",
    ],
    schedule: "Catequese: Sábados das 16h às 17h30",
  },
  {
    id: "casamento",
    title: "Matrimônio",
    description: "O sacramento que une o casal no amor de Cristo.",
    requirements: [
      "Documentos pessoais dos noivos",
      "Certidão de batismo atualizada",
      "Curso de noivos (obrigatório)",
      "Agendar com 6 meses de antecedência",
    ],
    schedule: "Agendamento na secretaria paroquial",
  },
  {
    id: "confissao",
    title: "Confissão",
    description: "O sacramento da reconciliação com Deus e com a Igreja.",
    requirements: [
      "Exame de consciência prévio",
      "Arrependimento sincero",
      "Propósito de mudança de vida",
    ],
    schedule: "Sábados: 15h às 16h30 | Antes das missas (30 min)",
  },
  {
    id: "uncao",
    title: "Unção dos Enfermos",
    description: "O sacramento que fortalece os doentes e idosos.",
    requirements: [
      "Pessoa enferma ou idosa",
      "Solicitar à secretaria ou ao pároco",
      "Em casos de urgência, ligar para a paróquia",
    ],
    schedule: "Mediante solicitação | Emergências: 24h",
  },
];

const MissasSacramentos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Missas e Sacramentos
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Horários das celebrações e informações sobre os sacramentos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mass Times */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sacred-divider">
              <Cross className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Horários das Santas Missas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="border-accent border-2">
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">Domingos e Festas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-accent">7h | 9h | 11h | 19h</p>
                    <p className="text-sm text-muted-foreground">Missa das 9h: com catequese infantil</p>
                    <p className="text-sm text-muted-foreground">Missa das 11h: transmitida ao vivo</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">Segunda a Sexta</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-foreground">7h | 19h</p>
                    <p className="text-sm text-muted-foreground">Após a missa das 19h: novena</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">Sábados</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-foreground">7h | 17h</p>
                    <p className="text-sm text-muted-foreground">Confissões: 15h às 16h30</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Em dias santos de guarda e datas especiais, confira a programação na seção de avisos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sacraments */}
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
              Os Sacramentos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os sacramentos são sinais eficazes da graça de Deus. 
              Conheça os requisitos e como agendar cada um deles.
            </p>
          </motion.div>

          <Tabs defaultValue="batismo" className="max-w-4xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              {sacramentos.map((s) => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  {s.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {sacramentos.map((sacramento) => (
              <TabsContent key={sacramento.id} value={sacramento.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        {sacramento.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {sacramento.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-accent" />
                            Requisitos
                          </h4>
                          <ul className="space-y-2">
                            {sacramento.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-accent" />
                            Horários
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            {sacramento.schedule}
                          </p>
                          
                          <Button asChild>
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                              <Phone className="mr-2 h-4 w-4" />
                              Agendar
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default MissasSacramentos;
