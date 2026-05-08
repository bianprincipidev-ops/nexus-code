"use client";
import { useState } from "react";

const servicios = [
  {
    numero: "01",
    titulo: "Sitios web a medida",
    descripcion: "Diseño y desarrollo de sitios web únicos, modernos y optimizados para convertir visitantes en clientes.",
    icon: "🌐",
  },
  {
    numero: "02",
    titulo: "Landing pages",
    descripcion: "Páginas de aterrizaje enfocadas en resultados, diseñadas para maximizar conversiones y ventas.",
    icon: "🚀",
  },
  {
    numero: "03",
    titulo: "Aplicaciones web",
    descripcion: "Desarrollo de apps web completas, desde el frontend hasta el backend y la base de datos.",
    icon: "⚙️",
  },
  {
    numero: "04",
    titulo: "E-commerce",
    descripcion: "Tiendas online completas con carrito, pagos y gestión de productos integrados.",
    icon: "🛒",
  },
  {
    numero: "05",
    titulo: "Sistemas a medida",
    descripcion: "Software empresarial personalizado para automatizar y optimizar los procesos de tu negocio.",
    icon: "🖥️",
  },
  {
    numero: "06",
    titulo: "Rediseño web",
    descripcion: "Modernizamos tu sitio actual con tecnologías actuales, mejor diseño y mayor velocidad.",
    icon: "✨",
  },
];

export default function Servicios() {
  const [current, setCurrent] = useState(0);
  const visible = 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(servicios.length - visible, c + 1));

  return (
    <section id="servicios" className="py-24 px-6" style={{ background: "#fff0f5" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-semibold tracking-widest uppercase text-sm mb-3" style={{ color: "#F06A8C" }}>
          Lo que hago
        </p>
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4" style={{ color: "#D94C6F" }}>
          Servicios
        </h2>
        <p className="text-center mb-14 text-lg" style={{ color: "#F06A8C" }}>
          Soluciones web diseñadas para hacer crecer tu negocio
        </p>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${current * (100 / visible)}% - ${current * 8}px))` }}
          >
            {servicios.map((s) => (
              <div
                key={s.numero}
                className="flex-shrink-0 rounded-2xl p-8 flex flex-col gap-4 relative"
                style={{
                  width: `calc(${100 / visible}% - 16px)`,
                  background: "white",
                  border: "1.5px solid #FFB7CE",
                }}
              >
                <span className="text-4xl">{s.icon}</span>
                <span className="absolute top-6 right-6 text-sm font-bold" style={{ color: "#FFB7CE" }}>
                  {s.numero}
                </span>
                <h3 className="text-xl font-bold" style={{ color: "#D94C6F" }}>
                  {s.titulo}
                </h3>
                <p style={{ color: "#F06A8C" }}>{s.descripcion}</p>
                <a
                  href="https://wa.me/543586013899"
                  className="mt-auto font-semibold hover:underline"
                  style={{ color: "#D94C6F" }}
                >
                  Consultar
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all disabled:opacity-30"
            style={{ background: "#FFB7CE", color: "#D94C6F" }}
          >
            &#8592;
          </button>

          <div className="flex gap-2">
            {Array.from({ length: servicios.length - visible + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ background: i === current ? "#D94C6F" : "#FFB7CE" }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === servicios.length - visible}
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all disabled:opacity-30"
            style={{ background: "#FFB7CE", color: "#D94C6F" }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}