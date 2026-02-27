import GymForm from "../../../../../component/gyms/GymForm"

export default function CreateGym() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      {/* Header Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-bold text-gray-800">
          Add New Gym
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Register a new gym and configure its settings
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border">

        <GymForm />

      </div>

    </div>
  )
}