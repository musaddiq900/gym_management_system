"use client";

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Theme Settings
      </h1>

      <div className="p-6 bg-white rounded-xl shadow">
        <p className="mb-4 font-medium">
          Dashboard Theme (Coming Soon)
        </p>

        <button
          disabled
          className="px-4 py-2 bg-gray-300 rounded-lg cursor-not-allowed"
        >
          Theme Options Will Be Enabled Later
        </button>
      </div>
    </div>
  );
}