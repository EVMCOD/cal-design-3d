"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "../CartContext";

const paymentMethods = [
  { id: "card", name: "Tarjeta", description: "Pago con tarjeta (base lista para Stripe / Redsys)." },
  { id: "paypal", name: "PayPal", description: "Checkout alternativo para pago rápido." },
  { id: "transfer", name: "Transferencia", description: "Opción manual para pedidos personalizados." },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [completed, setCompleted] = useState(false);

  const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
      <Link href="/productos/carrito" className="inline-flex text-sm text-zinc-300 transition hover:text-white">
        ← Volver al carrito
      </Link>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-[30px] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Checkout</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Finalizar pedido</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            Esta capa ya deja preparado el frontend del checkout. La pasarela real se puede conectar después sobre esta estructura.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Nombre</span>
              <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none" placeholder="Nombre y apellidos" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Email</span>
              <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none" placeholder="correo@ejemplo.com" />
            </label>
            <label className="md:col-span-2 flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Dirección</span>
              <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none" placeholder="Dirección de envío" />
            </label>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Método de pago</p>
            <div className="mt-4 grid gap-4">
              {paymentMethods.map((method) => (
                <label key={method.id} className={`rounded-[24px] border p-5 transition ${paymentMethod === method.id ? "border-orange-400/60 bg-orange-500/10" : "border-white/10 bg-black/20"}`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-lg font-semibold text-white">{method.name}</div>
                      <p className="mt-1 text-sm text-zinc-400">{method.description}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setCompleted(true);
              clearCart();
            }}
            className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
          >
            Confirmar pedido
          </button>

          {completed && (
            <div className="mt-6 rounded-[24px] border border-emerald-400/30 bg-emerald-500/10 p-5 text-sm text-emerald-200">
              Pedido confirmado en frontend. Siguiente paso: conectar proveedor real de pago y backend de pedidos.
            </div>
          )}
        </section>

        <aside className="h-fit rounded-[30px] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Resumen</p>
          <div className="mt-6 flex items-center justify-between text-zinc-300">
            <span>Productos</span>
            <span>{totalItems}</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-zinc-300">
            <span>Subtotal</span>
            <span>{subtotal}€</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-zinc-300">
            <span>Envío</span>
            <span>A calcular</span>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4 text-2xl font-semibold text-white">Total provisional: {subtotal}€</div>
        </aside>
      </div>
    </main>
  );
}
