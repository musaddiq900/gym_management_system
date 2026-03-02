export default function IpWhitelistCard() {
  return (
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow-md max-w-md">
      
      <h2 className="text-lg font-semibold mb-5 text-black">
        🌐 IP Whitelist
      </h2>

      <div className="space-y-4">

        {/* Label */}
        <input
          placeholder="Label"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-purple-600 hover:border-purple-500 focus:border-purple-400 focus:outline-none transition"
        />

        {/* CIDR */}
        <input
          placeholder="CIDR (e.g. 203.0.113.0/24)"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-purple-600 hover:border-purple-500 focus:border-purple-400 focus:outline-none transition"
        />

        {/* Button */}
        <button className="w-full bg-[#111827] text-purple-400 py-3 rounded-lg font-medium border border-purple-600 hover:bg-purple-600 hover:text-white transition duration-200">
          + Add IP Entry
        </button>

      </div>
    </div>
  );
}