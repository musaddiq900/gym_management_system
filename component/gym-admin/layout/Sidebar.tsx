"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserCog,
  CalendarCheck,
  Dumbbell,
  CreditCard,
  FileText,
  Settings,
  Package,
  ShoppingCart,
  Bell,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/gym-admin", icon: LayoutDashboard },
  { name: "Members", href: "/gym-admin/members", icon: Users },
  { name: "Membership Plans", href: "/gym-admin/plans", icon: CreditCard },
  { name: "Branches", href: "/gym-admin/branches", icon: Building2 },
  { name: "Staff Management", href: "/gym-admin/staff", icon: UserCog },
  { name: "Attendance", href: "/gym-admin/attendance", icon: CalendarCheck },
  { name: "Classes", href: "/gym-admin/classes", icon: Dumbbell },
  { name: "Diet & Workout", href: "/gym-admin/diet", icon: FileText },
  { name: "Locker Management", href: "/gym-admin/lockers", icon: Package },
  { name: "POS & Inventory", href: "/gym-admin/pos", icon: ShoppingCart },
  { name: "WhatsApp Marketing", href: "/gym-admin/marketing", icon: Bell },
  { name: "Settings", href: "/gym-admin/settings", icon: Settings },
];

export default function GymSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-gradient-to-b from-red-500 to-yellow-400 
      text-white shadow-2xl flex flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-72"}`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-white/30">
        {!collapsed && (
          <span className="text-lg font-bold">
            Gym Admin
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-white/20 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-xl 
            hover:bg-white/20 transition"
          >
            <item.icon size={20} />

            {!collapsed && (
              <span className="text-sm font-medium">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}