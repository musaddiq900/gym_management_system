"use client";


import { useMemo, useState } from "react";
import Link from "next/link";


const stats = [
  {
    title: "Total Revenue",
    value: "$124,500",
    sub: "+$12,400 this month",
    badge: "↗ 12.5%",
    badgeClass: "bg-green-100 text-green-600",
    iconWrap: "bg-orange-100 text-orange-500",
    icon: "💰",
  },
  {
    title: "Active Gyms",
    value: "48",
    extra: "/ 52 Total",
    sub: "4 Inactive accounts",
    badge: "+ 3 New",
    badgeClass: "bg-green-100 text-green-600",
    iconWrap: "bg-blue-100 text-blue-600",
    icon: "🏢",
  },
  {
    title: "Lead Conversion",
    value: "24.8%",
    sub: "Avg. across all gyms",
    badge: "↘ 2.1%",
    badgeClass: "bg-red-100 text-red-500",
    iconWrap: "bg-purple-100 text-purple-500",
    icon: "🔻",
  },
  {
    title: "Total Members",
    value: "12,840",
    sub: "Active memberships",
    badge: "↗ 8.4%",
    badgeClass: "bg-green-100 text-green-600",
    iconWrap: "bg-green-100 text-green-600",
    icon: "👥",
  },
];

const chartData = [
  { month: "Jan", revenue: 45, expense: 30 },
  { month: "Feb", revenue: 52, expense: 32 },
  { month: "Mar", revenue: 48, expense: 31 },
  { month: "Apr", revenue: 61, expense: 35 },
  { month: "May", revenue: 58, expense: 34 },
  { month: "Jun", revenue: 72, expense: 38 },
  { month: "Jul", revenue: 85, expense: 41 },
  { month: "Aug", revenue: 82, expense: 40 },
  { month: "Sep", revenue: 95, expense: 44 },
  { month: "Oct", revenue: 105, expense: 48 },
  { month: "Nov", revenue: 115, expense: 50 },
  { month: "Dec", revenue: 124, expense: 53 },
];

const rows = [
  {
    gym: "Iron Pulse Fitness",
    branch: "NYC Branch",
    owner: "John Doe",
    plan: "Premium",
    planClass: "bg-purple-100 text-purple-600",
    members: "452",
    revenue: "$42,000",
    status: "Active",
    statusClass: "bg-green-100 text-green-600",
    icon: "🏋️",
  },
  {
    gym: "Cardio King",
    branch: "Brooklyn Branch",
    owner: "Sarah Smith",
    plan: "Basic",
    planClass: "bg-blue-100 text-blue-600",
    members: "128",
    revenue: "$12,500",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-700",
    icon: "💎",
  },
  {
    gym: "Muscle Factory",
    branch: "Queens Branch",
    owner: "Mike Ross",
    plan: "Premium",
    planClass: "bg-purple-100 text-purple-600",
    members: "890",
    revenue: "$89,200",
    status: "Active",
    statusClass: "bg-green-100 text-green-600",
    icon: "🏃",
  },
];

