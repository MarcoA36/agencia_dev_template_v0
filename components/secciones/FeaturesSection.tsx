import { Code, Zap } from "lucide-react";

interface FeatureItem {
  title: string;
  desc: string;
}

interface FeatureSectionProps {
  title: string;
  highlight?: string;
  items: FeatureItem[];
  rightText?: string;
}

export default function FeatureSection({
  title,
  highlight,
  items,
  rightText = "Tecnología moderna",
}: FeatureSectionProps) {
  return (
    <section className="py-5 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              {title}{" "}
              {highlight && (
                <span className="gradient-text">{highlight}</span>
              )}
            </h2>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque derecho */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-square flex items-center justify-center">
            <div className="text-center">
              <Code className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">{rightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
