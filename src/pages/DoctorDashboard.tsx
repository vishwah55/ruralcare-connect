import { useState } from "react";
import { Video, User, Clock, AlertTriangle, Activity, CheckCircle, FileText, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const patientQueue = [
  { id: 1, name: "Priya Devi", age: 34, village: "Rampur", symptoms: "Fever, Cough, Breathing Difficulty", urgency: "high" as const, waitTime: "5 min" },
  { id: 2, name: "Ramesh Kumar", age: 52, village: "Sundarpur", symptoms: "Chest Pain, Dizziness", urgency: "high" as const, waitTime: "12 min" },
  { id: 3, name: "Sita Bai", age: 28, village: "Devpur", symptoms: "Fever, Headache, Body Ache", urgency: "medium" as const, waitTime: "20 min" },
  { id: 4, name: "Mohan Lal", age: 45, village: "Rampur", symptoms: "Cough, Sore Throat", urgency: "low" as const, waitTime: "30 min" },
  { id: 5, name: "Geeta Sharma", age: 60, village: "Kheri", symptoms: "Fatigue, Nausea", urgency: "medium" as const, waitTime: "25 min" },
];

const urgencyBadge = {
  high: { label: "High", className: "bg-destructive/10 text-destructive", icon: AlertTriangle },
  medium: { label: "Medium", className: "bg-warning/10 text-warning", icon: Activity },
  low: { label: "Low", className: "bg-success/10 text-success", icon: CheckCircle },
};

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);
  const patient = patientQueue.find((p) => p.id === selectedPatient);

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-hero">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Dr. Anika Sharma</h1>
            <p className="text-sm text-muted-foreground">General Medicine • District Hospital, Rampur</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Queue */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-4 shadow-card">
              <h2 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
                <Clock className="h-5 w-5 text-primary" /> Patient Queue ({patientQueue.length})
              </h2>
              <div className="space-y-2">
                {patientQueue.map((p) => {
                  const badge = urgencyBadge[p.urgency];
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPatient(p.id)}
                      className={`w-full rounded-lg border p-3 text-left transition-all ${
                        selectedPatient === p.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-card-foreground text-sm">{p.name}</span>
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}>
                          <badge.icon className="h-3 w-3" /> {badge.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{p.village} • Age {p.age} • Wait: {p.waitTime}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail / Consultation */}
          <div className="lg:col-span-3">
            {patient ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-card-foreground">{patient.name}</h3>
                        <p className="text-sm text-muted-foreground">Age {patient.age} • {patient.village}</p>
                      </div>
                    </div>
                    <Button className="gap-2">
                      <Video className="h-4 w-4" /> Start Video Call
                    </Button>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Reported Symptoms</p>
                    <p className="text-sm text-card-foreground">{patient.symptoms}</p>
                  </div>
                </div>

                {/* Diagnosis form */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
                    <FileText className="h-5 w-5 text-primary" /> Consultation Notes
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Diagnosis</Label>
                      <Input placeholder="Enter diagnosis" className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Prescription</Label>
                      <Textarea placeholder="Enter medicine name, dosage, duration" className="mt-1.5" rows={3} />
                    </div>
                    <div>
                      <Label>Notes</Label>
                      <Textarea placeholder="Additional notes for the patient" className="mt-1.5" rows={2} />
                    </div>
                    <Button className="w-full">Save Consultation Record</Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border bg-card">
                <p className="text-muted-foreground">Select a patient from the queue to begin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
