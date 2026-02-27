export default function PaymentsPage() {

  const payments = [
    { id: 1, type: "Membership", amount: 5000, method: "Card" },
    { id: 2, type: "Subscription", amount: 50000, method: "Bank" },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold">Payment Logs</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Method</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.type}</td>
                <td className="p-3">Rs {p.amount}</td>
                <td className="p-3">{p.method}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}