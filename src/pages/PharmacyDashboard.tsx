import { useState } from "react";
import { Pill, Plus, Minus, Package, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Medicine {
  id: number;
  name: string;
  quantity: number;
}

const PharmacyDashboard = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: 1, name: "Paracetamol 500mg", quantity: 120 },
    { id: 2, name: "Amoxicillin 250mg", quantity: 45 },
    { id: 3, name: "Cetirizine 10mg", quantity: 80 },
    { id: 4, name: "Cough Syrup (100ml)", quantity: 30 },
    { id: 5, name: "ORS Packets", quantity: 200 },
    { id: 6, name: "Ibuprofen 400mg", quantity: 55 },
    { id: 7, name: "Metformin 500mg", quantity: 40 },
  ]);
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState("");

  const updateQty = (id: number, delta: number) => {
    setMedicines((prev) =>
      prev.map((m) => (m.id === id ? { ...m, quantity: Math.max(0, m.quantity + delta) } : m))
    );
  };

  const addMedicine = () => {
    if (!newName.trim() || !newQty) return;
    setMedicines((prev) => [...prev, { id: Date.now(), name: newName.trim(), quantity: parseInt(newQty) || 0 }]);
    setNewName("");
    setNewQty("");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
            <Pill className="h-6 w-6 text-warning" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Village Health Pharmacy</h1>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Rampur Main Road</span>
              <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> +91 98765 43210</span>
            </p>
          </div>
        </div>

        {/* Add medicine */}
        <div className="mb-6 rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
            <Plus className="h-5 w-5 text-primary" /> Add Medicine
          </h2>
          <div className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="med-name" className="sr-only">Medicine Name</Label>
              <Input id="med-name" placeholder="Medicine name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="w-24">
              <Label htmlFor="med-qty" className="sr-only">Quantity</Label>
              <Input id="med-qty" type="number" placeholder="Qty" value={newQty} onChange={(e) => setNewQty(e.target.value)} />
            </div>
            <Button onClick={addMedicine}>Add</Button>
          </div>
        </div>

        {/* Inventory */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="mb-4 flex items-center gap-2 font-display font-semibold text-card-foreground">
            <Package className="h-5 w-5 text-primary" /> Inventory ({medicines.length} items)
          </h2>
          <div className="space-y-2">
            {medicines.map((m) => (
              <div key={m.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="text-sm font-medium text-card-foreground">{m.name}</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQty(m.id, -10)}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className={`min-w-[3rem] text-center text-sm font-semibold ${m.quantity === 0 ? "text-destructive" : m.quantity < 20 ? "text-warning" : "text-success"}`}>
                    {m.quantity}
                  </span>
                  <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQty(m.id, 10)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
