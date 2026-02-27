"use client"

export default function RevenuePage() {

  const revenue = [
    { month: "Jan", amount: 500000 },
    { month: "Feb", amount: 650000 },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold">Revenue Overview</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {revenue.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{item.month}</td>
                <td className="p-3">Rs {item.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}