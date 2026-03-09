"use client";

import { useMemo, useState } from "react";
import LockerTabs from "../../../component/gym-admin/lockers/LockerTabs";
import LockerStats from "../../../component/gym-admin/lockers/LockerStats";
import LockerTable from "../../../component/gym-admin/lockers/LockerTable";
import BranchFilter from "../../../component/gym-admin/lockers/BranchFilter";
import StatusFilter from "../../../component/gym-admin/lockers/StatusFilter";
import SearchBox from "../../../component/gym-admin/lockers/SearchBox";
import CreateLockerCard from "../../../component/gym-admin/lockers/CreateLockerCard";
import { lockerRows, branches } from "../../../data/dummyLockers";

export default function LockersPage() {
  const [branchId, setBranchId] = useState("all");
  const [status, setStatus] = useState<"ALL" | "AVAILABLE" | "ASSIGNED" | "MAINTENANCE">("ALL");
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return lockerRows.filter((r) => {
      const branchOk = branchId === "all" ? true : r.branchId === branchId;
      const statusOk = status === "ALL" ? true : r.status === status;
      const searchOk = !s ? true : r.lockerNo.toLowerCase().includes(s) || (r.memberName || "").toLowerCase().includes(s);
      return branchOk && statusOk && searchOk;
    });
  }, [branchId, status, q]);

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Lockers</h1>
          <p className="text-sm text-gray-500">Manage lockers, assignments & returns</p>
        </div>
        <LockerTabs active="Overview" />
      </div>

      <LockerStats rows={lockerRows} />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <BranchFilter branches={branches} value={branchId} onChange={setBranchId} />
              <StatusFilter value={status} onChange={setStatus} />
              <SearchBox value={q} onChange={setQ} />
            </div>
            <div className="text-sm text-gray-500">Showing: {rows.length}</div>
          </div>

          <div className="mt-4">
            <LockerTable rows={rows} />
          </div>
        </div>

        <CreateLockerCard />
      </div>
    </div>
  );
}