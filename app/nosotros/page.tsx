import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, MessageCircle, Award } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="Sobre Nosotros"
          subtitle="Somos más que una agencia, somos tu socio en innovación digital"
        />

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  Somos una agencia de desarrollo web que busca trabajar en
                  equipo con cada cliente para encontrar la mejor solución
                  digital para su proyecto.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Creemos en la colaboración, la comunicación transparente y el
                  compromiso como base del éxito. Combinamos creatividad,
                  tecnología y estrategia para construir productos digitales que
                  marquen la diferencia.
                </p>
              </div>

              {/* Team Image Placeholder */}
              <div className="relative h-96 rounded-xl overflow-hidden bg-muted">
                <img
                  // src="/team-collaboration-workspace.png"
                  src="/imagen-grafico.jpg"
                  alt="Equipo trabajando en colaboración"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Pasión por la Excelencia
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada proyecto es una oportunidad para superar expectativas
                      y entregar resultados excepcionales.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Innovación Constante
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos mantenemos a la vanguardia de las tecnologías para
                      ofrecer soluciones modernas y efectivas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Comunicación Transparente
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mantenemos un diálogo abierto y honesto en cada etapa del
                      proyecto.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Compromiso Total</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tu éxito es nuestro éxito. Nos comprometemos al 100% con
                      cada proyecto.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
