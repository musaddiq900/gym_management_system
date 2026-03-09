"use client";
import { useState } from "react";

export default function CreateClassForm() {
  const [name, setName] = useState("");

  function save() {
    alert(`Class ${name} created (Frontend demo)`);
    setName("");
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm max-w-lg space-y-4">
      <input
        className="w-full border rounded-xl px-3 py-2"
        placeholder="Class Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="w-full bg-black text-white rounded-xl py-2"
        onClick={save}
      >
        Save Class
      </button>
    </div>
  );
}