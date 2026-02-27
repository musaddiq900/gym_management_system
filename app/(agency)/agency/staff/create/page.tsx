"use client"

import { useState } from "react"

export default function CreateStaff() {

  const [form, setForm] = useState({
    name: "",
    role: "Trainer",
    salary: "",
    commission: "",
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
          Add New Staff
        </h1>

        <input
          name="name"
          placeholder="Staff Name"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option>Trainer</option>
          <option>Receptionist</option>
          <option>Manager</option>
        </select>

        <input
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="commission"
          placeholder="Commission %"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Save Staff
        </button>

      </div>

    </div>
  )
}