"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Branch = {
  id: string;
  name: string;
  city: string;
  members: number;
};

export default function SelectBranchPage() {
  const router = useRouter();

  const branches: Branch[] = [
    { id: "b1", name: "Main Branch", city: "Abbottabad", members: 220 },
    { id: "b2", name: "City Branch", city: "Mansehra", members: 140 },
    { id: "b3", name: "Ladies Branch", city: "Abbottabad", members: 95 },
  ];

  const [mode, setMode] = useState<"all" | "single">("all");
  const [selectedId, setSelectedId] = useState(branches[0]?.id ?? "");

  const selectedBranch = useMemo(
    () => branches.find((b) => b.id === selectedId),
    [selectedId, branches]
  );

  function continueNext() {
    // 1) Save branch scope
    const payload =
      mode === "all"
        ? { scope: "all", branchId: null }
        : { scope: "single", branchId: selectedId };

    localStorage.setItem("gym_scope", JSON.stringify(payload));

    // 2) Decide route by first-time setup flag
    const setupDone = localStorage.getItem("gym_setup_complete") === "true";

    if (!setupDone) {
      router.push("/gym-admin/setup");
      return;
    }

    router.push("/gym-admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-red-50 px-4 py-14">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400" />
              Gym Admin
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              Choose your branch view
            </h1>

            <p className="mt-2 text-gray-600 max-w-2xl">
              Pick how you want to manage data. First time login pe setup wizard open hoga.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/auth/login")}
            className="shrink-0 rounded-2xl px-4 py-2.5 text-sm font-semibold bg-white shadow-md hover:shadow-lg transition"
          >
            ← Back
          </button>
        </div>

        {/* Main Card */}
        <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-lg font-bold text-gray-900">View mode</h2>
          <p className="text-sm text-gray-600 mt-1">
            Choose All branches for combined insights, or Single branch for focused operations.
          </p>

          {/* View Mode Cards */}
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
              {/* All branches */}
              <button
                type="button"
                onClick={() => setMode("all")}
                className={`rounded-3xl p-6 text-left transition-all
                  ${mode === "all"
                    ? "bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-xl"
                    : "bg-white shadow-md hover:shadow-xl"}`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${mode === "all" ? "bg-white/20" : "bg-red-100"}`}>
                    <span className="text-xl">🏢</span>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">All branches</div>
                    <div className={`text-sm mt-1 leading-relaxed ${mode === "all" ? "text-white/80" : "text-gray-500"}`}>
                      Combined dashboard totals, revenue & attendance across all branches.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mode === "all" ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"}`}>
                        Best for owners
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mode === "all" ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"}`}>
                        Combined insights
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Single branch */}
              <button
                type="button"
                onClick={() => setMode("single")}
                className={`rounded-3xl p-6 text-left transition-all
                  ${mode === "single"
                    ? "bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-xl"
                    : "bg-white shadow-md hover:shadow-xl"}`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${mode === "single" ? "bg-white/20" : "bg-yellow-100"}`}>
                    <span className="text-xl">📍</span>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">Single branch</div>
                    <div className={`text-sm mt-1 leading-relaxed ${mode === "single" ? "text-white/80" : "text-gray-500"}`}>
                      Focused view for one branch: members, staff, payments & attendance.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mode === "single" ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"}`}>
                        Branch ops
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mode === "single" ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"}`}>
                        Clean focus
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Branch selection */}
          {mode === "single" && (
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">Select branch</h3>
                <span className="text-xs text-gray-500">{branches.length} branches</span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                {branches.map((b) => {
                  const active = b.id === selectedId;

                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedId(b.id)}
                      className={`rounded-3xl p-5 text-left transition-all
                        ${active
                          ? "bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-xl"
                          : "bg-white shadow-md hover:shadow-xl"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-base font-semibold">{b.name}</div>
                          <div className={`text-sm mt-1 ${active ? "text-white/80" : "text-gray-500"}`}>
                            {b.city}
                          </div>

                          <div className={`mt-3 inline-flex px-3 py-1 rounded-full text-xs font-semibold
                            ${active ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"}`}>
                            {b.members} members
                          </div>
                        </div>

                        <div className={`h-10 w-10 rounded-2xl grid place-items-center ${active ? "bg-white/20" : "bg-gray-100"}`}>
                          <span className="text-lg">{active ? "✓" : "→"}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA bottom */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
            <button
              type="button"
              onClick={continueNext}
              className="w-[420px] h-[56px] rounded-2xl text-white text-lg font-semibold
                bg-gradient-to-r from-red-500 to-yellow-400 hover:opacity-90 transition
                flex items-center justify-center"
            >
              Continue → Next
            </button>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            Selected:{" "}
            <span className="font-semibold text-gray-900">
              {mode === "all" ? "All branches" : `Single branch (${selectedBranch?.name ?? ""})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}