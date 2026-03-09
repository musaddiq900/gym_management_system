import { AttendanceRow } from "../_data/dummyAttendance";

function Card({ title, value, hint }: { title: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {hint && <div className="mt-2 text-xs text-gray-500">{hint}</div>}
    </div>
  );
}

export default function AttendanceStats({
  rows,
  date,
  branchId,
}: {
  rows: AttendanceRow[];
  date: string;
  branchId: string;
}) {
  const filtered = rows.filter((r) => {
    const branchOk = branchId === "all" ? true : r.branchId === branchId;
    const dateOk = r.date === date;
    return branchOk && dateOk;
  });

  const ok = filtered.filter((r) => r.status === "OK").length;
  const expired = filtered.filter((r) => r.status === "EXPIRED").length;
  const dup = filtered.filter((r) => r.status === "DUPLICATE").length;

  const qr = filtered.filter((r) => r.method === "QR").length;
  const manual = filtered.filter((r) => r.method === "MANUAL").length;
  const bio = filtered.filter((r) => r.method === "BIO").length;

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Check-ins" value={`${filtered.length}`} hint={`Date: ${date}`} />
      <Card title="OK" value={`${ok}`} hint={`Duplicates: ${dup}`} />
      <Card title="Expired Attempts" value={`${expired}`} hint="Renewals required" />
      <Card title="Methods" value={`${qr} QR • ${manual} Manual`} hint={`${bio} Bio`} />
    </div>
  );
}