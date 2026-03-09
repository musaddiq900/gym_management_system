"use client";

import { useMemo, useState } from "react";
import {
  dietTemplatesSeed,
  exercisesSeed,
  members,
  weeklyLogsSeed,
  progressSeed,
  notesSeed,
  type DietTemplate,
  type Exercise,
  type WeeklyLog,
  type ProgressEntry,
  type NutritionNote,
} from "../../../data/dummyDietWorkout";

type Tab =
  | "Diet Templates"
  | "Exercise Library"
  | "Assign to Members"
  | "Weekly Tracking"
  | "Progress"
  | "Nutrition Notes";

const tabs: Tab[] = [
  "Diet Templates",
  "Exercise Library",
  "Assign to Members",
  "Weekly Tracking",
  "Progress",
  "Nutrition Notes",
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/70 p-6 md:p-8">
      {children}
    </div>
  );
}

function PrimaryBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={[
        "px-5 py-2.5 rounded-xl text-white font-medium",
        "bg-gradient-to-r from-blue-600 to-blue-500",
        "shadow-lg shadow-blue-400/30 hover:scale-[1.02] transition",
        "disabled:opacity-50 disabled:hover:scale-100",
        className,
      ].join(" ")}
    />
  );
}

function SoftBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={[
        "px-4 py-2 rounded-xl font-medium",
        "bg-gray-100 hover:bg-gray-200 transition",
        className,
      ].join(" ")}
    />
  );
}

