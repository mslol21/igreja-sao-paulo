import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Plus, Trash2, Save, FileText } from "lucide-react";
import { toast } from "sonner";

export default function EditAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Inscrições para Catequese", date: "20/01/2024", content: "Estão abertas as inscrições para a catequese infantil e de adultos." },
    { id: 2, title: "Reunião de Pais", date: "25/01/2024", content: "Convidamos todos os pais para uma reunião importante no salão paroquial." },
  ]);

  const handleAddField = () => {
    const newId = announcements.length > 0 ? Math.max(...announcements.map(a => a.id)) + 1 : 1;
    setAnnouncements([...announcements, { id: newId, title: "", date: new Date().toLocaleDateString('pt-BR'), content: "" }]);
  };

  const handleRemoveField = (id: number) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  const handleChange = (id: number, field: string, value: string) => {
    setAnnouncements(announcements.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const handleSave = () => {
    toast.success("Avisos atualizados com sucesso!");
    console.log("Saving announcements:", announcements);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2 text-foreground">Avisos e Comunicados</h1>
          <p className="text-muted-foreground">Gerencie o que aparece na seção de avisos do site.</p>
        </div>
        <Button className="gap-2" onClick={handleSave}>
          <Save className="w-5 h-5" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {announcements.map((item, index) => (
          <Card key={item.id} className="relative group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                Aviso #{index + 1}
              </CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleRemoveField(item.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Título do Aviso</Label>
                  <Input 
                    value={item.title} 
                    onChange={(e) => handleChange(item.id, "title", e.target.value)}
                    placeholder="Ex: Bazar Beneficente"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Data de Publicação</Label>
                  <Input 
                    value={item.date} 
                    onChange={(e) => handleChange(item.id, "date", e.target.value)}
                    placeholder="dd/mm/aaaa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Conteúdo do Comunicado</Label>
                <Textarea 
                  value={item.content} 
                  onChange={(e) => handleChange(item.id, "content", e.target.value)}
                  placeholder="Escreva aqui o texto do aviso..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          variant="outline" 
          className="w-full py-10 border-dashed border-2 flex flex-col gap-2 h-auto hover:bg-primary/5 transition-colors"
          onClick={handleAddField}
        >
          <Plus className="w-6 h-6 text-primary" />
          <span className="font-semibold text-primary">Criar Novo Aviso</span>
        </Button>
      </div>
    </div>
  );
}
