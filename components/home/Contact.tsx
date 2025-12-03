"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";

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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
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
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h3 className="text-4xl md:text-5xl font-bold">
            Construyamos juntos tu próximo proyecto digital
          </h3>
        </div>

        {/* Contenido */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              {submitMessage && (
                <p className="text-sm text-accent font-medium text-center">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Información de contacto
              </h2>
              <p className="text-muted-foreground mb-8">
                Estamos aquí para responder tus preguntas y ayudarte a dar vida
                a tu proyecto digital.
              </p>
            </div>

            <div className="space-y-6">
              {/* <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contacto@devagency.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@devagency.com
                    </a>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6 flex gap-4 ">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <a
                      href="tel:+34123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      2284656640
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
