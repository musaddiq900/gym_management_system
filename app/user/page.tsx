import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="rounded-[28px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-6 md:p-8 text-white shadow-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm text-white/80">User Dashboard</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Build Your Best Fitness Routine
            </h1>
            <p className="text-white/85 mt-3 leading-7">
              Manage classes, workouts, diet plans, goals, attendance, and your
              full fitness progress from one premium user panel.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/user/classes"
                className="rounded-2xl bg-white text-blue-600 px-5 py-3 font-semibold shadow-lg hover:scale-105 transition"
              >
                Book Class
              </Link>

              <Link
                href="/user/profile"
                className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/20 transition"
              >
                Update Profile
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-[280px]">
            <div className="rounded-3xl bg-white/15 backdrop-blur-md p-5 border border-white/20">
              <p className="text-sm text-white/80">Attendance</p>
              <h3 className="text-3xl font-bold mt-2">92%</h3>
            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md p-5 border border-white/20">
              <p className="text-sm text-white/80">Workout Streak</p>
              <h3 className="text-3xl font-bold mt-2">12 Days</h3>
            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md p-5 border border-white/20">
              <p className="text-sm text-white/80">Booked Classes</p>
              <h3 className="text-3xl font-bold mt-2">05</h3>
            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md p-5 border border-white/20">
              <p className="text-sm text-white/80">Calories</p>
              <h3 className="text-3xl font-bold mt-2">3240</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Top Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Membership</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">Premium</h3>
              <p className="text-sm text-slate-400 mt-2">Valid till 28 April 2026</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">
              💳
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Goal</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">Weight Loss</h3>
              <p className="text-sm text-slate-400 mt-2">72% target progress</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-2xl">
              🎯
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">BMI</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">22.8</h3>
              <p className="text-sm text-slate-400 mt-2">Healthy range</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
              ⚖️
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Trainer</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">Ali</h3>
              <p className="text-sm text-slate-400 mt-2">Strength Coach</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-2xl">
              🧑‍🏫
            </div>
          </div>
        </div>
      </section>

      {/* Profile + Upcoming */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Profile Completion</p>
              <h2 className="text-2xl font-bold text-slate-800 mt-2">
                Complete Your Fitness Profile
              </h2>
              <p className="text-slate-500 mt-2 max-w-2xl">
                Add personal info, emergency contact, goals, and health details
                for a more personalized gym experience.
              </p>
            </div>

            <Link
              href="/user/profile"
              className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition"
            >
              Edit Profile
            </Link>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Completed</span>
              <span>75%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Upcoming Session</h3>

          <div className="mt-5 rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 p-5 border border-orange-100">
            <p className="text-sm text-slate-500">Next Class</p>
            <h4 className="text-2xl font-bold text-slate-800 mt-2">Morning Cardio</h4>
            <p className="text-slate-500 mt-2">Monday • 07:00 AM</p>
            <p className="text-slate-500 mt-1">Trainer: Coach Ali</p>

            <Link
              href="/user/schedule"
              className="inline-block mt-5 rounded-2xl bg-orange-500 text-white px-5 py-3 font-semibold hover:bg-orange-600 transition"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Quick Actions</h2>
          <p className="text-sm text-slate-500">Jump into any important section</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <Link
            href="/user/classes"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 text-white flex items-center justify-center text-2xl shadow-md">
              📅
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Book Class</h3>
            <p className="text-sm text-slate-500 mt-2">
              Reserve your upcoming gym sessions.
            </p>
          </Link>

          <Link
            href="/user/workout"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-2xl shadow-md">
              💪
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Workout Plan</h3>
            <p className="text-sm text-slate-500 mt-2">
              View today’s exercises and routine.
            </p>
          </Link>

          <Link
            href="/user/diet"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 text-white flex items-center justify-center text-2xl shadow-md">
              🥗
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Diet Plan</h3>
            <p className="text-sm text-slate-500 mt-2">
              Check your nutrition and meals.
            </p>
          </Link>

          <Link
            href="/user/progress"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white flex items-center justify-center text-2xl shadow-md">
              📈
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Track Progress</h3>
            <p className="text-sm text-slate-500 mt-2">
              See attendance and growth analytics.
            </p>
          </Link>

          <Link
            href="/user/attendance"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-400 text-white flex items-center justify-center text-2xl shadow-md">
              ✅
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Attendance</h3>
            <p className="text-sm text-slate-500 mt-2">
              Review your daily check-ins.
            </p>
          </Link>

          <Link
            href="/user/trainer"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-400 text-white flex items-center justify-center text-2xl shadow-md">
              🧑‍🏫
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Trainer</h3>
            <p className="text-sm text-slate-500 mt-2">
              Choose or request a trainer.
            </p>
          </Link>

          <Link
            href="/user/payments"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white flex items-center justify-center text-2xl shadow-md">
              💰
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Payments</h3>
            <p className="text-sm text-slate-500 mt-2">
              View invoices and billing status.
            </p>
          </Link>

          <Link
            href="/user/settings"
            className="rounded-3xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-500 text-white flex items-center justify-center text-2xl shadow-md">
              ⚙️
            </div>
            <h3 className="text-lg font-bold text-slate-800 mt-4">Settings</h3>
            <p className="text-sm text-slate-500 mt-2">
              Manage alerts and preferences.
            </p>
          </Link>
        </div>
      </section>

      {/* Workout + Diet */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Today’s Workout</h3>
            <Link
              href="/user/workout"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl bg-blue-50 p-4">
              <h4 className="font-semibold text-slate-800">Upper Body Strength</h4>
              <p className="text-sm text-slate-500 mt-1">
                Push-ups, Dumbbell Press, Shoulder Press
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-4">
              <h4 className="font-semibold text-slate-800">Duration</h4>
              <p className="text-sm text-slate-500 mt-1">45 Minutes</p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-4">
              <h4 className="font-semibold text-slate-800">Intensity</h4>
              <p className="text-sm text-slate-500 mt-1">Moderate</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Diet Snapshot</h3>
            <Link
              href="/user/diet"
              className="text-sm font-semibold text-emerald-600 hover:underline"
            >
              View Full Plan
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <h4 className="font-semibold text-slate-800">Breakfast</h4>
              <p className="text-sm text-slate-500 mt-1">
                Oats, banana, boiled eggs, green tea
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-4">
              <h4 className="font-semibold text-slate-800">Lunch</h4>
              <p className="text-sm text-slate-500 mt-1">
                Grilled chicken, brown rice, mixed salad
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-4">
              <h4 className="font-semibold text-slate-800">Water Goal</h4>
              <p className="text-sm text-slate-500 mt-1">2.5 Liters daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics + Notifications */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Progress Overview</h3>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Weight Change</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-2">-3.5 kg</h4>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Sessions Done</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-2">18</h4>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Goal Progress</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-2">72%</h4>
            </div>
          </div>

          <div className="mt-6 flex items-end gap-3 h-44">
            <div className="flex-1 rounded-t-3xl bg-blue-200 h-[35%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-300 h-[55%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-400 h-[70%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-500 h-[50%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-600 h-[80%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-400 h-[60%]" />
            <div className="flex-1 rounded-t-3xl bg-blue-300 h-[72%]" />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Latest Updates</h3>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-600">
                Your yoga class is scheduled for tomorrow at 7:00 AM.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-600">
                Membership renewal is due in 5 days.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-600">
                You completed 4 workouts this week. Great job!
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-600">
                Your BMI is in the healthy range. Keep it up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}