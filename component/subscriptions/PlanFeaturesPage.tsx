"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PlanFeaturesPage() {
  const router = useRouter()

  const [features, setFeatures] = useState({
    pos: false,
    inventory: false,
    whatsappMarketing: false,
    bioAttendance: false,
    mobileAppAccess: false,
    websiteAccess: false,
    reports: false,
    aiRetention: false,
  })

  const toggleFeature = (key: string) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  const handleSave = () => {
    console.log("Saved Features:", features)
    alert("Features Saved Successfully")
  }

  const handleAssign = () => {
    // Redirect to assign page
    router.push("/agency/subscriptions/assign")
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Plan Features Control Panel
      </h1>

      {/* Features Card */}
      <div className="bg-white p-6 rounded-xl shadow-md">

        <div className="grid grid-cols-2 gap-6">

          {Object.keys(features).map((key) => (
            <div
              key={key}
              className="flex items-center justify-between border p-3 rounded-lg"
            >
              <span className="font-medium capitalize">
                {key}
              </span>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={features[key as keyof typeof features]}
                  onChange={() => toggleFeature(key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
              </label>
            </div>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Save Features
          </button>

          <button
            onClick={handleAssign}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Assign to Gym →
          </button>

        </div>

      </div>
    </div>
  )
}