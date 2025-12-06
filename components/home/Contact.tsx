"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await res.json();

      setSubmitMessage("¡Gracias por tu mensaje! Te contactaremos pronto.");
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitMessage("Hubo un error. Intenta nuevamente.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Construyamos juntos tu próximo proyecto digital
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Envíanos un mensaje
            </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto</Label>
                <Input
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={6}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center gap-2 ${
                isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                  Enviando...
                </div>
              ) : (
                <>
                  Enviar mensaje <Send className="h-5 w-5" />
                </>
              )}
            </Button>

            {submitMessage && (
              <p className="text-center text-green-600 dark:text-green-400 font-medium">
                {submitMessage}
              </p>
            )}
          </form>

          {/* Información contacto */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Información de contacto
            </h2>

            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Teléfono
                  </h3>
                  <a
                    href="tel:2284656640"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer"
                  >
                    2284656640
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
