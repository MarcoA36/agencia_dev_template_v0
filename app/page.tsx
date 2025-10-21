import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Smartphone,
  Settings,
  Zap,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Soluciones digitales para tu negocio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sitios web, aplicaciones, sistemas y estrategias pensadas para
                trabajar de manera conjunta y adaptadas a lo que tu
                emprendimiento necesita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Solicitar presupuesto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent"
                  >
                    Ver servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Soluciones digitales completas para impulsar tu presencia online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Diseño Web</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sitios web modernos, responsivos y optimizados para
                    convertir visitantes en clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Aplicaciones Móviles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Apps nativas y multiplataforma que ofrecen experiencias
                    excepcionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sistemas a Medida</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Herramientas digitales personalizadas que se adaptan a tus
                    necesidades específicas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
                Nuestros Valores
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aplicamos las últimas tecnologías para crear soluciones
                    vanguardistas.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Compromiso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos dedicamos al éxito de cada proyecto como si fuera
                    propio.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Trabajo en Equipo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Colaboramos estrechamente contigo en cada etapa del proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                ¿Listo para impulsar tu proyecto digital?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Construyamos juntos tu próxima solución digital. Contáctanos hoy
                para una consulta gratuita.
              </p>
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="mt-4">
                  Comenzar ahora
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
