import { Link } from "react-router-dom";
import { Brain, Calendar, FileText, Pill, Video, User, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  { icon: Brain, label: "Symptom Checker", to: "/symptom-checker", color: "text-primary" },
  { icon: Video, label: "Consult Doctor", to: "/consultation", color: "text-secondary" },
  { icon: Pill, label: "Find Medicine", to: "/medicine-search", color: "text-warning" },
  { icon: FileText, label: "Health Records", to: "/patient/records", color: "text-primary" },
];

const recentConsultations = [
  { id: 1, doctor: "Dr. Anika Sharma", specialty: "General Medicine", date: "Mar 5, 2026", status: "Completed" },
  { id: 2, doctor: "Dr. Raj Patel", specialty: "Pulmonology", date: "Feb 28, 2026", status: "Completed" },
];

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Welcome */}
        <div className="mb-8 rounded-xl gradient-hero p-6 text-white shadow-elevated">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">Hello, Priya!</h1>
              <p className="text-sm text-white/80">Village: Rampur | Last visit: Mar 5, 2026</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {quickActions.map((a) => (
            <Link
              key={a.label}
              to={a.to}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-elevated hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <a.icon className={`h-5 w-5 ${a.color}`} />
              </div>
              <span className="text-xs font-medium text-card-foreground">{a.label}</span>
            </Link>
          ))}
        </div>

        {/* Upcoming */}
        <div className="mb-6 rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
            <Calendar className="h-5 w-5 text-primary" /> Upcoming Appointment
          </h2>
          <div className="flex items-center justify-between rounded-lg bg-accent/50 p-4">
            <div>
              <p className="font-medium text-card-foreground">Dr. Meena Verma</p>
              <p className="text-sm text-muted-foreground">Dermatology • Mar 12, 2026 at 10:00 AM</p>
            </div>
            <Button size="sm" className="gap-1">
              <Video className="h-4 w-4" /> Join
            </Button>
          </div>
        </div>

        {/* Recent consultations */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
            <Clock className="h-5 w-5 text-primary" /> Recent Consultations
          </h2>
          <div className="space-y-3">
            {recentConsultations.map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium text-card-foreground">{c.doctor}</p>
                  <p className="text-sm text-muted-foreground">{c.specialty} • {c.date}</p>
                </div>
                <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
