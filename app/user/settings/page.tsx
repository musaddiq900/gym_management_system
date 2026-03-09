"use client";

import { useMemo, useState } from "react";
import {
  FiBell,
  FiShield,
  FiUser,
  FiMoon,
  FiGlobe,
  FiLock,
  FiSave,
  FiCheckCircle,
  FiDroplet,
  FiActivity,
} from "react-icons/fi";

type ToggleProps = {
  enabled: boolean;
  onClick: () => void;
};

function Toggle({ enabled, onClick }: ToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`w-14 h-8 rounded-full relative transition ${
        enabled ? "bg-emerald-500" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${
          enabled ? "left-7 -translate-x-full" : "left-1"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [message, setMessage] = useState("");

  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    classReminders: true,
    paymentReminders: true,
    dietReminders: false,
    workoutReminders: true,

    profileVisible: true,
    showProgressToTrainer: true,
    shareAttendance: true,
    allowGymContact: false,

    darkMode: false,
    waterReminder: true,
    twoFactorAuth: false,
    weeklySummary: true,
    whatsappReminder: false,

    language: "English",
    timezone: "Asia/Karachi",
    preferredWorkoutTime: "Morning",
    workoutIntensity: "Moderate",
    dietaryPreference: "Balanced Diet",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
    setMessage("");
  };

  const handleSelectChange = (
    key: keyof typeof settings,
    value: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    setMessage("");
  };

  const handleSaveSettings = () => {
    setMessage("Settings saved successfully.");
  };

  const handlePasswordSave = () => {
    if (
      !passwordForm.currentPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmPassword
    ) {
      setMessage("Please fill all password fields.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setMessage("Password updated successfully.");
  };

  const enabledCount = useMemo(() => {
    return Object.values(settings).filter((value) => value === true).length;
  }, [settings]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-800 to-slate-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Settings</p>
        <h1 className="text-3xl font-bold mt-2">Manage Your Preferences</h1>
        <p className="text-white/80 mt-3">
          Control notifications, privacy, preferences, reminders, and account security.
        </p>
      </section>

      {/* Message */}
      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      {/* Top stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Toggles</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {enabledCount}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Language</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {settings.language}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <FiGlobe size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Workout Time</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {settings.preferredWorkoutTime}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
              <FiActivity size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left side */}
        <div className="xl:col-span-2 space-y-6">
          {/* Notification settings */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FiBell />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Notification Settings
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Email Alerts", "Receive updates on email", "emailAlerts"],
                ["SMS Alerts", "Important notices on SMS", "smsAlerts"],
                ["Class Reminders", "Get alerts before classes", "classReminders"],
                ["Payment Reminders", "Renewal and invoice reminders", "paymentReminders"],
                ["Diet Reminders", "Meal and nutrition reminders", "dietReminders"],
                ["Workout Reminders", "Workout schedule reminders", "workoutReminders"],
              ].map(([title, sub, key]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl bg-[#f8fafc] p-4"
                >
                  <div>
                    <p className="font-medium text-slate-800">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{sub}</p>
                  </div>
                  <Toggle
                    enabled={settings[key as keyof typeof settings] as boolean}
                    onClick={() => handleToggle(key as keyof typeof settings)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy settings */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <FiShield />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Privacy Settings
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Profile Visible", "Allow profile visibility", "profileVisible"],
                ["Show Progress to Trainer", "Share fitness progress with trainer", "showProgressToTrainer"],
                ["Share Attendance", "Allow attendance sharing", "shareAttendance"],
                ["Allow Gym Contact", "Gym can contact you directly", "allowGymContact"],
              ].map(([title, sub, key]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl bg-[#f8fafc] p-4"
                >
                  <div>
                    <p className="font-medium text-slate-800">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{sub}</p>
                  </div>
                  <Toggle
                    enabled={settings[key as keyof typeof settings] as boolean}
                    onClick={() => handleToggle(key as keyof typeof settings)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                <FiUser />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Account Preferences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div>
                <label className="text-sm font-medium text-slate-600">
                  Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => handleSelectChange("language", e.target.value)}
                  className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>English</option>
                  <option>Urdu</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Timezone
                </label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleSelectChange("timezone", e.target.value)}
                  className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>Asia/Karachi</option>
                  <option>Asia/Dubai</option>
                  <option>Europe/London</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Preferred Workout Time
                </label>
                <select
                  value={settings.preferredWorkoutTime}
                  onChange={(e) =>
                    handleSelectChange("preferredWorkoutTime", e.target.value)
                  }
                  className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Workout Intensity
                </label>
                <select
                  value={settings.workoutIntensity}
                  onChange={(e) =>
                    handleSelectChange("workoutIntensity", e.target.value)
                  }
                  className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>Light</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-600">
                  Dietary Preference
                </label>
                <select
                  value={settings.dietaryPreference}
                  onChange={(e) =>
                    handleSelectChange("dietaryPreference", e.target.value)
                  }
                  className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>Balanced Diet</option>
                  <option>High Protein</option>
                  <option>Low Carb</option>
                  <option>Vegetarian</option>
                </select>
              </div>
            </div>
          </div>

          {/* Extra toggles */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <FiMoon />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Extra Preferences
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Dark Mode", "UI dark mode demo", "darkMode"],
                ["Water Reminder", "Stay hydrated through reminders", "waterReminder"],
                ["Two-Factor Auth", "Extra account security", "twoFactorAuth"],
                ["Weekly Summary", "Receive weekly fitness summary", "weeklySummary"],
                ["WhatsApp Reminder", "Get reminders on WhatsApp", "whatsappReminder"],
              ].map(([title, sub, key]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl bg-[#f8fafc] p-4"
                >
                  <div>
                    <p className="font-medium text-slate-800">{title}</p>
                    <p className="text-sm text-slate-500 mt-1">{sub}</p>
                  </div>
                  <Toggle
                    enabled={settings[key as keyof typeof settings] as boolean}
                    onClick={() => handleToggle(key as keyof typeof settings)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Quick Summary</h3>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Language</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {settings.language}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Timezone</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {settings.timezone}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Workout Time</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {settings.preferredWorkoutTime}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Diet Type</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {settings.dietaryPreference}
                </p>
              </div>
            </div>

            <button
              onClick={handleSaveSettings}
              className="w-full mt-6 rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <FiSave />
              Save Settings
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center">
                <FiLock />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Change Password</h3>
            </div>

            <div className="mt-5 space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                value={passwordForm.currentPassword}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    currentPassword: e.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="password"
                placeholder="New Password"
                value={passwordForm.newPassword}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={passwordForm.confirmPassword}
                onChange={(e) =>
                  setPasswordForm((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
                onClick={handlePasswordSave}
                className="w-full rounded-2xl bg-red-600 text-white px-5 py-3 font-semibold hover:bg-red-700 transition"
              >
                Update Password
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Health Reminder</h3>
            <div className="mt-4 rounded-2xl bg-cyan-50 p-4 text-sm text-slate-700 flex items-start gap-2">
              <FiDroplet className="mt-0.5" />
              Keep hydration, workout timing, and reminder settings aligned with
              your gym routine for better consistency.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}