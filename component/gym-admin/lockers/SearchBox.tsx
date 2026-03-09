"use client";

export default function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      className="border rounded-xl px-3 py-2 bg-white w-full md:w-72"
      placeholder="Search locker no / member name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}