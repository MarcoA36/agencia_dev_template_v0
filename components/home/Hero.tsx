// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-3xl mx-auto text-center space-y-8">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
//             Soluciones digitales para tu negocio
//           </h1>
//           <p className="text-xl text-muted-foreground leading-relaxed">
//             Sitios web, aplicaciones, sistemas y estrategias pensadas para
//             trabajar de manera conjunta y adaptadas a lo que tu
//             emprendimiento necesita.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contacto">
//               <Button size="lg" className="w-full sm:w-auto">
//                 Solicitar presupuesto
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>

//             <Link href="/servicios">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="w-full sm:w-auto bg-transparent"
//               >
//                 Ver servicios
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative py-24 md:py-40 overflow-hidden">
//       {/* Imagen de fondo */}
//       <div className="absolute inset-0">
//         <img
//           src="/hero-bg.jpg"
//           alt="Background"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* Overlay oscuro para que el texto se lea bien */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-3xl mx-auto text-center text-white space-y-8">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
//             Soluciones digitales para tu negocio
//           </h1>

//           <p className="text-xl text-white/80 leading-relaxed">
//             Sitios web, aplicaciones, sistemas y estrategias pensadas para
//             trabajar de manera conjunta y adaptadas a lo que tu emprendimiento
//             necesita.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contacto">
//               <Button size="lg" className="w-full sm:w-auto">
//                 Solicitar presupuesto
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>

//             <Link href="/servicios">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-black"
//               >
//                 Ver servicios
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
    Soluciones digitales para tu negocio
  </h1>

  <p className="text-2xl md:text-[1.45rem] text-white/80 leading-relaxed font-light">
    Sitios web, aplicaciones, sistemas y estrategias diseñadas con precisión 
    para impulsar el crecimiento de tu emprendimiento.
  </p>

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
