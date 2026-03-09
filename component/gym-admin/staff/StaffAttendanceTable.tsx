import { staffAttendanceRows } from "../../../data/dummyStaff";

export default function StaffAttendanceTable() {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Check In</th>
            <th>Check Out</th>
          </tr>
        </thead>
        <tbody>
          {staffAttendanceRows.map((a) => (
            <tr key={a.id}>
              <td>{a.staffId}</td>
              <td>{a.date}</td>
              <td>{a.status}</td>
              <td>{a.checkIn}</td>
              <td>{a.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}