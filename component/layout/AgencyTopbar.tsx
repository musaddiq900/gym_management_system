"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Bell, HelpCircle, ChevronDown, Menu } from "lucide-react";

function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export default function AgencyTopbar({
  lastUpdated = "Today, 10:42 AM",
  onMenuClick,
}: {
  lastUpdated?: string;
  onMenuClick?: () => void;
}) {
  const [range, setRange] = useState<"This Week" | "This Month" | "This Year">(
    "This Month"
  );
  const [openRange, setOpenRange] = useState(false);
  const rangeRef = useRef<HTMLDivElement>(null);

  useOutsideClick(rangeRef, () => setOpenRange(false));

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        {/* LEFT: Menu + Search */}
        <div className="flex items-center gap-3 flex-1">
          {/* Mobile menu */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Open menu"
            type="button"
          >
            <Menu size={18} className="text-gray-700" />
          </button>

          {/* Search (NO border, shadow pill) */}
          <div className="flex items-center bg-white shadow-sm rounded-full px-4 py-2 w-full max-w-md">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search for gyms, leads, or staff..."
              className="bg-transparent outline-none text-sm ml-2 w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* RIGHT: last updated + icons + dropdown */}
        <div className="flex items-center gap-3">
          {/* Last updated */}
          <div className="hidden md:block text-xs text-gray-500">
            Last updated: {lastUpdated}
          </div>

          {/* Bell icon */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Notifications"
            type="button"
          >
            <Bell size={18} className="text-gray-600" />
          </button>

          {/* Help / Question icon */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Help"
            type="button"
          >
            <HelpCircle size={18} className="text-gray-600" />
          </button>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-gray-200" />

          {/* This Month dropdown (NO border, shadow pill) */}
          <div className="relative" ref={rangeRef}>
            <button
              onClick={() => setOpenRange((v) => !v)}
              className="flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:shadow-md transition"
              type="button"
            >
              {range}
              <ChevronDown size={16} className="text-gray-400" />
            </button>

            {openRange && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
                {(["This Week", "This Month", "This Year"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRange(r);
                      setOpenRange(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                    type="button"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* subtle bottom border line like screenshot */}
      <div className="h-px w-full bg-gray-100" />
    </header>
  );
}