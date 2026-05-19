"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  // Estados para capturar los datos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  // Estados para la carga y feedback de la petición
  const [cargando, setCargando] = useState(false);
  const [estadoEnvio, setEstadoEnvio] = useState<"exito" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    setEstadoEnvio(null);

    // Mapeamos tus estados locales a las variables de la plantilla de EmailJS
    const templateParams = {
      name: nombre, // Va a {{name}}
      email: email, // Va a {{email}}
      message: mensaje, // Va a {{message}}
    };

    emailjs.send(
      'service_liffe5n', // Tu Service ID
      'template_gwbbqtz', // Tu Template ID
      templateParams,
      'GrCKGWOalagGhMi92' // Tu Public Key
    )
      .then((response) => {
        console.log('¡Éxito con EmailJS!', response.status, response.text);
        setEstadoEnvio("exito");
        // Limpiamos los inputs
        setNombre("");
        setEmail("");
        setMensaje("");
      })
      .catch((error) => {
        console.error("Error enviando con EmailJS:", error);
        setEstadoEnvio("error");
      })
      .finally(() => {
        setCargando(false);
      });
  }

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
              <a 
                href="mailto:bianprincipi.dev@gmail.com" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-white transition-transform hover:scale-[1.02] cursor-pointer"
                style={{ border: "1.5px solid #FFB7CE" }}
              >
                <span className="text-3xl">✉️</span>
                <div>
                  <h4 className="font-bold" style={{ color: "#D94C6F" }}>Email</h4>
                  <p style={{ color: "#F06A8C" }}>bianprincipi.dev@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Ubicación */}
            <div className="mt-12">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#D94C6F" }}>Ubicación</h3>
                <p style={{ color: "#F06A8C" }}>Río Cuarto, Córdoba, Argentina</p>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="p-8 rounded-3xl bg-white border-1.5 shadow-sm" style={{ border: "1.5px solid #FFB7CE" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F]"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F]"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#D94C6F" }}>Mensaje</label>
                <textarea 
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Contame sobre tu proyecto"
                  className="w-full p-4 rounded-xl outline-none border transition-colors focus:border-[#D94C6F] resize-none"
                  style={{ background: "#fff0f5", borderColor: "#FFB7CE", color: "#D94C6F" }}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={cargando}
                className="w-full py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: "#D94C6F" }}
              >
                {cargando ? "Enviando..." : "Enviar mensaje"}
              </button>

              {/* Estados de feedback visual */}
              {estadoEnvio === "exito" && (
                <p className="text-center font-semibold text-green-600 bg-green-50 p-3 rounded-xl border border-green-200">
                  ¡Mensaje enviado con éxito! 🎉
                </p>
              )}
              {estadoEnvio === "error" && (
                <p className="text-center font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                  Hubo un problema al enviar el mensaje. Intentá de nuevo más tarde. ❌
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}