import ClassTabs from "../../../../component/gym-admin/class/ClassTabs";

export default function BookingPage() {
  return (
    <div className="space-y-6">
      <ClassTabs active="Bookings" />
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Booking System UI (Demo)
      </div>
    </div>
  );
}