"use client";

import { useMemo, useState } from "react";
import { lockerRows, members } from "../../../data/dummyLockers";

export default function AssignLockerCard() {
  const [memberQ, setMemberQ] = useState("");
  const [lockerQ, setLockerQ] = useState("");
  const [log, setLog] = useState("");

  const availableLockers = useMemo(() => lockerRows.filter((l) => l.status === "AVAILABLE"), []);
  const memberResults = useMemo(() => {
    const s = memberQ.trim().toLowerCase();
    if (!s) return [];
    return members.filter((m) => m.name.toLowerCase().includes(s) || m.phone.includes(s)).slice(0, 6);
  }, [memberQ]);

  const lockerResults = useMemo(() => {
    const s = lockerQ.trim().toLowerCase();
    if (!s) return availableLockers.slice(0, 6);
    return availableLockers.filter((l) => l.lockerNo.toLowerCase().includes(s)).slice(0, 6);
  }, [lockerQ, availableLockers]);

  function assign(memberName: string, lockerNo: string) {
    setLog(`✅ Assigned ${lockerNo} to ${memberName} @ ${new Date().toLocaleTimeString()}`);
    setMemberQ("");
    setLockerQ("");
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Pick Member</h3>
        <input className="mt-3 w-full border rounded-xl px-3 py-2" placeholder="Search member name/phone..." value={memberQ} onChange={(e) => setMemberQ(e.target.value)} />
        <div className="mt-3 space-y-2">
          {memberResults.map((m) => (
            <div key={m.id} className="border rounded-xl px-3 py-2 bg-gray-50">
              <div className="font-medium">{m.name}</div>
              <div className="text-xs text-gray-500">{m.phone} • {m.branchName}</div>
            </div>
          ))}
          {!!memberQ.trim() && !memberResults.length && <div className="text-sm text-gray-500">No member found</div>}
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Pick Available Locker</h3>
        <input className="mt-3 w-full border rounded-xl px-3 py-2" placeholder="Search locker no..." value={lockerQ} onChange={(e) => setLockerQ(e.target.value)} />
        <div className="mt-3 space-y-2">
          {lockerResults.map((l) => (
            <button
              key={l.id}
              className="w-full text-left border rounded-xl px-3 py-2 hover:bg-gray-50"
              onClick={() => assign(memberResults[0]?.name || "Member", l.lockerNo)}
              disabled={!memberResults.length}
              title={!memberResults.length ? "Select a member first" : "Assign"}
            >
              <div className="font-medium">{l.lockerNo}</div>
              <div className="text-xs text-gray-500">{l.branchName} • {l.location || "-"}</div>
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm border rounded-xl p-3 bg-gray-50">
          {log || "Select a member then click a locker to assign"}
        </div>
      </div>
    </div>
  );
}