import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, asunto, mensaje } = await req.json();

    const result = await resend.emails.send({
      from: "Formulario zonaweb <onboarding@resend.dev>",
      to: ["marco_95_5@yahoo.com"],
      subject: asunto || "Nuevo mensaje desde el formulario",
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    });

    return Response.json(result);
  } catch (error: any) {
    console.error("❌ Error enviando email:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
