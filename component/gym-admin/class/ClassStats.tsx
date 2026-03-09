import type { ClassRow } from "../../../data/dummyClasses";

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}

export default function ClassStats({ rows }: { rows: ClassRow[] }) {
  const total = rows.length;
  const active = rows.filter((r) => r.status === "ACTIVE").length;
  const full = rows.filter((r) => r.booked >= r.capacity).length;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Card title="Total Classes" value={`${total}`} />
      <Card title="Active Classes" value={`${active}`} />
      <Card title="Full Classes" value={`${full}`} />
    </div>
  );
}