"use client";

import { useMemo, useState } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiTrendingDown,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

type MetricType = "attendance" | "sessions" | "weight" | "calories";

type WeeklyActivityItem = {
  day: string;
  attendance: number;
  sessions: number;
  weight: number;
  calories: number;
};

export default function ProgressPage() {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("attendance");

  const progressData = {
    attendance: 92,
    sessionsDone: 18,
    weightChange: -3.5,
    caloriesBurned: 3240,
    targetProgress: 78,
  };

  const weeklyActivity: WeeklyActivityItem[] = [
    { day: "Mon", attendance: 85, sessions: 2, weight: 72.4, calories: 380 },
    { day: "Tue", attendance: 92, sessions: 3, weight: 72.1, calories: 450 },
    { day: "Wed", attendance: 88, sessions: 2, weight: 71.9, calories: 520 },
    { day: "Thu", attendance: 90, sessions: 2, weight: 71.7, calories: 410 },
    { day: "Fri", attendance: 96, sessions: 4, weight: 71.4, calories: 610 },
    { day: "Sat", attendance: 91, sessions: 3, weight: 71.2, calories: 500 },
    { day: "Sun", attendance: 93, sessions: 2, weight: 71.0, calories: 370 },
  ];

  const recommendations = useMemo(() => {
    const items: Record<MetricType, string[]> = {
      attendance: [
        "Your attendance is strong. Keep following the same routine.",
        "Missing fewer sessions will improve your monthly consistency even more.",
        "Try to maintain the same timing daily for better discipline.",
      ],
      sessions: [
        "You are completing a good number of sessions every week.",
        "Add one extra recovery or stretching session for balance.",
        "Maintain this momentum to hit your monthly target faster.",
      ],
      weight: [
        "Your weight trend is improving in a healthy direction.",
        "Stay consistent with diet and cardio for better long-term change.",
        "Track your body measurements too, not only weight.",
      ],
      calories: [
        "Your calorie burn level is looking good this month.",
        "Try one more high-intensity session this week to increase burn.",
        "Pair calorie burn with hydration and proper recovery.",
      ],
    };

    return items[selectedMetric];
  }, [selectedMetric]);

  const bestDay = useMemo(() => {
    return weeklyActivity.reduce((best, current) =>
      current[selectedMetric] > best[selectedMetric] ? current : best
    );
  }, [weeklyActivity, selectedMetric]);

  const avgActivity = useMemo(() => {
    const total = weeklyActivity.reduce(
      (sum, item) => sum + Number(item[selectedMetric]),
      0
    );
    return Math.round((total / weeklyActivity.length) * 10) / 10;
  }, [weeklyActivity, selectedMetric]);

  const selectedMetricValue = useMemo(() => {
    switch (selectedMetric) {
      case "attendance":
        return `${progressData.attendance}%`;
      case "sessions":
        return `${progressData.sessionsDone}`;
      case "weight":
        return `${progressData.weightChange} kg`;
      case "calories":
        return `${progressData.caloriesBurned}`;
      default:
        return "";
    }
  }, [selectedMetric]);

  const chartColor = useMemo(() => {
    switch (selectedMetric) {
      case "attendance":
        return "#7c3aed";
      case "sessions":
        return "#2563eb";
      case "weight":
        return "#db2777";
      case "calories":
        return "#059669";
      default:
        return "#7c3aed";
    }
  }, [selectedMetric]);

  const chartLabel = useMemo(() => {
    switch (selectedMetric) {
      case "attendance":
        return "Attendance %";
      case "sessions":
        return "Sessions";
      case "weight":
        return "Weight (kg)";
      case "calories":
        return "Calories";
      default:
        return "";
    }
  }, [selectedMetric]);

  const fitnessStatus = useMemo(() => {
    if (selectedMetric === "weight") return "Improving";
    if (avgActivity >= 90) return "Excellent";
    if (avgActivity >= 70) return "Improving";
    return "Needs Focus";
  }, [selectedMetric, avgActivity]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Progress Analytics</p>
        <h1 className="text-3xl font-bold mt-2">Track Your Fitness Growth</h1>
        <p className="text-white/80 mt-3 max-w-2xl">
          Review your attendance, completed sessions, calories burned, weight
          trend, and overall fitness performance.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <button
          onClick={() => setSelectedMetric("attendance")}
          className={`rounded-3xl p-5 shadow-md border text-left transition ${
            selectedMetric === "attendance"
              ? "bg-violet-50 border-violet-300"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Attendance</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">
                {progressData.attendance}%
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedMetric("sessions")}
          className={`rounded-3xl p-5 shadow-md border text-left transition ${
            selectedMetric === "sessions"
              ? "bg-blue-50 border-blue-300"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Sessions Done</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">
                {progressData.sessionsDone}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FiActivity size={22} />
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedMetric("weight")}
          className={`rounded-3xl p-5 shadow-md border text-left transition ${
            selectedMetric === "weight"
              ? "bg-pink-50 border-pink-300"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Weight Change</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">
                {progressData.weightChange}kg
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <FiTrendingDown size={22} />
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedMetric("calories")}
          className={`rounded-3xl p-5 shadow-md border text-left transition ${
            selectedMetric === "calories"
              ? "bg-emerald-50 border-emerald-300"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Calories Burned</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">
                {progressData.caloriesBurned}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <FiZap size={22} />
            </div>
          </div>
        </button>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="text-sm text-slate-500">Selected Metric</p>
            <h2 className="text-2xl font-bold text-slate-800 mt-2 capitalize">
              {selectedMetric}
            </h2>
            <p className="text-slate-500 mt-2">
              Current value for this selected metric.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f8fafc] px-6 py-5 min-w-[220px]">
            <p className="text-sm text-slate-500">Current Value</p>
            <h3 className="text-3xl font-bold mt-2" style={{ color: chartColor }}>
              {selectedMetricValue}
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Overall Target Progress</span>
            <span>{progressData.targetProgress}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressData.targetProgress}%`,
                backgroundColor: chartColor,
              }}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-800">Weekly Activity</h2>
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
              <FiBarChart2 size={22} />
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            {chartLabel} trend for the current week
          </p>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar
                  dataKey={selectedMetric}
                  fill={chartColor}
                  radius={[12, 12, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-800">Trend Overview</h2>
          <p className="text-sm text-slate-500 mt-1">
            Smooth weekly movement of the selected metric
          </p>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey={selectedMetric}
                  stroke={chartColor}
                  fill={chartColor}
                  fillOpacity={0.2}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-800">Recommendations</h2>

          <div className="mt-5 space-y-3">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
            <p className="text-sm text-slate-500">Best Activity Day</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">
              {bestDay.day}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Highest {selectedMetric} value
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
            <p className="text-sm text-slate-500">Average Weekly Value</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">
              {avgActivity}
              {selectedMetric === "attendance"
                ? "%"
                : selectedMetric === "weight"
                ? " kg"
                : ""}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Based on your current week performance
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
            <p className="text-sm text-slate-500">Fitness Status</p>
            <h3
              className={`text-2xl font-bold mt-2 ${
                fitnessStatus === "Excellent"
                  ? "text-blue-600"
                  : fitnessStatus === "Improving"
                  ? "text-emerald-600"
                  : "text-orange-600"
              }`}
            >
              {fitnessStatus}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Your routine is moving in the right direction
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 