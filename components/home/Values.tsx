// import { Zap, Target, Users } from "lucide-react";

// export default function ValuesSection() {
//   return (
//     <section id="nosotros" className="py-32 md:py-40">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center mb-20">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
//           Los principios que guían cada proyecto y nos diferencian en la forma de trabajar
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {[
//             {
//               icon: <Zap className="h-8 w-8 text-primary" />,
//               title: "Innovación",
//               desc: "Aplicamos las últimas tecnologías para crear soluciones vanguardistas."
//             },
//             {
//               icon: <Target className="h-8 w-8 text-primary" />,
//               title: "Compromiso",
//               desc: "Nos dedicamos al éxito de cada proyecto como si fuera propio."
//             },
//             {
//               icon: <Users className="h-8 w-8 text-primary" />,
//               title: "Trabajo en Equipo",
//               desc: "Colaboramos estrechamente contigo en cada etapa del proceso."
//             }
//           ].map((value, i) => (
//             <div
//               key={i}
//               className="bg-card/80 backdrop-blur-sm rounded-2xl p-10 space-y-6 border border-border hover:shadow-lg transition-all duration-300"
//             >
//               <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
//                 {value.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-center">
//                 {value.title}
//               </h3>
//               <p className="text-muted-foreground text-center leading-relaxed">
//                 {value.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Zap, Target, Users } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Innovación",
      desc: "Aplicamos las últimas tecnologías para crear soluciones vanguardistas."
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Compromiso",
      desc: "Nos dedicamos al éxito de cada proyecto como si fuera propio."
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Trabajo en Equipo",
      desc: "Colaboramos estrechamente contigo en cada etapa del proceso."
    }
  ];

  return (
    <section id="nosotros" className="py-32 md:py-40 bg-primary/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Principios que guían nuestro trabajo
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Estos son los valores que nos diferencian y que aplicamos en cada proyecto para garantizar resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {values.map((value, i) => (
            <div key={i} className="space-y-4">
              <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-white/10">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="text-white/80 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
