"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddMemberPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [plan, setPlan] = useState("Monthly")
  const [expiry, setExpiry] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New Member:", { name, plan, expiry })
    router.push("/gym-admin/members")
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Add Member</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Member Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select value={plan} onChange={e => setPlan(e.target.value)} className="w-full p-2 border rounded">
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>
        <input
          type="date"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </form>
    </div>
  )
}