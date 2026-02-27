"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import AgencySidebar from "../../../component/layout/AgencySidebar"
import AgencyTopbar from "../../../component/layout/AgencyTopbar"
import { sidebarOptions } from "@/data/sidebarOptions"
import { themes } from "@/data/themes"

// ✅ Import settings components
import SidebarSettings from "@/component/settings/SidebarSettings"
import ThemeSettings from "@/component/settings/ThemeSettings"

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const [sidebarItems, setSidebarItems] = useState<string[]>([])
  const [themeGradient, setThemeGradient] = useState("from-red-500 to-yellow-400")

  // ✅ Load sidebar modules and theme
  useEffect(() => {
    const savedSidebar = localStorage.getItem("agencySidebar")
    if (savedSidebar) setSidebarItems(JSON.parse(savedSidebar))
    else setSidebarItems(sidebarOptions)

    const savedTheme = localStorage.getItem("agencyTheme")
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setThemeGradient(themes[savedTheme as keyof typeof themes].gradient)
    }
  }, [])

  // ✅ Active menu detection
  let activeMenu = "Dashboard"
  if (pathname.includes("/gyms")) activeMenu = "Gyms"
  else if (pathname.includes("/subscriptions")) activeMenu = "Subscriptions"
  else if (pathname.includes("/leads")) activeMenu = "Leads (CRM)"
  else if (pathname.includes("/finance")) activeMenu = "Finance"
  else if (pathname.includes("/reports")) activeMenu = "Reports"
  else if (pathname.includes("/support")) activeMenu = "Support"
  else if (pathname.includes("/settings")) activeMenu = "Settings"

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AgencySidebar
        active={activeMenu}
        selectedItems={sidebarItems}
        themeGradient={themeGradient}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        <AgencyTopbar />

        <main className="p-6">
          {/* Page content */}
          {children}

          {/* ⚙️ Settings panel example */}
          <div className="mt-8">
            
          </div>
        </main>
      </div>
    </div>
  )
}