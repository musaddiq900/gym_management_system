"use client"

import Link from "next/link"

export default function LeadTable() {

  const leads = [
    { id: 1, gym: "Fit Zone", status: "Hot", paid: "Paid" },
    { id: 2, gym: "Power Gym", status: "Warm", paid: "Unpaid" },
  ]

  return (
    <table className="w-full text-left">

      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">Gym</th>
          <th className="p-3">Lead Status</th>
          <th className="p-3">Payment</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id} className="border-t">

            <td className="p-3 font-medium">{lead.gym}</td>

            <td className="p-3">
              <span className={`px-3 py-1 rounded-full text-sm
                ${lead.status === "Hot"
                  ? "bg-red-100 text-red-600"
                  : lead.status === "Warm"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-blue-100 text-blue-600"}`}>
                {lead.status}
              </span>
            </td>

            <td className="p-3">
              <span className={`px-3 py-1 rounded-full text-sm
                ${lead.paid === "Paid"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"}`}>
                {lead.paid}
              </span>
            </td>

            <td className="p-3">
              <Link
                href={`/agency/leads/${lead.id}`}
                className="text-blue-600"
              >
                View
              </Link>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  )
}