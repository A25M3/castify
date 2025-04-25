
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import Category from "./pages/Category";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Import context providers
import { AuthProvider } from "./lib/auth-context";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="browse" element={<Browse />} />
              <Route path="categories" element={<Browse />} />
              <Route path="category/:id" element={<Category />} />
              <Route path="channel/:username" element={<Channel />} />
              <Route path="dashboard" element={<Dashboard />} />
              
              {/* Support & Resources */}
              <Route path="support" element={<NotFound />} />
              <Route path="safety" element={<NotFound />} />
              <Route path="creators" element={<NotFound />} />
              <Route path="partners" element={<NotFound />} />
              <Route path="studio" element={<NotFound />} />
              <Route path="start-streaming" element={<NotFound />} />
              
              {/* Company */}
              <Route path="about" element={<NotFound />} />
              <Route path="careers" element={<NotFound />} />
              <Route path="press" element={<NotFound />} />
              <Route path="brand" element={<NotFound />} />
              
              {/* Legal */}
              <Route path="terms" element={<NotFound />} />
              <Route path="privacy" element={<NotFound />} />
              <Route path="cookie-settings" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
