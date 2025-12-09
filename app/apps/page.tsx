import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/ui/promo-section";
import ContactSection from "@/components/home/Contact";
import { Smartphone, Map, Bell, Layers, ShoppingCart } from "lucide-react";

export default function AppsPage() {
  const WhatsApp = "5492284664925";

  const tiposDeApps = [
    {
      title: "App de Pedidos",
      description:
        "Ideal para restaurantes, remises, servicios de envíos o cualquier negocio que reciba pedidos o reservas.",
      icon: ShoppingCart,
      price: "desde $150.000",
      time: "7 a 12 días",
      features: [
        "Menú o catálogo",
        "Gestión de pedidos",
        "Notificaciones push",
        "Panel de administración",
      ],
      message: "Hola, quería consultar por una App de Pedidos. ¡Gracias!",
    },
    {
      title: "App Interna para Equipos",
      description:
        "Soluciones pensadas para empleados, logística, control interno y operaciones diarias.",
      icon: Layers,
      price: "desde $180.000",
      time: "10 a 15 días",
      features: [
        "Acceso por roles",
        "Carga y seguimiento de tareas",
        "Panel interno",
        "Reportes",
      ],
      message:
        "Hola, quería consultar por una App Interna para mi empresa. ¡Gracias!",
    },
    {
      title: "App con Geolocalización",
      description:
        "Perfecta para seguimiento en tiempo real, envíos, movilidad o servicios a domicilio.",
      icon: Map,
      price: "desde $170.000",
      time: "10 a 14 días",
      features: [
        "Mapa en tiempo real",
        "Tracking de usuarios o vehículos",
        "Historial de movimientos",
        "Notificaciones push",
      ],
      message:
        "Hola, quería consultar por una App con seguimiento en tiempo real. ¡Gracias!",
    },
    {
      title: "App Personalizada",
      description:
        "Si necesitás algo específico para tu idea o proyecto, lo desarrollamos completamente a medida.",
      icon: Smartphone,
      price: "a presupuestar",
      time: "según funcionalidades",
      features: [
        "Desarrollo 100% personalizado",
        "Integraciones con APIs externas",
        "Panel web opcional",
        "Escalable y adaptable",
      ],
      message: "Hola, quería consultar por una App Personalizada.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          title="Aplicaciones móviles"
          subtitle="Convertí tu idea en una app rápida, segura y fácil de usar. Soluciones a medida para pedidos, logística, reservas y mucho más."
          backgroundSrc="/app-movil2.png"
        />

        {/* TIPOS DE APPS */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {tiposDeApps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white h-full flex flex-col"
                  >
                    {/* Contenido superior */}
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

                      <ul className="mt-4 space-y-1">
                        {item.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <span className="text-primary font-bold mr-2">✔</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón */}
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

        {/* PROMO SÍNTESIS */}
        <PromoSection
          title="Sumá más valor con tu propia app"
          subtitle="Aplicaciones rápidas, escalables y conectadas a tu sitio o sistema interno"
          items={[
            "Notificaciones push",
            "Integración con APIs",
            "Panel de administración opcional",
            "Desarrollo para Android y Web App",
          ]}
          buttonLabel="Ver más"
          buttonHref="/sistemasweb"
        />

        {/* CONTACTO */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
