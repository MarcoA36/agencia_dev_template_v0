// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen flex items-center overflow-hidden">
//       {/* Imagen de fondo PRO */}
//       <Image
//         src="/sistemas-full.webp"
//         alt="Fondo"
//         fill
//         priority
//         className="object-cover"
//         quality={90}
//       />

//       {/* Overlay profesional */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black/50" />


//       <div className="container relative mx-auto px-6 z-10 text-center max-w-3xl space-y-10">
//   <h1 className="text-4xl md:text-6xl font-extrabold text-white/90 leading-tight tracking-tight">
//     Soluciones digitales para tu negocio
//   </h1>

//   <h3 className="text-2xl md:text-[1.45rem] text-white leading-relaxed">
//     Sitios y sistemas pensados 
//     para impulsar el crecimiento de tu emprendimiento.
//   </h3>

//   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//     <Link href="#contacto">
//       <Button size="lg" className="w-full sm:w-auto">
//         Solicitar presupuesto
//       </Button>
//     </Link>

//     <Link href="#servicios">
//       <Button
//         size="lg"
//         variant="outline"
//         className="
//           w-full sm:w-auto
//           border-white/40 text-black/90
//           hover:bg-primary hover:text-white hover:border-primary
//           transition-all
//         "
//       >
//         Ver servicios
//       </Button>
//     </Link>
//   </div>
// </div>

//     </section>
//   );
// }

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/sistemas-full.webp"
        // src="/digitization.jpg"
        // src="/webs2.png"
        alt="Fondo"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/40" />

      {/* Contenido */}
      <div className="container relative mx-auto p-6 z-10 text-center max-w-3xl space-y-10 bg-black/10 rounded-2xl">

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Soluciones <span className="text-primary">Digitales</span>  
          <br />
          para tu negocio
        </h1>

        <h3 className="text-2xl md:text-3xl text-white/90 leading-relaxed">
          Sitios y sistemas web diseñados para impulsar  
         tu emprendimiento
        </h3>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="#contacto">
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-6 text-lg rounded-xl cursor-pointer"
            >
              Solicitar presupuesto
            </Button>
          </Link>

          <Link href="#servicios">
            <Button
              size="lg"
              variant="outline"
              className="
                w-full sm:w-auto px-10 py-6 text-lg rounded-xl cursor-pointer
                border-white/60 text-black
                hover:bg-primary hover:text-white hover:border-primary
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
