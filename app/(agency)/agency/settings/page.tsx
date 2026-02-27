"use client"

import { useState, useEffect } from "react"
import { sidebarOptions } from "@/data/sidebarOptions"
import { themes } from "@/data/themes"

export default function SettingsPanel() {
  // Sidebar modules state
  const [selectedSidebar, setSelectedSidebar] = useState<string[]>([])
  // Theme state
  const [activeTheme, setActiveTheme] = useState("red") // default theme

  // Load saved settings
  useEffect(() => {
    // Sidebar
    const savedSidebar = localStorage.getItem("agencySidebar")
    if (savedSidebar) setSelectedSidebar(JSON.parse(savedSidebar))
    else setSelectedSidebar(sidebarOptions)

    // Theme
    const savedTheme = localStorage.getItem("agencyTheme")
    if (savedTheme && themes[savedTheme as keyof typeof themes])
      setActiveTheme(savedTheme)
  }, [])

  // Toggle sidebar module
  const toggleSidebarOption = (option: string) => {
    const updated = selectedSidebar.includes(option)
      ? selectedSidebar.filter(o => o !== option)
      : [...selectedSidebar, option]

    setSelectedSidebar(updated)
    localStorage.setItem("agencySidebar", JSON.stringify(updated))
  }

  // Change theme
  const changeTheme = (themeKey: string) => {
    localStorage.setItem("agencyTheme", themeKey)
    setActiveTheme(themeKey)
    window.location.reload() // Apply everywhere
  }

  return (
    <div className="space-y-6">
      {/* Sidebar Modules */}
      <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          Sidebar Module Control
        </h2>

        <div className="flex flex-col gap-3">
          {sidebarOptions.map(option => (
            <label key={option} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedSidebar.includes(option)}
                onChange={() => toggleSidebarOption(option)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Theme Selection */}
      <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md">
        <h2 className="text-lg font-semibold mb-4">Theme Settings</h2>

        <div className="flex flex-col gap-3">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => changeTheme(key)}
              className={`p-3 rounded-xl text-left transition border ${
                activeTheme === key ? "border-black" : "border-gray-200"
              }`}
            >
              {/* Gradient preview */}
              <div className={`h-6 w-full rounded bg-gradient-to-r ${theme.gradient}`} />
              <div className="mt-2 text-sm">{theme.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}