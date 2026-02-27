"use client"

import { useState } from "react"
import FeatureSection from "../subscriptions/FeatureSection"

export default function SubscriptionForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    maxBranches: "",
    maxMembers: "",
    maxStaff: "",
    features: {
      pos: false,
      inventory: false,
      whatsapp: false,
      biometric: false,
      mobileApp: false,
      website: false,
    },
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleFeature = (key: string) => {
    setForm({
      ...form,
      features: {
        ...form.features,
        [key]: !form.features[key as keyof typeof form.features],
      },
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Plan Data:", form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Plan Name"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="maxBranches"
          type="number"
          placeholder="Max Branches"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="maxMembers"
          type="number"
          placeholder="Max Members"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="maxStaff"
          type="number"
          placeholder="Max Staff"
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      {/* Features */}
      <FeatureSection
        features={form.features}
        toggleFeature={toggleFeature}
      />

      <button className="bg-green-600 text-white px-6 py-2 rounded">
        Save Plan
      </button>

    </form>
  )
}