// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function CTASection() {
//   return (
//     <section className="py-16 md:py-24 bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-balance">
//             ¿Listo para impulsar tu emprendimiento?
//           </h2>
//           <Link href="#contacto">
//             <Button size="lg" variant="secondary" className="mt-4">
//               Comenzar ahora
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-black/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Conecta con nosotros y comienza a transformar tus ideas en resultados reales.
          </p>
          <Link href="#contacto">
            <Button
              size="lg"
              className="mt-4 bg-primary text-white hover:bg-primary/90 border-none"
            >
              Comenzar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
