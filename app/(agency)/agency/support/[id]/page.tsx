import Link from "next/link"

export default function TicketDetails({ params }: { params: { id: string } }) {

  const { id } = params

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow border">

        <h1 className="text-2xl font-bold">
          Ticket Details (ID: {id})
        </h1>

        <div className="mt-4 space-y-2">
          <p><strong>Title:</strong> Login Issue</p>
          <p><strong>Status:</strong> Open</p>
          <p><strong>Priority:</strong> High</p>
        </div>

        <div className="flex gap-4 mt-6">

          <Link
            href={`/agency/support/${id}/assign`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Assign Assistant
          </Link>

          <Link
            href={`/agency/support/${id}/chat`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Open Chat
          </Link>

        </div>

      </div>

    </div>
  )
}