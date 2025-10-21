import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      slug: "como-hacer-webs-con-valor",
      title: "Cómo hacer webs con valor",
      excerpt:
        "Descubre la importancia de entender las necesidades del cliente, diseñar con propósito y aplicar buenas prácticas de desarrollo.",
      date: "15 de Marzo, 2025",
      readTime: "8 min lectura",
    },
    {
      slug: "tendencias-desarrollo-web-2025",
      title: "Tendencias en Desarrollo Web 2025",
      excerpt: "Exploramos las tecnologías y metodologías que están transformando el desarrollo web este año.",
      date: "10 de Marzo, 2025",
      readTime: "6 min lectura",
    },
    {
      slug: "importancia-ux-negocio",
      title: "La Importancia del UX en tu Negocio",
      excerpt: "Por qué invertir en experiencia de usuario es fundamental para el éxito de tu proyecto digital.",
      date: "5 de Marzo, 2025",
      readTime: "5 min lectura",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Blog</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conocimiento, tendencias y mejores prácticas en desarrollo web
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {posts.map((post, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="group">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
