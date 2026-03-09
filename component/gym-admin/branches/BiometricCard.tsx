"use client";

import { useState } from "react";

export default function BiometricCard() {
  const [deviceId, setDeviceId] = useState("ZK-001");
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function handleSync() {
    if (!deviceId.trim()) return;

    setLoading(true);

    // Fake API delay (frontend demo)
    setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setLogs((prev) => [
        `✅ Device ${deviceId} synced successfully at ${time}`,
        ...prev,
      ]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm max-w-xl">

      <h3 className="text-lg font-semibold mb-4">
        Biometric Device Sync
      </h3>

      {/* Device Input */}
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">
            Device ID
          </label>

          <input
            type="text"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
            placeholder="Enter device ID"
          />
        </div>

        <button
          onClick={handleSync}
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Syncing..." : "Sync Now"}
        </button>
      </div>

      {/* Logs */}
      <div className="mt-6">
        <h4 className="text-sm font-medium mb-2">Sync Logs</h4>

        <div className="space-y-2 max-h-48 overflow-auto">
          {logs.length === 0 && (
            <div className="text-sm text-gray-500">
              No sync activity yet
            </div>
          )}

          {logs.map((log, index) => (
            <div
              key={index}
              className="text-sm border rounded-xl px-3 py-2 bg-gray-50"
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}