function StatCard({ item }: { item: (typeof stats)[0] }) {
  return (
    <div className="min-w-0 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${item.iconWrap}`}
        >
          {item.icon}
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${item.badgeClass}`}
        >
          {item.badge}
        </span>
      </div>

      <p className="text-sm font-medium text-gray-500">{item.title}</p>

      <div className="mt-3 flex items-end gap-2">
        <h3 className="text-3xl font-bold leading-none tracking-tight text-gray-900">
          {item.value}
        </h3>
        {item.extra && (
          <span className="pb-1 text-sm font-semibold text-gray-400">
            {item.extra}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-gray-400">{item.sub}</p>
    </div>
  );
}


function RevenueChart() {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "yearly">(
    "monthly"
  );

  const weeklyData = [
    { label: "Mon", revenue: 18, expense: 10 },
    { label: "Tue", revenue: 25, expense: 14 },
    { label: "Wed", revenue: 22, expense: 12 },
    { label: "Thu", revenue: 30, expense: 16 },
    { label: "Fri", revenue: 35, expense: 20 },
    { label: "Sat", revenue: 28, expense: 17 },
    { label: "Sun", revenue: 24, expense: 13 },
  ];

  const monthlyData = [
    { label: "Jan", revenue: 45, expense: 30 },
    { label: "Feb", revenue: 52, expense: 32 },
    { label: "Mar", revenue: 48, expense: 31 },
    { label: "Apr", revenue: 61, expense: 35 },
    { label: "May", revenue: 58, expense: 34 },
    { label: "Jun", revenue: 72, expense: 38 },
    { label: "Jul", revenue: 85, expense: 41 },
    { label: "Aug", revenue: 82, expense: 40 },
    { label: "Sep", revenue: 95, expense: 44 },
    { label: "Oct", revenue: 105, expense: 48 },
    { label: "Nov", revenue: 115, expense: 50 },
    { label: "Dec", revenue: 124, expense: 53 },
  ];

  const yearlyData = [
    { label: "2020", revenue: 55, expense: 28 },
    { label: "2021", revenue: 78, expense: 40 },
    { label: "2022", revenue: 96, expense: 48 },
    { label: "2023", revenue: 118, expense: 57 },
    { label: "2024", revenue: 140, expense: 65 },
  ];

  const chartData =
    activeTab === "weekly"
      ? weeklyData
      : activeTab === "yearly"
      ? yearlyData
      : monthlyData;

  const maxValue = Math.max(
    ...chartData.flatMap((item) => [item.revenue, item.expense])
  );

  const yAxisValues = Array.from({ length: 6 }, (_, i) =>
    Math.round((maxValue / 5) * (5 - i))
  );

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === "weekly" && "Weekly revenue vs expenses"}
            {activeTab === "monthly" && "Monthly revenue vs expenses"}
            {activeTab === "yearly" && "Yearly revenue vs expenses"}
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
              activeTab === "weekly"
                ? "bg-orange-500 text-white"
                : "text-gray-500"
            }`}
          >
            Weekly
          </button>

          <button
            onClick={() => setActiveTab("monthly")}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
              activeTab === "monthly"
                ? "bg-orange-500 text-white"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setActiveTab("yearly")}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
              activeTab === "yearly"
                ? "bg-orange-500 text-white"
                : "text-gray-500"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-orange-500" />
          <span className="text-sm text-gray-500">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-gray-200" />
          <span className="text-sm text-gray-500">Expenses</span>
        </div>
      </div>

      <div className="relative h-[280px]">
        <div className="absolute inset-0 flex flex-col justify-between">
          {yAxisValues.map((y, index) => (
            <div
              key={`${y}-${index}`}
              className="flex items-center gap-3 border-t border-gray-100"
            >
              <span className="w-10 -translate-y-2 text-right text-xs text-gray-400">
                {y}
              </span>
              <div className="flex-1" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-12 right-1 top-4 flex items-end justify-between gap-2">
          {chartData.map((item) => (
            <div
              key={item.label}
              className="flex h-full flex-1 items-end justify-center gap-1"
            >
              <div
                className="w-[38%] rounded-t-md bg-orange-500 transition-all duration-300"
                style={{ height: `${(item.revenue / maxValue) * 100}%` }}
              />
              <div
                className="w-[38%] rounded-t-md bg-gray-200 transition-all duration-300"
                style={{ height: `${(item.expense / maxValue) * 100}%` }}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-12 right-1 flex justify-between">
          {chartData.map((item) => (
            <span
              key={item.label}
              className="flex-1 text-center text-xs text-gray-400"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}



function GymStatus() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Gym Status</h3>
        <button className="text-lg text-gray-400">•••</button>
      </div>

      <div className="flex justify-center py-2">
        <div className="relative h-52 w-52 rounded-full bg-[conic-gradient(#ff7a1a_0_61%,#f5b76b_61%_92%,#dcdfe5_92%_100%)]">
          <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full bg-white">
            <div className="text-4xl font-bold text-gray-900">52</div>
            <div className="mt-1 text-sm text-gray-500">Total Gyms</div>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span>Active (Premium)</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">32</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="h-3 w-3 rounded-full bg-orange-300" />
            <span>Active (Basic)</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">16</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="h-3 w-3 rounded-full bg-gray-300" />
            <span>Inactive/Suspended</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">4</span>
        </div>
      </div>
    </div>
  );
}


 function TableSection() {
  const rows = [
    {
      icon: "🏋️",
      gym: "Iron Forge Gym",
      branch: "Blue Area Branch",
      owner: "Ali Khan",
      plan: "Premium",
      planClass: "bg-orange-100 text-orange-600",
      members: 420,
      revenue: "$12,400",
      status: "Active",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      icon: "💪",
      gym: "Power House",
      branch: "F-10 Branch",
      owner: "Usman Tariq",
      plan: "Basic",
      planClass: "bg-yellow-100 text-yellow-700",
      members: 280,
      revenue: "$8,200",
      status: "Active",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      icon: "🏃",
      gym: "Fit Zone",
      branch: "G-11 Branch",
      owner: "Ahmed Raza",
      plan: "Premium",
      planClass: "bg-orange-100 text-orange-600",
      members: 510,
      revenue: "$15,600",
      status: "Active",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      icon: "🏆",
      gym: "Champion Fitness",
      branch: "DHA Branch",
      owner: "Hassan Ali",
      plan: "Basic",
      planClass: "bg-yellow-100 text-yellow-700",
      members: 190,
      revenue: "$6,100",
      status: "Pending",
      statusClass: "bg-blue-100 text-blue-600",
    },
    {
      icon: "🔥",
      gym: "Body Blast",
      branch: "Bahria Branch",
      owner: "Bilal Ahmed",
      plan: "Premium",
      planClass: "bg-orange-100 text-orange-600",
      members: 610,
      revenue: "$18,900",
      status: "Active",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      icon: "⚡",
      gym: "Energy Hub",
      branch: "Satellite Town",
      owner: "Hamza Noor",
      plan: "Basic",
      planClass: "bg-yellow-100 text-yellow-700",
      members: 150,
      revenue: "$4,500",
      status: "Suspended",
      statusClass: "bg-red-100 text-red-600",
    },
    {
      icon: "🏋️‍♀️",
      gym: "Flex Studio",
      branch: "PWD Branch",
      owner: "Areeba Malik",
      plan: "Premium",
      planClass: "bg-orange-100 text-orange-600",
      members: 340,
      revenue: "$10,300",
      status: "Active",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      icon: "🚴",
      gym: "Motion Club",
      branch: "Rawalpindi Branch",
      owner: "Saad Rehman",
      plan: "Basic",
      planClass: "bg-yellow-100 text-yellow-700",
      members: 230,
      revenue: "$7,200",
      status: "Pending",
      statusClass: "bg-blue-100 text-blue-600",
    },
  ];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      `${row.gym} ${row.branch} ${row.owner} ${row.plan} ${row.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / itemsPerPage));

  const currentRows = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredRows.slice(start, start + itemsPerPage);
  }, [filteredRows, page]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Recent Gym Registrations</h3>
          <p className="mt-1 text-sm text-gray-500">
            Manage your gym partners and their subscription status
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex h-10 min-w-[220px] items-center rounded-xl border border-gray-200 px-4 text-gray-400">
            <span className="mr-3 text-sm">⌕</span>
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search gym..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          <button className="rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-500">
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Gym Name
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Owner
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Plan
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Members
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Revenue (YTD)
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
              <th className="pb-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-b-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                        {row.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{row.gym}</p>
                        <p className="text-xs text-gray-500">{row.branch}</p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-300" />
                      <span className="text-sm text-gray-700">{row.owner}</span>
                    </div>
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${row.planClass}`}
                    >
                      {row.plan}
                    </span>
                  </td>

                  <td className="py-4 text-sm text-gray-700">{row.members}</td>

                  <td className="py-4 text-sm font-semibold text-gray-700">
                    {row.revenue}
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="py-4 text-right text-lg text-gray-400">⋮</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-10 text-center text-sm text-gray-500">
                  No gyms found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {currentRows.length} of {filteredRows.length} gyms
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`rounded-xl border px-4 py-2 text-xs ${
              page === 1
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            Previous
          </button>

          <span className="px-2 text-sm text-gray-500">
            {page} / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`rounded-xl border px-4 py-2 text-xs ${
              page === totalPages
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}




 function BottomCards() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Jane Doe",
      note: "Inquiry: Personal Training",
      tag: "Hot",
      initials: "JD",
      avatarClass: "bg-red-100 text-red-500",
      tagClass: "bg-red-100 text-red-500",
    },
    {
      id: 2,
      name: "Alex Smith",
      note: "Inquiry: Membership Pricing",
      tag: "Warm",
      initials: "AS",
      avatarClass: "bg-yellow-100 text-yellow-700",
      tagClass: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 3,
      name: "Mark K.",
      note: "Source: Website Form",
      tag: "New",
      initials: "MK",
      avatarClass: "bg-blue-100 text-blue-500",
      tagClass: "bg-blue-100 text-blue-500",
    },
  ]);

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Premium Plan",
      price: 299,
      popular: true,
      priceClass: "text-orange-500",
      features: ["All Features Access", "Unlimited Members", "Priority Support"],
    },
    {
      id: 2,
      name: "Basic Plan",
      price: 149,
      popular: false,
      priceClass: "text-gray-700",
      features: ["Core Features", "Up to 500 Members"],
    },
  ]);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Login Issue - Iron Gym",
      time: "Reported 2 hours ago",
      status: "Pending",
      dot: "bg-red-500",
      action: "Reply",
    },
    {
      id: 2,
      title: "Feature Request - POS",
      time: "Reported 5 hours ago",
      status: "Open",
      dot: "bg-yellow-500",
      action: "Assign",
    },
    {
      id: 3,
      title: "Billing Inquiry - Resolved",
      time: "Closed yesterday",
      status: "Resolved",
      dot: "bg-green-500",
      action: "",
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState<null | number>(null);

  const addNewLead = () => {
    const count = leads.length + 1;
    const newLead = {
      id: Date.now(),
      name: `New Lead ${count}`,
      note: "Inquiry: General Membership",
      tag: "New",
      initials: `N${count}`,
      avatarClass: "bg-blue-100 text-blue-500",
      tagClass: "bg-blue-100 text-blue-500",
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const addNewPlan = () => {
    const count = plans.length + 1;
    const newPlan = {
      id: Date.now(),
      name: `Custom Plan ${count}`,
      price: 199,
      popular: false,
      priceClass: "text-gray-700",
      features: ["Custom Features", "Flexible Members"],
    };
    setPlans((prev) => [...prev, newPlan]);
  };

  const editPlan = (id: number) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === id
          ? {
              ...plan,
              price: plan.price + 20,
            }
          : plan
      )
    );
  };

  const toggleDetails = (id: number) => {
    setSelectedPlan((prev) => (prev === id ? null : id));
  };

  const handleTicketAction = (id: number) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: "Resolved",
              time: "Updated just now",
              dot: "bg-green-500",
              action: "",
              title: ticket.title.replace("Pending", "Resolved"),
            }
          : ticket
      )
    );
  };

  const pendingCount = tickets.filter((ticket) => ticket.status !== "Resolved").length;

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {/* Recent Leads */}
      <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Recent Leads</h3>
          <button className="text-sm font-semibold text-orange-500">View CRM</button>
        </div>

        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${lead.avatarClass}`}
                >
                  {lead.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.note}</p>
                </div>
              </div>
              <span
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${lead.tagClass}`}
              >
                {lead.tag}
              </span>
            </div>
          ))}
        </div>

        <Link
  href="/agency/leads/lead-entry"
  className="mt-5 block w-full rounded-2xl border border-dashed border-gray-300 py-3 text-center text-sm font-medium text-gray-500 transition hover:bg-gray-50"
