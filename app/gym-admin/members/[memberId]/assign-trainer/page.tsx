"use client"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function AssignTrainerPage() {
  const params = useParams()
  const memberId = params.memberId

  const [selectedTrainer, setSelectedTrainer] = useState("Ali Khan")

  const trainers = ["Ali Khan", "Sara Ahmed", "John Doe"]

  const handleAssign = () => {
    console.log(`Assigned trainer ${selectedTrainer} to member ${memberId}`)
    alert(`Trainer ${selectedTrainer} assigned!`)
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold">Assign Trainer</h1>
      <select
        value={selectedTrainer}
        onChange={e => setSelectedTrainer(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {trainers.map(tr => (
          <option key={tr}>{tr}</option>
        ))}
      </select>
      <button
        onClick={handleAssign}
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Assign Trainer
      </button>
    </div>
  )
}