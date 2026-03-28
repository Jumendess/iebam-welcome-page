import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Index from "./pages/Index";
import Home from "./pages/Home";
import AIgreja from "./pages/AIgreja";
import Contato from "./pages/Contato";
import Eventos from "./pages/Eventos";
import Galeria from "./pages/Galeria";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redireciona "/" para "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Página original mantida em /porta */}
          <Route path="/porta" element={<Index />} />

          {/* Nova home */}
          <Route path="/home" element={<Home />} />
          <Route path="/a-igreja" element={<AIgreja />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/admin" element={<Admin />} />

          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;