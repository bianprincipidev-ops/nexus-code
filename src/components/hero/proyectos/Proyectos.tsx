import React from 'react';

const proyectos = [
  {
    titulo: "UrbanKicks",
    descripcion: "E-commerce especializado en calzado urbano con una interfaz moderna y pagos integrados.",
    imagen: "/urbankicks.png", 
    link: "https://urbankicks.com.ar/",
    tags: ["Next.js", "React", "Tailwind"]
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: "#fff0f5" }}>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="font-semibold tracking-widest uppercase text-sm mb-3" style={{ color: "#F06A8C" }}>
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#D94C6F" }}>
          Proyectos que realicé
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#F06A8C" }}>
          Trabajos reales que reflejan mi compromiso con la calidad y la eficiencia tecnológica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <div 
            key={index} 
            className="group rounded-3xl overflow-hidden bg-white transition-all hover:scale-[1.02]"
            style={{ border: "1.5px solid #FFB7CE" }}
          >
            <div className="aspect-video relative overflow-hidden border-b" style={{ borderColor: "#FFB7CE" }}>
              <img 
                src={proyecto.imagen} 
                alt={proyecto.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border"
                    style={{ 
                      background: "#fff0f5", 
                      color: "#D94C6F", 
                      borderColor: "#FFB7CE" 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold mb-3" style={{ color: "#D94C6F" }}>
                {proyecto.titulo}
              </h4>
              <p className="mb-6 line-clamp-2" style={{ color: "#F06A8C" }}>
                {proyecto.descripcion}
              </p>
              <a 
                href={proyecto.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold transition-colors hover:underline"
                style={{ color: "#D94C6F" }}
              >
                Explorar Proyecto 
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}