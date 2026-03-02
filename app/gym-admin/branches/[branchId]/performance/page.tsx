"use client"
import PerformanceCard from "../../../../../component/gym-admin/branches/PerformanceCard"

const dummyStats = [
  {title:"Total Members", value:"120"},
  {title:"Revenue", value:"$3,400"},
  {title:"Active Members", value:"98"},
  {title:"Assigned Staff", value:"5"}
]

export default function BranchPerformance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Branch Performance</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dummyStats.map(stat => <PerformanceCard key={stat.title} stat={stat} />)}
      </div>
    </div>
  )
}