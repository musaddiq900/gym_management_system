"use client"

import { useState } from "react"

export default function LeadForm() {

  const [form, setForm] = useState({
    gym: "",
    owner: "",
    phone: "",
    status: "Cold",
    paid: "Unpaid",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input name="gym" placeholder="Gym Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg" />

      <input name="owner" placeholder="Owner Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg" />

      <input name="phone" placeholder="Phone"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg" />

      <select name="status"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg">
        <option>Cold</option>
        <option>Warm</option>
        <option>Hot</option>
      </select>

      <select name="paid"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg">
        <option>Unpaid</option>
        <option>Paid</option>
      </select>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
        Save Lead
      </button>

    </form>
  )
}