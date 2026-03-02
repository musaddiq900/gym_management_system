"use client"
import { useState } from "react"

export default function BiometricSyncPage() {
  const [deviceId, setDeviceId] = useState("")

  const handleSync = () => {
    console.log(`Biometric sync for device ${deviceId}`)
    alert(`Device ${deviceId} synced successfully!`)
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Biometric Device Sync</h1>
      <input
        type="text"
        placeholder="Device ID"
        value={deviceId}
        onChange={e => setDeviceId(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
  onClick={handleSync}
  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Sync Device
</button>
    </div>
  )
}