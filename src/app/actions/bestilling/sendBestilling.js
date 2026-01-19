"use server";

import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendBestilling(prevState, formData) {
  const schema = z.object({
    email: z.string().email(),
    adresse: z.string().min(5),
    kvadratmeter: z.coerce.number().min(1),
    tagVinduer: z.coerce.number().min(0),
    udestue: z.coerce.boolean(),
    interval: z.string(),
  });

  const parsed = schema.safeParse({
    email: formData.get("email"),
    adresse: formData.get("adresse"),
    kvadratmeter: formData.get("kvadratmeter"),
    tagVinduer: formData.get("tagVinduer"),
    udestue: formData.get("udestue") === "true",
    interval: formData.get("interval"),
  });

  if (!parsed.success) {
    console.log(parsed.error.flatten());
    return { success: false };
  }

  const data = parsed.data;

  try {
    await resend.emails.send({
 from: "Din Lokale Pudser <kontakt@dinlokalepudser.nu>",
to: ["silaslarsen80@gmail.com"],
replyTo: data.email,
      subject: "Ny forespørgsel på vinduespudsning",
      html: `
        <p>Email: ${data.email}</p>
        <p>Adresse: ${data.adresse}</p>
        <p>Kvadratmeter: ${data.kvadratmeter}</p>
        <p>Tagvinduer: ${data.tagVinduer}</p>
        <p>Udestue: ${data.udestue ? "Ja" : "Nej"}</p>
        <p>Interval: ${data.interval}</p>
      `,
    });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    return { success: false };
  }

  return { success: true };
}
