import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import MissasSacramentos from "./pages/MissasSacramentos";
import Agenda from "./pages/Agenda";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import EditMassTimes from "./pages/admin/EditMassTimes";
import EditAnnouncements from "./pages/admin/EditAnnouncements";
import { AdminLayout } from "./components/admin/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/missas-sacramentos" element={<MissasSacramentos />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contato" element={<Contato />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="massas" element={<EditMassTimes />} />
            <Route path="avisos" element={<EditAnnouncements />} />
            <Route path="agenda" element={<Dashboard />} /> {/* Placeholder */}
            <Route path="configuracoes" element={<Dashboard />} /> {/* Placeholder */}
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
