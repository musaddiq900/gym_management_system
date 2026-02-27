"use client"

import Image from "next/image"
import { useState } from "react"
import { User, Mail, Lock, Phone, Building2 } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    agencyName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-red-500 to-yellow-400 p-10">
          <Image
            src="/signup.png"
            alt="Signup"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 flex flex-col justify-center">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Agency Account
          </h1>

          <p className="text-gray-500 mb-8">
            Start managing gyms professionally
          </p>

          <div className="space-y-6">

            {/* Agency Name */}
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="agencyName"
                placeholder=" "
                value={formData.agencyName}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Agency Name
              </label>
            </div>

            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Phone Number
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="confirmPassword"
                placeholder=" "
                value={formData.confirmPassword}
                onChange={handleChange}
                className="peer w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none
                focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
              <label className="absolute left-12 top-4 text-gray-500 text-sm
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-1
              peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-red-600 peer-[&:not(:placeholder-shown)]:bg-white
              peer-[&:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">
                Confirm Password
              </label>
            </div>

            {/* Button */}
            <button
              className="w-full h-14 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-red-500 to-yellow-400
              shadow-lg hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300"
            >
              Create Account
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}