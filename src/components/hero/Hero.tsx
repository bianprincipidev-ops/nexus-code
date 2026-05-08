import Avatar3D from "./Avatar3D";

export default function Hero() {
  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-center px-6 pt-24 pb-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFD9E8 0%, #FFB7CE 50%, #FF91AF 100%)" }}
    >
      {/* Círculos decorativos fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20" style={{background:"#D94C6F"}}/>
      <div className="absolute top-40 right-16 w-20 h-20 rounded-full opacity-15" style={{background:"#D94C6F"}}/>
      <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full opacity-20" style={{background:"#D94C6F"}}/>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-15" style={{background:"#D94C6F"}}/>

      {/* Texto flotante costado izquierdo */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-40">
        <span className="text-crimson font-bold text-sm tracking-widest rotate-[-90deg]">FULLSTACK</span>
        <span className="text-crimson font-bold text-sm tracking-widest rotate-[-90deg]">DEVELOPER</span>
      </div>

      {/* Texto flotante costado derecho */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-40">
        <span className="text-crimson font-bold text-sm tracking-widest rotate-[90deg]">NEXUS</span>
        <span className="text-crimson font-bold text-sm tracking-widest rotate-[90deg]">CODE</span>
      </div>

      {/* Flores/detalles decorativos */}
      <div className="absolute top-32 left-32 text-4xl opacity-30 animate-bounce">🌸</div>
      <div className="absolute top-48 right-40 text-3xl opacity-25" style={{animation:"bounce 2s infinite 0.5s"}}>🌸</div>
      <div className="absolute bottom-48 left-40 text-2xl opacity-20" style={{animation:"bounce 2s infinite 1s"}}>🌸</div>
      <div className="absolute bottom-32 right-32 text-3xl opacity-25" style={{animation:"bounce 2s infinite 1.5s"}}>🌸</div>

      <Avatar3D />

      <div className="text-center max-w-xl relative z-10">
        <p className="text-cherry font-semibold tracking-widest uppercase text-sm mb-3">
          Fullstack Freelance Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-crimson mb-4">
          Nexus Code
        </h1>
        <p className="text-cherry text-lg mb-8">
          Creo sitios web y aplicaciones modernas que ayudan a tu negocio a crecer.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://wa.me/543586013899"
            className="bg-crimson text-white px-8 py-3 rounded-full font-semibold hover:bg-cherry transition-all">
            Hablemos 💬
          </a>
          <a href="#proyectos"
            className="border-2 border-crimson text-crimson px-8 py-3 rounded-full font-semibold hover:bg-crimson hover:text-white transition-all">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}