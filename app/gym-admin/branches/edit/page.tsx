"use client"
import { useRouter, useSearchParams } from "next/navigation"
import BranchForm from "../../../../component/gym-admin/branches/BranchForm"

const dummyData = {
  name:"Main Branch", city:"Islamabad", address:"Street 12", phone:"03001234567", isActive:true
}

export default function EditBranch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const branchId = searchParams.get("branchId")

  const handleSubmit = (data:any) => {
    console.log("Update branch", branchId, data)
    router.push("/gym-admin/branches")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Branch</h1>
      <BranchForm initialData={dummyData} onSubmit={handleSubmit} />
    </div>
  )
}