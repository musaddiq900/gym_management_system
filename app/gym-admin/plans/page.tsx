"use client"
import Link from "next/link"
import { useState } from "react"

interface Plan {
  id: string
  name: string
  duration: string
  price: string
  classesAccess: string[]
  dietTrainerAccess: boolean
}

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: "1",
      name: "Basic Plan",
      duration: "1 Month",
      price: "$50",
      classesAccess: ["Yoga"],
      dietTrainerAccess: false,
    },
    {
      id: "2",
      name: "Premium Plan",
      duration: "3 Months",
      price: "$120",
      classesAccess: ["Yoga", "Zumba", "Cardio"],
      dietTrainerAccess: true,
    },
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Membership Plans</h1>
        <Link
          href="/gym-admin/membership-plans/add"
          className="bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-700"
        >
          + Add Plan
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-semibold text-lg">{plan.name}</h2>
              <p className="text-gray-500">Duration: {plan.duration}</p>
              <p className="text-gray-500">Price: {plan.price}</p>
              <p className="text-gray-500">Classes: {plan.classesAccess.join(", ")}</p>
              <p className="text-gray-500">
                Diet & Trainer Access: {plan.dietTrainerAccess ? "Yes" : "No"}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/gym-admin/membership-plans/${plan.id}`}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                View / Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}