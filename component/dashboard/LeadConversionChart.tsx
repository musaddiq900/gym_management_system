"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Chart: any = dynamic(() => import("react-apexcharts"), { ssr: false })

type Props = { themeGradient?: string }

export default function LeadConversionChart({ themeGradient }: Props) {
  const [series, setSeries] = useState<number[] | null>(null)
  const [colors, setColors] = useState<string[] | null>(null)

  const tailwindToHex: Record<string, string> = {
    "red-500": "#ef4444",
    "yellow-400": "#facc15",
    "green-500": "#22c55e",
    "blue-500": "#3b82f6",
    "purple-500": "#a855f7",
    "pink-500": "#ec4899"
  }

  useEffect(() => {
    setSeries([40, 35, 25]) // Hot, Warm, Cold

    if (themeGradient) {
      const parts = themeGradient.split(" ")
      const mapped = parts.map(p => tailwindToHex[p.replace("from-", "").replace("to-", "")] || "#000000")
      setColors(mapped.length === 2 ? mapped : ["#f87171", "#facc15"])
    } else {
      setColors(["#f87171", "#fbbf24", "#facc15"])
    }
  }, [themeGradient])

  if (!series || !colors) return null

  const options = {
    labels: ["Hot","Warm","Cold"],
    colors,
    legend: { position: "bottom" as const },
    tooltip: { theme: "dark" }
  }

  return <Chart options={options} series={series} type="pie" height={300} />
}