"use client"

import { useState } from "react"

export default function AssignPlanPage() {
  const [gym, setGym] = useState("")
  const [plan, setPlan] = useState("")

  const handleAssign = () => {
    console.log("Assigning Plan:", plan, "to Gym:", gym)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">
        Assign Plan to Gym
      </h1>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* Gym Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Select Gym
          </label>

          <input
            type="text"
            placeholder="Enter Gym ID or Name"
            value={gym}
            onChange={(e) => setGym(e.target.value)}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />
        </div>

        {/* Plan Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Select Plan
          </label>

          <input
            type="text"
            placeholder="Enter Plan ID or Name"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={handleAssign}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            🚀 Assign Plan
          </button>
        </div>

      </div>
    </div>
  )
}