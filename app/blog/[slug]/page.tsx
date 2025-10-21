import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = {
  "como-hacer-webs-con-valor": {
    title: "Cómo hacer webs con valor",
    date: "15 de Marzo, 2025",
    readTime: "8 min lectura",
    content: `
      <p>En el mundo digital actual, crear un sitio web no es suficiente. Es fundamental construir experiencias que aporten valor real a los usuarios y cumplan con los objetivos del negocio. Pero, ¿cómo logramos esto?</p>

      <h2>1. Entender las necesidades del cliente</h2>
      <p>El primer paso para crear una web con valor es comprender profundamente qué necesita tu cliente. Esto va más allá de simplemente preguntar "¿qué quieres en tu sitio web?". Debemos indagar sobre:</p>
      <ul>
        <li>Los objetivos de negocio específicos</li>
        <li>El público objetivo y sus comportamientos</li>
        <li>Los problemas que el sitio debe resolver</li>
        <li>Las métricas de éxito que importan</li>
      </ul>

      <h2>2. Diseñar con propósito</h2>
      <p>Cada elemento en un sitio web debe tener una razón de ser. El diseño no es solo estética; es una herramienta para guiar al usuario hacia sus objetivos y los del negocio.</p>
      <p>Un buen diseño con propósito considera:</p>
      <ul>
        <li><strong>Jerarquía visual:</strong> Dirigir la atención a lo más importante</li>
        <li><strong>Usabilidad:</strong> Hacer que las acciones sean intuitivas y fáciles</li>
        <li><strong>Accesibilidad:</strong> Garantizar que todos puedan usar el sitio</li>
        <li><strong>Consistencia:</strong> Mantener patrones reconocibles en toda la experiencia</li>
      </ul>

      <h2>3. Aplicar buenas prácticas de desarrollo</h2>
      <p>Un sitio web hermoso que carga lentamente o no funciona en móviles pierde todo su valor. Las buenas prácticas técnicas son fundamentales:</p>
      <ul>
        <li><strong>Rendimiento:</strong> Optimizar imágenes, código y recursos para cargas rápidas</li>
        <li><strong>Responsive Design:</strong> Asegurar una experiencia perfecta en todos los dispositivos</li>
        <li><strong>SEO:</strong> Implementar estructura y contenido optimizado para buscadores</li>
        <li><strong>Seguridad:</strong> Proteger los datos de usuarios y del negocio</li>
        <li><strong>Código limpio:</strong> Escribir código mantenible y escalable</li>
      </ul>

      <h2>4. Mantenimiento continuo</h2>
      <p>Una web con valor no es un proyecto que termina al lanzarse. Requiere:</p>
      <ul>
        <li>Actualizaciones regulares de contenido</li>
        <li>Monitoreo de rendimiento y errores</li>
        <li>Análisis de métricas y comportamiento de usuarios</li>
        <li>Iteraciones basadas en feedback real</li>
        <li>Actualizaciones de seguridad y tecnología</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Crear webs con valor es un proceso que combina empatía con el usuario, visión estratégica, excelencia técnica y compromiso a largo plazo. No se trata solo de construir un sitio web, sino de crear una herramienta digital que realmente impulse el éxito del negocio y satisfaga las necesidades de sus usuarios.</p>
      <p>En nuestra agencia, este enfoque guía cada proyecto que emprendemos. Trabajamos en equipo con nuestros clientes para asegurarnos de que cada sitio web que creamos no solo se vea bien, sino que genere resultados reales y medibles.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="mb-8 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Volver al blog
                </Button>
              </Link>

              <header className="mb-12 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance">{post.title}</h1>
              </header>

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-li:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
