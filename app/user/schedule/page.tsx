"use client";

import { useMemo, useState } from "react";
import {
  FiBell,
  FiCheckCircle,
  FiClock,
  FiCalendar,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

type ScheduleType = "Class" | "Personal Training" | "Consultation";
type FilterType = "All" | ScheduleType;

type ScheduleItem = {
  id: number;
  title: string;
  day: string;
  time: string;
  type: ScheduleType;
  completed: boolean;
};

const initialScheduleItems: ScheduleItem[] = [
  {
    id: 1,
    title: "Morning Cardio",
    day: "Monday",
    time: "07:00 AM",
    type: "Class",
    completed: false,
  },
  {
    id: 2,
    title: "Trainer Session",
    day: "Tuesday",
    time: "06:00 PM",
    type: "Personal Training",
    completed: false,
  },
  {
    id: 3,
    title: "Yoga Session",
    day: "Wednesday",
    time: "08:00 AM",
    type: "Class",
    completed: true,
  },
  {
    id: 4,
    title: "Diet Review",
    day: "Friday",
    time: "05:00 PM",
    type: "Consultation",
    completed: false,
  },
];

export default function SchedulePage() {
  const [scheduleItems, setScheduleItems] =
    useState<ScheduleItem[]>(initialScheduleItems);
  const [reminder, setReminder] = useState(true);
  const [filter, setFilter] = useState<FilterType>("All");
  const [message, setMessage] = useState("");

  const [newItem, setNewItem] = useState({
    title: "",
    day: "Monday",
    time: "",
    type: "Class" as ScheduleType,
  });

  const filteredItems = useMemo(() => {
    if (filter === "All") return scheduleItems;
    return scheduleItems.filter((item) => item.type === filter);
  }, [scheduleItems, filter]);

  const completedCount = useMemo(
    () => scheduleItems.filter((item) => item.completed).length,
    [scheduleItems]
  );

  const pendingCount = useMemo(
    () => scheduleItems.filter((item) => !item.completed).length,
    [scheduleItems]
  );

  const classCount = useMemo(
    () => scheduleItems.filter((item) => item.type === "Class").length,
    [scheduleItems]
  );

  const toggleComplete = (id: number) => {
    setScheduleItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    setMessage("Schedule status updated.");
  };

  const deleteItem = (id: number) => {
    setScheduleItems((prev) => prev.filter((item) => item.id !== id));
    setMessage("Schedule item deleted.");
  };

  const addScheduleItem = () => {
    if (!newItem.title.trim() || !newItem.time.trim()) {
      setMessage("Please enter title and time.");
      return;
    }

    const item: ScheduleItem = {
      id: Date.now(),
      title: newItem.title,
      day: newItem.day,
      time: newItem.time,
      type: newItem.type,
      completed: false,
    };

    setScheduleItems((prev) => [...prev, item]);
    setNewItem({
      title: "",
      day: "Monday",
      time: "",
      type: "Class",
    });
    setMessage("New schedule item added.");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Schedule</p>
        <h1 className="text-3xl font-bold mt-2">Your Weekly Schedule</h1>
        <p className="text-white/80 mt-3">
          Manage booked classes, trainer sessions, and reminders.
        </p>
      </section>

      {/* Message */}
      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Schedules</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {scheduleItems.length}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <FiCalendar size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Completed</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {completedCount}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Classes</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {classCount}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <FiClock size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left side */}
        <div className="xl:col-span-2 space-y-6">
          {/* Add item form */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-2xl font-bold text-slate-800">
                Add Schedule Item
              </h2>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <FiPlus size={22} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                placeholder="Title"
                value={newItem.title}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, title: e.target.value }))
                }
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <select
                value={newItem.day}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, day: e.target.value }))
                }
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>

              <input
                type="text"
                placeholder="Time e.g. 07:00 AM"
                value={newItem.time}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, time: e.target.value }))
                }
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <select
                value={newItem.type}
                onChange={(e) =>
                  setNewItem((prev) => ({
                    ...prev,
                    type: e.target.value as ScheduleType,
                  }))
                }
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option>Class</option>
                <option>Personal Training</option>
                <option>Consultation</option>
              </select>
            </div>

            <button
              onClick={addScheduleItem}
              className="mt-5 rounded-2xl bg-indigo-600 text-white px-5 py-3 font-semibold hover:bg-indigo-700 transition"
            >
              Add Schedule
            </button>
          </div>

          {/* Filter + List */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-800">
                Upcoming Schedule
              </h2>

              <div className="flex flex-wrap gap-2">
                {(["All", "Class", "Personal Training", "Consultation"] as FilterType[]).map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                        filter === item
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {filteredItems.length === 0 ? (
                <div className="rounded-2xl bg-[#f8fafc] p-8 text-center text-slate-500">
                  No schedule items found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl p-4 border transition ${
                      item.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-[#f8fafc] border-transparent"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold text-slate-800">
                          {item.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.completed
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.completed ? "Completed" : "Pending"}
                        </span>
                      </div>

                      <p className="text-sm text-slate-500 mt-1">
                        {item.day} • {item.time}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold w-fit">
                        {item.type}
                      </span>

                      <button
                        onClick={() => toggleComplete(item.id)}
                        className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                          item.completed
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                      >
                        {item.completed ? "Mark Pending" : "Mark Complete"}
                      </button>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="rounded-2xl bg-red-50 text-red-600 px-4 py-2 text-sm font-medium hover:bg-red-100 transition flex items-center gap-2"
                      >
                        <FiTrash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">
              Reminder Settings
            </h3>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#f8fafc] p-4">
              <div>
                <p className="font-medium text-slate-800">Enable Reminders</p>
                <p className="text-sm text-slate-500 mt-1">
                  Get alerts before scheduled sessions
                </p>
              </div>

              <button
                onClick={() => {
                  setReminder(!reminder);
                  setMessage(
                    !reminder ? "Reminders enabled." : "Reminders disabled."
                  );
                }}
                className={`w-14 h-8 rounded-full relative transition ${
                  reminder ? "bg-blue-500" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${
                    reminder ? "left-7 -translate-x-full" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm text-slate-700 flex items-center gap-2">
              <FiBell />
              {reminder
                ? "You will receive reminders before sessions."
                : "Session reminders are currently turned off."}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Schedule Summary</h3>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Completed</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {completedCount}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Pending</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {pendingCount}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Reminder Status</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {reminder ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Schedule Note</h3>
            <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm text-slate-700">
              You can later connect this with real notifications, Google Calendar
              sync, or backend booking APIs.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}