"use client";

import { useMemo, useState } from "react";
import { FiCheckCircle, FiClock, FiPlayCircle } from "react-icons/fi";

type WorkoutItem = {
  id: number;
  title: string;
  exercises: string[];
  duration: string;
  done: boolean;
};

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState<WorkoutItem[]>([
    {
      id: 1,
      title: "Upper Body Strength",
      exercises: ["Push-ups", "Dumbbell Press", "Shoulder Press", "Pull Down"],
      duration: "45 min",
      done: false,
    },
    {
      id: 2,
      title: "Lower Body Blast",
      exercises: ["Squats", "Lunges", "Leg Press", "Calf Raises"],
      duration: "50 min",
      done: false,
    },
    {
      id: 3,
      title: "Core & Abs",
      exercises: ["Plank", "Crunches", "Leg Raises", "Mountain Climbers"],
      duration: "30 min",
      done: false,
    },
  ]);

  const toggleWorkoutStatus = (id: number) => {
    setWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === id
          ? { ...workout, done: !workout.done }
          : workout
      )
    );
  };

  const completedCount = useMemo(
    () => workouts.filter((workout) => workout.done).length,
    [workouts]
  );

  const totalExercises = useMemo(
    () => workouts.reduce((acc, workout) => acc + workout.exercises.length, 0),
    [workouts]
  );

  const progressPercent = useMemo(() => {
    if (workouts.length === 0) return 0;
    return Math.round((completedCount / workouts.length) * 100);
  }, [completedCount, workouts.length]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Workout Plan</p>
        <h1 className="text-3xl font-bold mt-2">Your Personalized Workout Routine</h1>
        <p className="text-white/80 mt-3 max-w-2xl">
          Follow your daily exercise schedule, mark workouts complete, and track
          your progress.
        </p>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Workouts</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {workouts.length}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FiPlayCircle size={22} />
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
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Exercises</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {totalExercises}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <FiClock size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Workout Progress</h2>
            <p className="text-sm text-slate-500 mt-1">
              {completedCount} of {workouts.length} workouts completed
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{progressPercent}%</p>
          </div>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </section>

      {/* Workout Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className={`rounded-3xl p-6 shadow-md border transition-all duration-300 ${
              workout.done
                ? "bg-green-50 border-green-200"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {workout.title}
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                  Duration: {workout.duration}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  workout.done
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {workout.done ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {workout.exercises.map((exercise) => (
                <div
                  key={exercise}
                  className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-700"
                >
                  {exercise}
                </div>
              ))}
            </div>

            <button
              onClick={() => toggleWorkoutStatus(workout.id)}
              className={`w-full mt-6 rounded-2xl px-5 py-3 font-semibold transition ${
                workout.done
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {workout.done ? "Undo Complete" : "Mark as Done"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}