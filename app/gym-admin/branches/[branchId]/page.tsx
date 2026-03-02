// app/gym-admin/branches/[branchId]/page.tsx
import Link from "next/link"

interface Branch {
  id: string
  name: string
  city: string
  manager: string
  membersCount: number
  revenue: string
  activeMembers: number
  staffCount: number
}

// Async page component
export default async function BranchDashboard({ params }: { params: { branchId: string } }) {

  const branchId = params.branchId

  // Simulate fetch API
  const branch: Branch = {
    id: branchId,
    name: "Main Branch",
    city: "Islamabad",
    manager: "Ali Khan",
    membersCount: 120,
    revenue: "$3,400",
    activeMembers: 98,
    staffCount: 5
  }

  return (
    <div className="p-6">
      {/* Branch Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{branch.name}</h1>
          <p className="text-gray-500">{branch.city}</p>
          <p className="text-gray-400 text-sm">Manager: {branch.manager}</p>
        </div>

        {/* Workflow Buttons */}
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <Link
            href={`/gym-admin/branches/${branch.id}/assign`}
            className="bg-blue-600 px-4 py-2 rounded text-white text-sm"
          >
            Assign Manager
          </Link>
          <Link
            href={`/gym-admin/branches/${branch.id}/staff-sync`}
            className="bg-green-600 px-4 py-2 rounded text-white text-sm"
          >
            Staff Sync
          </Link>
          <Link
            href={`/gym-admin/branches/${branch.id}/member-distribution`}
            className="bg-indigo-600 px-4 py-2 rounded text-white text-sm"
          >
            Member Distribution
          </Link>
          <Link
            href={`/gym-admin/branches/${branch.id}/performance`}
            className="bg-indigo-600 px-4 py-2 rounded text-white text-sm"
          >
            View Performance
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <h4 className="text-gray-500">Total Members</h4>
          <p className="text-2xl font-bold mt-2">{branch.membersCount}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <h4 className="text-gray-500">Revenue</h4>
          <p className="text-2xl font-bold mt-2">{branch.revenue}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <h4 className="text-gray-500">Active Members</h4>
          <p className="text-2xl font-bold mt-2">{branch.activeMembers}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <h4 className="text-gray-500">Assigned Staff</h4>
          <p className="text-2xl font-bold mt-2">{branch.staffCount}</p>
        </div>
      </div>
    </div>
  )
}