"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  displacement: string;
  year: string;
  status: "Disponible" | "Bajo pedido";
  description: string;
};

const products: Product[] = [
  {
    id: "ktm-disc-guard-2024",
    name: "Protector delantero reforzado",
    category: "Protección",
    brand: "KTM",
    model: "250 EXC",
    displacement: "250cc",
    year: "2024",
    status: "Disponible",
    description: "Protector pensado para uso off-road real, con foco en ajuste y resistencia.",
  },
  {
    id: "husky-cable-guide-2023",
    name: "Guía de cableado técnico",
    category: "Montaje",
    brand: "Husqvarna",
    model: "TE 300",
    displacement: "300cc",
    year: "2023",
    status: "Disponible",
    description: "Pieza de montaje limpio para mantener guiado y orden en zonas críticas.",
  },
  {
    id: "yamaha-bracket-2022",
    name: "Soporte de accesorio lateral",
    category: "Soportes",
    brand: "Yamaha",
    model: "YZ 250F",
    displacement: "250cc",
    year: "2022",
    status: "Bajo pedido",
    description: "Soporte funcional desarrollado para montaje estable y geometría bien resuelta.",
  },
  {
    id: "kawasaki-cover-2024",
    name: "Cubierta técnica de protección",
    category: "Protección",
    brand: "Kawasaki",
    model: "KX 450",
    displacement: "450cc",
    year: "2024",
    status: "Disponible",
    description: "Solución de protección orientada a barro, vibración y uso intensivo.",
  },
  {
    id: "gasgas-mount-2023",
    name: "Anclaje de fijación a medida",
    category: "Montaje",
    brand: "GasGas",
    model: "EC 300",
    displacement: "300cc",
    year: "2023",
    status: "Bajo pedido",
    description: "Anclaje adaptado a geometría concreta con enfoque de uso y compatibilidad.",
  },
  {
    id: "honda-hrc-guard-2021",
    name: "Protector compacto HRC-style",
    category: "Protección",
    brand: "Honda",
    model: "CRF 450R",
    displacement: "450cc",
    year: "2021",
    status: "Disponible",
    description: "Pieza compacta enfocada a protección, estética limpia y montaje correcto.",
  },
  {
    id: "ducati-multifit-spacer",
    name: "Spacer técnico multifit",
    category: "Ajuste",
    brand: "Ducati",
    model: "DesertX",
    displacement: "937cc",
    year: "2024",
    status: "Bajo pedido",
    description: "Spacer mecanizado/impreso para resolver montaje y tolerancias específicas.",
  },
  {
    id: "suzuki-brace-2020",
    name: "Refuerzo funcional de montaje",
    category: "Ajuste",
    brand: "Suzuki",
    model: "RM-Z 450",
    displacement: "450cc",
    year: "2020",
    status: "Disponible",
    description: "Refuerzo orientado a fijación estable y mejor comportamiento en uso real.",
  },
];

const unique = (key: keyof Product) => Array.from(new Set(products.map((item) => item[key])));

const brands = unique("brand");
const models = unique("model");
const displacements = unique("displacement");
const years = unique("year").sort((a, b) => Number(b) - Number(a));

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/60"
      >
        <option value="">Todos</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#101012] text-white">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function ProductosPage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [year, setYear] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (brand && product.brand !== brand) return false;
      if (model && product.model !== model) return false;
      if (displacement && product.displacement !== displacement) return false;
      if (year && product.year !== year) return false;
      return true;
    });
  }, [brand, model, displacement, year]);

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_left,_rgba(255,106,0,0.18),_transparent_28%),linear-gradient(90deg,#090909_0%,#121214_42%,#2b1206_72%,#ff6a00_160%)]">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <Link href="/" className="inline-flex text-sm text-zinc-300 transition hover:text-white">
                ← Volver a inicio
              </Link>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Catálogo de productos</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Filtra por marca, modelo, cilindrada y año para encontrar la pieza correcta.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Esta vista está pensada para hacer visible la compatibilidad desde el primer momento y reducir fricción en la búsqueda de producto.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-black/25 px-6 py-5 text-sm text-zinc-300">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Resultados visibles</div>
              <div className="mt-2 text-3xl font-semibold text-white">{filteredProducts.length}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-400">Filtros</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Compatibilidad</h2>
              </div>
              <button
                onClick={() => {
                  setBrand("");
                  setModel("");
                  setDisplacement("");
                  setYear("");
                }}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Limpiar
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              <FilterSelect label="Marca" value={brand} onChange={setBrand} options={brands} />
              <FilterSelect label="Modelo" value={model} onChange={setModel} options={models} />
              <FilterSelect label="Cilindrada" value={displacement} onChange={setDisplacement} options={displacements} />
              <FilterSelect label="Año" value={year} onChange={setYear} options={years} />
            </div>
          </aside>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.id} className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-sm">
                <div className="aspect-[4/3] rounded-[24px] bg-[linear-gradient(90deg,#0f0f10_0%,#1a1a1c_42%,#2b1206_75%,#ff6a00_170%)]" />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">{product.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{product.name}</h3>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.status === "Disponible" ? "bg-emerald-500/15 text-emerald-300" : "bg-orange-500/15 text-orange-300"}`}>
                    {product.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">{product.brand}</span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">{product.model}</span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">{product.displacement}</span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">{product.year}</span>
                </div>
                <button className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
                  Ver producto
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
