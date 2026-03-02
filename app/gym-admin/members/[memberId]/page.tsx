"use client"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function MemberProfile() {
  const params = useParams()
  const memberId = params.memberId

  // Dummy data
  const member = {
    id: memberId,
    name: "Ali Khan",
    plan: "Monthly",
    expiry: "2026-03-31",
    status: "active",
    attendance: 20,
    locker: "L-12",
    classes: ["Yoga", "Zumba"],
    diet: "High Protein",
    workout: "Strength Training",
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">{member.name}</h1>
      <p>Status: <span className={member.status==="active"?"text-green-600":"text-red-600"}>{member.status}</span></p>
      <p>Plan: {member.plan} (Expiry: {member.expiry})</p>
      <p>Attendance: {member.attendance} days</p>
      <p>Locker: {member.locker}</p>
      <p>Classes: {member.classes.join(", ")}</p>
      <p>Diet: {member.diet}</p>
      <p>Workout: {member.workout}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <Link href={`/gym-admin/members/${memberId}/assign-trainer`} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Assign Trainer</Link>
        <Link href={`/gym-admin/members/${memberId}/renew-subscription`} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Renew Subscription</Link>
      </div>
    </div>
  )
}