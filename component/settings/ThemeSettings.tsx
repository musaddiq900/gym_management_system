"use client"
import { useTheme } from "@/context/ThemeContext"
import { themes } from "@/data/themes"

export default function ThemeSettings() {
  const { themeKey, setTheme } = useTheme()

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Theme Settings</h2>
      <div className="flex flex-col gap-3">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`p-3 rounded-xl text-left transition border ${
              themeKey === key ? "border-black" : "border-gray-200"
            }`}
          >
            <div className={`h-6 w-full rounded bg-gradient-to-r ${theme.gradient}`} />
            <div className="mt-2 text-sm">{theme.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}