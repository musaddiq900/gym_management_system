"use client"

import { useRouter, useParams } from "next/navigation"

export default function ConvertLead() {

  const router = useRouter()
  const params = useParams()

  const handleConvert = () => {

    console.log("Lead Converted:", params.id)

    router.push("/agency/gyms")
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <div className="bg-white p-6 rounded-2xl shadow border space-y-6">

        <h1 className="text-xl font-bold">
          Convert Lead to Gym
        </h1>

        <button
          onClick={handleConvert}
          className="w-full bg-green-600 text-white py-3 rounded-lg">
          Confirm & Convert
        </button>

      </div>

    </div>
  )
}