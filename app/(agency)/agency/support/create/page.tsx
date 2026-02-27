"use client"

import { useState } from "react"

export default function CreateTicket() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <div className="bg-white p-8 rounded-2xl shadow border space-y-4">

        <h1 className="text-2xl font-bold">
          Create Support Ticket
        </h1>

        <input
          name="title"
          placeholder="Ticket Title"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="priority"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Submit Ticket
        </button>

      </div>

    </div>
  )
}