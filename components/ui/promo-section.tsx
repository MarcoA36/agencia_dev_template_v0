interface PromoBannerProps {
  title: string;
  subtitle?: string;
  items: string[];
  buttonLabel: string;
  buttonHref: string;
}

export default function PromoBannerSection({
  title,
  subtitle,
  items,
  buttonLabel,
  buttonHref,
}: PromoBannerProps) {
  return (
    <section className="py-20 bg-primary/90 border-t border-b border-primary/10">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* TITULAR */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* LISTA */}
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-200"
            >
              <span className="text-primary font-bold text-xl mt-0.5">✓</span>
              <span className="text-gray-800 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* BOTÓN */}
        <div className="text-center mt-14">
          <a href={buttonHref}>
            <button className="px-10 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-sm hover:bg-primary/90 transition cursor-pointer">
              {buttonLabel}
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
