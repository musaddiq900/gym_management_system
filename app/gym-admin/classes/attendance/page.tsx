import ClassTabs from "../../../../component/gym-admin/class/ClassTabs";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <ClassTabs active="Attendance" />
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Mark Attendance UI (Demo)
      </div>
    </div>
  );
}