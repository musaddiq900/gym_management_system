"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"

export default function AssignAssistant() {

  const router = useRouter()
  const params = useParams()
  const [assistant, setAssistant] = useState("")

  const handleAssign = () => {
    console.log("Assigned:", assistant)
    router.push(`/agency/support/${params.id}`)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

        <h1 className="text-xl font-bold">Assign Assistant</h1>

        <select
          value={assistant}
          onChange={(e) => setAssistant(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select Assistant</option>
          <option>Ali</option>
          <option>Ahmed</option>
        </select>

        <button
          onClick={handleAssign}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Assign
        </button>

      </div>

    </div>
  )
}