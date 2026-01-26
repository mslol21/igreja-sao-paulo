import { motion } from "framer-motion";
import { Clock, Cross } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const massSchedule = [
  {
    day: "Domingos",
    times: ["7h", "9h", "11h", "19h"],
    highlight: true,
  },
  {
    day: "Segunda a Sexta",
    times: ["7h", "19h"],
    highlight: false,
  },
  {
    day: "Sábados",
    times: ["7h", "17h"],
    highlight: false,
  },
];

export function MassTimesSection() {
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
          <div className="sacred-divider">
            <Cross className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Horários das Santas Missas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participe conosco das celebrações eucarísticas. 
            A comunidade espera por você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {massSchedule.map((schedule, index) => (
            <motion.div
              key={schedule.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`card-hover h-full ${schedule.highlight ? 'border-accent border-2' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    schedule.highlight ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}>
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {schedule.day}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {schedule.times.map((time) => (
                      <span
                        key={time}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          schedule.highlight 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {time}
                      </span>
                    ))}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong>Confissões:</strong> Sábados das 15h às 16h30 ou mediante agendamento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
