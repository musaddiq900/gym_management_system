import type { ClassRow } from "../../../data/dummyClasses";

export default function ClassTable({ rows }: { rows: ClassRow[] }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-auto">
      <table className="w-full text-sm min-w-[900px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Class</th>
            <th className="p-3 text-left">Branch</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Trainer</th>
            <th className="p-3 text-left">Capacity</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{r.className}</td>
              <td className="p-3">{r.branchName}</td>
              <td className="p-3">{r.startTime} - {r.endTime}</td>
              <td className="p-3">{r.trainer || "-"}</td>
              <td className="p-3">{r.booked}/{r.capacity}</td>
              <td className="p-3">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}