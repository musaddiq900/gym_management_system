import Link from "next/link"

export default function GymDetails({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow border flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Gym Details
          </h1>
          <p className="text-gray-500 text-sm">
            Complete management panel
          </p>
        </div>

        {/* 🔥 Assign Plan Button */}
        <Link
          href={`/agency/gyms/${id}/assign`}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
        >
          Assign Plan
        </Link>

      </div>

      {/* Info Card */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <p><strong>Gym Name:</strong> Example Gym</p>
        <p><strong>Owner:</strong> Owner Name</p>

        <span className="inline-block mt-3 px-4 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
          Pending Plan
        </span>
      </div>

    </div>
  )
}