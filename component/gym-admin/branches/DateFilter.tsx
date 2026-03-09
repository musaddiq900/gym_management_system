"use client";

export default function DateFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="date"
      className="border rounded-xl px-3 py-2 bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}