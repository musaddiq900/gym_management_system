export default function PerformanceCard({ stat }: any) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
      <h4 className="text-gray-500">{stat.title}</h4>
      <p className="text-2xl font-bold mt-2">{stat.value}</p>
    </div>
  )
}