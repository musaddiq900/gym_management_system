"use client"

import { useState } from "react"
import {
  Search,
  Bell,
  User,
  Sun,
  Moon,
  Plus
} from "lucide-react"
import Link from "next/link"

const notifications = [
  { id: 1, message: "New Lead: John Doe" },
  { id: 2, message: "Gym Plan Expiring: FitLife Gym" },
  { id: 3, message: "Payment Failed: HealthHub" }
]

export default function AgencyTopbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [showNotif, setShowNotif] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showQuickAdd, setShowQuickAdd] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Search */}
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-64">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent outline-none ml-2 w-full text-gray-700"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 relative">
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 transition">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Quick Add */}
        <div className="relative">
          <button
            onClick={() => setShowQuickAdd(!showQuickAdd)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Plus size={18} />
          </button>
          {showQuickAdd && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
              <Link href="/agency/gyms/add" className="px-4 py-2 hover:bg-gray-100 transition">Add Gym</Link>
              <Link href="/agency/leads/add" className="px-4 py-2 hover:bg-gray-100 transition">Add Lead</Link>
              <Link href="/agency/subscriptions/create" className="px-4 py-2 hover:bg-gray-100 transition">Create Plan</Link>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button onClick={() => setShowNotif(!showNotif)} className="p-2 rounded-full hover:bg-gray-100 transition">
            <Bell size={18} />
          </button>
          {showNotif && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
              {notifications.map(n => (
                <div key={n.id} className="px-4 py-2 hover:bg-gray-100 transition">{n.message}</div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition">
            <User size={18} />
            <span className="hidden md:inline text-gray-700 font-medium">Admin</span>
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
              <Link href="/agency/profile" className="px-4 py-2 hover:bg-gray-100 transition">Profile</Link>
              <Link href="/agency/settings" className="px-4 py-2 hover:bg-gray-100 transition">Settings</Link>
              <button className="text-left px-4 py-2 hover:bg-gray-100 transition">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}