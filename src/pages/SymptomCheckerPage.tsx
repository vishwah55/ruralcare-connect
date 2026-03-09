import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, CheckCircle, Activity, ArrowRight, Brain } from "lucide-react";

type Urgency = "low" | "medium" | "high" | null;

interface PredictionResult {
  disease: string;
  urgency: Urgency;
  advice: string;
}

const symptomsList = [
  { id: "fever", label: "Fever" },
  { id: "cough", label: "Cough" },
  { id: "headache", label: "Headache" },
  { id: "chest_pain", label: "Chest Pain" },
  { id: "breathing_difficulty", label: "Breathing Difficulty" },
  { id: "fatigue", label: "Fatigue" },
  { id: "body_ache", label: "Body Ache" },
  { id: "sore_throat", label: "Sore Throat" },
  { id: "nausea", label: "Nausea" },
  { id: "dizziness", label: "Dizziness" },
];

function predictSymptoms(selected: string[]): PredictionResult {
  const has = (s: string) => selected.includes(s);

  if (has("chest_pain") && has("breathing_difficulty")) {
    return { disease: "Possible Cardiac / Respiratory Emergency", urgency: "high", advice: "Please visit the nearest hospital immediately. Do not delay. Call emergency services if available." };
  }
  if (has("breathing_difficulty") && has("fever")) {
    return { disease: "Possible Pneumonia or Severe Respiratory Infection", urgency: "high", advice: "This combination can be serious. Seek immediate medical attention at your nearest healthcare facility." };
  }
  if (has("chest_pain")) {
    return { disease: "Chest Pain — Needs Evaluation", urgency: "high", advice: "Chest pain should always be evaluated by a doctor. Please visit a hospital as soon as possible." };
  }
  if (has("fever") && has("cough") && has("sore_throat")) {
    return { disease: "Possible Influenza / Viral Infection", urgency: "medium", advice: "You may have the flu. A teleconsultation with a doctor is recommended. Stay hydrated and rest." };
  }
  if (has("fever") && has("headache") && has("body_ache")) {
    return { disease: "Possible Dengue / Viral Fever", urgency: "medium", advice: "These symptoms may indicate viral fever or dengue. Please consult a doctor via teleconsultation." };
  }
  if (has("fever") && has("cough")) {
    return { disease: "Possible Upper Respiratory Infection", urgency: "medium", advice: "Consider a teleconsultation. Take rest, drink fluids, and monitor your temperature." };
  }
  if (has("nausea") && has("dizziness")) {
    return { disease: "Possible Dehydration or Inner Ear Issue", urgency: "medium", advice: "Stay hydrated. If symptoms persist, consult a doctor via teleconsultation." };
  }
  if (has("headache") && has("fatigue")) {
    return { disease: "Stress / Mild Viral Illness", urgency: "low", advice: "Get adequate rest, stay hydrated, and take OTC pain relief if needed. Monitor for worsening symptoms." };
  }
  if (has("cough") || has("sore_throat")) {
    return { disease: "Common Cold / Mild Throat Infection", urgency: "low", advice: "Gargle with warm salt water, stay hydrated, and rest. Visit a doctor if symptoms persist beyond 5 days." };
  }
  if (selected.length >= 3) {
    return { disease: "Multiple Symptoms Detected", urgency: "medium", advice: "With multiple symptoms, a teleconsultation is recommended to get a proper diagnosis." };
  }
  return { disease: "Mild Condition", urgency: "low", advice: "Your symptoms appear mild. Rest, stay hydrated, and monitor. Consult a doctor if symptoms worsen." };
}

const urgencyConfig = {
  low: { label: "Low Risk", color: "bg-success text-success-foreground", icon: CheckCircle, border: "border-success/30" },
  medium: { label: "Medium Risk", color: "bg-warning text-warning-foreground", icon: Activity, border: "border-warning/30" },
  high: { label: "High Risk", color: "bg-destructive text-destructive-foreground", icon: AlertTriangle, border: "border-destructive/30" },
};

const SymptomCheckerPage = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
    setResult(null);
  };

  const handlePredict = () => {
    if (selected.length === 0) return;
    setResult(predictSymptoms(selected));
  };

  const config = result ? urgencyConfig[result.urgency!] : null;

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <Brain className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">AI Symptom Checker</h1>
          <p className="mt-2 text-muted-foreground">Select your symptoms below for an instant AI health assessment</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-display font-semibold text-card-foreground">What are you experiencing?</h2>
          <div className="grid grid-cols-2 gap-3">
            {symptomsList.map((s) => (
              <label
                key={s.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all ${
                  selected.includes(s.id)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <Checkbox
                  checked={selected.includes(s.id)}
                  onCheckedChange={() => toggle(s.id)}
                />
                <span className="text-sm font-medium text-card-foreground">{s.label}</span>
              </label>
            ))}
          </div>

          <Button
            className="mt-6 w-full gap-2"
            size="lg"
            onClick={handlePredict}
            disabled={selected.length === 0}
          >
            <Activity className="h-4 w-4" /> Analyze Symptoms
          </Button>
        </div>

        {result && config && (
          <div className={`mt-6 rounded-xl border ${config.border} bg-card p-6 shadow-card animate-fade-in`}>
            <div className="mb-4 flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${config.color}`}>
                <config.icon className="h-3.5 w-3.5" />
                {config.label}
              </span>
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">{result.disease}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{result.advice}</p>
            {result.urgency === "medium" && (
              <Button className="gap-2">
                Request Teleconsultation <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {result.urgency === "high" && (
              <Button variant="destructive" className="gap-2">
                <AlertTriangle className="h-4 w-4" /> Find Nearest Hospital
              </Button>
            )}
            {result.urgency === "low" && (
              <Button variant="outline" className="gap-2">
                Browse Home Remedies <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomCheckerPage;
