import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Pill, Search, MapPin, Phone, CheckCircle, XCircle } from "lucide-react";

const pharmaciesData = [
  {
    id: 1, name: "Village Health Pharmacy", location: "Rampur Main Road", phone: "+91 98765 43210",
    medicines: [
      { name: "Paracetamol 500mg", quantity: 120 },
      { name: "Amoxicillin 250mg", quantity: 45 },
      { name: "Cetirizine 10mg", quantity: 80 },
      { name: "Cough Syrup", quantity: 30 },
      { name: "ORS Packets", quantity: 200 },
    ],
  },
  {
    id: 2, name: "Care Plus Medical Store", location: "Sundarpur Market", phone: "+91 91234 56789",
    medicines: [
      { name: "Paracetamol 500mg", quantity: 60 },
      { name: "Ibuprofen 400mg", quantity: 35 },
      { name: "Amoxicillin 250mg", quantity: 0 },
      { name: "Cetirizine 10mg", quantity: 50 },
      { name: "Calamine Lotion", quantity: 15 },
    ],
  },
  {
    id: 3, name: "Jan Aushadhi Kendra", location: "Gram Panchayat Road, Devpur", phone: "+91 87654 32100",
    medicines: [
      { name: "Paracetamol 500mg", quantity: 200 },
      { name: "Amoxicillin 250mg", quantity: 100 },
      { name: "Metformin 500mg", quantity: 75 },
      { name: "Amlodipine 5mg", quantity: 60 },
      { name: "ORS Packets", quantity: 300 },
    ],
  },
];

const MedicineSearchPage = () => {
  const [query, setQuery] = useState("");

  const filteredPharmacies = pharmaciesData.map((p) => ({
    ...p,
    medicines: p.medicines.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())),
  })).filter((p) => query === "" || p.medicines.length > 0);

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <Pill className="h-7 w-7 text-warning" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">Find Medicine</h1>
          <p className="mt-2 text-muted-foreground">Search for medicines in nearby pharmacies</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search medicine name (e.g. Paracetamol)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        <div className="space-y-4">
          {filteredPharmacies.map((p) => (
            <div key={p.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-card-foreground">{p.name}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
                <a href={`tel:${p.phone}`} className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
              </div>
              <div className="space-y-2">
                {(query ? p.medicines : p.medicines.slice(0, 3)).map((m) => (
                  <div key={m.name} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                    <span className="text-sm text-card-foreground">{m.name}</span>
                    {m.quantity > 0 ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-success">
                        <CheckCircle className="h-3.5 w-3.5" /> {m.quantity} in stock
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-medium text-destructive">
                        <XCircle className="h-3.5 w-3.5" /> Out of stock
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineSearchPage;
