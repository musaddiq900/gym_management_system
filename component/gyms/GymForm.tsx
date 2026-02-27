"use client"

import { useState } from "react"

export default function GymForm() {

  const [form, setForm] = useState({
    name: "",
    owner: "",
    phone: "",
    email: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Gym Data:", form)

    // Step Flow:
    // 1. Save Gym
    // 2. Assign Plan
    // 3. Create Login
    // 4. Enable Access
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow space-y-4"
    >

      <input
        name="name"
        placeholder="Gym Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="owner"
        placeholder="Owner Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <button
        className="bg-green-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Save Gym
      </button>

    </form>
  )
}