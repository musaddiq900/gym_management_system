"use client";

import { useMemo, useState } from "react";
import LockerTabs from "../../../../component/gym-admin/lockers/LockerTabs";
import LockerTable from "../../../../component/gym-admin/lockers/LockerTable";
import BranchFilter from "../../../../component/gym-admin/lockers/BranchFilter";
import StatusFilter from "../../../../component/gym-admin/lockers/StatusFilter";
import SearchBox from "../../../../component/gym-admin/lockers/SearchBox";
import { lockerRows, branches } from "../../../../data/dummyLockers";

export default function LockerReportsPage() {
  const [branchId, setBranchId] = useState("all");
  const [status, setStatus] = useState<"ALL" | "AVAILABLE" | "ASSIGNED" | "MAINTENANCE">("ALL");
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();

    return lockerRows.filter((r) => {
      const branchOk = branchId === "all" ? true : r.branchId === branchId;
      const statusOk = status === "ALL" ? true : r.status === status;

      const searchOk = !s
        ? true
        : r.lockerNo.toLowerCase().includes(s) ||
          (r.memberName || "").toLowerCase().includes(s) ||
          (r.memberPhone || "").includes(s) ||
          (r.location || "").toLowerCase().includes(s);

      return branchOk && statusOk && searchOk;
    });
  }, [branchId, status, q]);

  const summary = useMemo(() => {
    const total = rows.length;
    const available = rows.filter((r) => r.status === "AVAILABLE").length;
    const assigned = rows.filter((r) => r.status === "ASSIGNED").length;
    const maintenance = rows.filter((r) => r.status === "MAINTENANCE").length;
    return { total, available, assigned, maintenance };
  }, [rows]);

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Locker Reports</h1>
          <p className="text-sm text-gray-500">
            Filters: Branch • Status • Search
          </p>
        </div>

        <LockerTabs active="Reports" />
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <BranchFilter branches={branches} value={branchId} onChange={setBranchId} />
            <StatusFilter value={status} onChange={setStatus} />
            <SearchBox value={q} onChange={setQ} />
          </div>

          <div className="text-sm text-gray-500">
            Total: {summary.total} • Available: {summary.available} • Assigned: {summary.assigned} • Maintenance: {summary.maintenance}
          </div>
        </div>

        <div className="mt-4">
          <LockerTable rows={rows} />
        </div>
      </div>
    </div>
  );
}