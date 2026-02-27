"use client"

export default function ExpensesPage() {

  const expenses = [
    { item: "Electricity", amount: 50000 },
    { item: "Staff Salary", amount: 200000 },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold">Expense Tracking</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Expense</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{item.item}</td>
                <td className="p-3">Rs {item.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}