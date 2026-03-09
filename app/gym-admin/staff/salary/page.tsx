import StaffTabs from "../../../../component/gym-admin/staff/StaffTabs";
import SalaryTable from "../../../../component/gym-admin/staff/SalaryTable";

export default function SalaryPage() {
  return (
    <div className="space-y-5">
      <StaffTabs active="Salary" />
      <SalaryTable />
    </div>
  );
}