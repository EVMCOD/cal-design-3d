"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "../CartContext";
import { products } from "../catalog-data";

export default function CarritoPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  const detailedItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter(Boolean),
    [items],
  ) as Array<(typeof products)[number] & { quantity: number }>;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4">
        <Link href="/productos" className="inline-flex text-sm text-zinc-300 transition hover:text-white">
          ← Seguir comprando
        </Link>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Carrito</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Tu selección actual</h1>
          </div>
          <Link href="/productos/checkout" className="inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
            Ir a checkout
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {detailedItems.length === 0 ? (
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-zinc-300">Tu carrito está vacío.</div>
          ) : (
            detailedItems.map((item) => (
              <article key={item.id} className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">{item.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{item.name}</h2>
                    <p className="mt-2 text-sm text-zinc-400">{item.brand} · {item.model} · {item.displacement} · {item.year}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border border-white/10 px-3 py-2 text-sm">-</button>
                    <span className="min-w-8 text-center text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border border-white/10 px-3 py-2 text-sm">+</button>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-semibold text-white">{item.price * item.quantity}€</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-zinc-400 transition hover:text-white">Eliminar</button>
                </div>
              </article>
            ))
          )}
        </div>

        <aside className="h-fit rounded-[30px] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Resumen</p>
          <div className="mt-6 flex items-center justify-between text-zinc-300">
            <span>Subtotal</span>
            <span>{subtotal}€</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-zinc-300">
            <span>Envío</span>
            <span>A calcular</span>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4 text-2xl font-semibold text-white">Total provisional: {subtotal}€</div>
          <Link href="/productos/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
            Continuar al pago
          </Link>
        </aside>
      </div>
    </main>
  );
}
