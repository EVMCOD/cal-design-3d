import Link from "next/link";
import { CartProvider } from "./CartContext";
import CartDropdown from "./components/CartDropdown";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0a0a0b] text-white">
        <div className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
              CAL 3D
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/productos" className="text-sm text-zinc-300 transition hover:text-white">
                Catálogo
              </Link>
              <Link href="/productos/carrito" className="text-sm text-zinc-300 transition hover:text-white">
                Carrito
              </Link>
              <CartDropdown />
            </div>
          </div>
        </div>
        {children}
      </div>
    </CartProvider>
  );
}
