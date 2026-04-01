import Image from "next/image";

type BrandItem =
  | { name: string; kind: "image"; src: string; className?: string }
  | { name: string; kind: "text" };

const compatibleBrands: BrandItem[] = [
  { name: "KTM", kind: "image", src: "/brand-logos/ktm.svg" },
  { name: "Honda", kind: "image", src: "/brand-logos/honda-wing.svg" },
  { name: "Suzuki", kind: "image", src: "/brand-logos/suzuki.svg" },
  { name: "Husqvarna", kind: "image", src: "/brand-logos/husqvarna.svg" },
  { name: "Ducati", kind: "image", src: "/brand-logos/ducati.svg" },
  { name: "Kawasaki", kind: "image", src: "/brand-logos/kawasaki.svg", className: "brand-logo-image brand-logo-kawasaki" },
  { name: "Yamaha", kind: "image", src: "/brand-logos/yamaha.svg", className: "brand-logo-image brand-logo-yamaha" },
  { name: "GasGas", kind: "text" },
  { name: "KTM", kind: "image", src: "/brand-logos/ktm.svg" },
  { name: "Honda", kind: "image", src: "/brand-logos/honda-wing.svg" },
  { name: "Suzuki", kind: "image", src: "/brand-logos/suzuki.svg" },
  { name: "Husqvarna", kind: "image", src: "/brand-logos/husqvarna.svg" },
  { name: "Ducati", kind: "image", src: "/brand-logos/ducati.svg" },
  { name: "Kawasaki", kind: "image", src: "/brand-logos/kawasaki.svg", className: "brand-logo-image brand-logo-kawasaki" },
  { name: "Yamaha", kind: "image", src: "/brand-logos/yamaha.svg", className: "brand-logo-image brand-logo-yamaha" },
  { name: "GasGas", kind: "text" },
];

const productHighlights = [
  {
    title: "Protectores y piezas funcionales",
    text: "Piezas pensadas para aguantar uso real, golpes, barro, montaje y mantenimiento de moto.",
  },
  {
    title: "Compatibilidad y ajuste",
    text: "Diseños adaptados a modelos, componentes y necesidades concretas para que encaje donde tiene que encajar.",
  },
  {
    title: "Desarrollo a medida",
    text: "Desde una necesidad puntual hasta una serie corta de piezas, con foco en utilidad y confianza de producto.",
  },
];

const availableNow = [
  "Protectores y refuerzos impresos en 3D",
  "Soportes y anclajes para moto y equipamiento",
  "Piezas personalizadas bajo pedido",
  "Desarrollo de soluciones para montaje real",
];

const inDevelopment = [
  "Nuevas referencias por marca y modelo",
  "Más piezas específicas para motocross y enduro",
  "Catálogo visual más amplio y mejor filtrado por compatibilidad",
];

const trustPoints = [
  "Diseño CAD aplicado a uso real",
  "Producción orientada a montaje y resistencia",
  "Ajustes según necesidad, pieza o referencia",
  "Marca enfocada a producto, no a humo visual",
];

