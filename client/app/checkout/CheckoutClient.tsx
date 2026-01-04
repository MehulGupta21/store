"use client";

import CheckoutForm from "@/components/CheckoutForm";
import OrderSummary from "@/components/OrderSummary";

export default function CheckoutClient() {
  return (
    <div className="min-h-screen bg-[#faf7f5] px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: FORM */}
        <CheckoutForm />

        {/* RIGHT: ORDER SUMMARY */}
        <OrderSummary />

      </div>
    </div>
  );
}
