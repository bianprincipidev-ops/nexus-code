export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center"
      style={{ background: "rgba(255,217,232,0.85)", backdropFilter: "blur(10px)" }}>
      
      <span className="text-crimson font-bold text-xl">nexus code.</span>

      <div className="hidden md:flex gap-8 text-cherry font-medium">
        <a href="#servicios" className="hover:text-crimson transition-colors">Servicios</a>
        <a href="#proyectos" className="hover:text-crimson transition-colors">Proyectos</a>
        <a href="#sobre-mi" className="hover:text-crimson transition-colors">Sobre mí</a>
        <a href="#contacto" className="hover:text-crimson transition-colors">Contacto</a>
      </div>
    </nav>
  );
}