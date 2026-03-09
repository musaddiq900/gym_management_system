"use client";

import { useMemo, useState } from "react";

type InvoiceStatus = "PAID" | "PARTIAL" | "DUE";
type PaymentMode = "Cash" | "Card" | "Online Transfer";

type InvoiceItem = {
  name: string;
  qty: number;
  price: number;
};

type Invoice = {
  id: string;
  date: string; // YYYY-MM-DD
  customerName: string;
  paymentMode: PaymentMode;
  status: InvoiceStatus;
  items: InvoiceItem[];
  discount: number; // Rs
  paidAmount: number; // Rs
};

const dummyInvoices: Invoice[] = [
  {
    id: "INV-1001",
    date: "2026-03-03",
    customerName: "Walk-in Customer",
    paymentMode: "Cash",
    status: "PAID",
    discount: 0,
    paidAmount: 9700,
    items: [
      { name: "Whey Protein", qty: 1, price: 8500 },
      { name: "Gym Gloves", qty: 1, price: 1200 },
    ],
  },
  {
    id: "INV-1002",
    date: "2026-03-02",
    customerName: "Ali Khan",
    paymentMode: "Card",
    status: "PARTIAL",
    discount: 500,
    paidAmount: 4000,
    items: [{ name: "Pre Workout", qty: 1, price: 4500 }],
  },
  {
    id: "INV-1003",
    date: "2026-03-01",
    customerName: "Ayesha",
    paymentMode: "Online Transfer",
    status: "DUE",
    discount: 0,
    paidAmount: 0,
    items: [
      { name: "Whey Protein", qty: 1, price: 8500 },
      { name: "Pre Workout", qty: 1, price: 4500 },
    ],
  },
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6 md:p-8">
      {children}
    </div>
  );
}

function Badge({ status }: { status: InvoiceStatus }) {
  const cls =
    status === "PAID"
      ? "bg-green-100 text-green-700"
      : status === "PARTIAL"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cls}`}>
      {status}
    </span>
  );
}

export default function InvoicesPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"ALL" | InvoiceStatus>("ALL");
  const [selected, setSelected] = useState<Invoice | null>(dummyInvoices[0]);

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return dummyInvoices.filter((inv) => {
      const statusOk = status === "ALL" ? true : inv.status === status;
      const searchOk = !s
        ? true
        : inv.id.toLowerCase().includes(s) ||
          inv.customerName.toLowerCase().includes(s) ||
          inv.date.includes(s);
      return statusOk && searchOk;
    });
  }, [q, status]);

  const totals = useMemo(() => {
    const subtotal = (inv: Invoice) =>
      inv.items.reduce((sum, it) => sum + it.qty * it.price, 0);

    const grandTotal = (inv: Invoice) => Math.max(0, subtotal(inv) - inv.discount);

    const totalSales = rows.reduce((sum, inv) => sum + grandTotal(inv), 0);
    const totalPaid = rows.reduce((sum, inv) => sum + inv.paidAmount, 0);
    const totalDue = rows.reduce((sum, inv) => sum + Math.max(0, grandTotal(inv) - inv.paidAmount), 0);

    return { totalSales, totalPaid, totalDue };
  }, [rows]);

  function subTotal(inv: Invoice) {
    return inv.items.reduce((sum, it) => sum + it.qty * it.price, 0);
  }

  function grandTotal(inv: Invoice) {
    return Math.max(0, subTotal(inv) - inv.discount);
  }

  function due(inv: Invoice) {
    return Math.max(0, grandTotal(inv) - inv.paidAmount);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="text-sm text-gray-500">Invoice history (frontend demo)</p>
        </div>

        {/* Quick totals */}
        <div className="flex gap-3 flex-wrap">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 px-5 py-3">
            <div className="text-xs text-gray-500">Total Sales</div>
            <div className="font-semibold">Rs {totals.totalSales}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 px-5 py-3">
            <div className="text-xs text-gray-500">Paid</div>
            <div className="font-semibold">Rs {totals.totalPaid}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 px-5 py-3">
            <div className="text-xs text-gray-500">Due</div>
            <div className="font-semibold">Rs {totals.totalDue}</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <input
              className="bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-80"
              placeholder="Search invoice id / customer / date..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            <select
              className="bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
            >
              <option value="ALL">All Status</option>
              <option value="PAID">Paid</option>
              <option value="PARTIAL">Partial</option>
              <option value="DUE">Due</option>
            </select>
          </div>

          <div className="text-sm text-gray-500">
            Showing: {rows.length} invoices
          </div>
        </div>
      </Card>

      {/* List + Detail */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-2 md:p-4">
          <div className="space-y-2">
            {rows.map((inv) => (
              <button
                key={inv.id}
                onClick={() => setSelected(inv)}
                className={`w-full text-left rounded-2xl p-4 transition shadow-md ${
                  selected?.id === inv.id
                    ? "bg-blue-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{inv.id}</div>
                    <div className="text-sm text-gray-600">
                      {inv.customerName} • {inv.date}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Payment: {inv.paymentMode}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge status={inv.status} />
                    <div className="text-sm font-semibold">
                      Rs {grandTotal(inv)}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {!rows.length && (
              <div className="text-sm text-gray-500 p-6">
                No invoices found
              </div>
            )}
          </div>
        </div>

        {/* Detail */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6 md:p-8">
          {!selected ? (
            <div className="text-sm text-gray-500">Select an invoice</div>
          ) : (
            <div className="space-y-5">
              <div>
                <div className="text-xs text-gray-500">Invoice</div>
                <div className="text-xl font-bold">{selected.id}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {selected.customerName} • {selected.date}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Payment Mode</span>
                  <span className="font-medium">{selected.paymentMode}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Status</span>
                  <Badge status={selected.status} />
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">Items</div>
                <div className="space-y-2">
                  {selected.items.map((it, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-2xl p-3 flex items-center justify-between text-sm"
                    >
                      <div>
                        <div className="font-medium">{it.name}</div>
                        <div className="text-xs text-gray-500">Qty: {it.qty}</div>
                      </div>
                      <div className="font-semibold">Rs {it.qty * it.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs {subTotal(selected)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium">Rs {selected.discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold">Rs {grandTotal(selected)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paid</span>
                  <span className="font-medium">Rs {selected.paidAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due</span>
                  <span className="font-semibold text-red-600">
                    Rs {due(selected)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => alert("Frontend Demo: Print Invoice")}
                className="w-full px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-400/30 hover:scale-[1.02] transition"
              >
                Print / Download (Demo)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}