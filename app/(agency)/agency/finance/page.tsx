import Link from "next/link"

export default function FinancePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold">
          Finance Dashboard
        </h1>

        <p className="text-blue-100 mt-2">
          Revenue, expenses, profit & complete financial analytics
        </p>

      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-2">Rs 12,50,000</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h2 className="text-2xl font-bold mt-2">Rs 4,20,000</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500 text-sm">Staff Salaries</p>
          <h2 className="text-2xl font-bold mt-2">Rs 2,10,000</h2>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow border border-green-200">
          <p className="text-green-600 text-sm">Net Profit</p>
          <h2 className="text-2xl font-bold mt-2 text-green-700">
            Rs 6,20,000
          </h2>
        </div>

      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link
          href="/agency/finance/revenue"
          className="group bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold group-hover:text-blue-600">
            Revenue Overview
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Monthly income analytics
          </p>
        </Link>

        <Link
          href="/agency/finance/expenses"
          className="group bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold group-hover:text-red-600">
            Expense Tracking
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Manage operational costs
          </p>
        </Link>

        <Link
          href="/agency/finance/salaries"
          className="group bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold group-hover:text-indigo-600">
            Staff Salaries
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Payroll management system
          </p>
        </Link>

        <Link
          href="/agency/finance/payments"
          className="group bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold group-hover:text-green-600">
            Payment Logs
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            All transaction history
          </p>
        </Link>

      </div>

    </div>
  )
}