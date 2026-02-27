"use client"

import Link from "next/link"

export default function TicketTable() {

  const tickets = [
    { id: 1, title: "Login Issue", status: "Open", priority: "High" },
    { id: 2, title: "Payment Problem", status: "In Progress", priority: "Medium" },
  ]

  return (
    <div className="overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Priority</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          {tickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-50">

              <td className="p-4 font-medium">
                {ticket.title}
              </td>

              <td className="p-4">
                {ticket.priority}
              </td>

              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${ticket.status === "Open"
                    ? "bg-blue-100 text-blue-600"
                    : ticket.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                  }`}>
                  {ticket.status}
                </span>
              </td>

              <td className="p-4 space-x-4">
                <Link
                  href={`/agency/support/${ticket.id}`}
                  className="text-blue-600"
                >
                  View
                </Link>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}