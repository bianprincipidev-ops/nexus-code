"use client";

import React from 'react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 px-6" style={{ background: "#fff0f5" }}>
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="font-semibold tracking-widest uppercase text-sm mb-3" style={{ color: "#F06A8C" }}>
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#D94C6F" }}>
            Contacto
          </h2>
          <p className="text-lg" style={{ color: "#F06A8C" }}>
            Elegí la forma que prefieras para comunicarte conmigo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Columna Izquierda: Formas de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#D94C6F" }}>Formas de contacto</h3>
            
            <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                href="https://wa.me/543586013899" 
                target="_blank" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border-1.5 transition-transform hover:scale-[1.02]"
                style={{ border: "1.5px solid #FFB7CE" }}
                >
                <span className="text-3xl">💬</span>
                <div>
                    <h4 className="font-bold" style={{ color: "#D94C6F" }}>WhatsApp</h4>
                    <p style={{ color: "#F06A8C" }}>Respuesta inmediata</p>
                </div>
                </a>

                {/* Email */}
                <div 
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border-1.5"
                style={{ border: "1.5px solid #FFB7CE" }}
                >
                <span className="text-3xl">✉️</span>
                <div>
                    <h4 className="font-bold" style={{ color: "#D94C6F" }}>Email</h4>
                    <p style={{ color: "#F06A8C" }}>bianprincipi.dev@gmail.com</p>
                </div>
                </div>
            </div>

            {/* Ubicación */}
            <div className="mt-12">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#D94C6F" }}>Ubicación</h3>
                <p style={{ color: "#F06A8C" }}>Río Cuarto, Córdoba, Argentina</p>
            </div>
            </div>

          {/* Columna Derecha: Formulario */}
          <div className="p-8 rounded-3xl bg-white border-1.5 shadow-sm" style={{ border: "1.5px solid #FFB7CE" }}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F]"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F]"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Contame sobre tu proyecto"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F] resize-none"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: "#D94C6F" }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}