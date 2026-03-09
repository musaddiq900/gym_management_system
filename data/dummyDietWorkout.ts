export type DietTemplate = {
  id: string;
  name: string;
  goal: "Fat Loss" | "Muscle Gain" | "Maintenance";
  calories: number;
  meals: { time: string; items: string }[];
};

export type Exercise = {
  id: string;
  name: string;
  muscle: "Chest" | "Back" | "Legs" | "Shoulders" | "Arms" | "Core" | "Full Body";
  equipment: "Bodyweight" | "Dumbbell" | "Barbell" | "Machine" | "Cable" | "Kettlebell";
};

export type Member = {
  id: string;
  name: string;
  phone: string;
};

export const members: Member[] = [
  { id: "m1", name: "Ali Khan", phone: "0300-1234567" },
  { id: "m2", name: "Ayesha", phone: "0312-9998887" },
  { id: "m3", name: "Usman", phone: "0333-1112223" },
];

export const dietTemplatesSeed: DietTemplate[] = [
  {
    id: "d1",
    name: "Fat Loss Basic",
    goal: "Fat Loss",
    calories: 1800,
    meals: [
      { time: "Breakfast", items: "Oats + 2 Eggs + Green tea" },
      { time: "Lunch", items: "Chicken 150g + Rice 1 cup + Salad" },
      { time: "Dinner", items: "Fish 150g + Veggies" },
    ],
  },
  {
    id: "d2",
    name: "Muscle Gain Starter",
    goal: "Muscle Gain",
    calories: 2600,
    meals: [
      { time: "Breakfast", items: "Eggs 3 + Toast + Milk" },
      { time: "Lunch", items: "Beef/Chicken 200g + Rice + Yogurt" },
      { time: "Snack", items: "Banana + Peanut butter" },
      { time: "Dinner", items: "Chicken 200g + Potatoes + Salad" },
    ],
  },
];

export const exercisesSeed: Exercise[] = [
  { id: "e1", name: "Push Ups", muscle: "Chest", equipment: "Bodyweight" },
  { id: "e2", name: "Squats", muscle: "Legs", equipment: "Bodyweight" },
  { id: "e3", name: "Lat Pulldown", muscle: "Back", equipment: "Machine" },
  { id: "e4", name: "Dumbbell Shoulder Press", muscle: "Shoulders", equipment: "Dumbbell" },
];

export type WeeklyLog = {
  id: string;
  memberId: string;
  week: string; // e.g. 2026-W10
  workoutsDone: number; // 0-7
  waterLitersAvg: number;
  stepsAvg: number;
};

export const weeklyLogsSeed: WeeklyLog[] = [
  { id: "w1", memberId: "m1", week: "2026-W10", workoutsDone: 4, waterLitersAvg: 2.5, stepsAvg: 7000 },
  { id: "w2", memberId: "m2", week: "2026-W10", workoutsDone: 3, waterLitersAvg: 2.0, stepsAvg: 6000 },
];

export type ProgressEntry = {
  id: string;
  memberId: string;
  date: string; // YYYY-MM-DD
  weightKg: number;
  bodyFatPct?: number;
  notes?: string;
};

export const progressSeed: ProgressEntry[] = [
  { id: "p1", memberId: "m1", date: "2026-02-15", weightKg: 82.5, bodyFatPct: 22.5 },
  { id: "p2", memberId: "m1", date: "2026-03-01", weightKg: 81.2, bodyFatPct: 21.9 },
];

export type NutritionNote = {
  id: string;
  memberId: string;
  date: string;
  note: string;
};

export const notesSeed: NutritionNote[] = [
  { id: "n1", memberId: "m1", date: "2026-03-03", note: "Avoid sugary drinks. Add 1 fruit/day." },
];