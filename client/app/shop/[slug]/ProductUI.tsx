"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/lib/cart-context";
import { Facebook, Instagram, Linkedin, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Product = {
  slug: string;
  name: string;
  price: number;
  images: string[];
};

export default function ProductUI({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-[80px_420px_1fr] gap-10 items-start">
        {/* THUMBNAILS */}
        <div className="flex flex-col gap-3">
          {product.images.map((img) => (
            <button
              key={img}
              onMouseEnter={() => setActiveImage(img)}
              onClick={() => setActiveImage(img)}
              className={`border ${
                activeImage === img
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt=""
                width={60}
                height={80}
                className="object-contain"
              />
            </button>
          ))}
        </div>

        {/* MAIN IMAGE (FIXED SIZE – NO OVERFLOW) */}
        <div className="relative w-[420px] h-[560px] bg-white border mx-auto">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-2xl font-medium mb-2">
            {product.name}
          </h1>
          <p className="text-lg mb-4">₹{product.price}</p>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm mb-1">Quantity *</p>
            <div className="inline-flex items-center border">
              <button
                className="px-3 py-1"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-3 py-1"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              className="w-full bg-red-600 text-white py-3 rounded-full"
              onClick={() =>
                addToCart({
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  image: product.images[0],
                  quantity: qty,
                })
              }
            >
              Book Now
            </button>

            <button
              className="w-full border border-red-600 text-red-600 py-3 rounded-full"
              onClick={() => router.push("/")}
            >
              Customize Design
            </button>
          </div>

          {/* Share Icons */}
          <div className="flex gap-4 mt-6 text-gray-600">
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
            <Share2 size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
