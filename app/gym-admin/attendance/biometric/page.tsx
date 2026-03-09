import AttendanceTabs from "../../../../component/gym-admin/branches/AttendanceTabs";
import BiometricCard from "../../../../component/gym-admin/branches/BiometricCard";

export default function BiometricPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Biometric Sync</h1>
          <p className="text-sm text-gray-500">Sync device logs (frontend demo)</p>
        </div>

        <AttendanceTabs active="Biometric Sync" />
      </div>

      <BiometricCard />
    </div>
  );
}