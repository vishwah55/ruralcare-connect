import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SymptomCheckerPage from "./pages/SymptomCheckerPage";
import PatientDashboard from "./pages/PatientDashboard";
import HealthRecordsPage from "./pages/HealthRecordsPage";
import MedicineSearchPage from "./pages/MedicineSearchPage";
import DoctorDashboard from "./pages/DoctorDashboard";
import PharmacyDashboard from "./pages/PharmacyDashboard";
import VideoConsultationPage from "./pages/VideoConsultationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const noHeaderRoutes = ["/register", "/login", "/consultation"];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const hideHeader = noHeaderRoutes.includes(pathname);
  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/records" element={<HealthRecordsPage />} />
            <Route path="/medicine-search" element={<MedicineSearchPage />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/pharmacy/dashboard" element={<PharmacyDashboard />} />
            <Route path="/consultation" element={<VideoConsultationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
