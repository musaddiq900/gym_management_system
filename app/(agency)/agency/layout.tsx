"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import AgencySidebar from "../../../component/layout/AgencySidebar"
import AgencyTopbar from "../../../component/layout/AgencyTopbar"
import { sidebarOptions } from "../../../data/sidebarOptions"

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const [sidebarItems, setSidebarItems] = useState<string[]>([])
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const savedSidebar = localStorage.getItem("agencySidebar")
    if (savedSidebar) setSidebarItems(JSON.parse(savedSidebar))
    else setSidebarItems(sidebarOptions)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  let activeMenu = "Dashboard"
  if (pathname.includes("/gyms")) activeMenu = "Gyms"
  else if (pathname.includes("/subscriptions")) activeMenu = "Subscriptions"
  else if (pathname.includes("/leads")) activeMenu = "Leads (CRM)"
  else if (pathname.includes("/finance")) activeMenu = "Finance"
  else if (pathname.includes("/staff")) activeMenu = "Staff"
  else if (pathname.includes("/support")) activeMenu = "Support"
  else if (pathname.includes("/settings")) activeMenu = "Settings"

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AgencySidebar
        active={activeMenu}
        selectedItems={sidebarItems}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 flex flex-col">
        <AgencyTopbar onMenuClick={() => setMobileOpen(true)} />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}