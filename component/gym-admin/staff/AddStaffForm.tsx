"use client";
import { useState } from "react";

export default function AddStaffForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("TRAINER");
  const [salary, setSalary] = useState("");

  function save() {
    alert(`Frontend Demo: ${name} added as ${role}`);
    setName("");
    setSalary("");
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm max-w-xl space-y-4">
      <input className="w-full border rounded-xl px-3 py-2"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select className="w-full border rounded-xl px-3 py-2 bg-white"
        value={role}
        onChange={(e) => setRole(e.target.value)}>
        <option value="TRAINER">Trainer</option>
        <option value="RECEPTIONIST">Receptionist</option>
        <option value="MANAGER">Manager</option>
      </select>

      <input className="w-full border rounded-xl px-3 py-2"
        placeholder="Base Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <button className="w-full bg-black text-white rounded-xl py-2"
        onClick={save}>
        Save Staff
      </button>
    </div>
  );
}