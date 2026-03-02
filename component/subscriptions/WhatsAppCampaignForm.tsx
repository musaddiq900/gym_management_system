export default function WhatsAppCampaignForm() {
  return (
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow-md max-w-xl">
      
      <h2 className="text-lg font-semibold mb-5 text-black">
     Create Campaign
      </h2>

      <div className="space-y-4">

        {/* Campaign Name */}
        <input
          placeholder="Campaign Name"
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-purple-600 hover:border-purple-500 focus:border-purple-400 focus:outline-none transition"
        />

        {/* Message Template */}
        <textarea
          placeholder="Message Template"
          rows={4}
          className="w-full p-3 bg-[#111827] text-gray-200 rounded-lg border border-purple-600 hover:border-purple-500 focus:border-purple-400 focus:outline-none transition resize-none"
        />

        {/* Campaign Type */}
        <select className="w-full p-3 bg-[#111827] text-gray-300 rounded-lg border border-purple-600 hover:border-purple-500 focus:border-purple-400 focus:outline-none transition">
          <option>Renewal Reminder</option>
          <option>Offer Campaign</option>
          <option>Birthday Wish</option>
          <option>Attendance Alert</option>
        </select>

        {/* Button */}
        <button className="w-full bg-[#111827] text-purple-400 py-3 rounded-lg font-medium border border-purple-600 hover:bg-purple-600 hover:text-white transition duration-200">
          Send Campaign
        </button>

      </div>
    </div>
  );
}