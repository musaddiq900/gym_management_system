"use client";

type RoleType = "ALL" | "TRAINER" | "RECEPTIONIST" | "MANAGER";

export default function RoleFilter({
  value,
  onChange,
}: {
  value: RoleType;
  onChange: (v: RoleType) => void;
}) {
  return (
    <select
      className="border rounded-xl px-3 py-2 bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value as RoleType)}
    >
      <option value="ALL">All Roles</option>
      <option value="TRAINER">Trainer</option>
      <option value="RECEPTIONIST">Receptionist</option>
      <option value="MANAGER">Manager</option>
    </select>
  );
}