import { WhatsApp } from "@/lib/config";
import { Server, Workflow, Database, Layout, Smartphone, Zap } from "lucide-react";

export default function SistemasList() {
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

  return (
    <section className="py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sistemasList.map((item, index) => (
            <div
              key={index}
              className="shadow-lg border border-gray-200 hover:shadow-xl transition h-full rounded-xl bg-white p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              <p className="text-black/70 leading-relaxed mb-6">{item.description}</p>

              <div className="mt-auto">
                <a
                  href={`https://wa.me/${WhatsApp}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  className="block"
                >
                  <button className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
                    Consultar
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
