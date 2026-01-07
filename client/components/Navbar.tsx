"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/providers/CartProvider";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { cartItems = [], openCart } = useCart();

  // ✅ Safe reduce (never crashes)
  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Adhanya Creations Logo"
            width={300}
            height={120}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="nav-btn">Home</Link>
          <Link href="/shop" className="nav-btn">Shop</Link>
          <Link href="/Design" className="nav-btn">Design</Link>
          <Link href="/Studio" className="nav-btn">Studio</Link>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6">
          
          {/* CART ICON */}
          <button
            onClick={openCart}
            className="relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={24} color="#e2724f" />

            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>

          {/* USER AUTH */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <Link href="/sign-in" className="nav-btn">
                Sign In
              </Link>
            </SignedOut>
          </div>

        </div>
      </div>
    </nav>
  );
}
