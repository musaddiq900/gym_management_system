"use client";

import { useMemo, useState } from "react";
import AttendanceTabs from "../../../../component/gym-admin/branches/AttendanceTabs";
import AttendanceTable from "../../../../component/gym-admin/branches/AttendanceTable";
import BranchFilter from "../../../../component/gym-admin/branches/BranchFilter";
import DateFilter from "../../../../component/gym-admin/branches/DateFilter";
import { attendanceRows, branches } from "../../../../data/dummyAttendance";

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function ReportsPage() {
  const [branchId, setBranchId] = useState("all");
  const [date, setDate] = useState(todayISO());

  const rows = useMemo(() => {
    return attendanceRows.filter((r) => {
      const branchOk = branchId === "all" ? true : r.branchId === branchId;
      const dateOk = r.date === date;
      return branchOk && dateOk;
    });
  }, [branchId, date]);

  const summary = useMemo(() => {
    const total = rows.length;
    const qr = rows.filter((r) => r.method === "QR").length;
    const manual = rows.filter((r) => r.method === "MANUAL").length;
    const bio = rows.filter((r) => r.method === "BIO").length;
    return { total, qr, manual, bio };
  }, [rows]);

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Detailed Reports</h1>
          <p className="text-sm text-gray-500">Filters + table (frontend)</p>
        </div>
        <AttendanceTabs active="Detailed Reports" />
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <BranchFilter branches={branches} value={branchId} onChange={setBranchId} />
            <DateFilter value={date} onChange={setDate} />
          </div>
          <div className="text-sm text-gray-500">
            Total: {summary.total} • QR: {summary.qr} • Manual: {summary.manual} • Bio: {summary.bio}
          </div>
        </div>

        <div className="mt-4">
          <AttendanceTable rows={rows} />
        </div>
      </div>
    </div>
  );
}