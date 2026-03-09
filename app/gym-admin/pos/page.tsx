import Link from "next/link";

export default function PosInventoryPage() {
  const modules = [
    {
      title: "POS Sales",
      desc: "Product & supplement sales, cart & payment",
      href: "/gym-admin/pos/pas",
      stat: "Live Sales",
    },
    {
      title: "Invoices",
      desc: "View & manage invoice history",
      href: "/gym-admin/pos/invoices",
      stat: "Reports",
    },
    {
      title: "Inventory",
      desc: "Stock management & low stock alerts",
      href: "/gym-admin/pos/inventory",
      stat: "Stock Control",
    },
    {
      title: "Suppliers",
      desc: "Manage product suppliers",
      href: "/gym-admin/pos/suppliers",
      stat: "Vendors",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          POS & Inventory
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage sales, invoices, stock & suppliers
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
          <div className="text-sm text-gray-500">Today Sales</div>
          <div className="text-2xl font-semibold mt-2">Rs 45,200</div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
          <div className="text-sm text-gray-500">Low Stock Items</div>
          <div className="text-2xl font-semibold mt-2 text-red-600">
            3 Items
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6">
          <div className="text-sm text-gray-500">Pending Payments</div>
          <div className="text-2xl font-semibold mt-2">Rs 12,000</div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {modules.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-8 hover:shadow-2xl hover:scale-[1.01] transition"
          >
            <div className="text-xl font-semibold">{m.title}</div>
            <div className="text-sm text-gray-500 mt-2">
              {m.desc}
            </div>

            <div className="mt-6 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm shadow-lg shadow-blue-400/30">
              Open {m.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}