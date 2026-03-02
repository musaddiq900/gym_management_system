"use client"
import Link from "next/link"
import { useState } from "react"

interface Member {
  id: string
  name: string
  status: "active" | "frozen"
  plan: string
  expiry: string
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([
    { id: "1", name: "Ali Khan", status: "active", plan: "Monthly", expiry: "2026-03-31" },
    { id: "2", name: "Sara Ahmed", status: "frozen", plan: "Quarterly", expiry: "2026-05-15" },
  ])

  const toggleStatus = (id: string) => {
    setMembers(prev =>
      prev.map(m =>
        m.id === id ? { ...m, status: m.status === "active" ? "frozen" : "active" } : m
      )
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Members</h1>
        <Link
          href="/gym-admin/members/add"
          className="bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-700"
        >
          + Add Member
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map(member => (
          <div key={member.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-semibold text-lg">{member.name}</h2>
              <p className={`text-sm ${member.status === "active" ? "text-green-600" : "text-red-600"}`}>
                {member.status.toUpperCase()}
              </p>
              <p className="text-gray-500 text-sm">Plan: {member.plan}</p>
              <p className="text-gray-500 text-sm">Expiry: {member.expiry}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/gym-admin/members/${member.id}`}
                className="text-blue-600 text-sm"
              >
                View Profile
              </Link>
              <Link
                href={`/gym-admin/members/${member.id}/assign-trainer`}
                className="text-green-600 text-sm"
              >
                Assign Trainer
              </Link>
              <Link
                href={`/gym-admin/members/${member.id}/renew-subscription`}
                className="text-purple-600 text-sm"
              >
                Renew Subscription
              </Link>
              <button
                onClick={() => toggleStatus(member.id)}
                className={`text-white px-3 py-1 rounded text-sm ${
                  member.status === "active" ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {member.status === "active" ? "Freeze" : "Activate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}