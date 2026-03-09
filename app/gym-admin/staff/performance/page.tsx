import StaffTabs from "../../../../component/gym-admin/staff/StaffTabs";
import PerformanceTable from "../../../../component/gym-admin/staff/PerformanceTable";

export default function PerformancePage() {
  return (
    <div className="space-y-5">
      <StaffTabs active="Performance" />
      <PerformanceTable />
    </div>
  );
}