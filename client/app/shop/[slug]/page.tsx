import ProductUI from "./ProductUI";

const products = [
  {
    slug: "indo-western-saree",
    name: "Indo-Western Saree",
    price: 5000,
    images: [
      "/images/p1-1.jpg",
      "/images/p1-2.jpg",
      "/images/p1-3.jpg",
      "/images/p1-4.jpg",
    ],
  },
  {
    slug: "dazzling-shimmery-lehenga",
    name: "Dazzling Shimmery Lehenga",
    price: 8000,
    images: [
      "/images/p2-1.jpg",
      "/images/p2-2.jpg",
      "/images/p2-3.jpg",
      "/images/p2-4.jpg",
    ],
  },
  {
    slug: "sequence-blouse-with-lehenga",
    name: "Sequence Blouse with Lehenga",
    price: 4000,
    images: [
      "/images/p3-1.jpg",
      "/images/p3-2.jpg",
      "/images/p3-3.jpg",
      "/images/p3-4.jpg",
    ],
  },
  {
    slug: "customised-saree",
    name: "Customised Saree",
    price: 5000,
    images: [
      "/images/p4-1.jpeg",
      "/images/p4-2.jpg",
      "/images/p4-3.jpg",
      "/images/p4-4.jpg",
    ],
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center text-lg">
        Product not found
      </div>
    );
  }

  return <ProductUI product={product} />;
}
