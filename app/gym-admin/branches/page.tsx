"use client"
import Link from "next/link"
import BranchCard from "../../../component/gym-admin/branches/BranchCard"

const dummyBranches = [
  {id:"1", name:"Main Branch", city:"Islamabad", manager:"Ali Khan"},
  {id:"2", name:"East Branch", city:"Rawalpindi", manager:"Sara Ahmed"}
]

export default function BranchList() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Branches</h1>
        <Link href="/gym-admin/branches/add" className="bg-green-600 px-5 py-2 rounded-lg text-white">
          + Add Branch
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyBranches.map(branch => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  )
}