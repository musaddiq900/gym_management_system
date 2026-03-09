"use client";

import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiDownload,
  FiCreditCard,
  FiSearch,
  FiDollarSign,
} from "react-icons/fi";

type InvoiceStatus = "Paid" | "Pending" | "Upcoming";
type FilterType = "All" | InvoiceStatus;

type Invoice = {
  id: string;
  month: string;
  amount: number;
  status: InvoiceStatus;
};

export default function PaymentsPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-1001",
      month: "March 2026",
      amount: 6500,
      status: "Paid",
    },
    {
      id: "INV-1002",
      month: "April 2026",
      amount: 6500,
      status: "Pending",
    },
    {
      id: "INV-1003",
      month: "May 2026",
      amount: 6500,
      status: "Upcoming",
    },
  ]);

  const [filter, setFilter] = useState<FilterType>("All");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesFilter = filter === "All" ? true : invoice.status === filter;
      const matchesSearch =
        invoice.id.toLowerCase().includes(search.toLowerCase()) ||
        invoice.month.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [invoices, filter, search]);

  const currentPlanFee = useMemo(() => {
    return 6500;
  }, []);

  const pendingAmount = useMemo(() => {
    return invoices
      .filter((invoice) => invoice.status === "Pending")
      .reduce((sum, invoice) => sum + invoice.amount, 0);
  }, [invoices]);

  const paidCount = useMemo(() => {
    return invoices.filter((invoice) => invoice.status === "Paid").length;
  }, [invoices]);

  const paymentStatus = useMemo(() => {
    if (pendingAmount === 0) return "Fully Paid";
    if (paidCount > 0) return "Mostly Paid";
    return "Pending";
  }, [pendingAmount, paidCount]);

  const payNow = () => {
    const pendingInvoice = invoices.find((invoice) => invoice.status === "Pending");

    if (!pendingInvoice) {
      setMessage("No pending invoice available to pay.");
      return;
    }

    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === pendingInvoice.id
          ? { ...invoice, status: "Paid" }
          : invoice
      )
    );

    setMessage(`${pendingInvoice.id} paid successfully.`);
  };

  const downloadInvoice = (id: string) => {
    setDownloadingId(id);
    setMessage("");

    setTimeout(() => {
      setDownloadingId(null);
      setMessage(`Invoice ${id} is ready to download.`);
    }, 1000);
  };

  const formatAmount = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-6 md:p-8 text-white shadow-xl">
        <p className="text-sm text-white/80">Payments</p>
        <h1 className="text-3xl font-bold mt-2">Billing & Invoices</h1>
        <p className="text-white/80 mt-3">
          View your membership payments, invoice history, and due amounts.
        </p>
      </section>

      {/* Message */}
      {message && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 flex items-center gap-2">
          <FiCheckCircle />
          {message}
        </div>
      )}

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Current Plan Fee</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {formatAmount(currentPlanFee)}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <FiCreditCard size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Pending Amount</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {formatAmount(pendingAmount)}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
              <FiDollarSign size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Payment Status</p>
              <h2
                className={`text-3xl font-bold mt-2 ${
                  paymentStatus === "Fully Paid"
                    ? "text-green-600"
                    : paymentStatus === "Mostly Paid"
                    ? "text-blue-600"
                    : "text-yellow-700"
                }`}
              >
                {paymentStatus}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <FiCheckCircle size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="rounded-3xl bg-white p-5 shadow-md border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by invoice id or month..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-[#f8fafc] pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", "Paid", "Pending", "Upcoming"] as FilterType[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    filter === item
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Invoice History */}
      <section className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-800">Invoice History</h2>
          <button
            onClick={payNow}
            className="rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700 transition"
          >
            Pay Now
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {filteredInvoices.length === 0 ? (
            <div className="rounded-2xl bg-[#f8fafc] p-8 text-center text-slate-500">
              No invoices found.
            </div>
          ) : (
            filteredInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-[#f8fafc] p-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{invoice.id}</h3>
                  <p className="text-sm text-slate-500 mt-1">{invoice.month}</p>
                </div>

                <div className="text-sm font-medium text-slate-700">
                  {formatAmount(invoice.amount)}
                </div>

                <div>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>

                <button
                  onClick={() => downloadInvoice(invoice.id)}
                  className="rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition flex items-center gap-2"
                >
                  <FiDownload size={14} />
                  {downloadingId === invoice.id ? "Preparing..." : "Download"}
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Billing Summary</h3>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Paid Invoices</p>
              <p className="font-semibold text-slate-800 mt-1">{paidCount}</p>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Pending Invoices</p>
              <p className="font-semibold text-slate-800 mt-1">
                {invoices.filter((invoice) => invoice.status === "Pending").length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-4">
              <p className="text-sm text-slate-500">Upcoming Invoices</p>
              <p className="font-semibold text-slate-800 mt-1">
                {invoices.filter((invoice) => invoice.status === "Upcoming").length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-slate-800">Payment Note</h3>
          <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-slate-700">
            You can later connect this page with real payment gateways, invoice
            PDFs, billing APIs, and renewal reminders.
          </div>

          <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4 text-sm text-slate-600">
            This frontend version currently simulates payment updates and invoice
            download actions.
          </div>
        </div>
      </section>
    </div>
  );
}