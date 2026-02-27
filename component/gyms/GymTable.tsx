"use client"

export default function GymTable() {

  const gyms = [
    { id: 1, name: "FitZone Gym", owner: "Ali", status: "Active" },
    { id: 2, name: "Power House", owner: "Ahmed", status: "Suspended" },
  ]

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Gym Name</th>
            <th className="p-3">Owner</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {gyms.map((gym) => (
            <tr key={gym.id} className="border-t">

              <td className="p-3">{gym.name}</td>
              <td className="p-3">{gym.owner}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    gym.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {gym.status}
                </span>
              </td>

              <td className="p-3 space-x-2">

                <button className="text-blue-600">
                  Edit
                </button>

                <button className="text-yellow-600">
                  Suspend
                </button>

                <button className="text-red-600">
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}