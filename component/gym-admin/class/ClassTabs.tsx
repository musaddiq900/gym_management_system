import Link from "next/link";

const tabs = [
  { label: "Overview", href: "/gym-admin/classes" },
  { label: "Create Class", href: "/gym-admin/classes/create" },
  { label: "Assign Trainer", href: "/gym-admin/classes/assign" },
  { label: "Bookings", href: "/gym-admin/classes/bookings" },
  { label: "Attendance", href: "/gym-admin/classes/attendance" },
];

export default function ClassTabs({ active }: { active: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-2xl bg-gray-100 p-2">
      {tabs.map((t) => {
        const isActive = active === t.label;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${
              isActive
                ? "bg-white text-black shadow-sm"
                : "text-gray-600 hover:bg-white"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}