"use client";

import { useState } from "react";

export default function CreateLockerCard() {
  const [lockerNo, setLockerNo] = useState("");
  const [branchId, setBranchId] = useState("b1");
  const [location, setLocation] = useState("");

  function save() {
    alert(`Frontend demo: Created ${lockerNo} in ${branchId}`);
    setLockerNo("");
    setLocation("");
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm max-w-xl">
      <h3 className="text-lg font-semibold">Create Locker</h3>
      <p className="text-sm text-gray-500 mt-1">Frontend demo</p>

      <div className="mt-4 space-y-3">
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Locker No (e.g. L-020)" value={lockerNo} onChange={(e) => setLockerNo(e.target.value)} />
        <select className="w-full border rounded-xl px-3 py-2 bg-white" value={branchId} onChange={(e) => setBranchId(e.target.value)}>
          <option value="b1">Main Branch</option>
          <option value="b2">DHA Branch</option>
          <option value="b3">Johar Branch</option>
        </select>
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Location (optional)" value={location} onChange={(e) => setLocation(e.target.value)} />

        <button className="w-full rounded-xl bg-black text-white py-2" onClick={save}>
          Save Locker
        </button>
      </div>
    </div>
  );
}