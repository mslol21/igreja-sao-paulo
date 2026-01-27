import { useEffect, useState } from "react";
import { Navigate, Link, useLocation, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Clock, 
  Bell, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Cross
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";

const navigation = [
  { name: "Painel Geral", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Horários de Missa", href: "/admin/massas", icon: Clock },
  { name: "Avisos", href: "/admin/avisos", icon: Bell },
  { name: "Agenda", href: "/admin/agenda", icon: Calendar },
  { name: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

export function AdminLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.info("Você saiu do painel administrativo.");
    window.location.href = "/admin/login";
  };

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-primary text-primary-foreground">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary">
            <Cross className="h-5 w-5" />
          </div>
          <span className="font-heading font-bold text-lg">Admin Paróquia</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.href
                ? "bg-white/20 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 mt-auto">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 gap-3"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          Sair
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary/20 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary">
            <Cross className="h-4 w-4" />
          </div>
          <span className="font-heading font-bold">Admin</span>
        </div>
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-none w-64">
             <SidebarContent />
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-primary h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
