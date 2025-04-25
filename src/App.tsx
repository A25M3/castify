
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
import Studio from "./pages/Studio";
import StartStreaming from "./pages/StartStreaming";
import Support from "./pages/Support";
import Safety from "./pages/Safety";
import Creators from "./pages/Creators";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Brand from "./pages/Brand";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookieSettings from "./pages/CookieSettings";
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
              
              {/* Platform */}
              <Route path="studio" element={<Studio />} />
              <Route path="start-streaming" element={<StartStreaming />} />
              
              {/* Support & Resources */}
              <Route path="support" element={<Support />} />
              <Route path="safety" element={<Safety />} />
              <Route path="creators" element={<Creators />} />
              <Route path="partners" element={<Partners />} />
              
              {/* Company */}
              <Route path="about" element={<About />} />
              <Route path="careers" element={<Careers />} />
              <Route path="press" element={<Press />} />
              <Route path="brand" element={<Brand />} />
              
              {/* Legal */}
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="cookie-settings" element={<CookieSettings />} />
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
