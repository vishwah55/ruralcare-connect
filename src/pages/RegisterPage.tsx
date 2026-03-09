import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ArrowLeft } from "lucide-react";

const RegisterPage = () => {
  const [role, setRole] = useState("patient");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-hero">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">RuralCare</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-foreground">Create Your Account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join RuralCare and access quality healthcare</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="space-y-4">
            <div>
              <Label htmlFor="role">I am a</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 XXXXX XXXXX" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-1.5" />
            </div>
            {role === "patient" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Age" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="village">Village / Town</Label>
                  <Input id="village" placeholder="Enter your village name" className="mt-1.5" />
                </div>
              </>
            )}
            {role === "doctor" && (
              <>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input id="specialization" placeholder="e.g. General Medicine" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="hospital">Hospital / Clinic</Label>
                  <Input id="hospital" placeholder="Hospital name" className="mt-1.5" />
                </div>
              </>
            )}
            {role === "pharmacy" && (
              <>
                <div>
                  <Label htmlFor="pharmacy-name">Pharmacy Name</Label>
                  <Input id="pharmacy-name" placeholder="Pharmacy name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Town / area" className="mt-1.5" />
                </div>
              </>
            )}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" className="mt-1.5" />
            </div>
            <Button className="w-full" size="lg">Create Account</Button>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link>
          </p>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
