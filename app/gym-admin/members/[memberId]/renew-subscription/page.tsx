"use client"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function RenewSubscriptionPage() {
  const params = useParams()
  const memberId = params.memberId

  const [plan, setPlan] = useState("Monthly")
  const [expiry, setExpiry] = useState("2026-03-31")

  const handleRenew = () => {
    console.log(`Member ${memberId} renewed to ${plan} plan until ${expiry}`)
    alert("Subscription renewed!")
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold">Renew Subscription</h1>
      <select value={plan} onChange={e => setPlan(e.target.value)} className="w-full p-2 border rounded">
        <option>Monthly</option>
        <option>Quarterly</option>
        <option>Yearly</option>
      </select>
      <input
        type="date"
        value={expiry}
        onChange={e => setExpiry(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleRenew}
        className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Renew Subscription
      </button>
    </div>
  )
}