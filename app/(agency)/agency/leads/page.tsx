"use client"

import Link from "next/link"

export default function LeadTable() {

  const leads = [
    { id: 1, name: "Fit Zone Gym", status: "Hot" },
    { id: 2, name: "Power House", status: "Warm" },
    { id: 3, name: "Elite Fitness", status: "Cold" },
  ]

  return (
    <div className="w-full">

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">

            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 transition">

                <td className="p-4 font-medium text-gray-800">
                  {lead.name}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        lead.status === "Hot"
                          ? "bg-red-100 text-red-600"
                          : lead.status === "Warm"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }
                    `}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="p-4 flex gap-4">

                  <Link
                    href={`/agency/leads/${lead.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>

                  <Link
                    href={`/agency/leads/${lead.id}/assign`}
                    className="text-indigo-600 hover:underline"
                  >
                    Assign
                  </Link>

                  <Link
                    href={`/agency/leads/${lead.id}/convert`}
                    className="text-green-600 hover:underline"
                  >
                    Convert
                  </Link>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">

        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white p-5 rounded-2xl shadow border space-y-3"
          >

            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">
                {lead.name}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    lead.status === "Hot"
                      ? "bg-red-100 text-red-600"
                      : lead.status === "Warm"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }
                `}
              >
                {lead.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">

              <Link
                href={`/agency/leads/${lead.id}`}
                className="text-blue-600"
              >
                View
              </Link>

              <Link
                href={`/agency/leads/${lead.id}/assign`}
                className="text-indigo-600"
              >
                Assign
              </Link>

              <Link
                href={`/agency/leads/${lead.id}/convert`}
                className="text-green-600"
              >
                Convert
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}