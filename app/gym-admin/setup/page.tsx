"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Branch = { name: string; city: string; address: string; open: string; close: string };
type Staff = { name: string; role: "Manager" | "Receptionist" | "Trainer"; phone: string };
type Plan = { name: string; duration: "1 Month" | "3 Months" | "6 Months" | "12 Months"; price: string };

const steps = ["Gym Profile", "Branches", "Staff", "Membership Plans"] as const;

export default function GymSetupWizard() {
  const router = useRouter();

  const [step, setStep] = useState<number>(0);

  // Step 1: Gym profile
  const [gymName, setGymName] = useState("");
  const [gymAddress, setGymAddress] = useState("");
  const [gymTimings, setGymTimings] = useState({ open: "06:00", close: "23:00" });
  const [logoName, setLogoName] = useState<string>(""); // frontend only

  // Step 2: Branches
  const [branches, setBranches] = useState<Branch[]>([
    { name: "Main Branch", city: "Abbottabad", address: "Main Road", open: "06:00", close: "23:00" },
  ]);

  const [branchForm, setBranchForm] = useState<Branch>({
    name: "",
    city: "",
    address: "",
    open: "06:00",
    close: "23:00",
  });

  // Step 3: Staff
  const [staff, setStaff] = useState<Staff[]>([]);
  const [staffForm, setStaffForm] = useState<Staff>({
    name: "",
    role: "Manager",
    phone: "",
  });

  // Step 4: Plans
  const [plans, setPlans] = useState<Plan[]>([]);
  const [planForm, setPlanForm] = useState<Plan>({
    name: "",
    duration: "1 Month",
    price: "",
  });

  const currentTitle = steps[step];

  const canNext = useMemo(() => {
    if (step === 0) return gymName.trim().length >= 2 && gymAddress.trim().length >= 3;
    if (step === 1) return branches.length >= 1;
    if (step === 2) return staff.length >= 1; // at least one
    if (step === 3) return plans.length >= 1; // at least one
    return false;
  }, [step, gymName, gymAddress, branches.length, staff.length, plans.length]);

  function next() {
    if (step < steps.length - 1) setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
    else router.back();
  }

  function finish() {
    // Save all setup data (frontend demo)
    const payload = {
      gym: { gymName, gymAddress, timings: gymTimings, logoName },
      branches,
      staff,
      plans,
    };
    localStorage.setItem("gym_profile", JSON.stringify(payload.gym));
    localStorage.setItem("gym_branches", JSON.stringify(payload.branches));
    localStorage.setItem("gym_staff", JSON.stringify(payload.staff));
    localStorage.setItem("gym_plans", JSON.stringify(payload.plans));

    // Mark setup complete
    localStorage.setItem("gym_setup_complete", "true");

    router.push("/gym-admin/dashboard");
  }

  function addBranch() {
    if (!branchForm.name.trim()) return;
    setBranches((p) => [branchForm, ...p]);
    setBranchForm({ name: "", city: "", address: "", open: "06:00", close: "23:00" });
  }

  function addStaff() {
    if (!staffForm.name.trim() || !staffForm.phone.trim()) return;
    setStaff((p) => [staffForm, ...p]);
    setStaffForm({ name: "", role: "Manager", phone: "" });
  }

  function addPlan() {
    if (!planForm.name.trim() || !planForm.price.trim()) return;
    setPlans((p) => [planForm, ...p]);
    setPlanForm({ name: "", duration: "1 Month", price: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-red-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400" />
              Setup Wizard
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              Setup your Gym
            </h1>
            <p className="mt-2 text-gray-600">
              First-time setup: profile → branches → staff → plans.
            </p>
          </div>

          <button
            type="button"
            onClick={back}
            className="rounded-2xl px-4 py-2.5 text-sm font-semibold bg-white shadow-md hover:shadow-lg transition"
          >
            ← Back
          </button>
        </div>

        {/* Stepper */}
        <div className="mt-8 bg-white rounded-3xl shadow-2xl p-6">
          <div className="flex flex-wrap gap-2">
            {steps.map((s, idx) => {
              const active = idx === step;
              const done = idx < step;
              return (
                <div
                  key={s}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition
                    ${active ? "text-white bg-gradient-to-r from-red-500 to-yellow-400" : ""}
                    ${!active && done ? "bg-green-50 text-green-700" : ""}
                    ${!active && !done ? "bg-gray-100 text-gray-600" : ""}`}
                >
                  {idx + 1}. {s}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-6 rounded-3xl bg-white p-2">
            <div className="rounded-3xl bg-gray-50 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{currentTitle}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {step === 0 && "Enter gym details. You can edit later in Settings."}
                    {step === 1 && "Add at least 1 branch (more later possible)."}
                    {step === 2 && "Add staff (minimum 1) – manager/receptionist/trainer."}
                    {step === 3 && "Create at least 1 membership plan."}
                  </p>
                </div>

                <div className="text-sm font-semibold text-gray-500">
                  {step + 1}/{steps.length}
                </div>
              </div>

              {/* STEP 1 */}
              {step === 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                    placeholder="Gym name"
                    value={gymName}
                    onChange={(e) => setGymName(e.target.value)}
                  />
                  <input
                    className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                    placeholder="Gym address"
                    value={gymAddress}
                    onChange={(e) => setGymAddress(e.target.value)}
                  />

                  <div className="rounded-2xl bg-white shadow-sm px-4 py-3">
                    <div className="text-xs text-gray-500 font-semibold mb-1">Open time</div>
                    <input
                      type="time"
                      className="w-full outline-none"
                      value={gymTimings.open}
                      onChange={(e) => setGymTimings((p) => ({ ...p, open: e.target.value }))}
                    />
                  </div>

                  <div className="rounded-2xl bg-white shadow-sm px-4 py-3">
                    <div className="text-xs text-gray-500 font-semibold mb-1">Close time</div>
                    <input
                      type="time"
                      className="w-full outline-none"
                      value={gymTimings.close}
                      onChange={(e) => setGymTimings((p) => ({ ...p, close: e.target.value }))}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Logo (frontend)</label>
                    <div className="mt-2 rounded-2xl bg-white shadow-sm px-4 py-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setLogoName(e.target.files?.[0]?.name ?? "")}
                      />
                      {logoName && <div className="text-xs text-gray-500 mt-2">Selected: {logoName}</div>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 1 && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Branch name"
                      value={branchForm.name}
                      onChange={(e) => setBranchForm((p) => ({ ...p, name: e.target.value }))}
                    />
                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="City"
                      value={branchForm.city}
                      onChange={(e) => setBranchForm((p) => ({ ...p, city: e.target.value }))}
                    />
                    <input
                      className="md:col-span-2 rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Address"
                      value={branchForm.address}
                      onChange={(e) => setBranchForm((p) => ({ ...p, address: e.target.value }))}
                    />

                    <div className="rounded-2xl bg-white shadow-sm px-4 py-3">
                      <div className="text-xs text-gray-500 font-semibold mb-1">Open</div>
                      <input
                        type="time"
                        className="w-full outline-none"
                        value={branchForm.open}
                        onChange={(e) => setBranchForm((p) => ({ ...p, open: e.target.value }))}
                      />
                    </div>
                    <div className="rounded-2xl bg-white shadow-sm px-4 py-3">
                      <div className="text-xs text-gray-500 font-semibold mb-1">Close</div>
                      <input
                        type="time"
                        className="w-full outline-none"
                        value={branchForm.close}
                        onChange={(e) => setBranchForm((p) => ({ ...p, close: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={addBranch}
                      className="px-5 py-2.5 rounded-2xl text-white font-semibold
                        bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90 transition"
                    >
                      + Add Branch
                    </button>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {branches.map((b, idx) => (
                      <div key={idx} className="rounded-3xl bg-white shadow-md p-5">
                        <div className="font-bold text-gray-900">{b.name}</div>
                        <div className="text-sm text-gray-600">{b.city}</div>
                        <div className="text-xs text-gray-500 mt-2">{b.address}</div>
                        <div className="text-xs text-gray-500 mt-2">
                          {b.open} - {b.close}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 2 && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Staff name"
                      value={staffForm.name}
                      onChange={(e) => setStaffForm((p) => ({ ...p, name: e.target.value }))}
                    />

                    <select
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      value={staffForm.role}
                      onChange={(e) =>
                        setStaffForm((p) => ({ ...p, role: e.target.value as Staff["role"] }))
                      }
                    >
                      <option>Manager</option>
                      <option>Receptionist</option>
                      <option>Trainer</option>
                    </select>

                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Phone"
                      value={staffForm.phone}
                      onChange={(e) => setStaffForm((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={addStaff}
                      className="px-5 py-2.5 rounded-2xl text-white font-semibold
                        bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90 transition"
                    >
                      + Add Staff
                    </button>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {staff.map((s, idx) => (
                      <div key={idx} className="rounded-3xl bg-white shadow-md p-5">
                        <div className="font-bold text-gray-900">{s.name}</div>
                        <div className="text-sm text-gray-600">{s.role}</div>
                        <div className="text-xs text-gray-500 mt-2">{s.phone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 3 && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Plan name (e.g. Monthly)"
                      value={planForm.name}
                      onChange={(e) => setPlanForm((p) => ({ ...p, name: e.target.value }))}
                    />

                    <select
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      value={planForm.duration}
                      onChange={(e) =>
                        setPlanForm((p) => ({ ...p, duration: e.target.value as Plan["duration"] }))
                      }
                    >
                      <option>1 Month</option>
                      <option>3 Months</option>
                      <option>6 Months</option>
                      <option>12 Months</option>
                    </select>

                    <input
                      className="rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
                      placeholder="Price (e.g. 3000)"
                      value={planForm.price}
                      onChange={(e) => setPlanForm((p) => ({ ...p, price: e.target.value }))}
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={addPlan}
                      className="px-5 py-2.5 rounded-2xl text-white font-semibold
                        bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90 transition"
                    >
                      + Add Plan
                    </button>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plans.map((p, idx) => (
                      <div key={idx} className="rounded-3xl bg-white shadow-md p-5">
                        <div className="font-bold text-gray-900">{p.name}</div>
                        <div className="text-sm text-gray-600">{p.duration}</div>
                        <div className="text-xs text-gray-500 mt-2">PKR {p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer buttons */}
              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={back}
                  className="px-5 py-2.5 rounded-2xl bg-white shadow-sm hover:shadow-md transition font-semibold"
                >
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canNext}
                    className={`px-6 py-3 rounded-2xl text-white font-semibold transition
                      bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90
                      ${!canNext ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={finish}
                    disabled={!canNext}
                    className={`px-6 py-3 rounded-2xl text-white font-semibold transition
                      bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90
                      ${!canNext ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Finish → Dashboard
                  </button>
                )}
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Note: Ye demo localStorage me save hota hai. Real app me API + DB.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}