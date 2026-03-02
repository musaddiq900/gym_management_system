"use client"

import { useState, useEffect } from "react"
import { sidebarOptions } from "@/data/sidebarOptions"
import { themes } from "@/data/themes"

export default function SettingsPanel() {
  const [selectedSidebar, setSelectedSidebar] = useState<string[]>([])
  const [activeTheme, setActiveTheme] = useState("red")

  useEffect(() => {
    const savedSidebar = localStorage.getItem("agencySidebar")
    if (savedSidebar) setSelectedSidebar(JSON.parse(savedSidebar))
    else setSelectedSidebar(sidebarOptions)

    const savedTheme = localStorage.getItem("agencyTheme")
    if (savedTheme && themes[savedTheme as keyof typeof themes])
      setActiveTheme(savedTheme)
  }, [])

  const toggleSidebarOption = (option: string) => {
    const updated = selectedSidebar.includes(option)
      ? selectedSidebar.filter(o => o !== option)
      : [...selectedSidebar, option]

    setSelectedSidebar(updated)
    localStorage.setItem("agencySidebar", JSON.stringify(updated))
  }

  const changeTheme = (themeKey: string) => {
    localStorage.setItem("agencyTheme", themeKey)
    setActiveTheme(themeKey)
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center p-6">

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">

        {/* Sidebar Control */}
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-700 shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Sidebar Module Control
          </h2>

          <div className="space-y-3">
            {sidebarOptions.map(option => (
              <label
                key={option}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#111827] transition"
              >
                <input
                  type="checkbox"
                  checked={selectedSidebar.includes(option)}
                  onChange={() => toggleSidebarOption(option)}
                  className="accent-purple-600 w-4 h-4"
                />
                <span className="text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Theme Control */}
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-700 shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Theme Settings
          </h2>

          <div className="space-y-4">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => changeTheme(key)}
                className={`w-full p-3 rounded-xl border transition text-left ${
                  activeTheme === key
                    ? "border-purple-500 bg-[#111827]"
                    : "border-gray-700 hover:border-purple-600"
                }`}
              >
                <div className={`h-4 rounded bg-gradient-to-r ${theme.gradient}`} />
                <div className="mt-2 text-sm text-gray-300">
                  {theme.name}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}