export default function QuickActions() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-red-500 text-white p-3 rounded-lg">
          + Add Member
        </button>

        <button className="bg-yellow-400 p-3 rounded-lg">
          + Create Class
        </button>

        <button className="bg-red-500 text-white p-3 rounded-lg">
          + Add Branch
        </button>

        <button className="bg-yellow-400 p-3 rounded-lg">
          Open POS
        </button>
      </div>
    </div>
  );
}