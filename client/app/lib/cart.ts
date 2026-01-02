export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existing = cart.find((i) => i.slug === item.slug);

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
