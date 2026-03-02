"use client"
import { useState, useEffect } from "react"

export default function BranchForm({ initialData, onSubmit }: any) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    isActive: true
  })

  useEffect(()=>{
    if(initialData) setForm(initialData)
  },[initialData])

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target
    setForm({...form, [name]: type === 'checkbox'? checked : value})
  }

  return (
    <form
      onSubmit={e => {e.preventDefault(); onSubmit(form)}}
      className="bg-white shadow rounded-xl p-6 space-y-4 max-w-lg mx-auto"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Branch Name"
        className="w-full border p-3 rounded-lg"
      />
      <input
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full border p-3 rounded-lg"
      />
      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full border p-3 rounded-lg"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full border p-3 rounded-lg"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isActive"
          checked={form.isActive}
          onChange={handleChange}
        />
        Active
      </label>
      <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg text-white">
        Save
      </button>
    </form>
  )
}