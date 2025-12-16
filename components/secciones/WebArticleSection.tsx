// export default function WebArticleSection() {
//     return (
//       <section className="py-28 bg-secondary/30">
//         <div className="container mx-auto px-4 max-w-4xl">
//           {/* Título */}
//           <header className="mb-14 text-center">
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               ¿Para qué sirve un sitio web?
//             </h2>
//             <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//               Un sitio web no es solo una tarjeta digital. Es una herramienta
//               estratégica para atraer clientes, generar confianza y hacer crecer
//               tu marca.
//             </p>
//           </header>
  
//           {/* Contenido */}
//           <article className="space-y-12 text-lg leading-relaxed text-gray-700">
//             <section>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 Presencia online propia
//               </h3>
//               <p>
//                 A diferencia de las redes sociales, un sitio web es un espacio que
//                 te pertenece. No depende de algoritmos ni de cambios externos. Es
//                 el lugar donde tu marca, tus servicios y tu mensaje se muestran de
//                 forma clara y profesional, las 24 horas del día.
//               </p>
//             </section>
  
//             <section>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 Confianza y profesionalismo
//               </h3>
//               <p>
//                 La mayoría de las personas buscan información en Google antes de
//                 tomar una decisión. Un sitio web bien diseñado transmite
//                 seriedad, respaldo y credibilidad. Es muchas veces el factor que
//                 define si alguien te contacta o sigue buscando.
//               </p>
//             </section>
  
//             <section>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 Generar contactos y oportunidades
//               </h3>
//               <p>
//                 Un sitio web convierte visitas en consultas reales. Formularios,
//                 botones de WhatsApp, llamados a la acción y contenido claro hacen
//                 que los potenciales clientes puedan comunicarse con vos de forma
//                 simple y directa.
//               </p>
//             </section>
  
//             <section>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 Crecer junto a tu negocio
//               </h3>
//               <p>
//                 Una web no es algo estático. Puede ampliarse con nuevas secciones,
//                 servicios, catálogos, sistemas de gestión o integraciones a medida.
//                 Acompaña el crecimiento de tu negocio sin necesidad de empezar de
//                 cero cada vez.
//               </p>
//             </section>
//           </article>
//         </div>
//       </section>
//     );
//   }
  




























export default function WebArticleSection() {
    return (
      <section className="py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Título */}
          <header className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              ¿Para qué sirve un sitio web?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Un sitio web es una herramienta clave para atraer clientes, generar
              confianza y hacer crecer tu negocio.
            </p>
          </header>
  
          {/* Contenido desplegable */}
          <article className="space-y-6">
            {[
              {
                title: "Presencia online propia",
                text:
                  "A diferencia de las redes sociales, un sitio web es un espacio que te pertenece. No depende de algoritmos ni de cambios externos. Es el lugar donde tu marca, tus servicios y tu mensaje se muestran de forma clara y profesional, las 24 horas del día.",
              },
              {
                title: "Confianza y profesionalismo",
                text:
                  "La mayoría de las personas buscan información en Google antes de tomar una decisión. Un sitio web bien diseñado transmite seriedad, respaldo y credibilidad, y muchas veces es el factor que define si alguien te contacta.",
              },
              {
                title: "Generar contactos y oportunidades",
                text:
                  "Un sitio web convierte visitas en consultas reales. Formularios, botones de WhatsApp y llamados a la acción facilitan el contacto directo con potenciales clientes.",
              },
              {
                title: "Crecer junto a tu negocio",
                text:
                  "Una web no es algo estático. Puede ampliarse con nuevas secciones, servicios, catálogos o sistemas de gestión, acompañando el crecimiento de tu negocio sin empezar de cero.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl bg-white p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-primary text-2xl font-bold group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
  
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </details>
            ))}
          </article>
        </div>
      </section>
    );
  }
  