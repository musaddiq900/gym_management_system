export default function ActivityFeed() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Recent Activity</h3>

      <ul className="space-y-3 text-gray-600">
        <li>✔ New member registered</li>
        <li>✔ Payment received</li>
        <li>✔ Class booked</li>
        <li>✔ Membership renewed</li>
      </ul>
    </div>
  );
}