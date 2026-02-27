export default function StaffDetails({ params }: { params: { id: string } }) {

  const { id } = params

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow border">
        <h1 className="text-2xl font-bold">
          Staff Details (ID: {id})
        </h1>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border space-y-3">

        <p><strong>Name:</strong> Ali Khan</p>
        <p><strong>Role:</strong> Trainer</p>
        <p><strong>Salary:</strong> Rs 30000</p>
        <p><strong>Commission:</strong> 5%</p>

        <div className="pt-4">
          <h2 className="font-semibold mb-2">
            Performance
          </h2>

          <p>Leads Converted: 12</p>
          <p>Revenue Generated: Rs 1,20,000</p>

        </div>

      </div>

    </div>
  )
}