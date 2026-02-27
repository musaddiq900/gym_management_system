"use client"

import { useState, useEffect } from "react"
import StatsCard from "../../../component/dashboard/StatsCard"
import RevenueChart from "../../../component/dashboard/RevenueChart"
import GymGrowthChart from "../../../component/dashboard/GymGrowthChart"
import LeadConversionChart from "../../../component/dashboard/LeadConversionChart"
import RecentActivity from "../../../component/dashboard/RecentActivity"
import NotificationPanel from "../../../component/dashboard/NotificationPanel"

import { stats } from "@/data/dashboardData"
import { getCurrentTheme } from "../../../app/(agency)/agency/theme"

export default function AgencyDashboard() {
  const [themeGradient, setThemeGradient] = useState("from-red-500 to-yellow-400")

  useEffect(() => {
    setThemeGradient(getCurrentTheme())
  }, [])

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">Monitor your platform performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
            themeGradient={themeGradient} // ✅ Pass theme gradient
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`bg-white rounded-2xl p-6 shadow-lg`}>
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <RevenueChart themeGradient={themeGradient} />
        </div>

        <div className={`bg-white rounded-2xl p-6 shadow-lg`}>
          <h2 className="text-lg font-semibold mb-4">Gym Growth</h2>
          <GymGrowthChart themeGradient={themeGradient} />
        </div>
      </div>

      {/* Lead Conversion Pie Chart + Notifications */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className={`bg-white rounded-2xl p-6 shadow-lg`}>
          <h2 className="text-lg font-semibold mb-4">Lead Conversion</h2>
          <LeadConversionChart themeGradient={themeGradient} />
        </div>

        <RecentActivity themeGradient={themeGradient} />
        <NotificationPanel themeGradient={themeGradient} />
      </div>

    </div>
  )
}