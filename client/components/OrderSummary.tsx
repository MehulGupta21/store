"use client";

import { useCart } from "@/app/providers/CartProvider";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Order Summary
      </h2>

      {cartItems.map((item: any) => (
        <div key={item.id} className="flex gap-4 mb-4">
          <img
            src={item.image}
            className="w-20 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">
              Qty: {item.quantity}
            </p>
          </div>
          <p>₹{item.price * item.quantity}</p>
        </div>
      ))}

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}
