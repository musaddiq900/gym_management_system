"use client"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function MemberDistributionPage() {
  const params = useParams()
  const branchId = params.branchId

  const staff = [
    { id: "1", name: "Ali Khan" },
    { id: "2", name: "Sara Ahmed" },
  ]

  const members = [
    { id: "101", name: "Member 1", assignedTo: "" },
    { id: "102", name: "Member 2", assignedTo: "" },
    { id: "103", name: "Member 3", assignedTo: "" },
  ]

  const [memberList, setMemberList] = useState(members)

  const handleAssign = (memberId: string, staffId: string) => {
    setMemberList(prev =>
      prev.map(m => (m.id === memberId ? { ...m, assignedTo: staffId } : m))
    )
    console.log(`Member ${memberId} assigned to Staff ${staffId} in branch ${branchId}`)
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-xl font-bold mb-4">Member Distribution</h1>
      {memberList.map(m => (
        <div key={m.id} className="flex justify-between items-center mb-2 p-2 border rounded">
          <span>{m.name}</span>
          <select
            value={m.assignedTo}
            onChange={(e) => handleAssign(m.id, e.target.value)}
            className="border rounded p-1"
          >
            <option value="">Assign Staff</option>
            {staff.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}