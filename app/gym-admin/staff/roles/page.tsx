import StaffTabs from "../../../../component/gym-admin/staff/StaffTabs";
import RoleCard from "../../../../component/gym-admin/staff/RoleCard";
import { roles } from "../../../../data/dummyStaff";

export default function RolesPage() {
  return (
    <div className="space-y-5">
      <StaffTabs active="Roles" />

      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((r, i) => (
          <RoleCard key={i} role={r.role} permissions={r.permissions} />
        ))}
      </div>
    </div>
  );
}