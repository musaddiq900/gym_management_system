import Link from "next/link"
import FollowUpSection from "../../../../../component/leads/FollowUpSection"

export default function LeadDetails({ params }: { params: { id: string } }) {

  const { id } = params

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow border">
        <h1 className="text-2xl font-bold">
          Lead Details (ID: {id})
        </h1>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border space-y-3">
        <p><strong>Gym:</strong> Example Gym</p>
        <p><strong>Status:</strong> Hot</p>
        <p><strong>Payment:</strong> Paid</p>

        <div className="flex gap-4 pt-4">
          <Link href={`/agency/leads/${id}/assign`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Assign Staff
          </Link>

          <Link href={`/agency/leads/${id}/convert`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Convert to Gym
          </Link>
        </div>
      </div>

      <FollowUpSection />

    </div>
  )
}