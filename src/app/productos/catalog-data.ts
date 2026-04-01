export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  displacement: string;
  year: string;
  status: "Disponible" | "Bajo pedido";
  description: string;
  price: number;
};

export const products: Product[] = [
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
    price: 59,
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
    price: 42,
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
    price: 48,
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
    price: 64,
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
    price: 46,
  },
  {
    id: "honda-wing-guard-2021",
    name: "Protector compacto Honda wing",
    category: "Protección",
    brand: "Honda",
    model: "CRF 450R",
    displacement: "450cc",
    year: "2021",
    status: "Disponible",
    description: "Pieza compacta enfocada a protección, estética limpia y montaje correcto.",
    price: 57,
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
    description: "Spacer técnico para resolver montaje y tolerancias específicas.",
    price: 39,
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
    price: 44,
  },
];
