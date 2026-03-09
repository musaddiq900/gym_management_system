import type { LockerRow } from "../../../data/dummyLockers";

function Card({ title, value, hint }: { title: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {hint && <div className="mt-2 text-xs text-gray-500">{hint}</div>}
    </div>
  );
}

export default function LockerStats({ rows }: { rows: LockerRow[] }) {
  const total = rows.length;
  const available = rows.filter((r) => r.status === "AVAILABLE").length;
  const assigned = rows.filter((r) => r.status === "ASSIGNED").length;
  const maintenance = rows.filter((r) => r.status === "MAINTENANCE").length;

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Total Lockers" value={`${total}`} />
      <Card title="Available" value={`${available}`} />
      <Card title="Assigned" value={`${assigned}`} />
      <Card title="Maintenance" value={`${maintenance}`} />
    </div>
  );
}