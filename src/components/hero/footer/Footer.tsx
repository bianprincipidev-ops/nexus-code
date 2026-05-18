import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t" style={{ background: "#fff0f5", borderColor: "#FFB7CE" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Marca / Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold" style={{ color: "#D94C6F" }}>
            Nexus Code
          </h2>
          <p className="text-sm mt-2" style={{ color: "#F06A8C" }}>
            Desarrollo Fullstack desde Río Cuarto, Córdoba.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6">
          {/* GitHub */}
          <a 
            href="https://github.com/tu-usuario" // Reemplazalo por tu perfil de GitHub
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:scale-110"
            style={{ color: "#D94C6F" }}
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            🐙
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/tu-instagram" // Reemplazalo por tu @
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:scale-110"
            style={{ color: "#D94C6F" }}
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            📸
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/543586013899" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:scale-110"
            style={{ color: "#D94C6F" }}
            title="WhatsApp"
          >
            <span className="sr-only">WhatsApp</span>
            💬
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right" style={{ color: "#F06A8C" }}>
          <p>© {year} Nexus Code.</p>
          <p>Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;