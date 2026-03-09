import type { StaffRow } from "../../../data/dummyStaff";

function Badge({ text }: { text: string }) {
  const cls =
    text === "ACTIVE"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-gray-50 text-gray-700 border-gray-200";
  return <span className={`text-xs px-2 py-1 rounded-full border ${cls}`}>{text}</span>;
}

function RolePill({ role }: { role: StaffRow["role"] }) {
  const cls =
    role === "TRAINER"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : role === "RECEPTIONIST"
      ? "bg-purple-50 text-purple-700 border-purple-200"
      : "bg-gray-50 text-gray-700 border-gray-200";
  return <span className={`text-xs px-2 py-1 rounded-full border ${cls}`}>{role}</span>;
}

export default function StaffTable({ rows }: { rows: StaffRow[] }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-auto">
      <table className="w-full text-sm min-w-[900px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Branch</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Joining</th>
            <th className="p-3 text-left">Salary</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{r.fullName}</td>
              <td className="p-3 text-gray-600">{r.phone}</td>
              <td className="p-3">{r.branchName}</td>
              <td className="p-3"><RolePill role={r.role} /></td>
              <td className="p-3">{r.joiningDate}</td>
              <td className="p-3">{r.baseSalary}</td>
              <td className="p-3"><Badge text={r.status} /></td>
            </tr>
          ))}

          {!rows.length && (
            <tr>
              <td className="p-6 text-gray-500" colSpan={7}>
                No staff found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}