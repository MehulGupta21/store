"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useCart } from "@/app/providers/CartProvider";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { user } = useUser();
  const { clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    measurements: "",
  });

  // ✅ Autofill from Clerk
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
      }));
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle checkout submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Later you will send this to backend
    console.log("Order placed:", form);

    clearCart(); // ✅ empty cart
    router.push("/order-success"); // ✅ redirect (optional)
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="input"
            required
          />

          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input"
            required
          />
        </div>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="input"
          required
        />

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="input h-24"
          required
        />

        <textarea
          name="measurements"
          value={form.measurements}
          onChange={handleChange}
          placeholder="Measurements (Bust, Waist, Hips, Height, Notes)"
          className="input h-28"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg text-lg hover:opacity-90 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
