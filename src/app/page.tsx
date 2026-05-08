import Hero from "@/components/hero/Hero";
import Navbar from "@/components/hero/navbar/Navbar";
import Servicios from "@/components/hero/servicios/Servicios";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
    </main>
  );
}
