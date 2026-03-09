"use client";

import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiPlus,
  FiMinus,
  FiSave,
} from "react-icons/fi";

type GoalItem = {
  id: number;
  title: string;
  desc: string;
  progress: number;
  active: boolean;
};

export default function GoalsPage() {
  const [goals, setGoals] = useState<GoalItem[]>([
    {
      id: 1,
      title: "Weight Loss",
      desc: "Burn fat, improve stamina, and stay consistent with cardio + diet.",
      progress: 72,
      active: true,
    },
    {
      id: 2,
      title: "Muscle Gain",
      desc: "Build lean muscle with strength training and protein-focused meals.",
      progress: 48,
      active: false,
    },
    {
      id: 3,
      title: "General Fitness",
      desc: "Stay active, healthy, and maintain a balanced workout routine.",
      progress: 85,
      active: false,
    },
    {
      id: 4,
      title: "Strength Building",
      desc: "Improve overall strength with compound lifts and progressive overload.",
      progress: 61,
      active: false,
    },
  ]);

  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [newGoalDesc, setNewGoalDesc] = useState("");
  const [message, setMessage] = useState("");

  const activeGoal = useMemo(() => {
    return goals.find((goal) => goal.active) || null;
  }, [goals]);

  const completedGoals = useMemo(() => {
    return goals.filter((goal) => goal.progress >= 100).length;
  }, [goals]);

  const avgProgress = useMemo(() => {
    if (!goals.length) return 0;
    const total = goals.reduce((sum, goal) => sum + goal.progress, 0);
    return Math.round(total / goals.length);
  }, [goals]);

  const setActiveGoal = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) => ({
        ...goal,
        active: goal.id === id,
      }))
    );
    setMessage("Goal selected successfully.");
  };

  const updateGoalProgress = (id: number, type: "inc" | "dec") => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              progress:
                type === "inc"
                  ? Math.min(goal.progress + 5, 100)
                  : Math.max(goal.progress - 5, 0),
            }
          : goal
      )
    );
    setMessage("Goal progress updated.");
  };

  const addCustomGoal = () => {
    if (!newGoalTitle.trim() || !newGoalDesc.trim()) {
      setMessage("Please enter goal title and description.");
      return;
    }

    const newGoal: GoalItem = {
      id: Date.now(),
      title: newGoalTitle,
      desc: newGoalDesc,
      progress: 0,
      active: false,
    };

    setGoals((prev) => [...prev, newGoal]);
    setNewGoalTitle("");
    setNewGoalDesc("");
    setMessage("New goal added successfully.");
  };

  const saveGoal = () => {
    if (!activeGoal) {
      setMessage("Please select a goal first.");
      return;
    }
    setMessage(`${activeGoal.title} saved as active goal.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-fuchsia-600 to-violet-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Goals</p>
        <h1 className="text-3xl font-bold mt-2">Set and Track Your Fitness Goals</h1>
        <p className="text-white/80 mt-3">
          Choose your main objective and monitor your progress over time.
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
              <p className="text-sm text-slate-500">Total Goals</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {goals.length}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
              <FiTarget size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Completed Goals</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {completedGoals}
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
              <p className="text-sm text-slate-500">Average Progress</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {avgProgress}%
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center">
              <FiTrendingUp size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Goals list */}
        <div className="xl:col-span-2 space-y-5">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`rounded-3xl p-6 shadow-md border transition ${
                goal.active
                  ? "bg-violet-50 border-violet-300"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-slate-800">
                      {goal.title}
                    </h2>

                    {goal.active && (
                      <span className="rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-xs font-semibold">
                        Active Goal
                      </span>
                    )}
                  </div>

                  <p className="text-slate-500 mt-2">{goal.desc}</p>

                  <div className="mt-5">
                    <div className="flex justify-between text-sm text-slate-500 mb-2">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-w-[180px]">
                  <button
                    onClick={() => setActiveGoal(goal.id)}
                    className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition"
                  >
                    {goal.active ? "Selected" : "Select Goal"}
                  </button>

                  <div className="flex gap-3">
                    <button
                      onClick={() => updateGoalProgress(goal.id, "dec")}
                      className="flex-1 rounded-2xl bg-slate-100 text-slate-700 px-4 py-3 font-medium hover:bg-slate-200 transition flex items-center justify-center gap-2"
                    >
                      <FiMinus />
                      5%
                    </button>

                    <button
                      onClick={() => updateGoalProgress(goal.id, "inc")}
                      className="flex-1 rounded-2xl bg-violet-600 text-white px-4 py-3 font-medium hover:bg-violet-700 transition flex items-center justify-center gap-2"
                    >
                      <FiPlus />
                      5%
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Active Goal</h3>

            {activeGoal ? (
              <>
                <div className="mt-5 rounded-2xl bg-[#f8fafc] p-4">
                  <p className="text-sm text-slate-500">Current Goal</p>
                  <h4 className="text-lg font-bold text-slate-800 mt-1">
                    {activeGoal.title}
                  </h4>
                </div>

                <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4">
                  <p className="text-sm text-slate-500">Progress</p>
                  <p className="font-semibold text-slate-800 mt-1">
                    {activeGoal.progress}%
                  </p>
                </div>

                <button
                  onClick={saveGoal}
                  className="w-full mt-6 rounded-2xl bg-violet-600 text-white px-5 py-3 font-semibold hover:bg-violet-700 transition flex items-center justify-center gap-2"
                >
                  <FiSave />
                  Save Goal
                </button>
              </>
            ) : (
              <div className="mt-5 rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                No active goal selected.
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Add Custom Goal</h3>

            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Goal title"
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              />

              <textarea
                placeholder="Goal description"
                rows={4}
                value={newGoalDesc}
                onChange={(e) => setNewGoalDesc(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400 resize-none"
              />

              <button
                onClick={addCustomGoal}
                className="w-full rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition"
              >
                Add Goal
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Goal Tips</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-violet-50 p-4 text-sm text-slate-700">
                Keep one main goal active for better focus and consistency.
              </div>
              <div className="rounded-2xl bg-fuchsia-50 p-4 text-sm text-slate-700">
                Update progress regularly to track your real fitness journey.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}