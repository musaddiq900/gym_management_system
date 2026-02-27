import Link from "next/link"
import StaffTable from "../../../../component/staff/StaffTable"

export default function StaffPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">

      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border">

        <div>
          <h1 className="text-3xl font-bold">
            Staff Management
          </h1>
          <p className="text-gray-500 text-sm">
            Manage trainers and employees
          </p>
        </div>

        <Link
          href="/agency/staff/create"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          + Add Staff
        </Link>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow border">
        <StaffTable />
      </div>

    </div>
  )
}