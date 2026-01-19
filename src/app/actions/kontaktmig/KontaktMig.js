"use server";

import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function KontaktMig(prevState, formData) {
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  };

  const schema = z.object({
    email: z.string().email("Ugyldig email"),
    name: z.string().min(1, "Navn skal være udfyldt"),
    message: z
      .string()
      .min(1, "Besked skal være udfyldt")
      .max(200, "Besked er for lang"),
  });

  const validated = schema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      data,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    await resend.emails.send({
  from: "Din Lokale Pudser <kontakt@dinlokalepudser.nu>",
      to: ["silaslarsen80@gmail.com"], 
      replyTo: data.email,
      subject: "Ny kontaktformular",
      html: `
        <h2>Ny besked</h2>
        <p><strong>Navn:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Besked:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return {
      success: false,
      serverError: "Kunne ikke sende mail",
    };
  }
}
