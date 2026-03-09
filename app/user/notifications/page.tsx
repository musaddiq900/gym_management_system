"use client";

import { useMemo, useState } from "react";
import {
  FiBell,
  FiCheckCircle,
  FiTrash2,
  FiMail,
  FiFilter,
} from "react-icons/fi";

type NotificationItem = {
  id: number;
  title: string;
  text: string;
  time: string;
  type: "class" | "membership" | "workout" | "diet";
  read: boolean;
};

type FilterType = "all" | "read" | "unread";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      title: "Class Reminder",
      text: "Your yoga class starts tomorrow at 7:00 AM.",
      time: "2 hours ago",
      type: "class",
      read: false,
    },
    {
      id: 2,
      title: "Membership Alert",
      text: "Your membership will expire in 5 days.",
      time: "Today",
      type: "membership",
      read: false,
    },
    {
      id: 3,
      title: "Workout Goal",
      text: "You completed 4 workouts this week. Great job!",
      time: "Yesterday",
      type: "workout",
      read: true,
    },
    {
      id: 4,
      title: "Diet Suggestion",
      text: "Drink more water and add protein to your lunch meal.",
      time: "Yesterday",
      type: "diet",
      read: true,
    },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");
  const [message, setMessage] = useState("");

  const filteredNotifications = useMemo(() => {
    if (filter === "read") {
      return notifications.filter((item) => item.read);
    }
    if (filter === "unread") {
      return notifications.filter((item) => !item.read);
    }
    return notifications;
  }, [notifications, filter]);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.read).length,
    [notifications]
  );

  const readCount = useMemo(
    () => notifications.filter((item) => item.read).length,
    [notifications]
  );

  const toggleReadStatus = (id: number) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
    setMessage("Notification status updated.");
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
    setMessage("Notification deleted.");
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    setMessage("All notifications cleared.");
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
    setMessage("All notifications marked as read.");
  };

  const getTypeBadge = (type: NotificationItem["type"]) => {
    switch (type) {
      case "class":
        return "bg-blue-100 text-blue-700";
      case "membership":
        return "bg-emerald-100 text-emerald-700";
      case "workout":
        return "bg-violet-100 text-violet-700";
      case "diet":
        return "bg-pink-100 text-pink-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-800 to-slate-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Notifications</p>
        <h1 className="text-3xl font-bold mt-2">Stay Updated</h1>
        <p className="text-white/80 mt-3">
          View class reminders, membership alerts, workout achievements, and
          fitness updates.
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
              <p className="text-sm text-slate-500">Total Notifications</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {notifications.length}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <FiBell size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Unread</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {unreadCount}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
              <FiMail size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Read</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {readCount}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-2xl px-5 py-3 font-medium transition ${
                filter === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("unread")}
              className={`rounded-2xl px-5 py-3 font-medium transition ${
                filter === "unread"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Unread
            </button>

            <button
              onClick={() => setFilter("read")}
              className={`rounded-2xl px-5 py-3 font-medium transition ${
                filter === "read"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Read
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={markAllAsRead}
              className="rounded-2xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition"
            >
              Mark All Read
            </button>

            <button
              onClick={clearAllNotifications}
              className="rounded-2xl bg-red-50 text-red-600 px-5 py-3 font-medium hover:bg-red-100 transition"
            >
              Clear All
            </button>
          </div>
        </div>
      </section>

      {/* Notifications List */}
      <section className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 shadow-md border border-gray-100 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
              <FiFilter size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mt-4">
              No notifications found
            </h3>
            <p className="text-slate-500 mt-2">
              There are no notifications in this filter right now.
            </p>
          </div>
        ) : (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 shadow-md border transition ${
                item.read
                  ? "bg-white border-gray-100"
                  : "bg-blue-50/40 border-blue-200"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-800">
                      {item.title}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getTypeBadge(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>

                    {!item.read && (
                      <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-semibold">
                        New
                      </span>
                    )}
                  </div>

                  <p className="text-slate-500 mt-3">{item.text}</p>
                </div>

                <div className="flex flex-col lg:items-end gap-3">
                  <span className="text-sm text-slate-400 whitespace-nowrap">
                    {item.time}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => toggleReadStatus(item.id)}
                      className="rounded-2xl bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-200 transition"
                    >
                      {item.read ? "Mark Unread" : "Mark Read"}
                    </button>

                    <button
                      onClick={() => deleteNotification(item.id)}
                      className="rounded-2xl bg-red-50 text-red-600 px-4 py-2 text-sm font-medium hover:bg-red-100 transition flex items-center gap-2"
                    >
                      <FiTrash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}