import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Bell, 
  Clock, 
  ArrowUpRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { name: "Pastorais", value: "12", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Próximos Eventos", value: "8", icon: Calendar, color: "text-green-600", bg: "bg-green-100" },
  { name: "Avisos Ativos", value: "5", icon: Bell, color: "text-amber-600", bg: "bg-amber-100" },
  { name: "Missas / Semana", value: "24", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-heading mb-2">Bem-vindo ao Painel</h1>
        <p className="text-muted-foreground">Gerencie o conteúdo do site da Paróquia São Paulo Apóstolo.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>O que você deseja fazer hoje?</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
              <Link to="/admin/massas">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Editar Missas</div>
                  <div className="text-xs text-muted-foreground">Alterar horários semanais</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
              <Link to="/admin/avisos">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Novo Aviso</div>
                  <div className="text-xs text-muted-foreground">Publicar comunicado urgente</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
              <Link to="/admin/agenda">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Agenda</div>
                  <div className="text-xs text-muted-foreground">Gerenciar calendário paroquial</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
              <Link to="/admin/configuracoes">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Ver Site</div>
                  <div className="text-xs text-muted-foreground">Visualizar site público</div>
                </div>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimas Atualizações</CardTitle>
            <CardDescription>Atividades recentes no painel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Horários de Domingo alterados", date: "Hoje, 14:30", user: "Admin" },
                { title: "Novo aviso: Quermesse 2024", date: "Ontem, 10:15", user: "Admin" },
                { title: "Foto da paróquia atualizada", date: "2 dias atrás", user: "Admin" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-xs">{item.date} • por {item.user}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