>
  + Add New Lead
</Link>
      </div>

      {/* Plans */}
      <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Plans</h3>
          <button onClick={addNewPlan} className="text-3xl text-orange-500">
            +
          </button>
        </div>

        <div className="space-y-4">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-3xl border border-gray-200 p-4 relative">
              {plan.popular && (
                <span className="absolute right-0 top-0 rounded-bl-xl rounded-tr-3xl bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
                  POPULAR
                </span>
              )}

              <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>

              <div className="mt-2">
                <span className={`text-3xl font-bold ${plan.priceClass}`}>${plan.price}</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-500">
                {plan.features.map((feature, idx) => (
                  <p key={idx}>✓ {feature}</p>
                ))}
              </div>

              {selectedPlan === plan.id && (
                <div className="mt-4 rounded-2xl bg-gray-50 p-3 text-sm text-gray-600">
                  This plan includes {plan.features.length} features and is suitable for gym
                  partners who need scalable management tools.
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => editPlan(plan.id)}
                  className="rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => toggleDetails(plan.id)}
                  className="rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Tickets */}
      <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Support Tickets</h3>
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-500">
            {pendingCount} Pending
          </span>
        </div>

        <div className="space-y-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className={`mt-2 h-2.5 w-2.5 rounded-full ${ticket.dot}`} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{ticket.title}</p>
                  <p className="text-xs text-gray-500">{ticket.time}</p>
                </div>
              </div>

              {ticket.action && (
                <button
                  onClick={() => handleTicketAction(ticket.id)}
                  className="text-sm font-semibold text-orange-500"
                >
                  {ticket.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AgencyPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100">
      <div className="w-full p-6 lg:p-8">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Control Tower
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Overview of your agency performance and gym network.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm">
              ⬇ Export Report
            </button>
            <button className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm">
              ⚡ Quick Actions
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <GymStatus />
          </div>
        </section>

        <section className="mt-6">
          <TableSection />
        </section>

        <section className="mt-6">
          <BottomCards />
        </section>

        <footer className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2024 GymCommand Admin Panel. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <button>Privacy Policy</button>
              <button>Terms of Service</button>
              <button>Help Center</button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}