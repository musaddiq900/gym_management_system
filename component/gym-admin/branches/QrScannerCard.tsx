"use client";

import { useState } from "react";

export default function QrScannerCard() {
  const [token, setToken] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  function simulateScan() {
    if (!token.trim()) return;
    setLogs((prev) => [`✅ QR scanned: ${token.trim()} @ ${new Date().toLocaleTimeString()}`, ...prev]);
    setToken("");
  }

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm max-w-xl">
      <div className="text-sm text-gray-500">Frontend demo (camera scanner later)</div>

      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 border rounded-xl px-3 py-2"
          placeholder="Paste QR token..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={simulateScan} className="px-4 py-2 rounded-xl bg-black text-white">
          Check-in
        </button>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium mb-2">Recent Logs</div>
        <div className="space-y-2">
          {logs.map((l, idx) => (
            <div key={idx} className="text-sm border rounded-xl px-3 py-2 bg-gray-50">
              {l}
            </div>
          ))}
          {!logs.length && <div className="text-sm text-gray-500">No scans yet</div>}
        </div>
      </div>
    </div>
  );
}