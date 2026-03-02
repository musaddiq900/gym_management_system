"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Users,
  UserCheck,
  UserX,
  DollarSign,
  AlertTriangle,
  CalendarCheck,
} from "lucide-react";

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
];

const attendanceData = [
  { day: "Mon", attendance: 120 },
  { day: "Tue", attendance: 98 },
  { day: "Wed", attendance: 140 },
  { day: "Thu", attendance: 110 },
  { day: "Fri", attendance: 170 },
];

const memberData = [
  { name: "Active", value: 320 },
  { name: "Expired", value: 80 },
];

const COLORS = ["#22c55e", "#ef4444"];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-400 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Gym Dashboard
        </h1>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">

          <StatCard
            title="Total Members"
            value="400"
            icon={<Users size={28} />}
          />
          <StatCard
            title="Active Members"
            value="320"
            icon={<UserCheck size={28} />}
          />
          <StatCard
            title="Expired Members"
            value="80"
            icon={<UserX size={28} />}
          />
          <StatCard
            title="Today's Attendance"
            value="150"
            icon={<CalendarCheck size={28} />}
          />
          <StatCard
            title="Revenue"
            value="$18,000"
            icon={<DollarSign size={28} />}
          />
          <StatCard
            title="Inventory Alerts"
            value="5"
            icon={<AlertTriangle size={28} />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Revenue Area Chart */}
          <ChartCard title="Revenue Overview">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#facc15" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Attendance Bar Chart */}
          <ChartCard title="Today's Attendance">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#f97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Member Pie Chart */}
          <ChartCard title="Active vs Expired Members">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={memberData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {memberData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Pending Payments */}
          <ChartCard title="Pending Payments">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#dc2626"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>

      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-400 text-white p-5 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <div className="bg-white/20 p-2 rounded-lg">{icon}</div>
      </div>
      <h2 className="text-sm">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        {title}
      </h2>
      {children}
    </div>
  );
}