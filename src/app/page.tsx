const services = [
  {
    title: "Piezas funcionales para motocross",
    text: "Fabricación de piezas técnicas, soportes, protectores y soluciones personalizadas para moto y equipamiento.",
  },
  {
    title: "Diseño CAD y prototipado",
    text: "Desarrollo desde idea, pieza rota o necesidad concreta hasta prototipo funcional listo para probar.",
  },
  {
    title: "Producción a medida",
    text: "Series cortas, ajustes específicos y piezas pensadas para montaje real, no solo para enseñar un render.",
  },
];

const featuredParts = [
  {
    name: "Soportes y anclajes",
    description: "Piezas adaptadas a tu moto, accesorios o necesidades concretas de montaje.",
  },
  {
    name: "Protectores y refuerzos",
    description: "Soluciones impresas para proteger, fijar o mejorar componentes expuestos al uso real.",
  },
  {
    name: "Piezas personalizadas",
    description: "Diseño y fabricación bajo pedido para motocross, taller y proyectos técnicos.",
  },
];

const process = [
  "Cuéntanos qué necesitas o envíanos la pieza de referencia.",
  "Diseñamos la solución en CAD y validamos medidas y montaje.",
  "Fabricamos un prototipo o pieza final según el uso.",
  "Probamos, ajustamos y dejamos la pieza lista para uso real.",
];

const materials = ["PLA técnico", "PETG", "ABS / ASA", "Otros materiales según aplicación"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,107,53,0.25),_transparent_35%),linear-gradient(180deg,#131316_0%,#0e0e10_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">CAL Design 3D</p>
              <p className="mt-2 text-sm text-zinc-400">Diseño técnico e impresión 3D para motocross y piezas personalizadas</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-zinc-300">
              <a href="#servicios" className="transition hover:text-white">Servicios</a>
              <a href="#piezas" className="transition hover:text-white">Piezas</a>
              <a href="#proceso" className="transition hover:text-white">Proceso</a>
              <a href="#contacto" className="transition hover:text-white">Contacto</a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Prototipos, piezas funcionales y soluciones a medida
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Piezas impresas en 3D pensadas para el uso real en motocross.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Diseñamos y fabricamos piezas técnicas, soportes, protectores y soluciones personalizadas para moto,
                taller y proyectos donde importa que encaje, funcione y resista.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Pedir presupuesto
                </a>
                <a
                  href="#piezas"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Ver trabajos
                </a>
              </div>
            </div>

            <article className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.6)] backdrop-blur">
              <div className="aspect-[4/3] rounded-[24px] bg-[linear-gradient(135deg,#2a2a2f,#121214)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Aplicaciones</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Motocross, prototipado y piezas a medida</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-zinc-400">Enfoque</p>
                      <p className="mt-2 text-lg font-semibold text-white">Funcional</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-zinc-400">Trabajo</p>
                      <p className="mt-2 text-lg font-semibold text-white">A medida</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-zinc-400">Base</p>
                      <p className="mt-2 text-lg font-semibold text-white">CAD + impresión 3D</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-zinc-400">Objetivo</p>
                      <p className="mt-2 text-lg font-semibold text-white">Encajar y durar</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Servicios</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Qué hacemos</h2>
          <p className="text-base leading-7 text-zinc-400 sm:text-lg">
            Un enfoque práctico: diseñar, prototipar y fabricar piezas que tengan sentido fuera de la pantalla.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="piezas" className="border-y border-white/10 bg-[#121215]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Piezas</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Trabajos y aplicaciones</h2>
            <p className="text-base leading-7 text-zinc-400 sm:text-lg">
              El objetivo no es solo imprimir: es fabricar piezas que resuelvan un problema real y se puedan montar con confianza.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredParts.map((part) => (
              <article key={part.name} className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-sm">
                <div className="h-48 bg-[linear-gradient(135deg,#ff6b35,#602c1b)]" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{part.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{part.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Proceso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Cómo trabajamos</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
              {process.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-sm font-semibold text-orange-300">0{index + 1}</p>
                  <p className="mt-2">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Materiales</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Elegimos el material según la pieza y su uso</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              No todas las piezas piden lo mismo. Según esfuerzo, temperatura, flexibilidad o acabado, trabajamos con distintos materiales para ajustar la solución al uso real.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {materials.map((material) => (
                <div key={material} className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm font-medium text-white">
                  {material}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-[#121215]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,53,0.18),rgba(255,255,255,0.03))] p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Contacto</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Si tienes una pieza en mente, la trabajamos contigo.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Cuéntanos qué necesitas, para qué moto o aplicación es, y vemos la mejor forma de diseñarlo y fabricarlo.
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
