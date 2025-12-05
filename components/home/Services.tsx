// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Code,
//   Smartphone,
//   Settings,
//   TrendingUp,
//   Wrench,
//   Search,
//   ArrowRight,
// } from "lucide-react";

// export default function ServicesSection() {

//   const services = [
//     {
//       icon: Code,
//       title: "Diseño y Desarrollo Web",
//       description:
//         "Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes. Utilizamos las últimas tecnologías para garantizar rendimiento y escalabilidad.",
//       benefits: [
//         "Diseño responsive adaptado a todos los dispositivos",
//         "Optimización de velocidad y rendimiento",
//         "SEO integrado desde el inicio",
//       ],
//     },
//     {
//       icon: Smartphone,
//       title: "Aplicaciones Móviles",
//       description:
//         "Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales en iOS y Android.",
//       benefits: [
//         "Desarrollo nativo y multiplataforma",
//         "Interfaz intuitiva y atractiva",
//         "Integración con APIs y servicios",
//         "Publicación en App Store y Google Play",
//       ],
//     },
//     {
//       icon: Settings,
//       title: "Sistemas de Gestión",
//       description:
//         "Creamos herramientas digitales personalizadas que se adaptan perfectamente a los procesos de tu negocio.",
//       benefits: [
//         "Soluciones 100% personalizadas",
//         "Automatización de procesos",
//         "Integración con sistemas existentes",
//         "Escalabilidad",
//       ],
//     },
//     {
//       icon: Wrench,
//       title: "Mantenimiento y Soporte",
//       description:
//         "Mantenemos tu sitio web o aplicación funcionando perfectamente con actualizaciones regulares, monitoreo y soporte técnico.",
//       benefits: [
//         "Actualizaciones de seguridad",
//         "Soporte técnico prioritario",
//       ],
//     },
//     {
//       icon: Search,
//       title: "Optimización SEO",
//       description:
//         "Mejoramos tu visibilidad en buscadores con estrategias SEO efectivas que atraen tráfico cualificado a tu sitio.",
//       benefits: [
//         "Auditoría SEO completa",
//         "Optimización on-page y técnica",
//         "Estrategia de contenidos",
//       ],
//     },
//     {
//       icon: TrendingUp,
//       title: "Consultoría Digital",
//       description:
//         "Te ayudamos a definir la mejor estrategia digital para alcanzar tus objetivos de negocio con soluciones efectivas.",
//       benefits: [
//         "Análisis de necesidades",
//         "Planificación estratégica",
//         "Selección de tecnologías",
//       ],
//     },
//   ];
//   return (
//     <section id="servicios" className="py-32 md:py-40 bg-muted/40 relative overflow-hidden">

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
//             Nuestros Servicios
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Soluciones digitales diseñadas para impulsar tu crecimiento con
//             tecnología moderna, confiable e innovadora.
//           </p>
//         </div>

