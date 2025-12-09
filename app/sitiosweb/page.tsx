import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import { Globe, Layers, ShoppingCart, FileText } from "lucide-react";
import PromoSection from "@/components/ui/promo-section";
import ContactSection from "@/components/home/Contact";

export default function PaginasWebPage() {
  const WhatsApp = "5492284664925";
  const tiposDePaginas = [
    {
      title: "Web Institucional",
      description:
        "Una página simple, clara y moderna para presentar tu negocio, servicios y datos de contacto.",
      icon: FileText,
      price: "desde $85.000",
      time: "3 a 5 días",
      features: [
        "Diseño profesional",
        "Formulario de contacto",
        "Optimizada para celulares",
        "Links a redes sociales",
        "Optimizada para Google (SEO básico)",
      ],
      message: "Hola, quería consultar por una Web Institucional. ¡Gracias!",
    },
    {
      title: "Web Autoadministrable",
      description:
        "Podés editar textos, precios, fotos o agregar secciones sin depender de nadie.",
      icon: Layers,
      price: "desde $120.000",
      time: "5 a 7 días",
      features: [
        "Panel para editar contenido",
        "Diseño profesional",
        "Formulario de contacto",
        "Optimizada para celulares",
        "Links a redes sociales",
        "Optimizada para Google (SEO básico)",
      ],
      message:
        "Hola, quería consultar por una Web Autoadministrable. ¡Gracias!",
    },
    {
      title: "Catálogo Online",
      description:
        "Mostrá tus productos con fotos, categorías y botón directo a WhatsApp. Ideal para ventas rápidas.",
      icon: Globe,
      price: "desde $150.000",
      time: "5 a 8 días",
      features: [
        "Filtro por categorías",
        "Funciones especificas",
        "Panel para editar contenido",
        "Diseño profesional",
        "Formulario de contacto",
        "Optimizada para celulares",
        "Links a redes sociales",
        "Optimizada para Google (SEO básico)",
      ],
      message: "Hola, quería consultar por un Catálogo Online. ¡Gracias!",
    },
    {
      title: "Tienda Online",
      description:
        "Carrito, pagos con tarjeta, envíos, cupones y todo lo que necesitás para vender online.",
      icon: ShoppingCart,
      price: "desde $100.000",
      time: "7 a 12 días",
      features: [
        "Carrito de compras",
        "Pagos online (MercadoPago)",
        "Gestión de envíos",
        "Panel para administrar productos",
        "Reportes de ventas",
      ],
      message: "Hola, quería consultar por una Tienda Online. ¡Gracias!",
    },
  ];

  const sistemas = [
    {
      title: "Sistema de Gestión",
      description:
        "Soluciones a medida para administrar ventas, stock, clientes o procesos internos.",
      icon: Layers,
      message: "Hola, quiero consultar por un Sistema de Gestión a medida.",
    },
    {
      title: "Herramientas Personalizadas",
      description:
        "Desarrollamos herramientas específicas según las necesidades de tu negocio.",
      icon: Globe,
      message:
        "Hola, quiero consultar por una herramienta personalizada para mi negocio.",
    },
    {
      title: "Sistemas Internos",
      description:
        "Automatizá tareas y mejorá tus procesos con sistemas internos diseñados especialmente para vos.",
      icon: FileText,
      message: "Hola, quiero consultar por un Sistema Interno a medida.",
    },
    {
      title: "Integraciones y Automatizaciones",
      description:
        "Conectamos APIs, plataformas y servicios para que todo tu flujo de trabajo sea más eficiente.",
      icon: ShoppingCart,
      message:
        "Hola, quiero consultar por integraciones o automatizaciones para mi negocio.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          title="Páginas Web"
          subtitle="Ya seas un
          profesional independiente, una PyME o una empresa consolidada,
          contar con presencia online te permite atraer clientes, mostrar
          tus servicios y fortalecer tu marca las 24 horas del día."
          backgroundSrc="/webs3.jpg"
        />
        {/* INTRO */}
        {/* TIPOS DE PÁGINAS */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-16">
              Consulta por el sitio que se adapte a la necesidad de tu negocio
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {tiposDePaginas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white h-full flex flex-col"
                  >
                    {/* Contenido Superior */}
                    <div className="flex-grow flex flex-col">
                      {/* Icono */}
                      <div className="flex items-center justify-center mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-gray-900 text-center">
                        {item.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-gray-600 text-sm mt-2 text-center">
                        {item.description}
                      </p>

                      {/* Precio + Tiempo */}
                      <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Precio:</span>{" "}
                          {item.price}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-semibold">Entrega:</span>{" "}
                          {item.time}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="mt-4 space-y-1">
                        {item.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <span className="text-primary font-bold mr-2">
                              ✔
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón pegado abajo */}
                    <a
                      href={`https://wa.me/${WhatsApp}?text=${encodeURIComponent(
                        item.message
                      )}`}
                      target="_blank"
                      className="mt-auto"
                    >
                      <button className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition mt-6">
                        Consultar
                      </button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <PromoSection
          title="Hacé más eficiente la gestión de tu negocio"
          subtitle="Sistemas a medida que automatizan tareas, reducen errores y te permiten escalar sin límites"
          items={[
            "Sistemas de gestión a medida",
            "Herramientas personalizadas para negocios",
            "Automatización e integraciones con APIs",
            "Sistemas internos y paneles de administración",
          ]}
          buttonLabel="Ver mas"
          buttonHref="/sistemasweb"
        />
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              ¿Cuál es la mejor opción para tu negocio?
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Si todavía no sabés qué tipo de página web necesitás, no te
              preocupes. Te ayudamos a elegir la opción que mejor se adapte a tu
              proyecto, presupuesto y objetivos.
            </p>
          </div>
        </section> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
