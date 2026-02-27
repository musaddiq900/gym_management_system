import Link from "next/link"
import TicketTable from "../../../../component/support/TicketTable"

export default function SupportPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">

      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border">

        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-gray-500 text-sm">
            Manage inquiries and support requests
          </p>
        </div>

        <Link
          href="/agency/support/create"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          + Create Ticket
        </Link>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow border">
        <TicketTable />
      </div>

    </div>
  )
}