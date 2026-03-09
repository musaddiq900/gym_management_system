import type { LockerRow } from "../../../data/dummyLockers";

function StatusBadge({ s }: { s: LockerRow["status"] }) {
  const cls =
    s === "AVAILABLE"
      ? "bg-green-50 text-green-700 border-green-200"
      : s === "ASSIGNED"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : "bg-orange-50 text-orange-700 border-orange-200";

  return <span className={`text-xs px-2 py-1 rounded-full border ${cls}`}>{s}</span>;
}

export default function LockerTable({ rows }: { rows: LockerRow[] }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-auto">
      <table className="w-full text-sm min-w-[950px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Locker</th>
            <th className="p-3 text-left">Branch</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Member</th>
            <th className="p-3 text-left">Assigned At</th>
            <th className="p-3 text-left">Deposit</th>
            <th className="p-3 text-left">Key</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{r.lockerNo}</td>
              <td className="p-3">{r.branchName}</td>
              <td className="p-3 text-gray-600">{r.location || "-"}</td>
              <td className="p-3"><StatusBadge s={r.status} /></td>
              <td className="p-3">{r.memberName || "-"}</td>
              <td className="p-3 text-gray-600">{r.assignedAt || "-"}</td>
              <td className="p-3">{typeof r.deposit === "number" ? r.deposit : "-"}</td>
              <td className="p-3">{r.keyNo || "-"}</td>
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td className="p-6 text-gray-500" colSpan={8}>No lockers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}