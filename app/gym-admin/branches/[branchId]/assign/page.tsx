"use client"
import { useState } from "react"
import { useRouter, useParams } from "next/navigation"

export default function AssignManagerPage() {
  const router = useRouter()
  const params = useParams()   // ✅ Get branchId dynamically
  const branchId = params.branchId

  const [selected, setSelected] = useState("")

  const staff = [
    { id: "1", name: "Ali Khan" },
    { id: "2", name: "Sara Ahmed" }
  ]

  const handleAssign = () => {
    console.log("Assign manager", selected)
    // Use branchId from useParams
    router.push(`/gym-admin/branches/${branchId}/sync-members`)
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow">
      <h1 className="text-xl font-bold mb-4">Assign Branch Manager</h1>
      <select
        className="w-full border p-3 rounded-lg"
        onChange={e => setSelected(e.target.value)}
      >
        <option>Select Manager</option>
        {staff.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
      <button
        onClick={handleAssign}
        className="w-full mt-4 bg-green-600 py-3 rounded-lg text-white"
      >
        Assign & Next
      </button>
    </div>
  )
}