import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Por qué necesito un sitio web si ya uso redes sociales?",
      answer:
        "Las redes sociales dependen de algoritmos y cambios constantes. Un sitio web es un espacio propio que te permite controlar tu imagen, tu contenido y convertir visitas en contactos reales.",
    },
    {
      question: "¿Una página web ayuda a conseguir más clientes?",
      answer:
        "Sí. Una web bien diseñada genera confianza, mejora la visibilidad en Google y facilita que los potenciales clientes se comuniquen con tu negocio.",
    },
    {
      question: "¿Mi sitio web se puede actualizar con el tiempo?",
      answer:
        "Totalmente. Los sitios están pensados para crecer junto con tu negocio, agregar secciones, servicios o integraciones cuando lo necesites.",
    },
    {
      question: "¿Funciona bien en celulares?",
      answer:
        "Sí. Todos los sitios son responsive y se adaptan perfectamente a celulares, tablets y computadoras.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-xl p-5"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg">
                {faq.question}
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
