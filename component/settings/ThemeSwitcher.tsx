"use client"
import { useState, useEffect } from "react"

const themes = [
  { name: "Light", class: "light" },
  { name: "Dark", class: "dark" },
  { name: "Blue", class: "theme-blue" },
  { name: "Purple", class: "theme-purple" },
  { name: "Red", class: "theme-red" }
]

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="flex flex-col gap-2">
      {themes.map(t => (
        <button
          key={t.name}
          className={`p-2 rounded-lg shadow-sm hover:shadow-md transition
            ${theme === t.class ? "bg-gray-200 font-semibold" : "bg-white"}
          `}
          onClick={() => setTheme(t.class)}
        >
          {t.name}
        </button>
      ))}
    </div>
  )
}