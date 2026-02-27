"use client"

import { useState } from "react"

export default function FollowUpSection() {

  const [note, setNote] = useState("")
  const [logs, setLogs] = useState<string[]>([])

  const addNote = () => {
    if (!note) return
    setLogs([...logs, note])
    setNote("")
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

      <h2 className="text-lg font-bold">Follow Up Logs</h2>

      <textarea
        placeholder="Add follow up note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={addNote}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add Log
      </button>

      <ul className="space-y-2">
        {logs.map((log, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            {log}
          </li>
        ))}
      </ul>

    </div>
  )
}