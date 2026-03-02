"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", attendance: 120 },
  { day: "Tue", attendance: 200 },
  { day: "Wed", attendance: 150 },
  { day: "Thu", attendance: 180 },
  { day: "Fri", attendance: 220 },
  { day: "Sat", attendance: 300 },
  { day: "Sun", attendance: 250 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="font-semibold mb-4">Weekly Attendance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="attendance" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}