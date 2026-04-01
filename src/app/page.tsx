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

const categoryBlocks = [
  {
    title: "Protectores",
    text: "Piezas pensadas para golpes, barro, vibración y uso real en motocross y enduro.",
  },
  {
    title: "Soportes",
    text: "Soluciones de fijación y anclaje para accesorios, equipamiento y montaje limpio.",
  },
  {
    title: "Piezas funcionales",
    text: "Componentes orientados a resolver necesidades concretas de ajuste, uso y compatibilidad.",
  },
  {
    title: "Accesorios",
    text: "Elementos complementarios con enfoque visual limpio y utilidad real sobre la moto.",
  },
  {
    title: "Ajuste por modelo",
    text: "Diseños adaptados a marca, modelo, cilindrada y año para mejorar encaje y montaje.",
  },
  {
    title: "Desarrollo a medida",
    text: "Cuando no existe la pieza, se diseña una solución desde cero con criterio de uso real.",
  },
];

const trustPoints = [
  "Compatibilidad por marca, modelo, cilindrada y año",
  "Piezas pensadas para montar bien y durar",
  "Materiales y geometrías elegidas para uso real",
  "Enfoque de producto, no de render bonito",
];

const quickFacts = [
  { label: "Compatibilidad", value: "MX / Enduro" },
  { label: "Enfoque", value: "Fit + resistencia" },
  { label: "Formato", value: "Catálogo + a medida" },
  { label: "Uso", value: "Moto real" },
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
              <a href="/productos" className="transition hover:text-white">Productos</a>
              <a href="#marcas" className="transition hover:text-white">Marcas</a>
              <a href="#categorias" className="transition hover:text-white">Categorías</a>
              <a href="#contacto" className="transition hover:text-white">Contacto</a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Motocross / Enduro / Producto funcional
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Piezas de impresión 3D para motocross y enduro, diseñadas para montar, encajar y durar.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Protectores, soportes, accesorios y piezas funcionales para motos reales. CAL 3D trabaja con foco en compatibilidad, ajuste, montaje y resistencia para que la pieza no solo se vea bien: encaje y funcione.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Explorar productos
                </a>
                <a
                  href="#marcas"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Ver marcas compatibles
                </a>
              </div>
            </div>

            <article className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.65)] backdrop-blur">
              <div className="aspect-[4/3] rounded-[28px] border border-white/10 bg-[linear-gradient(90deg,#090909_0%,#161617_40%,#2b1206_72%,#ff6a00_165%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/8 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,106,0,0.08))] p-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-orange-300">Catálogo real</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      Producto serio para marcas y motos reales.
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {quickFacts.map((fact) => (
                      <div key={fact.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-zinc-400">{fact.label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="marcas" className="border-b border-white/10 bg-[#0d0d0f] px-6 py-8 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Marcas compatibles</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Diseñado para el universo real de motocross y enduro.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              KTM, Husqvarna, GasGas, Yamaha, Honda, Kawasaki, Ducati, Suzuki y más. La compatibilidad tiene que leerse rápido y sentirse como parte central de la marca.
            </p>
          </div>

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
        </div>
      </section>

      <section id="categorias" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Categorías</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Protectores, soportes, accesorios y desarrollo a medida.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            La home tiene que oler a catálogo real. Menos explicación y más familias de producto que ayuden a entender rápido qué tipo de piezas hace CAL 3D y para qué tipo de moto están pensadas.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryBlocks.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Compatibilidad y fit</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              La promesa no es solo imprimir. La promesa es que la pieza encaje, monte bien y aguante.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
              En este negocio no basta con verse bien. Lo importante es ajuste, compatibilidad, montaje, material y resistencia en uso real. Esa confianza tiene que sentirse fuerte en la marca y en cada bloque de producto.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-300">Catálogo</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Buscar por marca, modelo, cilindrada y año</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              La lógica correcta del proyecto es que la home empuje a un catálogo donde la compatibilidad se pueda filtrar de forma real. Por eso el siguiente nivel natural está ya montado en la subpágina de productos.
            </p>
            <a
              href="/productos"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              Ir al catálogo
            </a>
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
                  Cuéntanos para qué moto o aplicación es, qué problema quieres resolver y qué nivel de ajuste necesitas. La idea es ayudarte a convertirlo en una pieza útil, compatible y bien resuelta.
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
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Ver catálogo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
