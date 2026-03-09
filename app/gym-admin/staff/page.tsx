"use client";

import { useMemo, useState } from "react";

// ✅ use local module components
import StaffTabs from "../../../component/gym-admin/staff/StaffTabs";
import StaffStats from "../../../component/gym-admin/staff/StaffStats";
import StaffTable from "../../../component/gym-admin/staff/StaffTable";
import BranchFilter from "../../../component/gym-admin/staff/BranchFilter";
import RoleFilter from "../../../component/gym-admin/staff/RoleFilter";
import SearchBox from "../../../component/gym-admin/staff/SearchBox";

// ✅ use local dummy data
import { staffRows, branches } from "../../../data/dummyStaff";

export default function StaffPage() {
  const [branchId, setBranchId] = useState("all");
  const [role, setRole] = useState<
    "ALL" | "TRAINER" | "RECEPTIONIST" | "MANAGER"
  >("ALL");
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();

    return staffRows.filter((r) => {
      const branchOk = branchId === "all" ? true : r.branchId === branchId;
      const roleOk = role === "ALL" ? true : r.role === role;
      const searchOk = !s
        ? true
        : r.fullName.toLowerCase().includes(s) ||
          r.phone.includes(s);

      return branchOk && roleOk && searchOk;
    });
  }, [branchId, role, q]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Staff Management</h1>
          <p className="text-sm text-gray-500">
            Manage trainers, receptionists & managers
          </p>
        </div>

        <StaffTabs active="Overview" />
      </div>

      {/* Stats */}
      <StaffStats rows={staffRows} />

      {/* Filters + Table */}
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <BranchFilter
              branches={branches}
              value={branchId}
              onChange={setBranchId}
            />

            <RoleFilter
              value={role}
              onChange={setRole}
            />

            <SearchBox
              value={q}
              onChange={setQ}
            />
          </div>

          <div className="text-sm text-gray-500">
            Showing: {rows.length} staff
          </div>
        </div>

        <div className="mt-5">
          <StaffTable rows={rows} />
        </div>
      </div>
    </div>
  );
}