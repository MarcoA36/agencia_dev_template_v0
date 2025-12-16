import ServiceCard from "../ui/card-row";

export default function ServicesSection() {
   const services = [
    {
      sectionTitle: "Impulsa tu presencia online",
      title: "Páginas Web",
      description:
        "Creamos sitios web modernos, rápidos, escalables y orientados a la conversión. Tu página será una herramienta real para atraer clientes y posicionarte en internet.",
      subtitle: "— ¿Qué incluye el desarrollo web?",
      items: [
        "Diseño totalmente personalizado y adaptable a tu negocio.",
        "Optimización SEO.",
        "Velocidad optimizada y experiencia profesional.",
        "Implementación de formularios, catálogos, secciones y más.",
      ],
      image: "/webs2.png",
      links: [
        { label: "Ver más", href: "/sitiosweb" },
      ],
    },

    {
      sectionTitle: "Mejora la gestión de tu negocio",
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
      links: [
        { label: "Ver más", href: "/sistemasweb" },
      ],
      image: "/imagen-grafico.jpg",
    },

    {
      sectionTitle: "Lleva tu negocio al bolsillo de tus clientes",
      title: "Aplicaciones móviles",
      description:
        "Desarrollamos apps móviles rápidas, modernas y conectadas a tu sistema o sitio web. Soluciones ideales para expandir tu alcance y mejorar la experiencia del usuario.",
      subtitle: "— ¿Qué podemos desarrollar?",
      items: [
        "Apps de pedidos, reservas o turnos.",
        "Apps internas para empleados o logística.",
      ],
      // links: [
      //   { label: "Ver más", href: "/apps" },
      // ],
      links: [
        { label: "Pedir presupuesto", href: "https://wa.me/5492284664925?text=Hola,%20quiero%20pedir%20presupuesto%20para%20una%20app.%20Gracias!" },
      ],
      
      image: "/app-movil2.png",
    },
  ];
  return (
    <section id="servicios" className="py-5 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Título principal */}
        <div className="text-center mx-auto mb-5 lg:mb-15 p-4 bg-primary/10 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Mejora la <span className="text-primary">presencia online</span>{" "}
            <br /> y<span className="text-primary"> gestión</span> de tu negocio
          </h2>
        </div>

        {/* PAGINAS */}
        <ServiceCard service={services[0]} reverse={false} />

        {/* SISTEMAS */}
        <ServiceCard service={services[1]} reverse={true} />

        {/* APPS */}
        <ServiceCard service={services[2]} reverse={false} />
      </div>
    </section>
  );
}
