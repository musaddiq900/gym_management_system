"use client";

import { useMemo, useState } from "react";
import { FiCheckCircle, FiXCircle, FiTrendingUp } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type AttendanceItem = {
  day: string;
  status: "Present" | "Absent";
  time: string;
};

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceItem[]>([
    { day: "Mon", status: "Present", time: "07:02 AM" },
    { day: "Tue", status: "Present", time: "06:58 AM" },
    { day: "Wed", status: "Absent", time: "--" },
    { day: "Thu", status: "Present", time: "07:10 AM" },
    { day: "Fri", status: "Present", time: "06:55 AM" },
    { day: "Sat", status: "Present", time: "08:05 AM" },
    { day: "Sun", status: "Absent", time: "--" },
  ]);

  const checkInToday = () => {
    setAttendance((prev) =>
      prev.map((item) =>
        item.day === "Sun"
          ? {
              ...item,
              status: "Present",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            }
          : item
      )
    );
  };

  const presentDays = useMemo(
    () => attendance.filter((d) => d.status === "Present").length,
    [attendance]
  );

  const totalDays = attendance.length;

  const attendanceRate = useMemo(
    () => Math.round((presentDays / totalDays) * 100),
    [presentDays, totalDays]
  );

  const chartData = attendance.map((item) => ({
    day: item.day,
    value: item.status === "Present" ? 100 : 20,
  }));

  const monthlyCalendar = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.2,
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Attendance</p>
        <h1 className="text-3xl font-bold mt-2">Track Your Gym Check-ins</h1>
        <p className="text-white/80 mt-3">
          Monitor your gym visits and maintain a strong routine.
        </p>
      </section>

      {/* Check in button */}
      <div className="flex justify-end">
        <button
          onClick={checkInToday}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700"
        >
          Check-in Today
        </button>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <p className="text-sm text-slate-500">Attendance Rate</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {attendanceRate}%
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <p className="text-sm text-slate-500">This Week</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {presentDays} / {totalDays}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <p className="text-sm text-slate-500">Current Streak</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {presentDays} Days
          </h2>
        </div>
      </section>

      {/* Weekly chart */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Weekly Attendance Chart
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Weekly records */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800">Weekly Records</h2>

          <div className="mt-6 space-y-4">
            {attendance.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between rounded-2xl bg-[#f8fafc] p-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{item.day}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Check-in: {item.time}
                  </p>
                </div>

                <span
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    item.status === "Present"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.status === "Present" ? (
                    <FiCheckCircle />
                  ) : (
                    <FiXCircle />
                  )}
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly calendar */}
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800">
            Monthly Attendance
          </h2>

          <div className="grid grid-cols-7 gap-3 mt-6">
            {monthlyCalendar.map((d) => (
              <div
                key={d.day}
                className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                  d.status
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {d.day}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <h2 className="text-xl font-bold text-slate-800">Insights</h2>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-green-50 p-4 text-sm text-slate-700">
            Your weekly attendance pattern is strong.
          </div>

          <div className="rounded-2xl bg-yellow-50 p-4 text-sm text-slate-700">
            Missing sessions may affect your streak.
          </div>

          <div className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-700 flex items-center gap-2">
            <FiTrendingUp /> Consistency improves fitness results.
          </div>
        </div>
      </section>
    </div>
  );
}