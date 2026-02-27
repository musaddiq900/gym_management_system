"use client"

import { useState, use } from "react"

export default function EditGym({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const [name, setName] = useState("")
  const [owner, setOwner] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleUpdate = () => {
    console.log("Updating Gym:", id)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h1 className="text-3xl font-bold text-gray-800">
          Edit Gym
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Update gym details and settings (ID: {id})
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            placeholder="Gym Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />

          <input
            placeholder="Owner Name"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />

        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4">

          <button
            onClick={handleUpdate}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Update Gym
          </button>

          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Delete
          </button>

        </div>

      </div>

    </div>
  )
}