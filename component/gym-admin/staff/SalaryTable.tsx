import { salaryRows } from "../../../data/dummyStaff";

export default function SalaryTable() {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Month</th>
            <th>Base</th>
            <th>Bonus</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {salaryRows.map((s) => (
            <tr key={s.id}>
              <td>{s.staffId}</td>
              <td>{s.month}</td>
              <td>{s.baseSalary}</td>
              <td>{s.bonus}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}