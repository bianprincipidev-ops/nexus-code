"use client";
import React from 'react';

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎸" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Hostinger", icon: "🌐" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎨" },
  { name: "Ubuntu", icon: "🐧" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 overflow-hidden" style={{ background: "#fff0f5" }}>
      <div className="max-w-6xl mx-auto text-center mb-16 px-6">
        <p className="font-semibold tracking-widest uppercase text-sm mb-3" style={{ color: "#F06A8C" }}>
          Tecnologías
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#D94C6F" }}>
          Mi Stack Tecnológico
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#F06A8C" }}>
          Herramientas y lenguajes que utilizo para dar vida a tus proyectos
        </p>
      </div>

      {/* Carrusel Infinito */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-8">
          {/* Duplicamos el contenido para que el scroll sea infinito y fluido */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center min-w-[150px] p-6 rounded-2xl bg-white transition-transform hover:scale-110"
              style={{ border: "1.5px solid #FFB7CE" }}
            >
              <span className="text-4xl mb-3">{tech.icon}</span>
              <span className="font-bold text-sm uppercase tracking-wider" style={{ color: "#D94C6F" }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}