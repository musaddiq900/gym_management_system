"use client";

import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiRefreshCcw,
  FiSave,
  FiActivity,
  FiHeart,
} from "react-icons/fi";

export default function BMIPage() {
  const [height, setHeight] = useState("165");
  const [weight, setWeight] = useState("62");
  const [message, setMessage] = useState("");

  const bmiData = useMemo(() => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      return {
        bmi: "0.0",
        status: "Enter valid values",
        color: "text-slate-600",
        bg: "bg-slate-50",
      };
    }

    const bmi = w / (h * h);

    if (bmi < 18.5) {
      return {
        bmi: bmi.toFixed(1),
        status: "Underweight",
        color: "text-blue-700",
        bg: "bg-blue-50",
      };
    }

    if (bmi < 25) {
      return {
        bmi: bmi.toFixed(1),
        status: "Normal",
        color: "text-green-700",
        bg: "bg-green-50",
      };
    }

    if (bmi < 30) {
      return {
        bmi: bmi.toFixed(1),
        status: "Overweight",
        color: "text-yellow-700",
        bg: "bg-yellow-50",
      };
    }

    return {
      bmi: bmi.toFixed(1),
      status: "Obese",
      color: "text-red-700",
      bg: "bg-red-50",
    };
  }, [height, weight]);

  const idealWeightRange = useMemo(() => {
    const h = parseFloat(height) / 100;

    if (!h || h <= 0) return { min: "0.0", max: "0.0" };

    const min = 18.5 * h * h;
    const max = 24.9 * h * h;

    return {
      min: min.toFixed(1),
      max: max.toFixed(1),
    };
  }, [height]);

  const recommendation = useMemo(() => {
    switch (bmiData.status) {
      case "Underweight":
        return "Focus on balanced nutrition, strength training, and gradual healthy weight gain.";
      case "Normal":
        return "Your BMI is in a healthy range. Maintain your routine with regular workouts and a balanced diet.";
      case "Overweight":
        return "Add more cardio, improve meal quality, and stay consistent with your weekly exercise routine.";
      case "Obese":
        return "Work with a trainer, follow a structured workout plan, and maintain a calorie-controlled diet.";
      default:
        return "Enter valid height and weight to get your BMI recommendation.";
    }
  }, [bmiData.status]);

  const handleReset = () => {
    setHeight("165");
    setWeight("62");
    setMessage("BMI form reset successfully.");
  };

  const handleSave = () => {
    if (bmiData.status === "Enter valid values") {
      setMessage("Please enter valid height and weight first.");
      return;
    }

    setMessage(`BMI result ${bmiData.bmi} (${bmiData.status}) saved successfully.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">BMI Calculator</p>
        <h1 className="text-3xl font-bold mt-2">Check Your Body Mass Index</h1>
        <p className="text-white/80 mt-3">
          Enter your height and weight to calculate your BMI instantly.
        </p>
      </section>

      {/* Message */}
      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      {/* Top Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Current BMI</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {bmiData.bmi}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <FiActivity size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <h2 className={`text-3xl font-bold mt-2 ${bmiData.color}`}>
                {bmiData.status}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <FiHeart size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div>
            <p className="text-sm text-slate-500">Ideal Weight Range</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-2">
              {idealWeightRange.min} - {idealWeightRange.max} kg
            </h2>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Form */}
        <div className="xl:col-span-2 rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-bold text-slate-800">BMI Form</h2>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-2xl bg-slate-100 text-slate-700 px-5 py-3 font-semibold hover:bg-slate-200 transition flex items-center gap-2"
              >
                <FiRefreshCcw />
                Reset
              </button>

              <button
                onClick={handleSave}
                className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition flex items-center gap-2"
              >
                <FiSave />
                Save Result
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  setMessage("");
                }}
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter height"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  setMessage("");
                }}
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter weight"
              />
            </div>
          </div>

          <div className={`mt-6 rounded-3xl p-6 ${bmiData.bg}`}>
            <p className="text-sm text-slate-500">Calculated BMI</p>
            <h3 className="text-4xl font-bold text-slate-800 mt-2">
              {bmiData.bmi}
            </h3>
            <p className={`font-semibold mt-2 ${bmiData.color}`}>
              {bmiData.status}
            </p>
          </div>

          <div className="mt-6 rounded-3xl bg-[#f8fafc] p-6">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Health Range Progress</span>
              <span>{bmiData.bmi}</span>
            </div>

            <div className="h-4 w-full rounded-full overflow-hidden bg-slate-200 flex">
              <div className="w-[20%] bg-blue-300" />
              <div className="w-[30%] bg-green-400" />
              <div className="w-[20%] bg-yellow-400" />
              <div className="w-[30%] bg-red-400" />
            </div>

            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Under</span>
              <span>Normal</span>
              <span>Over</span>
              <span>Obese</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">BMI Ranges</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-700">
                Underweight: less than 18.5
              </div>
              <div className="rounded-2xl bg-green-50 p-4 text-sm text-slate-700">
                Normal: 18.5 to 24.9
              </div>
              <div className="rounded-2xl bg-yellow-50 p-4 text-sm text-slate-700">
                Overweight: 25 to 29.9
              </div>
              <div className="rounded-2xl bg-red-50 p-4 text-sm text-slate-700">
                Obese: 30 or more
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Recommendation</h3>
            <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-700">
              {recommendation}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Quick Note</h3>
            <div className="mt-4 rounded-2xl bg-cyan-50 p-4 text-sm text-slate-700">
              BMI is a quick health indicator. For better results, combine this
              with workout tracking, diet planning, and trainer guidance.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}