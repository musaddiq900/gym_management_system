"use client"

import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border">

      
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-red-500 to-yellow-400 p-10">
          
          <Image
            src="/login.png"
            alt="Login Illustration"
            width={400}
            height={400}
          />

        </div>

        
        <div className="p-10 flex flex-col justify-center">

          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome to Gym System
          </h1>

          <p className="text-gray-500 mb-8">
            Sign in to continue
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-xl border focus:border-red-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-xl border focus:border-red-500 outline-none"
          />

          <button className="w-full p-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-red-500 to-yellow-400 
            hover:opacity-90 transition">

            Login
          </button>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Don’t have account?
            <a href="/auth/signup" className="text-red-500 ml-1 font-semibold">
              Sign Up
            </a>
          </p>

        </div>

      </div>

    </div>
  )
}