import { Link } from "react-router-dom";
import { Heart, Stethoscope, Brain, Pill, Video, Shield, ArrowRight, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Brain, title: "AI Symptom Checker", description: "Describe your symptoms and get instant AI-powered health assessments with urgency classification.", color: "text-primary" },
  { icon: Video, title: "Video Consultations", description: "Connect face-to-face with qualified doctors from the comfort of your village.", color: "text-secondary" },
  { icon: Pill, title: "Medicine Finder", description: "Search nearby pharmacies to find available medicines and check stock in real-time.", color: "text-warning" },
  { icon: Shield, title: "Health Records", description: "Secure digital health records accessible anytime, with past consultations and prescriptions.", color: "text-primary" },
  { icon: Users, title: "Doctor Network", description: "Access a curated network of specialist doctors serving rural communities.", color: "text-secondary" },
  { icon: MapPin, title: "Works Offline", description: "Designed as a PWA for low-bandwidth areas. Access key features even without internet.", color: "text-success" },
];

const stats = [
  { value: "10K+", label: "Patients Served" },
  { value: "500+", label: "Village Coverage" },
  { value: "200+", label: "Doctors Available" },
  { value: "95%", label: "Satisfaction Rate" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero px-4 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Heart className="h-4 w-4" />
            Smart Healthcare for Rural Communities
          </div>
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Quality Healthcare,<br />Wherever You Are
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
            RuralCare connects patients in remote villages with doctors, AI-powered diagnosis, and nearby pharmacies — all from your phone.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold px-8">
                Start Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/symptom-checker">
              <Button size="lg" variant="outline" className="gap-2 border-white/30 text-base font-semibold text-white hover:bg-white/10 px-8">
                <Brain className="h-4 w-4" /> Check Symptoms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-12">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-fade-in">
              <div className="font-display text-3xl font-extrabold text-gradient md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need for<br />Rural Healthcare
            </h2>
            <p className="text-muted-foreground">Built for low-bandwidth environments with simple, mobile-first interfaces that anyone can use.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-muted/50 py-20 px-4">
        <div className="container">
          <h2 className="mb-14 text-center font-display text-3xl font-bold text-foreground">How It Works</h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Register", desc: "Create your health profile in under 2 minutes" },
              { step: "2", title: "Check Symptoms", desc: "AI analyzes your symptoms and suggests urgency" },
              { step: "3", title: "Consult Doctor", desc: "Video call with a qualified doctor instantly" },
              { step: "4", title: "Get Medicine", desc: "Find prescribed medicines at nearby pharmacies" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-hero font-display text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-display font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-hero p-10 text-center shadow-elevated md:p-14">
            <Stethoscope className="mx-auto mb-4 h-12 w-12 text-white/80" />
            <h2 className="mb-4 font-display text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mb-8 text-white/80">Join thousands of rural patients already receiving quality healthcare through RuralCare.</p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="font-semibold px-8">
                Register Now — It's Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10 px-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-display font-bold text-foreground">RuralCare</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 RuralCare. Bridging healthcare gaps in rural communities.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
