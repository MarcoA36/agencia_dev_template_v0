import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Settings } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-32 md:py-40 bg-muted/40 relative overflow-hidden">
      

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales diseñadas para impulsar tu crecimiento con
            tecnología moderna, confiable e innovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Diseño Web</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sitios modernos, responsivos y diseñados para transmitir
                profesionalismo y convertir visitantes en clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Settings className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Sistemas a Medida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Soluciones digitales creadas especialmente para tu negocio,
                optimizando procesos y mejorando tu operación.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-transparent bg-card/80 backdrop-blur-sm hover:border-primary hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Aplicaciones Móviles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apps rápidas, modernas e intuitivas, listas para el mundo móvil
                actual.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
