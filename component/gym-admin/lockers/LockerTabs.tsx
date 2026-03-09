import Link from "next/link";

type Tab = { label: string; href: string };

const tabs: Tab[] = [
  { label: "Overview", href: "/gym-admin/lockers" },
  { label: "Lockers List", href: "/gym-admin/lockers/list" },
  { label: "Assign", href: "/gym-admin/lockers/assign" },
  { label: "Return", href: "/gym-admin/lockers/return" },
  { label: "Reports", href: "/gym-admin/lockers/reports" },
];

export default function LockerTabs({ active }: { active: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto rounded-2xl bg-gray-100 p-2">
        {tabs.map((t) => {
          const isActive = active === t.label;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={[
                "whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:bg-white/60 hover:text-gray-900",
              ].join(" ")}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}