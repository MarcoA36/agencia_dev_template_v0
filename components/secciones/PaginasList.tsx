import { WhatsApp } from "@/lib/config";
import { Globe, Layers, ShoppingCart, FileText } from "lucide-react";

export default function PaginasList() {

  const paginasList = [
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

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {paginasList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white h-full flex flex-col"
              >
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 text-center">
                    {item.description}
                  </p>

                  {/* <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Precio:</span> {item.price}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-semibold">Entrega:</span> {item.time}
                    </p>
                  </div> */}

                  <ul className="mt-4 space-y-1">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="text-primary font-bold mr-2">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${WhatsApp}?text=${encodeURIComponent(item.message)}`}
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
  );
}
