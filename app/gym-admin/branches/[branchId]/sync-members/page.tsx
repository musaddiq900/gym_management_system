"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

export default function StaffSyncPage() {
  const params = useParams()
  const branchId = params.branchId
  const router = useRouter()

  const branch = { id: branchId, name: "Main Branch" }

  const [staff, setStaff] = useState([
    { id: "1", name: "Ali Khan", synced: false },
    { id: "2", name: "Sara Ahmed", synced: false },
  ])

  const handleSync = (id: string) => {
    setStaff(prev =>
      prev.map(s => (s.id === id ? { ...s, synced: true } : s))
    )
  }

  const allSynced = staff.every(s => s.synced)

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Staff Sync - {branch.name}</h1>

      {/* Staff List */}
      <div className="space-y-3">
        {staff.map(s => (
          <div key={s.id} className="flex justify-between items-center p-3 border rounded-lg">
            <span className="font-medium">{s.name}</span>
            <button
              onClick={() => handleSync(s.id)}
              className={`px-4 py-2 rounded text-white font-medium transition-colors ${
                s.synced ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={s.synced}
            >
              {s.synced ? "Synced" : "Sync"}
            </button>
          </div>
        ))}
      </div>

      {/* Next Step Button */}
      <div className="mt-6">
        <button
          onClick={() => router.push(`/gym-admin/branches/${branchId}/member-distribution`)}
          disabled={!allSynced}
          className={`w-full py-3 rounded-lg font-semibold text-black text-center shadow-lg transition-colors
            ${allSynced
              ? "bg-purple-600 hover:bg-purple-700 active:bg-purple-800"
              : "bg-purple-300 cursor-not-allowed"}
          `}
        >
          Next: Member Distribution
        </button>
      </div>
    </div>
  )
}