import LockerTabs from "../../../../component/gym-admin/lockers/LockerTabs";
import AssignLockerCard from "../../../../component/gym-admin/lockers/AssignLockerCard";

export default function AssignLockerPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Assign Locker</h1>
          <p className="text-sm text-gray-500">Select member & assign an available locker</p>
        </div>

        <LockerTabs active="Assign" />
      </div>

      <AssignLockerCard />
    </div>
  );
}