//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
//             <CardContent className="p-8 space-y-5">
//               <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Code className="h-7 w-7 text-primary" />
//               </div>
//               <h3 className="text-2xl font-semibold">Diseño Web</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 Sitios modernos, responsivos y diseñados para transmitir
//                 profesionalismo y convertir visitantes en clientes.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
//             <CardContent className="p-8 space-y-5">
//               <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Settings className="h-7 w-7 text-primary" />
//               </div>
//               <h3 className="text-2xl font-semibold">Sistemas a Medida</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 Soluciones digitales creadas especialmente para tu negocio,
//                 optimizando procesos y mejorando tu operación.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
//             <CardContent className="p-8 space-y-5">
//               <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Smartphone className="h-7 w-7 text-primary" />
//               </div>
//               <h3 className="text-2xl font-semibold">Aplicaciones Móviles</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 Apps rápidas, modernas e intuitivas, listas para el mundo móvil
//                 actual.
//               </p>
//             </CardContent>
//           </Card>
//         </div> */}
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {services.map((service, index) => {
//                 const Icon = service.icon;
//                 return (
//                   <Card
//                     key={index}
//                     className="border-2 hover:border-primary transition-colors"
//                   >
//                     <CardHeader>
//                       <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                         <Icon className="h-6 w-6 text-primary" />
//                       </div>
//                       <CardTitle className="text-2xl">
//                         {service.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <p className="text-muted-foreground leading-relaxed">
//                         {service.description}
//                       </p>
//                       <ul className="space-y-2">
//                         {service.benefits.map((benefit, idx) => (
//                           <li
//                             key={idx}
//                             className="flex items-start gap-2 text-sm"
//                           >
//                             <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
//                             <span className="text-muted-foreground">
//                               {benefit}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//       </div>
//     </section>
//   );
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Settings } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Diseño y Desarrollo Web",
      description:
        "Creamos sitios web modernos y responsivos que no solo se ven bien, sino que convierten visitantes en clientes. Cada proyecto se desarrolla pensando en la experiencia del usuario, velocidad y SEO.",
      benefits: [
        "Diseño adaptado a todos los dispositivos",
        "Optimización de velocidad y rendimiento",
        "SEO integrado desde el inicio",
        "Experiencia de usuario optimizada",
      ],
    },
    {
      icon: Settings,
      title: "Sistemas de Gestión y Herramientas",
      description:
        "Desarrollamos sistemas a medida para que tu negocio funcione de manera más eficiente. Automatizamos procesos, gestionamos datos y facilitamos la toma de decisiones.",
      benefits: [
        "Sistemas 100% personalizados",
        "Automatización de procesos repetitivos",
        "Integración con herramientas existentes",
        "Escalabilidad para crecer sin límites",
      ],
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description:
        "Diseñamos apps móviles nativas y multiplataforma que ofrecen experiencias intuitivas y atractivas en iOS y Android. Pensadas para interactuar y fidelizar a tus usuarios.",
      benefits: [
        "Desarrollo nativo y multiplataforma",
        "Interfaz intuitiva y atractiva",
        "Integración con APIs y servicios",
        "Publicación en App Store y Google Play",
      ],
    },
  ];

  return (
<section id="servicios" className="py-32 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

    {/* ----- SERVICIO 1: DESARROLLO WEB ----- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Imagen */}
      <div>
        <img
          src="/webs2.png"
          alt="Desarrollo de páginas web"
          className="w-full max-w-lg mx-auto"
        />
      </div>

      {/* Texto */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
         Páginas Web
        </h2>

        <p className="text-lg text-black/70 leading-relaxed mb-6">
          Creamos sitios web modernos, rápidos, escalables y orientados a la conversión.
          Tu página será una herramienta real para atraer clientes y posicionarte en internet.
        </p>

        <h3 className="text-primary font-semibold text-xl mb-4">
          — ¿Qué incluye el desarrollo web?
        </h3>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Diseño totalmente personalizado y adaptable a tu negocio.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Optimización SEO para aparecer en Google.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Velocidad optimizada y experiencia profesional.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Implementación de formularios, catálogos, secciones y más.</p>
          </li>
        </ul>
      </div>
    </div>

    {/* ----- SERVICIO 2: DESARROLLO DE SISTEMAS ----- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Texto */}
      <div className="md:order-2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Sistemas de gestión y herramientas
        </h2>

        <p className="text-lg text-black/70 leading-relaxed mb-6">
          Automatizamos procesos, creamos plataformas internas, paneles de administración,
          sistemas de control y soluciones personalizadas para tu negocio.
        </p>

        <h3 className="text-primary font-semibold text-xl mb-4">
          — ¿Qué tipo de sistemas desarrollamos?
        </h3>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Sistemas de gestión: clientes, productos, ventas, inventarios.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Plataformas web internas para tu empresa.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Apps móviles conectadas a tu sistema.</p>
          </li>

          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
            <p className="text-black/80">Automatización de tareas y optimización de procesos.</p>
          </li>
        </ul>
      </div>

      {/* Imagen */}
      <div className="md:order-1">
        <img
          src="/imagen-grafico.jpg"
          alt="Desarrollo de sistemas"
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </div>

  </div>
</section>



  );
}
