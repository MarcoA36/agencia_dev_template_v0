interface ArticleSectionProps {
    title: string;
    paragraphs: string[];
  }
  
  export default function ArticleSection({
    title,
    paragraphs,
  }: ArticleSectionProps) {
    return (
      <section className="py-28 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            {title}
          </h2>
  
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }
  