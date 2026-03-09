import { suppliers } from "../../../../data/dummyPos";

export default function SupplierPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Suppliers</h1>

      <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
        {suppliers.map((s) => (
          <div key={s.id} className="bg-gray-50 rounded-2xl p-4">
            <div className="font-medium">{s.name}</div>
            <div className="text-sm text-gray-500">{s.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}