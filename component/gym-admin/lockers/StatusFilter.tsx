"use client";

export default function StatusFilter({
  value,
  onChange,
}: {
  value: "ALL" | "AVAILABLE" | "ASSIGNED" | "MAINTENANCE";
  onChange: (v: "ALL" | "AVAILABLE" | "ASSIGNED" | "MAINTENANCE") => void;
}) {
  return (
    <select className="border rounded-xl px-3 py-2 bg-white" value={value} onChange={(e) => onChange(e.target.value as any)}>
      <option value="ALL">All Status</option>
      <option value="AVAILABLE">Available</option>
      <option value="ASSIGNED">Assigned</option>
      <option value="MAINTENANCE">Maintenance</option>
    </select>
  );
}