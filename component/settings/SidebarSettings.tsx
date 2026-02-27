"use client"

import { useState, useEffect } from "react"
import { sidebarOptions } from "@/data/sidebarOptions"

export default function SidebarSettings() {
  const [selected, setSelected] = useState<string[]>([])

  // ✅ Load saved sidebar settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("agencySidebar")
    if (saved) setSelected(JSON.parse(saved))
    else setSelected(sidebarOptions) // default: all enabled
  }, [])

  const toggleOption = (option: string) => {
    const updated = selected.includes(option)
      ? selected.filter(o => o !== option)
      : [...selected, option]

    setSelected(updated)
    // ✅ Save to localStorage
    localStorage.setItem("agencySidebar", JSON.stringify(updated))
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md">
      <h2 className="text-lg font-semibold mb-4">
        Sidebar Module Control
      </h2>

      <div className="flex flex-col gap-3">
        {sidebarOptions.map(option => (
          <label key={option} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}