"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiCreditCard,
  FiDownload,
  FiStar,
  FiZap,
} from "react-icons/fi";

type PlanKey = "basic" | "premium" | "premiumPlus";

type Plan = {
  id: PlanKey;
  name: string;
  price: string;
  renewalDate: string;
  status: "Active" | "Inactive";
  classesAccess: string;
  trainerSupport: string;
  dietGuidance: string;
  usage: number;
  perks: string[];
};

export default function MembershipPage() {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: "basic",
      name: "Basic",
      price: "Rs. 3,500 / month",
      renewalDate: "28 April 2026",
      status: "Inactive",
      classesAccess: "Limited",
      trainerSupport: "Not Included",
      dietGuidance: "Basic Tips",
      usage: 35,
      perks: [
        "Access to standard gym timings",
        "Basic workout guidance",
        "Limited class booking access",
        "Entry-level support",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rs. 5,000 / month",
      renewalDate: "28 April 2026",
      status: "Inactive",
      classesAccess: "Extended",
      trainerSupport: "Included",
      dietGuidance: "Included",
      usage: 60,
      perks: [
        "More class access",
        "Trainer support included",
        "Diet guidance included",
        "Priority booking support",
      ],
    },
    {
      id: "premiumPlus",
      name: "Premium Plus",
      price: "Rs. 6,500 / month",
      renewalDate: "28 April 2026",
      status: "Active",
      classesAccess: "Unlimited",
      trainerSupport: "Included",
      dietGuidance: "Included",
      usage: 80,
      perks: [
        "Access to premium workout sessions",
        "Priority trainer booking",
        "Personalized diet recommendations",
        "Class reservation support",
      ],
    },
  ]);

  const [message, setMessage] = useState("");
  const [downloading, setDownloading] = useState(false);

  const activePlan = useMemo(() => {
    return plans.find((plan) => plan.status === "Active") || plans[0];
  }, [plans]);

  const handleRenewMembership = () => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === activePlan.id
          ? {
              ...plan,
              renewalDate: "28 May 2026",
              usage: Math.min(plan.usage + 5, 100),
            }
          : plan
      )
    );
    setMessage(`${activePlan.name} renewed successfully.`);
  };

  const handleDownloadInvoice = () => {
    setDownloading(true);
    setMessage("");

    setTimeout(() => {
      setDownloading(false);
      setMessage(`Invoice for ${activePlan.name} is ready to download.`);
    }, 1200);
  };

  const handleSwitchPlan = (planId: PlanKey) => {
    setPlans((prev) =>
      prev.map((plan) => ({
        ...plan,
        status: plan.id === planId ? "Active" : "Inactive",
      }))
    );

    const selected = plans.find((plan) => plan.id === planId);
    setMessage(`${selected?.name || "Selected"} plan activated successfully.`);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Membership</p>
        <h1 className="text-3xl font-bold mt-2">Your Current Plan</h1>
        <p className="text-white/80 mt-3">
          View plan details, renewal date, billing status, and membership benefits.
        </p>
      </section>

      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Plan */}
        <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-slate-500">Active Plan</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {activePlan.name}
              </h2>
              <p className="text-slate-500 mt-2">
                Renewal Date: {activePlan.renewalDate}
              </p>
              <p className="text-slate-500 mt-1">{activePlan.price}</p>
            </div>

            <span className="rounded-full bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold">
              {activePlan.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Classes Access</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-2">
                {activePlan.classesAccess}
              </h3>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Trainer Support</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-2">
                {activePlan.trainerSupport}
              </h3>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Diet Guidance</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-2">
                {activePlan.dietGuidance}
              </h3>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Plan Usage</span>
              <span>{activePlan.usage}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${activePlan.usage}%` }}
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={handleRenewMembership}
              className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition"
            >
              Renew Membership
            </button>

            <button
              onClick={handleDownloadInvoice}
              className="rounded-2xl bg-slate-100 text-slate-700 px-5 py-3 font-medium hover:bg-slate-200 transition flex items-center gap-2"
            >
              <FiDownload />
              {downloading ? "Preparing..." : "Download Invoice"}
            </button>
          </div>
        </div>

        {/* Perks */}
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Plan Perks</h3>

          <div className="mt-5 space-y-3">
            {activePlan.perks.map((perk) => (
              <div
                key={perk}
                className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-700"
              >
                {perk}
              </div>
            ))}
          </div>

          <Link
            href="/user/classes"
            className="inline-block mt-6 rounded-2xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition"
          >
            Explore Classes
          </Link>
        </div>
      </section>

      {/* Plan Options */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm text-slate-500">Available Plans</p>
            <h2 className="text-2xl font-bold text-slate-800 mt-1">
              Upgrade or Switch Plan
            </h2>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
            <FiCreditCard size={22} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl border p-5 transition-all ${
                plan.status === "Active"
                  ? "border-blue-300 bg-blue-50"
                  : "border-gray-100 bg-[#fbfcfe]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 mt-2">{plan.price}</p>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-700">
                  {plan.id === "basic" ? (
                    <FiZap />
                  ) : plan.id === "premium" ? (
                    <FiStar />
                  ) : (
                    <FiCheckCircle />
                  )}
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Classes: {plan.classesAccess}</p>
                <p>Trainer: {plan.trainerSupport}</p>
                <p>Diet: {plan.dietGuidance}</p>
              </div>

              <button
                onClick={() => handleSwitchPlan(plan.id)}
                disabled={plan.status === "Active"}
                className={`w-full mt-6 rounded-2xl px-4 py-3 font-semibold transition ${
                  plan.status === "Active"
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.status === "Active" ? "Current Plan" : "Activate Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}