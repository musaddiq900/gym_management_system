type Props = {
  title: string
  value: string
  change: string
  themeGradient?: string // ✅ Add this
}

export default function StatsCard({ title, value, change, themeGradient }: Props) {
  return (
    <div
      className={`bg-gradient-to-r ${themeGradient || "from-red-500 to-yellow-400"} rounded-2xl p-6 shadow-lg hover:from-yellow-400 hover:to-red-500 transition-all text-white`}
    >
      <div className="text-sm font-medium mb-2 opacity-80">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm mt-2 opacity-90">{change} from last month</div>
    </div>
  )
}