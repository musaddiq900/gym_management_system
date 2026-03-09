"use client";

import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiTarget,
  FiHeart,
} from "react-icons/fi";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  goal: string;
  emergency: string;
  address: string;
  height: string;
  weight: string;
  healthNotes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "Ayesha Khan",
  email: "ayesha@example.com",
  phone: "+92 300 1234567",
  age: "24",
  gender: "Female",
  goal: "Weight Loss",
  emergency: "+92 311 7654321",
  address: "Abbottabad, Pakistan",
  height: "165",
  weight: "62",
  healthNotes: "",
};

export default function UserProfilePage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [saved, setSaved] = useState(false);

  const handleChange = (
    key: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));

    setSaved(false);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    else if (Number(form.age) <= 0) newErrors.age = "Enter a valid age";

    if (!form.gender.trim()) newErrors.gender = "Gender is required";
    if (!form.goal.trim()) newErrors.goal = "Goal is required";
    if (!form.emergency.trim())
      newErrors.emergency = "Emergency contact is required";
    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.height.trim()) newErrors.height = "Height is required";
    else if (Number(form.height) <= 0)
      newErrors.height = "Enter a valid height";

    if (!form.weight.trim()) newErrors.weight = "Weight is required";
    else if (Number(form.weight) <= 0)
      newErrors.weight = "Enter a valid weight";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    const isValid = validateForm();
    if (!isValid) {
      setSaved(false);
      return;
    }

    setSaved(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSaved(false);
  };

  const completionPercentage = useMemo(() => {
    const fields: (keyof FormData)[] = [
      "fullName",
      "email",
      "phone",
      "age",
      "gender",
      "goal",
      "emergency",
      "address",
      "height",
      "weight",
      "healthNotes",
    ];

    const filled = fields.filter((field) => form[field].trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
  }, [form]);

  const bmi = useMemo(() => {
    const heightInMeters = Number(form.height) / 100;
    const weight = Number(form.weight);

    if (!heightInMeters || !weight) return "0.0";

    const value = weight / (heightInMeters * heightInMeters);
    return value.toFixed(1);
  }, [form.height, form.weight]);

  const bmiStatus = useMemo(() => {
    const value = Number(bmi);

    if (!value) return "Not Available";
    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";
    return "Obese";
  }, [bmi]);

  const InputError = ({ message }: { message?: string }) =>
    message ? (
      <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
        <FiAlertCircle size={14} />
        {message}
      </p>
    ) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">User Profile</p>
        <h1 className="text-3xl font-bold mt-2">
          Complete Your Personal Information
        </h1>
        <p className="text-white/80 mt-3 max-w-2xl">
          Add your fitness details, contact information, and personal goals for
          a better gym experience.
        </p>
      </section>

      {saved && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          Profile saved successfully.
        </div>
      )}

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Form */}
        <div className="xl:col-span-2 rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-bold text-slate-800">Profile Form</h2>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-2xl bg-slate-100 text-slate-700 px-5 py-3 font-semibold hover:bg-slate-200 transition"
              >
                Reset
              </button>
              <button
                onClick={handleSave}
                className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition"
              >
                Save Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Full Name
              </label>
              <div className="relative mt-2">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
              </div>
              <InputError message={errors.fullName} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Email</label>
              <div className="relative mt-2">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <InputError message={errors.email} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Phone</label>
              <div className="relative mt-2">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <InputError message={errors.phone} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Age</label>
              <input
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                value={form.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
              <InputError message={errors.age} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Gender</label>
              <select
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              <InputError message={errors.gender} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Fitness Goal
              </label>
              <div className="relative mt-2">
                <FiTarget className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                  value={form.goal}
                  onChange={(e) => handleChange("goal", e.target.value)}
                >
                  <option value="">Select Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Fitness Maintenance</option>
                  <option>Strength Building</option>
                </select>
              </div>
              <InputError message={errors.goal} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Emergency Contact
              </label>
              <input
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                value={form.emergency}
                onChange={(e) => handleChange("emergency", e.target.value)}
              />
              <InputError message={errors.emergency} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Address</label>
              <div className="relative mt-2">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <InputError message={errors.address} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Height (cm)
              </label>
              <input
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                value={form.height}
                onChange={(e) => handleChange("height", e.target.value)}
              />
              <InputError message={errors.height} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Weight (kg)
              </label>
              <input
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                value={form.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
              />
              <InputError message={errors.weight} />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-600">
                Health Notes
              </label>
              <textarea
                rows={5}
                className="w-full mt-2 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                value={form.healthNotes}
                onChange={(e) => handleChange("healthNotes", e.target.value)}
                placeholder="Allergies, medical notes, injuries, or anything important..."
              />
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">
              Profile Completion
            </h3>
            <div className="mt-5">
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>Completed</span>
                <span>{completionPercentage}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-pink-50 p-4 text-sm text-slate-700">
              A more complete profile helps the gym system suggest better
              workouts, diet plans, and trainer support.
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <FiHeart />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Health Summary</h3>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Current Goal</p>
                <p className="font-semibold text-slate-800 mt-1">{form.goal || "-"}</p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">BMI</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {bmi} ({bmiStatus})
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="text-sm text-slate-500">Emergency Contact</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {form.emergency || "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Health Notes</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                Add allergies, injuries, or special notes for future trainer and
                diet guidance.
              </div>
              <div className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                Choose your workout intensity based on your current fitness
                level.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}