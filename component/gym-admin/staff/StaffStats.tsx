import type { StaffRow } from "../../../data/dummyStaff";

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}

export default function StaffStats({ rows }: { rows: StaffRow[] }) {
  const total = rows.length;
  const active = rows.filter((r) => r.status === "ACTIVE").length;
  const trainers = rows.filter((r) => r.role === "TRAINER").length;
  const receptionists = rows.filter((r) => r.role === "RECEPTIONIST").length;

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Total Staff" value={`${total}`} />
      <Card title="Active Staff" value={`${active}`} />
      <Card title="Trainers" value={`${trainers}`} />
      <Card title="Receptionists" value={`${receptionists}`} />
    </div>
  );
}