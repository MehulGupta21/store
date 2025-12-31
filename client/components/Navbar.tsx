"use client"; // NEW

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, User, Menu, X } from "lucide-react"; // NEW
import { useState } from "react"; // NEW

const Navbar = () => {
  const [open, setOpen] = useState(false); // NEW

  return (
    <nav className="bg-white w-full border-b border-[#e8c1a9]">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-3 items-center">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={120}
              height={120}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Buttons - Center */}
          <div className="flex justify-center gap-8">
            <Link href="/" className="nav-btn">Home</Link>
            <Link href="/shop" className="nav-btn">Shop</Link>
            <Link href="/Design" className="nav-btn">Design</Link>
            <Link href="/Studio" className="nav-btn">Studio</Link>
          </div>

          {/* Icons - Right (REPLACED spacer) */}
          <div className="flex justify-end items-center gap-10"> {/* NEW */}
            <Link href="/Cart">
              <ShoppingBag className="nav-icon" />
            </Link>
            <Link href="/sign-in">
              <User className="nav-icon" />
            </Link>
          </div>
        </div>

        {/* ================= MOBILE TOP BAR ================= */}
        <div className="flex items-center justify-between md:hidden">
          
          {/* Logo */}
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={120}
            height={120}
            className="h-20 w-auto object-contain"
            priority
          />

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}> {/* NEW */}
            {open ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && ( // NEW
          <div className="flex flex-col items-center gap-6 mt-6 md:hidden">
            
            {/* Pills */}
            <div className="flex gap-4">
              <Link href="/" className="nav-btn">Home</Link>
              <Link href="/shop" className="nav-btn">Shop</Link>
              <Link href="/Design" className="nav-btn">Design</Link>
              <Link href="/Studio" className="nav-btn">Studio</Link>
            </div>

            {/* Icons */}
            <div className="flex gap-6">
              <Link href="/cart">
                <ShoppingBag className="nav-icon" />
              </Link>
              <Link href="/signin">
                <User className="nav-icon" />
              </Link>
            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
