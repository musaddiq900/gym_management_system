"use client";

import { useState } from "react";

const classesData = [
  {
    name: "Morning Cardio",
    trainer: "Coach Ali",
    date: "Monday, 11 March",
    time: "07:00 AM",
    spots: "12 spots left",
  },
  {
    name: "Strength Training",
    trainer: "Coach Sarah",
    date: "Tuesday, 12 March",
    time: "06:00 PM",
    spots: "8 spots left",
  },
  {
    name: "Yoga Session",
    trainer: "Coach Areeba",
    date: "Wednesday, 13 March",
    time: "08:00 AM",
    spots: "15 spots left",
  },
  {
    name: "Zumba Class",
    trainer: "Coach Hina",
    date: "Thursday, 14 March",
    time: "05:30 PM",
    spots: "10 spots left",
  },
];

export default function ClassesPage() {
  const [selected, setSelected] = useState("Morning Cardio");

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Class Booking</p>
        <h1 className="text-3xl font-bold mt-2">Book Your Gym Classes</h1>
        <p className="text-white/80 mt-3">
          Choose your favorite session and reserve your seat.
        </p>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-5">
          {classesData.map((item) => (
            <div
              key={item.name}
              className={`rounded-3xl p-6 shadow-md border transition ${
                selected === item.name
                  ? "bg-orange-50 border-orange-300"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{item.name}</h2>
                  <p className="text-slate-500 mt-2">{item.trainer}</p>
                  <p className="text-sm text-slate-400 mt-1">
                    {item.date} • {item.time}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3">
                  <span className="rounded-full bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold">
                    {item.spots}
                  </span>
                  <button
                    onClick={() => setSelected(item.name)}
                    className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition"
                  >
                    Select Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Booking Summary</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Selected Class</p>
                <h4 className="text-lg font-bold text-slate-800 mt-1">{selected}</h4>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Status</p>
                <h4 className="text-lg font-bold text-green-600 mt-1">Available</h4>
              </div>
            </div>

            <button className="w-full mt-6 rounded-2xl bg-orange-500 text-white px-5 py-3 font-semibold hover:bg-orange-600 transition">
              Confirm Booking
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Reminder</h3>
            <div className="mt-4 rounded-2xl bg-orange-50 p-4 text-sm text-slate-700">
              Enable reminder later with backend or notification integration.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}