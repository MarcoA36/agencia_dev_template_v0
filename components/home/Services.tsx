export default function ServicesSection() {
  const services = [
    {
      title: "Páginas Web",
      description:
        "Creamos sitios web modernos, rápidos, escalables y orientados a la conversión. Tu página será una herramienta real para atraer clientes y posicionarte en internet.",
      subtitle: "— ¿Qué incluye el desarrollo web?",
      items: [
        "Diseño totalmente personalizado y adaptable a tu negocio.",
        "Optimización SEO para aparecer en Google.",
        "Velocidad optimizada y experiencia profesional.",
        "Implementación de formularios, catálogos, secciones y más.",
      ],
      image: "/webs2.png",
    },

    {
      title: "Sistemas de gestión y herramientas",
      description:
        "Automatizamos procesos, creamos plataformas internas, paneles de administración, sistemas de control y soluciones personalizadas para tu negocio.",
      subtitle: "— ¿Qué tipo de sistemas desarrollamos?",
      items: [
        "Sistemas de gestión: clientes, productos, ventas, inventarios.",
        "Plataformas web internas para tu empresa.",
        "Apps móviles conectadas a tu sistema.",
        "Automatización de tareas y optimización de procesos.",
      ],
      image: "/imagen-grafico.jpg",
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
  <h2 className="text-5xl font-extrabold text-black/80">
    Impulsa tu presencia online con nuestros servicios
  </h2>
</div>


        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Imagen — alterna izquierda/derecha */}
            <div
              className={`
            flex lg:justify-center
            ${index % 2 === 1 ? "lg:order-2" : ""}
          `}
            >
              <div className="max-w-[520px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="flex lg:justify-center">
              <div className="max-w-[520px] w-full text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                  {service.title}
                </h2>

                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <h3 className="text-primary font-semibold text-xl mb-4">
                  {service.subtitle}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="h-2 w-2 mt-2 bg-primary rounded-full"></span>
                      <p className="text-black/80">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
