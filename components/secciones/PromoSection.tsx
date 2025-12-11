interface PromoBannerProps {
  title: string;
  subtitle?: string;
  items: string[];
  buttonLabel: string;
  buttonHref: string;
  imageSrc?: string;
}

export default function PromoBannerSection({
  title,
  subtitle,
  items,
  buttonLabel,
  buttonHref,
  imageSrc,
}: PromoBannerProps) {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* CONTENIDO */}
        <div className="space-y-8">

          {/* TITULAR */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {title}
            </h2>

            {subtitle && (
              <p className="text-white/80 text-lg max-w-md">
                {subtitle}
              </p>
            )}
          </div>

          {/* LISTA */}
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white text-xl">✓</span>
                <span className="text-white/90 text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* BOTÓN */}
          <a href={buttonHref}>
            <button className="
              px-8 py-3 
              bg-white text-primary 
              font-semibold 
              rounded-xl 
              shadow-sm 
              hover:bg-white/90 
              transition
              cursor-pointer
            ">
              {buttonLabel}
            </button>
          </a>
        </div>

        {/* IMAGEN DECORATIVA */}
        {imageSrc && (
          <div className="hidden lg:flex justify-center">
            <img
              src={imageSrc}
              alt="Imagen ilustrativa"
              className="rounded-2xl shadow-lg border border-white/10 w-[85%]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
