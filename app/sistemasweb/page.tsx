import HeroSection from "@/components/HeroSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ContactSection from "@/components/home/Contact";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PromoSection from "@/components/ui/promo-section";
import {
  Server,
  Workflow,
  Database,
  Layout,
  Smartphone,
  Zap,
} from "lucide-react";

const WhatsAppNumber = "5492284664925";

const sistemasList = [
  {
    title: "Sistemas de Gestión",
    description:
      "Organizá clientes, ventas, presupuestos, turnos y procesos internos desde un solo lugar. Un sistema hecho exactamente para tu negocio.",
    icon: Server,
    price: "Desde $160.000",
    time: "Entrega en 10–20 días",
    message: "Hola, quería consultar por un sistema de gestión a medida.",
  },
  {
    title: "Automatizaciones y Flujos",
    description:
      "Eliminá tareas repetitivas, integrá plataformas y hacé que tus procesos trabajen solos mientras ahorrás tiempo y errores.",
    icon: Workflow,
    price: "Desde $80.000",
    time: "Entrega en 5–10 días",
    message: "Hola, quería consultar por una automatización.",
  },
  {
    title: "Paneles y Tableros Internos",
    description:
      "Visualizá métricas, ingresos, tareas o cualquier dato clave en un panel moderno, rápido y diseñado para tu negocio.",
    icon: Layout,
    price: "Desde $120.000",
    time: "Entrega en 7–14 días",
    message: "Hola, quería consultar por un panel interno.",
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos tu sistema con MercadoPago, WhatsApp, ERPs, CRMs o cualquier servicio externo. Todo totalmente integrado.",
    icon: Zap,
    price: "Desde $90.000",
    time: "Entrega en 5–12 días",
    message: "Hola, quería consultar por una integración API.",
  },
  {
    title: "Apps Internas",
    description:
      "Aplicaciones internas para logística, remises, control de personal, producción y más. Totalmente adaptadas a tu operación.",
    icon: Smartphone,
    price: "Desde $220.000",
    time: "Entrega en 20–35 días",
    message: "Hola, quería consultar por una app interna.",
  },
  {
    title: "Bases de Datos Personalizadas",
    description:
      "Estructuras sólidas, escalables y diseñadas para tus procesos reales. Ideal para negocios que crecen.",
    icon: Database,
    price: "Desde $140.000",
    time: "Entrega en 10–20 días",
    message: "Hola, quería consultar por una base de datos personalizada.",
  },
];

export default function SistemasWeb() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO ADAPTADO PARA SISTEMAS */}
        <HeroSection
          title="Sistemas y Herramientas a Medida"
          subtitle={`Automatizaciones, paneles, apps, integraciones y sistemas completos diseñados exactamente según tus procesos. Más eficiencia, menos errores y todo funcionando de forma clara y organizada.`}
          backgroundSrc="/imagen-grafico.jpg"
        />

        {/* LISTA DE SISTEMAS */}
        <section className="py-16 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sistemasList.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-lg border border-gray-200 hover:shadow-xl transition h-full"
                >
                  <div className="flex flex-col h-full p-6">
                    {/* Ícono + Título */}
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>

                    {/* Descripción */}
                    <p className="text-black/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* BOTÓN DE CONSULTA – PEGADO ABAJO */}
                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(
                          item.message
                        )}`}
                        target="_blank"
                        className="block"
                      >
                        <button className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
                          Consultar
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <PromoSection
          title="Si tenes un negocio o marca necesitas un sitio web"
          items={[
            "Sitio web institucional",
            "Pagina autoadministrable",
            "Catálogo",
            "Tienda online",
          ]}
          buttonLabel="Ver más"
          buttonHref="/sitiosweb"
        />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
