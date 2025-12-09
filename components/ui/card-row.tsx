export interface Service {
  sectionTitle?: string;
  title: string;
  description: string;
  subtitle: string;
  items: string[];
  image: string;
  links?: {
    label: string;
    href: string;
  }[];
}


interface ServiceCardProps {
  service: Service;
  reverse?: boolean;
}

import Link from "next/link";

export default function ServiceCard({ service, reverse = false }: ServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Imagen */}
      <div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
        <div className="max-w-[520px] w-full">
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="flex justify-center">
        <div className="max-w-[520px] w-full text-center lg:text-left">

          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            {service.title}
          </h2>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            {service.description}
          </p>

          <h3 className="text-primary font-semibold text-xl mb-4">
            {service.subtitle}
          </h3>

          <ul className="space-y-3 mb-8">
            {service.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <p className="text-black/80">{item}</p>
              </li>
            ))}
          </ul>

          {/* Enlaces elegantes */}
          {service.links && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
              {service.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="px-4 py-2 rounded-xl border border-primary text-primary font-medium hover:bg-primary w-full text-center hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
