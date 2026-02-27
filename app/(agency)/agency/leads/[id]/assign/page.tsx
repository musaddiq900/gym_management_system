"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"

export default function AssignStaff() {

  const router = useRouter()
  const params = useParams()
  const [staff, setStaff] = useState("")

  const handleAssign = () => {
    console.log("Assigned:", staff)
    router.push(`/agency/leads/${params.id}`)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

        <h1 className="text-xl font-bold">Assign Staff</h1>

        <select
          value={staff}
          onChange={(e) => setStaff(e.target.value)}
          className="w-full border p-3 rounded-lg">
          <option value="">Select Staff</option>
          <option>Ali</option>
          <option>Ahmed</option>
        </select>

        <button
          onClick={handleAssign}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg">
          Assign
        </button>

      </div>
    </div>
  )
}