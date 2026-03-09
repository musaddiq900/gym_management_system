"use client";

import { useMemo, useState } from "react";
import AttendanceTabs from "../../../component/gym-admin/branches/AttendanceTabs";
import AttendanceStats from "../../../component/gym-admin/branches/AttendanceStats";
import AttendanceTable from "../../../component/gym-admin/branches/AttendanceTable";
import BranchFilter from "../../../component/gym-admin/branches/BranchFilter";
import DateFilter from "../../../component/gym-admin/branches/DateFilter";
import { attendanceRows, branches } from "../../../data/dummyAttendance";

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function AttendancePage() {
  const [branchId, setBranchId] = useState("all");
  const [date, setDate] = useState(todayISO());

  const filtered = useMemo(() => {
    return attendanceRows.filter((r) => {
      const branchOk = branchId === "all" ? true : r.branchId === branchId;
      const dateOk = r.date === date;
      return branchOk && dateOk;
    });
  }, [branchId, date]);

  const resetFilters = () => {
    setBranchId("all");
    setDate(todayISO());
  };

  return (
    <div className="space-y-6">
      {/* Header (NO shadow, NO hard border) */}
      <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white px-5 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Attendance
            </h1>
            <p className="text-sm text-gray-500">QR, Manual, Biometric & Reports</p>
          </div>

          <div className="flex items-center gap-3">
            <AttendanceTabs active="Overview" />
            <button
              onClick={resetFilters}
              className="rounded-xl bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-800 active:scale-[0.98] transition"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Stats (soft panel, no outline) */}
      <div className="rounded-2xl bg-gray-50/70 p-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Summary</h2>
            <p className="text-sm text-gray-500">Selected date & branch insights</p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filtered.length}</span>
            records
          </div>
        </div>

        <div className="mt-4">
          <AttendanceStats rows={attendanceRows} date={date} branchId={branchId} />
        </div>
      </div>

      {/* Filters + Table (no border, no shadow, clean separators) */}
      <div className="rounded-2xl bg-white">
        <div className="px-4 pt-4">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="space-y-0.5">
              <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
              <p className="text-xs text-gray-500">Branch aur date select karein</p>
            </div>

            <div className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-600">
              Showing:{" "}
              <span className="ml-1 font-semibold text-gray-900">{filtered.length}</span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 rounded-2xl bg-gray-50 p-3">
            <BranchFilter branches={branches} value={branchId} onChange={setBranchId} />
            <DateFilter value={date} onChange={setDate} />

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={resetFilters}
                className="rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:scale-[0.98] transition"
                type="button"
              >
                Clear
              </button>
              <button
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 active:scale-[0.98] transition"
                type="button"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* subtle separator instead of outline */}
        <div className="mt-4 h-px w-full bg-gray-100" />

        <div className="p-4">
          <AttendanceTable rows={filtered} />
        </div>
      </div>
    </div>
  );
}