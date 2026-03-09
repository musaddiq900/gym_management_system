"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "agency" | "gym";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Frontend only role selector
  const [role, setRole] = useState<Role>("gym");

  const canLogin = useMemo(() => {
    return email.trim().length > 3 && password.trim().length >= 3;
  }, [email, password]);

  function onLogin() {
    // ✅ Frontend-only routing logic
    if (role === "agency") {
      router.push("/agency/dashboard");
      return;
    }

    // gym admin → branch select screen
    router.push("/auth/select-branch");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-red-500 to-yellow-400 p-10">
          <Image src="/login.png" alt="Login Illustration" width={400} height={400} />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome to Gym System</h1>
          <p className="text-gray-500 mb-8">Sign in to continue</p>

          {/* ✅ Role select */}
          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-700">Login as</label>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("gym")}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition shadow-sm
                  ${role === "gym" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                Gym Admin
              </button>

              <button
                type="button"
                onClick={() => setRole("agency")}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition shadow-sm
                  ${role === "agency" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                Agency Admin
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Gym Admin → branch select, Agency Admin → agency dashboard
            </p>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-2xl border border-gray-200 focus:border-red-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-2xl border border-gray-200 focus:border-red-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={onLogin}
            disabled={!canLogin}
            className={`w-full p-3 rounded-2xl font-semibold text-white transition
              bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90
              ${!canLogin ? "opacity-50 cursor-not-allowed" : ""}`}
          >
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
  );
}