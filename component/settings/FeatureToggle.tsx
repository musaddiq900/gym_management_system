"use client"
import { useState } from "react"

type ToggleProps = { name: string; enabled: boolean; onChange?: (value: boolean) => void }

export default function FeatureToggle({ name, enabled: initial, onChange }: ToggleProps) {
  const [enabled, setEnabled] = useState(initial)

  const toggle = () => {
    setEnabled(!enabled)
    onChange?.(!enabled)
  }

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <span className="font-medium">{name}</span>
      <button
        onClick={toggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition
          ${enabled ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}
        `}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow"></div>
      </button>
    </div>
  )
}