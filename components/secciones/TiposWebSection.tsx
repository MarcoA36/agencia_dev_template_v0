// /components/secciones/TiposWebSection.tsx
import { FileText, Layers, Globe, ShoppingCart } from "lucide-react";

const tiposWeb = [
  {
    icon: FileText,
    title: "Web institucional",
    description: "Presenta tu negocio, servicios y datos de contacto. Ideal para comercios chicos, profesionales independientes y emprendimientos que recién arrancan.",
  },
  {
    icon: Layers,
    title: "Landing page",
    description: "Una página enfocada en una sola acción: pedir un presupuesto, reservar un turno o enviar un mensaje. Perfecta para servicios que viven de consultas o promociones.",
  },
  {
    icon: Globe,
    title: "Catálogo online",
    description: "Muestra tus productos y permite que los clientes te escriban por WhatsApp. Ideal para tiendas chicas o negocios que venden por redes sociales.",
  },
  {
    icon: ShoppingCart,
    title: "Tienda online / Ecommerce",
    description: "Sistema completo de venta online: productos, carrito, pagos y envíos. Ideal para negocios con muchos productos y ventas automatizadas.",
  },
];

export default function TiposWebSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tipos de sitios web según tu negocio
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          No todos los negocios necesitan el mismo tipo de web. Elegir el correcto puede marcar la diferencia entre tener presencia o generar resultados reales. 
          Aquí te mostramos los tipos más comunes y cuándo conviene cada uno.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiposWeb.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-gray-700 text-lg">
          La mejor web <strong>no es la más grande ni la más cara</strong>, sino la que se adapta a tu negocio y a tus objetivos reales.
        </p>
      </div>
    </section>
  );
}
