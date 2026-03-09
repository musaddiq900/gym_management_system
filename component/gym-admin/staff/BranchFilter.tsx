"use client";

export default function BranchFilter({
  branches,
  value,
  onChange,
}: {
  branches: { id: string; name: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select className="border rounded-xl px-3 py-2 bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}>
      {branches.map((b) => (
        <option key={b.id} value={b.id}>{b.name}</option>
      ))}
    </select>
  );
}