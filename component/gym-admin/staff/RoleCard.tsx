export default function RoleCard({ role, permissions }: { role: string; permissions: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="font-semibold mb-2">{role}</h3>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
        {permissions.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}