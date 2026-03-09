import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled || !isHome
    ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-card"
    : "bg-transparent border-b border-transparent";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`font-display text-xl font-bold transition-colors ${scrolled || !isHome ? 'text-foreground' : 'text-primary-foreground'}`}>
            RuralCare
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { to: "/symptom-checker", label: "Symptom Checker" },
            { to: "/medicine-search", label: "Find Medicine" },
            { to: "/patient/dashboard", label: "Patient" },
            { to: "/doctor/dashboard", label: "Doctor" },
            { to: "/pharmacy/dashboard", label: "Pharmacy" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled || !isHome ? 'text-muted-foreground' : 'text-primary-foreground/70 hover:text-primary-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/register">
            <Button size="sm" className="rounded-lg gradient-hero border-0 text-primary-foreground font-semibold">
              Get Started
            </Button>
          </Link>
        </nav>

        <button
          className={`md:hidden ${scrolled || !isHome ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3 p-4">
              {[
                { to: "/symptom-checker", label: "Symptom Checker" },
                { to: "/medicine-search", label: "Find Medicine" },
                { to: "/patient/dashboard", label: "Patient Dashboard" },
                { to: "/doctor/dashboard", label: "Doctor Dashboard" },
                { to: "/pharmacy/dashboard", label: "Pharmacy Dashboard" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link to="/register" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full gradient-hero border-0 text-primary-foreground">Get Started</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
