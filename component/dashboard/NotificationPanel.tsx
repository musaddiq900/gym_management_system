"use client"

import { useEffect, useState } from "react"
import { themes } from "@/data/themes"

type Notification = {
  id: number
  message: string
  type: "info" | "warning" | "error"
}

type Props = {
  themeGradient?: string // ✅ allow parent to pass theme
}

const notifications: Notification[] = [
  { id: 1, message: "New Lead Alert: John Doe", type: "info" },
  { id: 2, message: "Gym Expiring Plan: FitLife Gym", type: "warning" },
  { id: 3, message: "Payment Failed: HealthHub", type: "error" }
]

export default function NotificationPanel({ themeGradient: parentTheme }: Props) {
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
    <div className="w-80 rounded-2xl shadow-lg overflow-hidden mt-6">
      {/* Header with theme gradient */}
      <div className={`p-4 bg-gradient-to-r ${themeGradient} text-white`}>
        <h3 className="text-lg font-semibold">Notifications</h3>
      </div>

      {/* Notifications list */}
      <div className="bg-white p-4 flex flex-col gap-3">
        {notifications.map(n => (
          <div
            key={n.id}
            className={`p-3 rounded-lg text-sm transition
              ${n.type === "info" ? "bg-blue-100 text-blue-800" : ""}
              ${n.type === "warning" ? "bg-yellow-100 text-yellow-800" : ""}
              ${n.type === "error" ? "bg-red-100 text-red-800" : ""}
            `}
          >
            {n.message}
          </div>
        ))}
      </div>
    </div>
  )
}