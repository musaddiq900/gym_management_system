import LockerTabs from "../../../../component/gym-admin/lockers/LockerTabs";
import ReturnLockerCard from "../../../../component/gym-admin/lockers/ReturnLockerCard";

export default function ReturnPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Return Locker</h1>
          <p className="text-sm text-gray-500">Release assigned lockers</p>
        </div>
        <LockerTabs active="Return" />
      </div>

      <ReturnLockerCard />
    </div>
  );
}