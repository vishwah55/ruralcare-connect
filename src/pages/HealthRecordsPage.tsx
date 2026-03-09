import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const records = [
  { id: 1, date: "Mar 5, 2026", doctor: "Dr. Anika Sharma", diagnosis: "Viral Fever", prescription: "Paracetamol 500mg, 3x daily for 5 days", notes: "Patient had high fever with body ache. Advised bed rest and fluids." },
  { id: 2, date: "Feb 28, 2026", doctor: "Dr. Raj Patel", diagnosis: "Mild Bronchitis", prescription: "Amoxicillin 250mg, 2x daily for 7 days; Cough syrup", notes: "Persistent cough for 10 days. Chest X-ray normal." },
  { id: 3, date: "Jan 15, 2026", doctor: "Dr. Meena Verma", diagnosis: "Skin Allergy", prescription: "Cetirizine 10mg daily; Calamine lotion", notes: "Allergic reaction to seasonal pollen. Advised avoiding outdoor exposure." },
];

const HealthRecordsPage = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">Health Records</h1>
          <p className="mt-2 text-muted-foreground">Your complete digital health history</p>
        </div>

        <div className="space-y-4">
          {records.map((r) => (
            <div key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-card-foreground">{r.diagnosis}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {r.date} • {r.doctor}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-3.5 w-3.5" /> PDF
                </Button>
              </div>
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">Prescription</p>
                <p className="text-sm text-card-foreground">{r.prescription}</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{r.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthRecordsPage;
