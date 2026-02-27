"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Users,
  DollarSign,
  BarChart3,
  LifeBuoy,
  Settings,
  ChevronDown
} from "lucide-react"

type MenuItem = {
  name: string
  icon: any
  href?: string
  subMenu?: { name: string; href: string }[]
}

const menu: MenuItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/agency" },
  {
    name: "Gyms",
    icon: Building2,
    subMenu: [
      { name: "All Gyms", href: "/agency/gyms" },
      { name: "Add New Gym", href: "/agency/gyms/create" },
      { name: "Suspended Gyms", href: "/agency/gyms/suspended" }
    ]
  },
  {
    name: "Subscriptions",
    icon: CreditCard,
    subMenu: [
      { name: "All Plans", href: "/agency/subscriptions" },
      { name: "Create Plan", href: "/agency/subscriptions/create" },
      { name: "Plan Features", href: "/agency/subscriptions/features" }
    ]
  },
  { name: "Leads (CRM)", icon: Users, href: "/agency/leads" },
  { name: "Finance", icon: DollarSign, href: "/agency/finance" },
  { name: "Reports", icon: BarChart3, href: "/agency/staff" },
  { name: "Support", icon: LifeBuoy, href: "/agency/support" },
  { name: "Settings", icon: Settings, href: "/agency/settings" }
]

export default function AgencySidebar({
  active = "",
  selectedItems = [],
  themeGradient = "from-red-500 to-yellow-400"
}: {
  active?: string
  selectedItems?: string[]
  themeGradient?: string
}) {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  // ✅ Prevent crash if undefined
  const safeSelected = Array.isArray(selectedItems) ? selectedItems : []

  // ✅ Auto-open parent menu if child active
  useEffect(() => {
    menu.forEach(item => {
      if (item.subMenu?.some(sub => sub.name === active)) {
        setOpenMenus(prev =>
          prev.includes(item.name) ? prev : [...prev, item.name]
        )
      }
    })
  }, [active])

  return (
    <aside className={`w-64 bg-gradient-to-b ${themeGradient} text-white p-6 hidden md:block`}>
      <div className="text-2xl font-bold mb-8">SoftlogicLab</div>

      <nav className="space-y-2">
        {menu.map(item => {
          if (!safeSelected.includes(item.name)) return null

          const hasSubMenu = !!item.subMenu
          const isOpen = openMenus.includes(item.name)
          const isActive =
            active === item.name ||
            item.subMenu?.some(sub => sub.name === active)

          return (
            <div key={item.name}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white text-red-500 font-semibold"
                      : "hover:bg-white/20"
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    setOpenMenus(prev =>
                      prev.includes(item.name)
                        ? prev.filter(m => m !== item.name)
                        : [...prev, item.name]
                    )
                  }
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white text-red-500 font-semibold"
                      : "hover:bg-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    {item.name}
                  </div>
                  <ChevronDown size={16} className={isOpen ? "rotate-180" : ""} />
                </button>
              )}

              {hasSubMenu && isOpen && (
                <div className="ml-8 mt-2 flex flex-col space-y-1">
                  {item.subMenu!.map(sub => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`px-4 py-2 rounded-lg text-sm transition ${
                        active === sub.name
                          ? "bg-white text-red-500 font-semibold"
                          : "hover:bg-white/20"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}