"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddPlanPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("1 Month")
  const [price, setPrice] = useState("")
  const [classesAccess, setClassesAccess] = useState<string[]>([])
  const [dietTrainerAccess, setDietTrainerAccess] = useState(false)

  const availableClasses = ["Yoga", "Zumba", "Cardio", "Pilates"]

  const handleClassToggle = (cls: string) => {
    if (classesAccess.includes(cls)) {
      setClassesAccess(prev => prev.filter(c => c !== cls))
    } else {
      setClassesAccess(prev => [...prev, cls])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New Plan:", { name, duration, price, classesAccess, dietTrainerAccess })
    router.push("/gym-admin/membership-plans")
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Add Membership Plan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Plan Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full p-2 border rounded">
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>12 Months</option>
        </select>

        <input
          type="text"
          placeholder="Price (e.g., $50)"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
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
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Plan
        </button>
      </form>
    </div>
  )
}