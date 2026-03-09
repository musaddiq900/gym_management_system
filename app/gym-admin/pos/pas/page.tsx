"use client";

import { useState } from "react";
import { products } from "../../../../data/dummyPos";

export default function PosPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMode, setPaymentMode] = useState("Cash");

  function addToCart(product: any) {
    setCart([...cart, product]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">POS Sales</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Products */}
        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
          <h2 className="font-semibold text-lg">Products</h2>
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => addToCart(p)}
              className="w-full bg-gray-50 rounded-2xl p-4 text-left hover:bg-gray-100 transition"
            >
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-500">
                Rs {p.price} • Stock: {p.stock}
              </div>
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
          <h2 className="font-semibold text-lg">Invoice</h2>

          {cart.map((c, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span>{c.name}</span>
              <span>Rs {c.price}</span>
            </div>
          ))}

          <div className="border-t pt-3 font-semibold">
            Total: Rs {total}
          </div>

          <select
            className="w-full bg-gray-50 rounded-xl px-3 py-2 mt-3"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option>Cash</option>
            <option>Card</option>
            <option>Online Transfer</option>
          </select>

          <button className="w-full bg-blue-600 text-white rounded-xl py-2 mt-3 shadow-lg shadow-blue-300/30 hover:bg-blue-700 transition">
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
}