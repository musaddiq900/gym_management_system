"use client"
import { useState } from "react"

export default function ManualEntryPage() {
  const [member, setMember] = useState("")
  const [branch, setBranch] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Manual Attendance:", { member, branch, date })
    alert("Manual attendance recorded!")
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Manual Attendance Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Member Name"
          value={member}
          onChange={e => setMember(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={e => setBranch(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Record Attendance
        </button>
      </form>
    </div>
  )
}