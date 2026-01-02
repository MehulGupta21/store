"use client";

import { getCart, CartItem } from "@/app/lib/cart";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.slug} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Qty: {item.quantity}</p>
            <p>₹{item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </main>
  );
}
