import StaffTabs from "../../../../component/gym-admin/staff/StaffTabs";
import AddStaffForm from "../../../../component/gym-admin/staff/AddStaffForm";

export default function AddStaffPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Add Staff</h1>
          <p className="text-sm text-gray-500">
            Add new trainer or receptionist
          </p>
        </div>

        <StaffTabs active="Add Staff" />
      </div>

      <AddStaffForm />
    </div>
  );
}