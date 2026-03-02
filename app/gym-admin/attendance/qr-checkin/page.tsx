"use client"
import { useState } from "react"

export default function QRCheckinPage() {
  const [memberId, setMemberId] = useState("")

  const handleCheckin = () => {
    console.log(`QR Check-in for member ${memberId}`)
    alert(`Member ${memberId} checked in via QR!`)
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">QR Code Check-in</h1>
      <input
        type="text"
        placeholder="Scan / Enter Member ID"
        value={memberId}
        onChange={e => setMemberId(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleCheckin}
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Check-in
      </button>
    </div>
  )
}