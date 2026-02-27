"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"

export default function AssignPlan({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()

  const [selectedPlan, setSelectedPlan] = useState("")

  const handleAssign = () => {

    console.log("Assign Plan:", selectedPlan, "to Gym:", id)

    // Flow:
    // 1. Save plan_id
    // 2. Create Login
    // 3. Enable Access
    // 4. Redirect to gym details

    router.push(`/agency/gyms/${id}`)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Assign Plan to Gym
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-6">

        {/* Plan Select */}
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select Plan</option>
          <option value="1">Basic Plan</option>
          <option value="2">Pro Plan</option>
          <option value="3">Enterprise Plan</option>
        </select>

        {/* Assign Button */}
        <button
          onClick={handleAssign}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Confirm & Activate
        </button>

      </div>
    </div>
  )
}