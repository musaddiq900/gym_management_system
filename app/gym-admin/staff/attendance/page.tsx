import StaffTabs from "../../../../component/gym-admin/staff/StaffTabs";
import StaffAttendanceTable from "../../../../component/gym-admin/staff/StaffAttendanceTable";

export default function StaffAttendancePage() {
  return (
    <div className="space-y-5">
      <StaffTabs active="Attendance" />
      <StaffAttendanceTable />
    </div>
  );
}