"use client";

import { useCart } from "../CartContext";

export default function CartIndicator() {
  const { count } = useCart();

  return (
    <div className="inline-flex min-w-10 items-center justify-center rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-black">
      {count}
    </div>
  );
}
