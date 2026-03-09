"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiCreditCard,
  FiCalendar,
  FiActivity,
  FiBarChart2,
  FiCheckSquare,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiBell,
  FiTarget,
  FiSettings,
  FiMenu,
  FiChevronLeft,
  FiSearch,
  FiHeart,
} from "react-icons/fi";
import { MdRestaurantMenu, MdMonitorWeight } from "react-icons/md";

const navItems = [
  { name: "Dashboard", href: "/user", icon: FiHome },
  { name: "Profile", href: "/user/profile", icon: FiUser },
  { name: "Membership", href: "/user/membership", icon: FiCreditCard },
  { name: "Classes", href: "/user/classes", icon: FiCalendar },
  { name: "Workout", href: "/user/workout", icon: FiActivity },
  { name: "Diet", href: "/user/diet", icon: MdRestaurantMenu },
  { name: "Progress", href: "/user/progress", icon: FiBarChart2 },
  { name: "Attendance", href: "/user/attendance", icon: FiCheckSquare },
  { name: "Trainer", href: "/user/trainer", icon: FiUsers },
  { name: "Schedule", href: "/user/schedule", icon: FiClock },
  { name: "Payments", href: "/user/payments", icon: FiDollarSign },
  { name: "Notifications", href: "/user/notifications", icon: FiBell },
  { name: "Goals", href: "/user/goals", icon: FiTarget },
  { name: "BMI", href: "/user/bmi", icon: MdMonitorWeight },
  { name: "Settings", href: "/user/settings", icon: FiSettings },
];

export default function UserLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f7fb]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`hidden md:flex relative flex-col border-r border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0f172a] text-white shadow-2xl transition-all duration-300 ${
            collapsed ? "w-24" : "w-80"
          }`}
        >
          {/* Top */}
          <div className="flex items-center justify-between px-4 py-5 border-b border-slate-800/70">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-blue-900/30">
                <FiHeart className="text-xl" />
              </div>

              {!collapsed && (
                <div className="min-w-0">
                  <h1 className="text-xl font-bold tracking-wide truncate">
                    Gym User
                  </h1>
                  <p className="text-xs text-slate-400 truncate">
                    Member Dashboard Panel
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition"
            >
              {collapsed ? <FiMenu size={18} /> : <FiChevronLeft size={18} />}
            </button>
          </div>

          {/* Nav */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/user" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center ${
                      collapsed ? "justify-center" : "justify-start"
                    } gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-900/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    title={collapsed ? item.name : ""}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    {!collapsed && (
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Card */}
          <div className="p-4 border-t border-slate-800/70">
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-4 shadow-xl shadow-indigo-950/30">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
                  <FiTarget className="text-lg" />
                </div>

                {!collapsed && (
                  <div>
                    <p className="text-xs text-white/75">Today’s Reminder</p>
                    <h3 className="mt-1 text-base font-bold">
                      Stay Consistent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Complete your workout, attend your class, and keep your
                      streak strong.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
              <div className="min-w-0">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
                  Welcome Back
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manage workouts, attendance, classes, progress, and your full
                  fitness journey.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm w-[340px]">
                <FiSearch className="text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}