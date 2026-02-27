"use client"
import dynamic from "next/dynamic"
import { useMemo } from "react"

const Chart: any = dynamic(() => import("react-apexcharts"), { ssr: false })

type Props = { themeGradient?: string }

const tailwindColorMap: Record<string, string> = {
  "from-emerald-500": "#10b981",
  "from-blue-600": "#2563eb",
  "from-red-500": "#ef4444",
  "from-purple-600": "#9333ea"
}

export default function GymGrowthChart({ themeGradient }: Props) {
  const series = [
    { name: "New Gyms", data: [5,8,6,10,12,9,14,16,13,18,20,22] }
  ]

  const colors = useMemo(() => {
    if (!themeGradient) return ["#f87171"]

    const key = themeGradient.split(" ")[0]
    return [tailwindColorMap[key] ?? "#f87171"]
  }, [themeGradient])

  const options = {
    chart: { id: "gym-growth", toolbar: { show: false } },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    colors,
    dataLabels: { enabled: false },
    grid: { borderColor: "#ffffff20" },
    tooltip: { theme: "dark" }
  }

  return <Chart options={options} series={series} type="bar" height={300} />
}