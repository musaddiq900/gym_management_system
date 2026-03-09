"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5;

export default function ClassesFlowPage() {
  const [step, setStep] = useState<Step>(1);

  const [className, setClassName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [capacity, setCapacity] = useState<number>(0);
  const [bookedMembers, setBookedMembers] = useState<string[]>([]);

  const members = ["Ali Khan", "Ayesha", "Usman", "Hina"];

  function next() {
    if (step < 5) setStep((prev) => (prev + 1) as Step);
  }

  function back() {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  }

  function bookMember(name: string) {
    if (bookedMembers.includes(name)) return;
    if (bookedMembers.length >= capacity) return;
    setBookedMembers([...bookedMembers, name]);
  }

  const percent =
    capacity > 0 ? Math.round((bookedMembers.length / capacity) * 100) : 0;

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Class Setup Wizard
      </h1>

      {/* STEP BAR */}
      {step < 5 && (
        <div className="flex items-center gap-6">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition
                ${
                  step === s
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-300/40"
                    : step > s
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CARD */}
      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/60">

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Create Class</h2>
            <input
              className="w-full bg-gray-50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Assign Trainer</h2>
            <select
              className="w-full bg-gray-50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
            >
              <option value="">Select Trainer</option>
              <option>Hassan Trainer</option>
              <option>Sara Fitness</option>
            </select>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Set Capacity</h2>
            <input
              type="number"
              className="w-full bg-gray-50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Capacity"
              value={capacity || ""}
              onChange={(e) => setCapacity(Number(e.target.value))}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Member Booking</h2>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>
                  {bookedMembers.length} / {capacity} Booked
                </span>
                <span>{percent}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

            {/* Member Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {members.map((m) => {
                const booked = bookedMembers.includes(m);
                const full = bookedMembers.length >= capacity;

                return (
                  <button
                    key={m}
                    onClick={() => bookMember(m)}
                    disabled={booked || full}
                    className={`p-4 rounded-2xl text-left transition shadow-md
                      ${
                        booked
                          ? "bg-green-50 text-green-700"
                          : full
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white hover:shadow-lg"
                      }`}
                  >
                    <div className="font-medium">{m}</div>
                    <div className="text-xs text-gray-500">
                      {booked ? "Booked" : "Tap to book"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-600">
              🎉 Class Created Successfully
            </h2>

            <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
              <div><strong>Class:</strong> {className}</div>
              <div><strong>Trainer:</strong> {trainer}</div>
              <div><strong>Capacity:</strong> {capacity}</div>
              <div><strong>Members:</strong></div>
              <ul className="list-disc pl-6 text-sm">
                {bookedMembers.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* BUTTONS */}
      {step < 5 && (
        <div className="flex justify-between">
          <button
            onClick={back}
            disabled={step === 1}
            className="px-6 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={next}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-400/30 hover:scale-[1.02] transition"
          >
            {step === 4 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}