import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import AIgreja from "./pages/AIgreja";
import Contato from "./pages/Contato";
import Eventos from "./pages/Eventos";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <BrowserRouter>
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

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;