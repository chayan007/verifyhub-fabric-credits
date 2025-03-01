
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApplicationProgress from "./pages/ApplicationProgress";
import Dashboard from "./pages/Dashboard";
import CreditPurchase from "./pages/CreditPurchase";
import VerificationForm from "./pages/VerificationForm";
import VerificationHistory from "./pages/VerificationHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/application-progress" element={<ApplicationProgress />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/credit-purchase" element={<CreditPurchase />} />
          <Route path="/verification/:type" element={<VerificationForm />} />
          <Route path="/verification-history" element={<VerificationHistory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
