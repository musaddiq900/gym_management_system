import AttendanceTabs from "../../../../component/gym-admin/branches/AttendanceTabs";
import QrScannerCard from "../../../../component/gym-admin/branches/QrScannerCard";

export default function QrPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">QR Check-in</h1>
          <p className="text-sm text-gray-500">Scan QR and mark attendance</p>
        </div>
        <AttendanceTabs active="QR Check-in" />
      </div>

      <QrScannerCard />
    </div>
  );
}