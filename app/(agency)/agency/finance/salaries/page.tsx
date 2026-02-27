export default function SalariesPage() {

  const salaries = [
    { name: "Ali", salary: 30000, status: "Paid" },
    { name: "Ahmed", salary: 25000, status: "Pending" },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold">Staff Salaries</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {salaries.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{s.name}</td>
                <td className="p-3">Rs {s.salary}</td>
                <td className="p-3">{s.status}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}