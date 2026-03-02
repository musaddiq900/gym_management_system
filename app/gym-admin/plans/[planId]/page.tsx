"use client"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function ViewEditPlanPage() {
  const params = useParams()
  const planId = params.planId

  const [name, setName] = useState("Premium Plan")
  const [duration, setDuration] = useState("3 Months")
  const [price, setPrice] = useState("$120")
  const [classesAccess, setClassesAccess] = useState<string[]>(["Yoga", "Zumba", "Cardio"])
  const [dietTrainerAccess, setDietTrainerAccess] = useState(true)

  const availableClasses = ["Yoga", "Zumba", "Cardio", "Pilates"]

  const handleClassToggle = (cls: string) => {
    if (classesAccess.includes(cls)) {
      setClassesAccess(prev => prev.filter(c => c !== cls))
    } else {
      setClassesAccess(prev => [...prev, cls])
    }
  }

  const handleSave = () => {
    console.log("Updated Plan:", { name, duration, price, classesAccess, dietTrainerAccess })
    alert("Plan updated!")
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">View / Edit Plan</h1>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full p-2 border rounded">
        <option>1 Month</option>
        <option>3 Months</option>
        <option>6 Months</option>
        <option>12 Months</option>
      </select>

      <input
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <div>
        <p className="font-medium mb-2">Class Access:</p>
        <div className="flex flex-wrap gap-2">
          {availableClasses.map(cls => (
            <button
              type="button"
              key={cls}
              onClick={() => handleClassToggle(cls)}
              className={`px-3 py-1 rounded text-white text-sm ${
                classesAccess.includes(cls) ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={dietTrainerAccess}
          onChange={e => setDietTrainerAccess(e.target.checked)}
        />
        <label>Diet & Trainer Access</label>
      </div>

      <button
        onClick={handleSave}
        className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Save Changes
      </button>
    </div>
  )
}