"use client";

import { useMemo, useState } from "react";
import { members } from "../../../data/dummyAttendance";

export default function ManualEntryCard() {
  const [q, setQ] = useState("");
  const [log, setLog] = useState<string>("");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return members
      .filter((m) => m.name.toLowerCase().includes(s) || m.phone.includes(s))
      .slice(0, 6);
  }, [q]);

  function mark(name: string) {
    setLog(`✅ Marked present: ${name} @ ${new Date().toLocaleTimeString()}`);
    setQ("");
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="text-sm text-gray-500">Search member by name / phone</div>

        <input
          className="mt-3 w-full border rounded-xl px-3 py-2"
          placeholder="e.g. Ali / 0300..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <div className="mt-3 space-y-2">
          {results.map((m) => (
            <button
              key={m.id}
              onClick={() => mark(m.name)}
              className="w-full text-left border rounded-xl px-3 py-2 hover:bg-gray-50"
            >
              <div className="font-medium">{m.name}</div>
              <div className="text-xs text-gray-500">{m.phone} • {m.branchName}</div>
            </button>
          ))}
          {!!q.trim() && !results.length && (
            <div className="text-sm text-gray-500">No member found</div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="text-sm text-gray-500">Action Log</div>
        <div className="mt-3 text-sm border rounded-xl px-3 py-3 bg-gray-50 min-h-[60px]">
          {log || "No action yet"}
        </div>
      </div>
    </div>
  );
}