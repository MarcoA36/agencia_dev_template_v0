import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Props = {
  href: string
  badge?: string
  title: string
  excerpt: string
}

export default function BlogPostBanner({
  href,
  badge = "Lectura recomendada",
  title,
  excerpt,
}: Props) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Badge */}
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {badge}
          </span>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            {title}
          </h2>

          {/* Texto */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {excerpt}
          </p>

          {/* CTA */}
          <div>
            <Link href={href}>
              <Button variant="ghost" className="group text-base">
                Leer el artículo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
