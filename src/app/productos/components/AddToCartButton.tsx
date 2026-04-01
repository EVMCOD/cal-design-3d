"use client";

import { useState } from "react";
import { useCart } from "../CartContext";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => {
        addToCart(productId);
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
      }}
      className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
    >
      {added ? "Añadido" : "Añadir al carrito"}
    </button>
  );
}
