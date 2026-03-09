import { products } from "../../../../data/dummyPos";

export default function InventoryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Stock Management</h1>

      <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
        {products.map((p) => (
          <div key={p.id} className="flex justify-between items-center bg-gray-50 rounded-2xl p-4">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className={`text-sm ${p.stock <= 3 ? "text-red-500" : "text-gray-500"}`}>
                Stock: {p.stock}
              </div>
            </div>
            {p.stock <= 3 && (
              <div className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Low Stock
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}