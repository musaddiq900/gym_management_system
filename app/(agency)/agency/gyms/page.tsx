import Link from "next/link"
import GymTable from "../../../../component/gyms/GymTable"

export default function GymsPage() {
  return (
    <div className="p-6 space-y-6">

      {/* Header Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Gyms Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all registered gyms, status and settings
          </p>
        </div>

        <Link
          href="/agency/gyms/create"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition text-center"
        >
          + Add New Gym
        </Link>

      </div>

      {/* Stats Cards (Optional but Professional Look) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Total Gyms</p>
          <h2 className="text-2xl font-bold mt-1">24</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Active Gyms</p>
          <h2 className="text-2xl font-bold mt-1 text-green-600">18</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border">
          <p className="text-gray-500 text-sm">Suspended</p>
          <h2 className="text-2xl font-bold mt-1 text-red-600">6</h2>
        </div>

      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-2xl shadow border">
        <GymTable />
      </div>

    </div>
  )
}