function BrandItemView({ brand }: { brand: BrandItem }) {
  if (brand.kind === "text") {
    return <span className="brand-text-fallback">{brand.name}</span>;
  }

  return <Image src={brand.src} alt={brand.name} width={140} height={44} className={brand.className ?? "brand-logo-image"} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_left,_rgba(255,106,0,0.18),_transparent_28%),linear-gradient(90deg,#090909_0%,#121214_42%,#2b1206_72%,#ff6a00_160%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,transparent_25%,transparent_75%,rgba(255,106,0,0.06)_100%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">CAL 3D</p>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Piezas, accesorios y soluciones de impresión 3D para motocross y enduro.
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-zinc-300">
              <a href="#productos" className="transition hover:text-white">Productos</a>
              <a href="#compatibilidad" className="transition hover:text-white">Compatibilidad</a>
              <a href="#confianza" className="transition hover:text-white">Confianza</a>
              <a href="#contacto" className="transition hover:text-white">Contacto</a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Motocross / Enduro / Producto funcional
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Impresión 3D para motos con enfoque de producto, compatibilidad y uso real.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                CAL 3D diseña y fabrica piezas funcionales para motocross y enduro: protectores, soportes,
                accesorios y soluciones a medida pensadas para montar, aguantar y aportar valor real.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Ver productos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Pedir una pieza
                </a>
              </div>
            </div>

            <article className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.65)] backdrop-blur">
              <div className="aspect-[4/3] rounded-[28px] border border-white/10 bg-[linear-gradient(90deg,#090909_0%,#161617_40%,#2b1206_72%,#ff6a00_165%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/8 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,106,0,0.08))] p-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-orange-300">Producto primero</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      Piezas serias para marcas y motos reales.
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">Enfoque</p>
                      <p className="mt-2 text-lg font-semibold text-white">Motocross / Enduro</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">Prioridad</p>
                      <p className="mt-2 text-lg font-semibold text-white">Utilidad real</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">Compatibilidad</p>
                      <p className="mt-2 text-lg font-semibold text-white">Por marca y aplicación</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">Sensación</p>
                      <p className="mt-2 text-lg font-semibold text-white">Premium + off-road</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="compatibilidad" className="overflow-hidden border-b border-white/10 bg-[linear-gradient(90deg,#090909_0%,#111214_45%,#2b1206_75%,#5f2500_100%)] py-6">
        <div className="logo-ticker-shell">
          <div className="ticker-mask">
            <div className="ticker-track ticker-track-smooth">
              {compatibleBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="ticker-logo-wrap" aria-label={brand.name}>
                  <BrandItemView brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Productos</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Un catálogo pensado para vender producto, no para rellenar una landing.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            La prioridad es que se entienda rápido qué hace CAL 3D, para qué motos trabaja y por qué sus piezas
            merecen confianza: compatibilidad, uso real, ajuste y soluciones orientadas a motocross y enduro.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {productHighlights.map((item) => (
            <article key={item.title} className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="mb-5 h-1 w-16 rounded-full bg-orange-500" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(90deg,#090909_0%,#111214_48%,#2b1206_82%,#512000_100%)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(90deg,rgba(255,106,0,0.16),rgba(255,255,255,0.03))] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Bloque destacado</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Piezas y accesorios que tienen que verse bien, pero sobre todo montar bien y durar.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
              CAL 3D no va de renders bonitos sin contexto. Va de soluciones impresas para motos y accesorios que
              necesitan funcionar en el mundo real: barro, vibración, ajuste, montaje y uso continuo.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {availableNow.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-300">En desarrollo</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Más profundidad de catálogo y compatibilidad</h3>
            <div className="mt-6 space-y-3">
              {inDevelopment.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm leading-7 text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="confianza" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Confianza</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Qué tiene que transmitir la marca</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Producto serio. Ajuste real. Compatibilidad visible. Sensación premium, pero con energía mecánica y off-road.
            </p>
            <div className="mt-6 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm font-medium text-white">
                  {point}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[30px] border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,106,0,0.08))] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Dirección visual</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Premium, robusta y muy enfocada a producto</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              La referencia estructural puede venir de EVTL, pero la sensación final tiene que ser otra: más moto, más
              catálogo, más compatibilidad, más utilidad y menos vibra tech. El movimiento visual suma cuando refuerza
              marca y producto, no cuando complica la lectura.
            </p>
            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Tono</p>
                  <p className="mt-2 text-lg font-semibold text-white">Robusto</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Marca</p>
                  <p className="mt-2 text-lg font-semibold text-white">Seria</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Venta</p>
                  <p className="mt-2 text-lg font-semibold text-white">Directa</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-[linear-gradient(90deg,#0a0a0b_0%,#121214_55%,#371704_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(90deg,rgba(255,106,0,0.18),rgba(255,255,255,0.03))] p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Contacto</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Si tienes una pieza, una necesidad o una idea de producto, la bajamos a algo real.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Cuéntanos para qué moto o aplicación es, qué problema quieres resolver y qué nivel de ajuste necesitas.
                  La idea es ayudarte a convertirlo en una pieza útil, compatible y bien resuelta.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Hablar por WhatsApp
                </a>
                <a
                  href="https://instagram.com/"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Ver Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
