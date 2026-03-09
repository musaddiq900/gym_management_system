"use client";

import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiSearch,
  FiUser,
  FiStar,
  FiClock,
  FiX,
} from "react-icons/fi";

type Trainer = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  availability: string;
  rating: number;
  clients: number;
  requested: boolean;
};

const initialTrainers: Trainer[] = [
  {
    id: 1,
    name: "Coach Ali",
    specialty: "Strength & Conditioning",
    experience: "5 Years",
    availability: "Mon - Fri",
    rating: 4.8,
    clients: 42,
    requested: false,
  },
  {
    id: 2,
    name: "Coach Sarah",
    specialty: "Weight Loss & Cardio",
    experience: "4 Years",
    availability: "Tue - Sat",
    rating: 4.7,
    clients: 35,
    requested: false,
  },
  {
    id: 3,
    name: "Coach Areeba",
    specialty: "Yoga & Flexibility",
    experience: "3 Years",
    availability: "Mon - Thu",
    rating: 4.9,
    clients: 28,
    requested: false,
  },
];

type FilterType = "All" | "Strength & Conditioning" | "Weight Loss & Cardio" | "Yoga & Flexibility";

export default function TrainerPage() {
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);
  const [selectedTrainerId, setSelectedTrainerId] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");
  const [message, setMessage] = useState("");

  const filteredTrainers = useMemo(() => {
    return trainers.filter((trainer) => {
      const matchesSearch =
        trainer.name.toLowerCase().includes(search.toLowerCase()) ||
        trainer.specialty.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ? true : trainer.specialty === filter;

      return matchesSearch && matchesFilter;
    });
  }, [trainers, search, filter]);

  const selectedTrainer = useMemo(() => {
    return trainers.find((trainer) => trainer.id === selectedTrainerId) || null;
  }, [trainers, selectedTrainerId]);

  const handleSelectTrainer = (id: number) => {
    setSelectedTrainerId(id);
    setMessage("");
  };

  const handleRequestTrainer = () => {
    if (!selectedTrainer) return;

    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === selectedTrainer.id
          ? { ...trainer, requested: true }
          : trainer
      )
    );

    setMessage(`${selectedTrainer.name} requested successfully.`);
  };

  const handleClearSelection = () => {
    setSelectedTrainerId(0);
    setMessage("Selection cleared.");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-rose-500 to-pink-600 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Trainer</p>
        <h1 className="text-3xl font-bold mt-2">Choose Your Personal Trainer</h1>
        <p className="text-white/80 mt-3">
          View trainer profiles and request the one that best matches your goal.
        </p>
      </section>

      {/* Success Message */}
      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      {/* Controls */}
      <section className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search trainer or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Strength & Conditioning",
              "Weight Loss & Cardio",
              "Yoga & Flexibility",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item as FilterType)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  filter === item
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Trainers List */}
        <div className="xl:col-span-2 space-y-5">
          {filteredTrainers.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 shadow-md border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
                <FiUser size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-4">
                No trainers found
              </h3>
              <p className="text-slate-500 mt-2">
                Try another search or change the filter.
              </p>
            </div>
          ) : (
            filteredTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className={`rounded-3xl p-6 shadow-md border transition ${
                  selectedTrainerId === trainer.id
                    ? "bg-pink-50 border-pink-300"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {trainer.name}
                      </h2>

                      {trainer.requested && (
                        <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                          Requested
                        </span>
                      )}
                    </div>

                    <p className="text-slate-500 mt-2">{trainer.specialty}</p>

                    <p className="text-sm text-slate-400 mt-1">
                      Experience: {trainer.experience} • Availability: {trainer.availability}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <div className="rounded-2xl bg-[#f8fafc] px-4 py-2 text-sm text-slate-700 flex items-center gap-2">
                        <FiStar className="text-yellow-500" />
                        {trainer.rating} Rating
                      </div>

                      <div className="rounded-2xl bg-[#f8fafc] px-4 py-2 text-sm text-slate-700 flex items-center gap-2">
                        <FiUser />
                        {trainer.clients} Clients
                      </div>

                      <div className="rounded-2xl bg-[#f8fafc] px-4 py-2 text-sm text-slate-700 flex items-center gap-2">
                        <FiClock />
                        {trainer.availability}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectTrainer(trainer.id)}
                    className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition"
                  >
                    {selectedTrainerId === trainer.id ? "Selected" : "Select Trainer"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Selected Trainer</h3>

            {selectedTrainer ? (
              <>
                <div className="mt-5 rounded-2xl bg-[#f8fafc] p-4">
                  <p className="text-sm text-slate-500">Trainer Name</p>
                  <h4 className="text-lg font-bold text-slate-800 mt-1">
                    {selectedTrainer.name}
                  </h4>
                </div>

                <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4">
                  <p className="text-sm text-slate-500">Specialty</p>
                  <p className="font-semibold text-slate-800 mt-1">
                    {selectedTrainer.specialty}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4">
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-semibold text-slate-800 mt-1">
                    {selectedTrainer.experience}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleRequestTrainer}
                    disabled={selectedTrainer.requested}
                    className={`flex-1 rounded-2xl px-5 py-3 font-semibold transition ${
                      selectedTrainer.requested
                        ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                        : "bg-pink-500 text-white hover:bg-pink-600"
                    }`}
                  >
                    {selectedTrainer.requested ? "Already Requested" : "Request Trainer"}
                  </button>

                  <button
                    onClick={handleClearSelection}
                    className="rounded-2xl bg-slate-100 text-slate-700 px-4 py-3 font-semibold hover:bg-slate-200 transition"
                  >
                    <FiX />
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-5 rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                No trainer selected yet.
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Trainer Notes</h3>
            <div className="mt-4 rounded-2xl bg-pink-50 p-4 text-sm text-slate-700">
              Best for users who want structured routines, personal guidance,
              and better consistency in workouts and lifestyle habits.
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-slate-800">Quick Tips</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                Choose a trainer based on your actual fitness goal.
              </div>
              <div className="rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
                A trainer request can later connect with backend approval flow.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}