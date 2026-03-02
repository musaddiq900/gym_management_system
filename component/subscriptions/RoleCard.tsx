export default function RoleCard() {
  return (
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow-md max-w-md">
      
      <h2 className="text-lg font-semibold mb-5 text-black">
        🛡️ RBAC Roles
      </h2>

      <div className="space-y-4">

        {/* Role Name */}
        <input
          placeholder="Role name"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-indigo-600 hover:border-indigo-500 focus:border-indigo-400 focus:outline-none transition"
        />

        {/* Description */}
        <input
          placeholder="Description"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-indigo-600 hover:border-indigo-500 focus:border-indigo-400 focus:outline-none transition"
        />

        {/* Permissions */}
        <input
          placeholder="Permissions CSV"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-indigo-600 hover:border-indigo-500 focus:border-indigo-400 focus:outline-none transition"
        />

        {/* Button */}
        <button className="w-full bg-[#111827] text-indigo-400 py-3 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200">
          + Create Role
        </button>

      </div>
    </div>
  );
}