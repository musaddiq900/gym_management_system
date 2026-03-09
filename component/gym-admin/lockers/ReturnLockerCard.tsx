"use client";

import { useMemo, useState } from "react";
import { lockerRows } from "../../../data/dummyLockers";

export default function ReturnLockerCard() {
  const [q, setQ] = useState("");
  const [log, setLog] = useState("");

  const assigned = useMemo(() => lockerRows.filter((l) => l.status === "ASSIGNED"), []);
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return assigned.slice(0, 8);
    return assigned.filter((l) => l.lockerNo.toLowerCase().includes(s) || (l.memberName || "").toLowerCase().includes(s)).slice(0, 8);
  }, [q, assigned]);

  function release(lockerNo: string) {
    setLog(`✅ Released ${lockerNo} @ ${new Date().toLocaleTimeString()}`);
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm max-w-3xl">
      <h3 className="text-lg font-semibold">Return / Release Locker</h3>
      <input className="mt-3 w-full border rounded-xl px-3 py-2" placeholder="Search locker / member..." value={q} onChange={(e) => setQ(e.target.value)} />

      <div className="mt-4 space-y-2">
        {results.map((l) => (
          <div key={l.id} className="flex items-center justify-between gap-3 border rounded-xl px-3 py-2">
            <div>
              <div className="font-medium">{l.lockerNo} • {l.branchName}</div>
              <div className="text-xs text-gray-500">Member: {l.memberName} • {l.memberPhone}</div>
            </div>
            <button className="rounded-xl bg-black text-white px-4 py-2" onClick={() => release(l.lockerNo)}>
              Return
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm border rounded-xl p-3 bg-gray-50">
        {log || "No action yet"}
      </div>
    </div>
  );
}