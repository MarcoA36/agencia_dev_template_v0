import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
      {/* Imagen de fondo PRO */}
      <Image
        src="/hero-bg.jpg"
        alt="Fondo"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Overlay profesional */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />


      {/* Contenido */}
      {/* <div className="container relative mx-auto px-6 z-10 text-center max-w-3xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Soluciones digitales para tu negocio
        </h1>

        <p className="text-xl text-white/70 leading-relaxed">
          Sitios web, aplicaciones, sistemas y estrategias creadas para
          potenciar tu crecimiento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto">
            <Button size="lg" className="w-full sm:w-auto">
              Solicitar presupuesto <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/servicios">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Ver servicios
            </Button>
          </Link>
        </div>
      </div> */}
      <div className="container relative mx-auto px-6 z-10 text-center max-w-3xl space-y-10">
  <h1 className="text-4xl md:text-6xl font-extrabold text-white/90 leading-tight tracking-tight">
    Soluciones digitales para tu negocio
  </h1>

  <h3 className="text-2xl md:text-[1.45rem] text-white leading-relaxed">
    Sitios y sistemas pensados 
    para impulsar el crecimiento de tu emprendimiento.
  </h3>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="#contacto">
      <Button size="lg" className="w-full sm:w-auto">
        Solicitar presupuesto <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>

    <Link href="#servicios">
      <Button
        size="lg"
        variant="outline"
        className="
          w-full sm:w-auto
          border-white/40 text-black/90
          hover:bg-primary hover:text-white hover:border-primary
          transition-all
        "
      >
        Ver servicios
      </Button>
    </Link>
  </div>
</div>

    </section>
  );
}
