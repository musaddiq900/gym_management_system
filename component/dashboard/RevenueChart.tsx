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

export default function RevenueChart({ themeGradient }: Props) {
  const series = [
    { name: "Revenue", data: [30, 40, 45, 50, 49, 60, 70] }
  ]

  const colors = useMemo(() => {
    if (!themeGradient) return ["#f87171"]

    const key = themeGradient.split(" ")[0]
    return [tailwindColorMap[key] ?? "#f87171"]
  }, [themeGradient])

  const options = {
    chart: { toolbar: { show: false } },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul"] },
    colors,
    tooltip: { theme: "dark" }
  }

  return <Chart options={options} series={series} type="line" height={300} />
}