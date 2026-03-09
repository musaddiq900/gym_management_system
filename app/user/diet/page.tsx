"use client";

import { useMemo, useState } from "react";
import { FiCheckCircle, FiCoffee, FiSun, FiMoon, FiHeart } from "react-icons/fi";

type MealItem = {
  id: number;
  meal: string;
  items: string;
  calories: number;
  done: boolean;
  color: string;
  icon: "breakfast" | "lunch" | "dinner" | "snacks";
};

export default function DietPage() {
  const [meals, setMeals] = useState<MealItem[]>([
    {
      id: 1,
      meal: "Breakfast",
      items: "Oats, banana, boiled eggs, green tea",
      calories: 420,
      done: false,
      color: "bg-emerald-50",
      icon: "breakfast",
    },
    {
      id: 2,
      meal: "Lunch",
      items: "Grilled chicken, brown rice, mixed salad",
      calories: 610,
      done: false,
      color: "bg-yellow-50",
      icon: "lunch",
    },
    {
      id: 3,
      meal: "Dinner",
      items: "Fish, steamed vegetables, soup",
      calories: 480,
      done: false,
      color: "bg-cyan-50",
      icon: "dinner",
    },
    {
      id: 4,
      meal: "Snacks",
      items: "Greek yogurt, almonds, seasonal fruit",
      calories: 250,
      done: false,
      color: "bg-pink-50",
      icon: "snacks",
    },
  ]);

  const toggleMealStatus = (id: number) => {
    setMeals((prev) =>
      prev.map((meal) =>
        meal.id === id ? { ...meal, done: !meal.done } : meal
      )
    );
  };

  const totalMeals = meals.length;

  const completedMeals = useMemo(
    () => meals.filter((meal) => meal.done).length,
    [meals]
  );

  const totalCalories = useMemo(
    () => meals.reduce((sum, meal) => sum + meal.calories, 0),
    [meals]
  );

  const completedCalories = useMemo(
    () =>
      meals
        .filter((meal) => meal.done)
        .reduce((sum, meal) => sum + meal.calories, 0),
    [meals]
  );

  const progressPercent = useMemo(() => {
    if (totalMeals === 0) return 0;
    return Math.round((completedMeals / totalMeals) * 100);
  }, [completedMeals, totalMeals]);

  const getMealIcon = (icon: MealItem["icon"]) => {
    switch (icon) {
      case "breakfast":
        return <FiCoffee size={20} />;
      case "lunch":
        return <FiSun size={20} />;
      case "dinner":
        return <FiMoon size={20} />;
      case "snacks":
        return <FiHeart size={20} />;
      default:
        return <FiCoffee size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-emerald-500 to-lime-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Diet Plan</p>
        <h1 className="text-3xl font-bold mt-2">Your Daily Nutrition Guide</h1>
        <p className="text-white/80 mt-3 max-w-2xl">
          Follow your meals, track completion, and maintain a balanced eating
          routine for better fitness results.
        </p>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Meals</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {totalMeals}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FiCoffee size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Completed Meals</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {completedMeals}
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
              <p className="text-sm text-slate-500">Total Calories</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {totalCalories}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-lime-50 text-lime-600 flex items-center justify-center">
              <FiHeart size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Diet Progress</h2>
            <p className="text-sm text-slate-500 mt-1">
              {completedMeals} of {totalMeals} meals completed
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-600">
              {progressPercent}%
            </p>
          </div>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm text-slate-500">Consumed Calories</p>
            <h4 className="text-2xl font-bold text-slate-800 mt-1">
              {completedCalories}
            </h4>
          </div>

          <div className="rounded-2xl bg-lime-50 p-4">
            <p className="text-sm text-slate-500">Remaining Calories</p>
            <h4 className="text-2xl font-bold text-slate-800 mt-1">
              {totalCalories - completedCalories}
            </h4>
          </div>
        </div>
      </section>

      {/* Meal Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className={`rounded-3xl p-6 shadow-md border transition-all duration-300 ${
              meal.done ? "bg-green-50 border-green-200" : "bg-white border-gray-100"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-slate-700 ${meal.color}`}
                >
                  {getMealIcon(meal.icon)}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {meal.meal}
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">
                    Calories: {meal.calories} kcal
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  meal.done
                    ? "bg-green-100 text-green-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {meal.done ? "Completed" : "Pending"}
              </span>
            </div>

            <div className={`mt-5 rounded-2xl p-5 ${meal.color}`}>
              <p className="text-slate-700 leading-7">{meal.items}</p>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Recommended meal based on your current fitness goal.
            </p>

            <button
              onClick={() => toggleMealStatus(meal.id)}
              className={`w-full mt-6 rounded-2xl px-5 py-3 font-semibold transition ${
                meal.done
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              {meal.done ? "Undo Complete" : "Mark as Done"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}