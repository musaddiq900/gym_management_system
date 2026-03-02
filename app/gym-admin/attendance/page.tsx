"use client"
import { useState } from "react"
import Link from "next/link"

interface Branch {
  id: string
  name: string
}

interface AttendanceRecord {
  member: string
  branch: string
  type: "QR" | "Bio" | "Manual"
  date: string
}

export default function AttendanceDashboard() {
  const [branches] = useState<Branch[]>([
    { id: "1", name: "Main Branch" },
    { id: "2", name: "East Branch" },
  ])
  const [selectedBranch, setSelectedBranch] = useState<string>("")
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([
    { member: "Ali Khan", branch: "Main Branch", type: "QR", date: "2026-03-01" },
    { member: "Sara Ahmed", branch: "East Branch", type: "Bio", date: "2026-03-01" },
  ])

  const filteredAttendance = selectedBranch
    ? attendance.filter(a => a.branch === selectedBranch)
    : attendance

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Attendance</h1>
        <div className="flex gap-2">
          <Link
            href="/gym-admin/attendance/manual-entry"
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Manual Entry
          </Link>
          <Link
            href="/gym-admin/attendance/qr-checkin"
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
          >
            QR Check-in
          </Link>
         <Link
  href="/gym-admin/attendance/bio-sync"
  className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
>
  Biometric Sync
</Link>
        </div>
      </div>

      <div className="mb-4">
        <select
          value={selectedBranch}
          onChange={e => setSelectedBranch(e.target.value)}
          className="p-2 border rounded w-full sm:w-64"
        >
          <option value="">All Branches</option>
          {branches.map(b => (
            <option key={b.id} value={b.name}>{b.name}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border">Member</th>
              <th className="text-left p-2 border">Branch</th>
              <th className="text-left p-2 border">Type</th>
              <th className="text-left p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((a, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{a.member}</td>
                <td className="p-2">{a.branch}</td>
                <td className="p-2">{a.type}</td>
                <td className="p-2">{a.date}</td>
              </tr>
            ))}
            {filteredAttendance.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}