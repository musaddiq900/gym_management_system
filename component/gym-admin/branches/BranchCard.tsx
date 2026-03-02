"use client"
import Link from "next/link"

export default function BranchCard({ branch }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="font-semibold text-lg">{branch.name}</h2>
        <p className="text-gray-500">{branch.city}</p>
        <p className="text-gray-400 text-sm">Manager: {branch.manager}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Link href={`/gym-admin/branches/${branch.id}`} className="text-blue-600 text-sm">
          View
        </Link>
        <Link href={`/gym-admin/branches/edit?branchId=${branch.id}`} className="text-yellow-600 text-sm">
          Edit
        </Link>
      </div>
    </div>
  )
}