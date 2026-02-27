"use client"

import Link from "next/link"

export default function StaffTable() {

  const staff = [
    { id: 1, name: "Ali Khan", role: "Trainer", salary: "30000" },
    { id: 2, name: "Ahmed", role: "Receptionist", salary: "20000" },
  ]

  return (
    <div className="overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Salary</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          {staff.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">

              <td className="p-4 font-medium">
                {member.name}
              </td>

              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                  {member.role}
                </span>
              </td>

              <td className="p-4">
                Rs {member.salary}
              </td>

              <td className="p-4">
                <Link
                  href={`/agency/staff/${member.id}`}
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