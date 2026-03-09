import AttendanceTabs from "../../../../component/gym-admin/branches/AttendanceTabs";
import ManualEntryCard from "../../../../component/gym-admin/branches/ManualEntryCard";

export default function ManualPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Manual Entry</h1>
          <p className="text-sm text-gray-500">Search member and mark present</p>
        </div>
        <AttendanceTabs active="Manual Entry" />
      </div>

      <ManualEntryCard />
    </div>
  );
}