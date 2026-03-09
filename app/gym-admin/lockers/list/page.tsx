import LockerTabs from "../../../../component/gym-admin/lockers/LockerTabs";
import LockerTable from "../../../../component/gym-admin/lockers/LockerTable";
import { lockerRows } from "../../../../data/dummyLockers";

export default function LockersListPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Lockers List</h1>
          <p className="text-sm text-gray-500">All lockers (frontend)</p>
        </div>
        <LockerTabs active="Lockers List" />
      </div>

      <LockerTable rows={lockerRows} />
    </div>
  );
}