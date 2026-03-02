"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Bell, User, Sun, Moon, Plus, Menu } from "lucide-react";
import Link from "next/link";

type TopbarProps = {
  onToggleSidebar?: () => void;
};

const notifications = [
  { id: 1, message: "Membership Expiring Soon" },
  { id: 2, message: "New Payment Received" },
  { id: 3, message: "Low Inventory Alert" },
];

export default function GymTopbar({ onToggleSidebar }: TopbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const notifRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const quickRef = useRef<HTMLDivElement | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      )
        setShowNotif(false);

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      )
        setShowProfile(false);

      if (
        quickRef.current &&
        !quickRef.current.contains(event.target as Node)
      )
        setShowQuickAdd(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 w-full">

          {/* MOBILE SIDEBAR BUTTON */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
          )}

          {/* SEARCH */}
          <div className="relative w-full max-w-md">
            <Search
  size={16}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>

            <input
              type="text"
              placeholder=""
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl
              bg-gray-100 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* QUICK ADD */}
          <div className="relative" ref={quickRef}>
            <button
              onClick={() => setShowQuickAdd(!showQuickAdd)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <Plus size={16} />
              Add
            </button>
          </div>

          {/* NOTIFICATIONS */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {notifications.length}
              </span>
            </button>
          </div>

          {/* PROFILE */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <User size={18} />
              <span className="hidden md:inline text-sm font-medium">
                Admin
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}