import { performanceRows } from "../../../data/dummyStaff";

export default function PerformanceTable() {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Month</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {performanceRows.map((p) => (
            <tr key={p.id}>
              <td>{p.staffId}</td>
              <td>{p.month}</td>
              <td>{p.rating}</td>
              <td>{p.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}