export default function DietWorkoutPage() {
  const [active, setActive] = useState<Tab>("Diet Templates");

  // local demo state
  const [dietTemplates, setDietTemplates] = useState<DietTemplate[]>(dietTemplatesSeed);
  const [exercises, setExercises] = useState<Exercise[]>(exercisesSeed);
  const [weeklyLogs, setWeeklyLogs] = useState<WeeklyLog[]>(weeklyLogsSeed);
  const [progress, setProgress] = useState<ProgressEntry[]>(progressSeed);
  const [notes, setNotes] = useState<NutritionNote[]>(notesSeed);

  // assignment demo
  const [selectedMemberId, setSelectedMemberId] = useState(members[0]?.id ?? "");
  const [selectedDietId, setSelectedDietId] = useState(dietTemplatesSeed[0]?.id ?? "");
  const [assignMsg, setAssignMsg] = useState("");

  const selectedMember = useMemo(
    () => members.find((m) => m.id === selectedMemberId),
    [selectedMemberId]
  );

  // ---------- Diet Templates form ----------
  const [dietName, setDietName] = useState("");
  const [dietGoal, setDietGoal] = useState<DietTemplate["goal"]>("Fat Loss");
  const [dietCalories, setDietCalories] = useState<number>(2000);
  const [dietMealsText, setDietMealsText] = useState("Breakfast: Oats\nLunch: Chicken + Rice\nDinner: Fish + Veggies");

  function addDietTemplate() {
    const meals = dietMealsText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [time, ...rest] = line.split(":");
        return { time: (time || "Meal").trim(), items: rest.join(":").trim() || "—" };
      });

    const newItem: DietTemplate = {
      id: `d${Date.now()}`,
      name: dietName || "New Template",
      goal: dietGoal,
      calories: Number(dietCalories) || 0,
      meals,
    };

    setDietTemplates((p) => [newItem, ...p]);
    setDietName("");
    setDietCalories(2000);
  }

  // ---------- Exercise form ----------
  const [exName, setExName] = useState("");
  const [exMuscle, setExMuscle] = useState<Exercise["muscle"]>("Full Body");
  const [exEquip, setExEquip] = useState<Exercise["equipment"]>("Bodyweight");

  function addExercise() {
    const newItem: Exercise = {
      id: `e${Date.now()}`,
      name: exName || "New Exercise",
      muscle: exMuscle,
      equipment: exEquip,
    };
    setExercises((p) => [newItem, ...p]);
    setExName("");
  }

  // ---------- Weekly tracking ----------
  const [week, setWeek] = useState("2026-W10");
  const [workoutsDone, setWorkoutsDone] = useState(3);
  const [waterAvg, setWaterAvg] = useState(2.0);
  const [stepsAvg, setStepsAvg] = useState(6000);

  function addWeeklyLog() {
    const newItem: WeeklyLog = {
      id: `w${Date.now()}`,
      memberId: selectedMemberId,
      week,
      workoutsDone,
      waterLitersAvg: waterAvg,
      stepsAvg,
    };
    setWeeklyLogs((p) => [newItem, ...p]);
  }

  // ---------- Progress ----------
  const [progDate, setProgDate] = useState("2026-03-03");
  const [weightKg, setWeightKg] = useState(80);
  const [fatPct, setFatPct] = useState<number | "">(22);
  const [progNote, setProgNote] = useState("");

  function addProgress() {
    const newItem: ProgressEntry = {
      id: `p${Date.now()}`,
      memberId: selectedMemberId,
      date: progDate,
      weightKg: Number(weightKg) || 0,
      bodyFatPct: fatPct === "" ? undefined : Number(fatPct),
      notes: progNote || undefined,
    };
    setProgress((p) => [newItem, ...p]);
    setProgNote("");
  }

  // ---------- Notes ----------
  const [noteDate, setNoteDate] = useState("2026-03-03");
  const [noteText, setNoteText] = useState("");

  function addNote() {
    const newItem: NutritionNote = {
      id: `n${Date.now()}`,
      memberId: selectedMemberId,
      date: noteDate,
      note: noteText || "—",
    };
    setNotes((p) => [newItem, ...p]);
    setNoteText("");
  }

  function assignDiet() {
    const diet = dietTemplates.find((d) => d.id === selectedDietId);
    setAssignMsg(
      `✅ Assigned "${diet?.name ?? "Template"}" to ${selectedMember?.name ?? "Member"}`
    );
  }

  // filtered views
  const memberWeekly = weeklyLogs.filter((w) => w.memberId === selectedMemberId);
  const memberProgress = progress.filter((p) => p.memberId === selectedMemberId);
  const memberNotes = notes.filter((n) => n.memberId === selectedMemberId);

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Diet & Workout</h1>
          <p className="text-sm text-gray-500">
            Templates, exercise library, assignments, tracking & progress (frontend)
          </p>
        </div>

        {/* Tabs line */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/60 p-2">
          <div className="flex items-center gap-2 overflow-x-auto">
            {tabs.map((t) => {
              const isActive = active === t;
              return (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={[
                    "whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-300/40"
                      : "text-gray-600 hover:bg-gray-100",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Member selector (global) */}
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/70 p-5 md:p-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm text-gray-500">Selected Member</div>
          <div className="font-semibold">{selectedMember?.name} • {selectedMember?.phone}</div>
        </div>

        <select
          className="bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedMemberId}
          onChange={(e) => setSelectedMemberId(e.target.value)}
        >
          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} ({m.phone})
            </option>
          ))}
        </select>
      </div>

      {/* CONTENT */}
      {active === "Diet Templates" && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Create Diet Template</h2>
            <p className="text-sm text-gray-500 mt-1">Quick template builder (demo)</p>

            <div className="mt-5 space-y-3">
              <input
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Template name (e.g. Fat Loss Basic)"
                value={dietName}
                onChange={(e) => setDietName(e.target.value)}
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  value={dietGoal}
                  onChange={(e) => setDietGoal(e.target.value as DietTemplate["goal"])}
                >
                  <option>Fat Loss</option>
                  <option>Muscle Gain</option>
                  <option>Maintenance</option>
                </select>

                <input
                  type="number"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Calories"
                  value={dietCalories}
                  onChange={(e) => setDietCalories(Number(e.target.value))}
                />
              </div>

              <textarea
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
                value={dietMealsText}
                onChange={(e) => setDietMealsText(e.target.value)}
              />

              <PrimaryBtn onClick={addDietTemplate}>Save Template</PrimaryBtn>
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            {dietTemplates.map((d) => (
              <div key={d.id} className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{d.name}</div>
                    <div className="text-sm text-gray-500">
                      Goal: {d.goal} • {d.calories} kcal/day
                    </div>
                  </div>
                  <SoftBtn onClick={() => setSelectedDietId(d.id)}>Select</SoftBtn>
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {d.meals.map((m, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                      <div className="text-sm font-semibold">{m.time}</div>
                      <div className="text-sm text-gray-600 mt-1">{m.items}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === "Exercise Library" && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Add Exercise</h2>
            <p className="text-sm text-gray-500 mt-1">Library builder (demo)</p>

            <div className="mt-5 space-y-3">
              <input
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Exercise name (e.g. Bench Press)"
                value={exName}
                onChange={(e) => setExName(e.target.value)}
              />

              <select
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                value={exMuscle}
                onChange={(e) => setExMuscle(e.target.value as Exercise["muscle"])}
              >
                <option>Chest</option><option>Back</option><option>Legs</option>
                <option>Shoulders</option><option>Arms</option><option>Core</option>
                <option>Full Body</option>
              </select>

              <select
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                value={exEquip}
                onChange={(e) => setExEquip(e.target.value as Exercise["equipment"])}
              >
                <option>Bodyweight</option><option>Dumbbell</option><option>Barbell</option>
                <option>Machine</option><option>Cable</option><option>Kettlebell</option>
              </select>

              <PrimaryBtn onClick={addExercise}>Add to Library</PrimaryBtn>
            </div>
          </Card>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Exercises</h2>
              <div className="text-sm text-gray-500">{exercises.length} items</div>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {exercises.map((e) => (
                <div key={e.id} className="bg-gray-50 rounded-2xl p-5">
                  <div className="font-semibold">{e.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {e.muscle} • {e.equipment}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {active === "Assign to Members" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Assign Diet Template</h2>
            <p className="text-sm text-gray-500 mt-1">Select and assign (demo)</p>

            <div className="mt-5 space-y-3">
              <select
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedDietId}
                onChange={(e) => setSelectedDietId(e.target.value)}
              >
                {dietTemplates.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.goal})
                  </option>
                ))}
              </select>

              <PrimaryBtn onClick={assignDiet}>Assign to {selectedMember?.name}</PrimaryBtn>

              <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-700">
                {assignMsg || "No assignment yet"}
              </div>
            </div>
          </Card>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
            <h2 className="text-xl font-semibold">Selected Template Preview</h2>
            <div className="mt-4">
              {dietTemplates
                .filter((d) => d.id === selectedDietId)
                .map((d) => (
                  <div key={d.id} className="space-y-3">
                    <div className="text-sm text-gray-500">
                      {d.goal} • {d.calories} kcal/day
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {d.meals.map((m, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                          <div className="font-semibold text-sm">{m.time}</div>
                          <div className="text-sm text-gray-600 mt-1">{m.items}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {active === "Weekly Tracking" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Weekly Log</h2>
            <p className="text-sm text-gray-500 mt-1">Track workouts, water, steps</p>

            <div className="mt-5 space-y-3">
              <input
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Week (e.g. 2026-W10)"
                value={week}
                onChange={(e) => setWeek(e.target.value)}
              />

              <div className="grid sm:grid-cols-3 gap-3">
                <input
                  type="number"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Workouts"
                  value={workoutsDone}
                  onChange={(e) => setWorkoutsDone(Number(e.target.value))}
                />
                <input
                  type="number"
                  step="0.1"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Water avg"
                  value={waterAvg}
                  onChange={(e) => setWaterAvg(Number(e.target.value))}
                />
                <input
                  type="number"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Steps avg"
                  value={stepsAvg}
                  onChange={(e) => setStepsAvg(Number(e.target.value))}
                />
              </div>

              <PrimaryBtn onClick={addWeeklyLog}>Add Weekly Log</PrimaryBtn>
            </div>
          </Card>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Logs • {selectedMember?.name}</h2>
              <div className="text-sm text-gray-500">{memberWeekly.length}</div>
            </div>

            <div className="mt-5 space-y-3">
              {memberWeekly.map((w) => (
                <div key={w.id} className="bg-gray-50 rounded-2xl p-5">
                  <div className="font-semibold">{w.week}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Workouts: {w.workoutsDone}/7 • Water: {w.waterLitersAvg}L • Steps: {w.stepsAvg}
                  </div>
                </div>
              ))}

              {!memberWeekly.length && (
                <div className="text-sm text-gray-500">No weekly logs yet</div>
              )}
            </div>
          </div>
        </div>
      )}

      {active === "Progress" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Progress Entry</h2>
            <p className="text-sm text-gray-500 mt-1">Weight, body fat, notes</p>

            <div className="mt-5 space-y-3">
              <input
                type="date"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                value={progDate}
                onChange={(e) => setProgDate(e.target.value)}
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="number"
                  step="0.1"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Weight (kg)"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                />
                <input
                  type="number"
                  step="0.1"
                  className="bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Body fat % (optional)"
                  value={fatPct}
                  onChange={(e) => setFatPct(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </div>

              <textarea
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 min-h-[90px]"
                placeholder="Notes (optional)"
                value={progNote}
                onChange={(e) => setProgNote(e.target.value)}
              />

              <PrimaryBtn onClick={addProgress}>Save Progress</PrimaryBtn>
            </div>
          </Card>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">History • {selectedMember?.name}</h2>
              <div className="text-sm text-gray-500">{memberProgress.length}</div>
            </div>

            <div className="mt-5 space-y-3">
              {memberProgress.map((p) => (
                <div key={p.id} className="bg-gray-50 rounded-2xl p-5">
                  <div className="font-semibold">{p.date}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Weight: {p.weightKg}kg {p.bodyFatPct != null ? `• Body fat: ${p.bodyFatPct}%` : ""}
                  </div>
                  {p.notes && <div className="text-sm text-gray-600 mt-2">{p.notes}</div>}
                </div>
              ))}
              {!memberProgress.length && (
                <div className="text-sm text-gray-500">No progress entries yet</div>
              )}
            </div>
          </div>
        </div>
      )}

      {active === "Nutrition Notes" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Add Nutrition Note</h2>
            <p className="text-sm text-gray-500 mt-1">Coach notes & reminders</p>

            <div className="mt-5 space-y-3">
              <input
                type="date"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                value={noteDate}
                onChange={(e) => setNoteDate(e.target.value)}
              />

              <textarea
                className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
                placeholder="Write note..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />

              <PrimaryBtn onClick={addNote}>Save Note</PrimaryBtn>
            </div>
          </Card>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Notes • {selectedMember?.name}</h2>
              <div className="text-sm text-gray-500">{memberNotes.length}</div>
            </div>

            <div className="mt-5 space-y-3">
              {memberNotes.map((n) => (
                <div key={n.id} className="bg-gray-50 rounded-2xl p-5">
                  <div className="font-semibold">{n.date}</div>
                  <div className="text-sm text-gray-700 mt-2">{n.note}</div>
                </div>
              ))}
              {!memberNotes.length && (
                <div className="text-sm text-gray-500">No notes yet</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}