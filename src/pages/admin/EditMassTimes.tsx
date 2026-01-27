import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Plus, Trash2, Save } from "lucide-react";
import { toast } from "sonner";

export default function EditMassTimes() {
  const [massTimes, setMassTimes] = useState([
    { id: 1, day: "Domingos e Festas", times: "7h | 9h | 11h | 19h", notes: "Missa das 9h: com catequese infantil" },
    { id: 2, day: "Segunda a Sexta", times: "7h | 19h", notes: "Após a missa das 19h: novena" },
    { id: 3, day: "Sábados", times: "7h | 17h", notes: "Confissões: 15h às 16h30" },
  ]);

  const handleAddField = () => {
    const newId = massTimes.length > 0 ? Math.max(...massTimes.map(m => m.id)) + 1 : 1;
    setMassTimes([...massTimes, { id: newId, day: "", times: "", notes: "" }]);
  };

  const handleRemoveField = (id: number) => {
    setMassTimes(massTimes.filter(m => m.id !== id));
  };

  const handleChange = (id: number, field: string, value: string) => {
    setMassTimes(massTimes.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const handleSave = () => {
    toast.success("Horários de missa atualizados com sucesso!");
    // In a real app, this would be an API call
    console.log("Saving mass times:", massTimes);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2 text-foreground">Horários de Missa</h1>
          <p className="text-muted-foreground">Gerencie os horários das celebrações no site.</p>
        </div>
        <Button className="gap-2" onClick={handleSave}>
          <Save className="w-5 h-5" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {massTimes.map((item, index) => (
          <Card key={item.id} className="relative group overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Grupo de Horários #{index + 1}
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
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <Label>Dia(s) / Categoria</Label>
                <Input 
                  value={item.day} 
                  onChange={(e) => handleChange(item.id, "day", e.target.value)}
                  placeholder="Ex: Domingos e Festas"
                />
              </div>
              <div className="space-y-2">
                <Label>Horários</Label>
                <Input 
                  value={item.times} 
                  onChange={(e) => handleChange(item.id, "times", e.target.value)}
                  placeholder="Ex: 7h | 9h | 11h"
                />
              </div>
              <div className="space-y-2 lg:col-span-1">
                <Label>Observações / Notas</Label>
                <Textarea 
                  value={item.notes} 
                  onChange={(e) => handleChange(item.id, "notes", e.target.value)}
                  placeholder="Ex: Missa com catequese..."
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          variant="outline" 
          border-dashed="true" 
          className="w-full py-10 border-dashed border-2 flex flex-col gap-2 h-auto hover:bg-primary/5 transition-colors"
          onClick={handleAddField}
        >
          <Plus className="w-6 h-6 text-primary" />
          <span className="font-semibold text-primary">Adicionar Novo Grupo</span>
        </Button>
      </div>
    </div>
  );
}
