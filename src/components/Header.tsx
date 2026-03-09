import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">RuralCare</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/symptom-checker" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Symptom Checker</Link>
          <Link to="/medicine-search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Find Medicine</Link>
          <Link to="/patient/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Patient</Link>
          <Link to="/doctor/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Doctor</Link>
          <Link to="/pharmacy/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pharmacy</Link>
          <Link to="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-3">
            <Link to="/symptom-checker" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Symptom Checker</Link>
            <Link to="/medicine-search" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Find Medicine</Link>
            <Link to="/patient/dashboard" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Patient Dashboard</Link>
            <Link to="/doctor/dashboard" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Doctor Dashboard</Link>
            <Link to="/pharmacy/dashboard" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Pharmacy Dashboard</Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
