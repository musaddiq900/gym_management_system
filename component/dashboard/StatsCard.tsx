import { DollarSign, Building2, Users, Funnel } from "lucide-react"

type Props = {
  title: string
  value: string
  change: string
  subtext: string
  icon: "revenue" | "gyms" | "conversion" | "members"
}

export default function StatsCard({
  title,
  value,
  change,
  subtext,
  icon,
}: Props) {

  const iconMap = {
    revenue: <DollarSign size={20} />,
    gyms: <Building2 size={20} />,
    conversion: <Funnel size={20} />,
    members: <Users size={20} />,
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full">

      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">

        <div className="bg-gray-100 p-3 rounded-lg text-gray-700">
          {iconMap[icon]}
        </div>

        <div className="text-green-500 text-sm font-semibold">
          {change}
        </div>

      </div>

      {/* Title */}
      <p className="text-gray-500 text-sm">{title}</p>

      {/* Value */}
      <h2 className="text-3xl font-bold mt-1">{value}</h2>

      {/* Subtext */}
      <p className="text-gray-400 text-sm mt-2">{subtext}</p>

    </div>
  )
}