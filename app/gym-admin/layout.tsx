"use client";

import { useState } from "react";
import Sidebar from "../../component/gym-admin/layout/Sidebar";
import Topbar from "../../component/gym-admin/layout/Topbar";

export default function GymAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOPBAR */}
        <Topbar
          onToggleSidebar={() => setMobileOpen(!mobileOpen)}
        />

        {/* CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

    </div>
  );
}