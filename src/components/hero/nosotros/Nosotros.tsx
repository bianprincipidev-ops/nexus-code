import React from 'react';

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 px-6" style={{ background: "#fff0f5" }}>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="font-semibold tracking-widest uppercase text-sm mb-3" style={{ color: "#F06A8C" }}>
          Quién soy
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#D94C6F" }}>
          Sobre Nexus Code
        </h2>
        
        <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#F06A8C" }}>
          Soy Bianca, desarrolladora fullstack de <span className="font-bold" style={{ color: "#D94C6F" }}>Río Cuarto, Córdoba</span>. 
          A través de Nexus Code, me dedico a transformar ideas en soluciones tecnológicas reales. 
          Mi enfoque es trabajar codo a codo con vos para crear herramientas que impulsen tu negocio, 
          combinando diseño moderno con un desarrollo robusto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Tarjeta: Mi Filosofía */}
        <div className="p-10 rounded-3xl bg-white border-1.5 transition-all hover:scale-[1.02]" 
             style={{ border: "1.5px solid #FFB7CE" }}>
          <div className="w-12 h-1 mb-6" style={{ background: "#D94C6F" }}></div>
          <h4 className="text-2xl font-bold mb-4" style={{ color: "#D94C6F" }}>Mi filosofía</h4>
          <p className="leading-relaxed" style={{ color: "#F06A8C" }}>
            Creo en crear soluciones simples, rápidas y escalables. Me enfoco en lo que realmente importa: 
            que la tecnología sea una herramienta que te facilite la vida, sin complicaciones técnicas 
            innecesarias ni procesos lentos.
          </p>
        </div>

        {/* Tarjeta: Mi forma de trabajar */}
        <div className="p-10 rounded-3xl bg-white border-1.5 transition-all hover:scale-[1.02]" 
             style={{ border: "1.5px solid #FFB7CE" }}>
          <div className="w-12 h-1 mb-6" style={{ background: "#D94C6F" }}></div>
          <h4 className="text-2xl font-bold mb-4" style={{ color: "#D94C6F" }}>Cómo trabajo</h4>
          <p className="leading-relaxed" style={{ color: "#F06A8C" }}>
            Al trabajar conmigo, tenés comunicación directa en todo momento. Me adapto a tu ritmo 
            y a las necesidades específicas de tu proyecto, asegurando que cada detalle esté 
            alineado con lo que buscás para tu marca o empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;