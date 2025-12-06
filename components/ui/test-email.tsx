"use client";

import { useState } from "react";

export default function TestEmailPage() {
  const [resultado, setResultado] = useState("");

  const enviarPrueba = async () => {
    setResultado("Enviando...");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
      });

      const data = await res.json();
      console.log("Respuesta:", data);

      if (res.ok) {
        setResultado("✔ Email enviado correctamente.");
      } else {
        setResultado("❌ ERROR: " + (data.error || "desconocido"));
      }
    } catch (error) {
      console.error("Fallo:", error);
      setResultado("❌ Error de red o servidor.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Test de Envío de Email con Resend</h1>
      <button
        onClick={enviarPrueba}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Probar envío de email
      </button>

      <p style={{ marginTop: 20 }}>{resultado}</p>
    </div>
  );
}
