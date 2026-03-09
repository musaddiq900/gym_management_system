"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Users,
  DollarSign,
  BarChart3,
  LifeBuoy,
  Settings,
  ChevronDown,
  Plus,
} from "lucide-react";

type SubItem = { name: string; href: string };

type Item = {
  name: string;
  icon: any;
  href?: string;
  subMenu?: SubItem[];
};

type Section = {
  title: string;
  items: Item[];
};

const SECTIONS: Section[] = [
  {
    title: "GENERAL",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/agency" },
      {
        name: "Gyms",
        icon: Building2,
        subMenu: [
          { name: "All Gyms", href: "/agency/gyms" },
          { name: "Add New Gym", href: "/agency/gyms/create" },
          { name: "Suspended Gyms", href: "/agency/gyms/suspended" },
        ],
      },
      {
        name: "Subscriptions",
        icon: CreditCard,
        subMenu: [
          { name: "All Plans", href: "/agency/subscriptions" },
          { name: "Create Plan", href: "/agency/subscriptions/create" },
          { name: "Plan Features", href: "/agency/subscriptions/features" },
          { name: "Access Control", href: "/agency/subscriptions/access-control" },
          { name: "WhatsApp Marketing", href: "/agency/subscriptions/whatsapp-marketing" },
        ],
      },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { name: "Leads (CRM)", icon: Users, href: "/agency/leads" },
      { name: "Finance", icon: DollarSign, href: "/agency/finance" },
      { name: "Staff", icon: BarChart3, href: "/agency/staff" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { name: "Support", icon: LifeBuoy, href: "/agency/support" },
      { name: "Settings", icon: Settings, href: "/agency/settings" },
    ],
  },
];

type Props = {
  active?: string;
  selectedItems?: string[];
  mobileOpen?: boolean;
  setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  brand?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  userName?: string;
  userRole?: string;
};

export default function AgencySidebar({
  active = "",
  selectedItems = [],
  mobileOpen = false,
  setMobileOpen,
  brand = "GymCommand",
  primaryCtaLabel = "Register Gym",
  primaryCtaHref = "/agency/gyms/create",
  userName = "Alex Morgan",
  userRole = "Super Admin",
}: Props) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const closeMobile = () => setMobileOpen?.(false);
  const safeSelected = Array.isArray(selectedItems) ? selectedItems : [];

  const isActiveHref = (href?: string) =>
    href ? pathname === href || pathname.startsWith(href + "/") : false;

  const isSubActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const autoOpen: string[] = [];

    SECTIONS.forEach((sec) =>
      sec.items.forEach((it) => {
        if (it.subMenu?.some((s) => isSubActive(s.href))) autoOpen.push(it.name);
      })
    );

    setOpenMenus((prev) => Array.from(new Set([...prev, ...autoOpen])));
  }, [pathname]);

  useEffect(() => {
    if (!setMobileOpen) return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, setMobileOpen]);

  const filteredSections = useMemo(() => {
    if (!safeSelected.length) return SECTIONS;

    return SECTIONS.map((sec) => ({
      ...sec,
      items: sec.items.filter((it) => safeSelected.includes(it.name)),
    })).filter((sec) => sec.items.length > 0);
  }, [safeSelected]);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

  const SidebarContent = () => (
    <div className="h-screen flex flex-col justify-between p-6">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md"
            style={{ background: "linear-gradient(135deg,#ff7a18,#ff5400)" }}
          >
            ✚
          </div>
          <span className="font-semibold text-lg text-gray-900">{brand}</span>
        </div>

        {/* CTA */}
        <Link
          href={primaryCtaHref}
          onClick={closeMobile}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg,#ff7a18,#ff5400)" }}
        >
          <Plus size={16} className="text-white" />
          {primaryCtaLabel}
        </Link>

        {/* Menu */}
        <div className="mt-6">
          {filteredSections.map((sec) => (
            <div key={sec.title} className="mb-6">
              <div className="mb-2 text-xs font-semibold text-gray-400">
                {sec.title}
              </div>

              <div className="space-y-1">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const open = openMenus.includes(item.name);

                  const isActive =
                    active === item.name ||
                    isActiveHref(item.href) ||
                    item.subMenu?.some(
                      (s) => s.name === active || isSubActive(s.href)
                    );

                  if (item.href && !item.subMenu) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobile}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition"
                        style={
                          isActive
                            ? {
                                background: "#FFF7ED",
                                color: "#EA580C",
                                borderRight: "3px solid #F97316",
                                fontWeight: 600,
                              }
                            : undefined
                        }
                      >
                        <Icon
                          size={18}
                          className={!isActive ? "text-gray-500 group-hover:text-orange-500" : ""}
                          style={isActive ? { color: "#F97316" } : undefined}
                        />
                        <span className={!isActive ? "text-gray-700 group-hover:text-orange-600" : ""}>
                          {item.name}
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.name}>
                      <button
                        type="button"
                        onClick={() => toggleMenu(item.name)}
                        className="group flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition"
                        style={
                          isActive
                            ? {
                                background: "#FFF7ED",
                                color: "#EA580C",
                                borderRight: "3px solid #F97316",
                                fontWeight: 600,
                              }
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={18}
                            className={!isActive ? "text-gray-500 group-hover:text-orange-500" : ""}
                            style={isActive ? { color: "#F97316" } : undefined}
                          />
                          <span className={!isActive ? "text-gray-700 group-hover:text-orange-600" : ""}>
                            {item.name}
                          </span>
                        </div>

                        <ChevronDown
                          size={16}
                          className={`${open ? "rotate-180" : ""} transition-transform ${
                            !isActive ? "text-gray-400 group-hover:text-orange-500" : ""
                          }`}
                          style={isActive ? { color: "#F97316" } : undefined}
                        />
                      </button>

                      {open && item.subMenu && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.subMenu.map((sub) => {
                            const subActive =
                              sub.name === active || isSubActive(sub.href);

                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2 text-sm transition"
                                style={
                                  subActive
                                    ? {
                                        background: "#FFF7ED",
                                        color: "#EA580C",
                                        fontWeight: 600,
                                      }
                                    : undefined
                                }
                              >
                                <span className={!subActive ? "text-gray-600 hover:text-orange-600" : ""}>
                                  {sub.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom User */}
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <div className="text-sm font-semibold text-gray-900">{userName}</div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-72 bg-white shadow-md md:block">
        <SidebarContent />
      </aside>

      {/* Mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={closeMobile}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-[85%] bg-white shadow-xl transition-transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>
      </div>
    </>
  );
}