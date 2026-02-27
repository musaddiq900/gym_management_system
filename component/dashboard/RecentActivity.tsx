"use client"

import { useEffect, useState } from "react"
import { themes } from "@/data/themes"

type Activity = {
  id: number
  activity: string
  detail: string
  date: string
}

type Props = {
  themeGradient?: string // ✅ allow parent to pass theme
}

const activities: Activity[] = [
  { id: 1, activity: "New Gym Registered", detail: "FitLife Gym", date: "2026-02-15" },
  { id: 2, activity: "Plan Upgraded", detail: "HealthHub → Pro", date: "2026-02-14" },
  { id: 3, activity: "Payment Received", detail: "$500 - FitLife Gym", date: "2026-02-13" },
  { id: 4, activity: "Lead Converted", detail: "Sara Ahmed", date: "2026-02-12" }
]

export default function RecentActivity({ themeGradient: parentTheme }: Props) {
  const [themeGradient, setThemeGradient] = useState("from-red-500 to-yellow-400")

  // ✅ Load current theme from localStorage if not passed as prop
  useEffect(() => {
    if (parentTheme) {
      setThemeGradient(parentTheme)
    } else {
      const saved = localStorage.getItem("agencyTheme") || "red"
      if (themes[saved as keyof typeof themes]) {
        setThemeGradient(themes[saved as keyof typeof themes].gradient)
      }
    }
  }, [parentTheme])

  return (
    <div className="rounded-2xl shadow-lg mt-6 overflow-hidden">
      {/* Header with theme gradient */}
      <div className={`p-4 bg-gradient-to-r ${themeGradient} text-white`}>
        <h3 className="text-lg font-semibold">Recent Activity</h3>
      </div>

      {/* Table */}
      <div className="bg-white p-4">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b">
            <tr>
              <th className="pb-2">Activity</th>
              <th className="pb-2">Details</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {activities.map(a => (
              <tr key={a.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-2">{a.activity}</td>
                <td className="py-2">{a.detail}</td>
                <td className="py-2">{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}