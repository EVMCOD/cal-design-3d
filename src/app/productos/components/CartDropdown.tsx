"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../CartContext";

export default function CartDropdown() {
  const [open, setOpen] = useState(false);
  const { count, subtotal, detailedItems } = useCart();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20"
      >
        <span>Carrito</span>
        <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-black">
          {count}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+12px)] z-50 w-[360px] rounded-[28px] border border-white/10 bg-[#111214] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">Mini cart</p>
              <h3 className="mt-1 text-xl font-semibold text-white">Resumen rápido</h3>
            </div>
            <button onClick={() => setOpen(false)} className="text-sm text-zinc-400 transition hover:text-white">
              Cerrar
            </button>
          </div>

          <div className="mt-5 grid gap-3">
            {detailedItems.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
                Tu carrito está vacío.
              </div>
            ) : (
              detailedItems.slice(0, 4).map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{item.name}</div>
                      <div className="mt-1 text-xs text-zinc-400">{item.brand} · {item.model}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">{item.price * item.quantity}€</div>
                      <div className="mt-1 text-xs text-zinc-400">x{item.quantity}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm text-zinc-300">
              <span>Subtotal</span>
              <span>{subtotal}€</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link href="/productos/carrito" className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20">
                Ver carrito
              </Link>
              <Link href="/productos/checkout" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
