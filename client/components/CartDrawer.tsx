"use client";

import Image from "next/image";
import { X, Trash2 } from "lucide-react";
import { useCart } from "@/app/lib/cart-context";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    removeFromCart,
    updateQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeCart}
      />

      {/* DRAWER */}
      <div className="absolute right-0 top-0 h-full w-[360px] bg-white p-5 overflow-y-auto">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Cart ({cart.length})
          </h2>
          <button onClick={closeCart}>
            <X />
          </button>
        </div>

        {cart.length === 0 && (
          <p className="text-gray-500">Your cart is empty</p>
        )}

        {cart.map((item) => (
          <div
            key={item.slug}
            className="flex gap-4 border-b py-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={90}
            />

            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>

              {/* QTY */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    updateQty(item.slug, item.quantity - 1)
                  }
                  className="border px-2"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQty(item.slug, item.quantity + 1)
                  }
                  className="border px-2"
                >
                  +
                </button>
              </div>
            </div>

            <button onClick={() => removeFromCart(item.slug)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {/* TOTAL */}
        {cart.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between font-semibold mb-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-[#8b1e1e] text-white py-3 rounded mb-2">
              Checkout
            </button>

            <button
              onClick={closeCart}
              className="w-full border py-3 rounded"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
