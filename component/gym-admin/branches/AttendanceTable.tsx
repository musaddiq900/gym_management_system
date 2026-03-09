import type { AttendanceRow } from "../../../data/dummyAttendance";

export default function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-auto">
      <table className="w-full text-sm min-w-[900px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Member</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Branch</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Method</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{r.memberName}</td>
              <td className="p-3 text-gray-600">{r.phone}</td>
              <td className="p-3">{r.branchName}</td>
              <td className="p-3">{r.date}</td>
              <td className="p-3">{r.checkInTime}</td>
              <td className="p-3">{r.method}</td>
              <td className="p-3">{r.status}</td>
            </tr>
          ))}

          {!rows.length && (
            <tr>
              <td className="p-6 text-gray-500" colSpan={7}>
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}