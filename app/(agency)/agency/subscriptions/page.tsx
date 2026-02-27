import Link from "next/link"

export default function SubscriptionsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subscription Plans</h1>

        <Link
          href="/agency/subscriptions/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Plan
        </Link>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p>Plans Table Will Show Here</p>
      </div>
    </div>
  )
}