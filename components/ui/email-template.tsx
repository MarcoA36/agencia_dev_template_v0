import * as React from "react";

interface EmailTemplateProps {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export function EmailTemplate({ nombre, email, asunto, mensaje }: EmailTemplateProps) {
  return (
    <div>
      <h1>Nuevo mensaje</h1>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Asunto:</strong> {asunto}</p>
      <p><strong>Mensaje:</strong> {mensaje}</p>
    </div>
  );
}
