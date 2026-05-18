import Hero from "@/components/hero/Hero";
import Navbar from "@/components/hero/navbar/Navbar";
import Servicios from "@/components/hero/servicios/Servicios";
import Proyectos from "@/components/hero/proyectos/Proyectos";
import Nosotros from "@/components/hero/nosotros/Nosotros";
import TechStack from "@/components/hero/techstack/TechStack";
import Contacto from "@/components/hero/contacto/Contacto";
import Footer from "@/components/hero/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <Nosotros />
      <TechStack />
      <Contacto />
      <Footer />
    </main>
  );
}
