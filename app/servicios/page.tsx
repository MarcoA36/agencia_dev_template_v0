import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Settings,
  TrendingUp,
  Wrench,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function ServiciosPage() {
  const services = [
    {
      icon: Code,
      title: "Diseño y Desarrollo Web",
      description:
        "Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes. Utilizamos las últimas tecnologías para garantizar rendimiento y escalabilidad.",
      benefits: [
        "Diseño responsive adaptado a todos los dispositivos",
        "Optimización de velocidad y rendimiento",
        "SEO integrado desde el inicio",
        "Código limpio y mantenible",
      ],
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales en iOS y Android.",
      benefits: [
        "Desarrollo nativo y multiplataforma",
        "Interfaz intuitiva y atractiva",
        "Integración con APIs y servicios",
        "Publicación en App Store y Google Play",
      ],
    },
    {
      icon: Settings,
      title: "Sistemas de Gestión a Medida",
      description:
        "Creamos herramientas digitales personalizadas que se adaptan perfectamente a los procesos únicos de tu negocio.",
      benefits: [
        "Soluciones 100% personalizadas",
        "Automatización de procesos",
        "Integración con sistemas existentes",
        "Escalabilidad garantizada",
      ],
    },
    {
      icon: Wrench,
      title: "Mantenimiento y Soporte",
      description:
        "Mantenemos tu sitio web o aplicación funcionando perfectamente con actualizaciones regulares, monitoreo y soporte técnico.",
      benefits: [
        "Actualizaciones de seguridad",
        "Monitoreo 24/7",
        "Backups automáticos",
        "Soporte técnico prioritario",
      ],
    },
    {
      icon: Search,
      title: "Optimización SEO",
      description:
        "Mejoramos tu visibilidad en buscadores con estrategias SEO efectivas que atraen tráfico cualificado a tu sitio.",
      benefits: [
        "Auditoría SEO completa",
        "Optimización on-page y técnica",
        "Estrategia de contenidos",
        "Análisis y reportes mensuales",
      ],
    },
    {
      icon: TrendingUp,
      title: "Consultoría Digital",
      description:
        "Te ayudamos a definir la mejor estrategia digital para alcanzar tus objetivos de negocio con soluciones tecnológicas efectivas.",
      benefits: [
        "Análisis de necesidades",
        "Planificación estratégica",
        "Selección de tecnologías",
        "Roadmap de implementación",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="Nuestros Servicios"
          subtitle="Impulsá tu negocio con soluciones digitales efectivas y escalables"
        />

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary transition-colors"
                  >
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                ¿Necesitas una solución personalizada?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada proyecto es único. Contáctanos para discutir cómo podemos
                ayudarte a alcanzar tus objetivos.
              </p>
              <Link href="/contacto">
                <Button size="lg" className="mt-4">
                  Solicitar consulta gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
