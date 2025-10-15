"use server";
import z from "zod";

export default async function SendBestilling(prevState, formData) {
  const kvadrat = formData.get("kvadrat");
  const glas = formData.get("glas");
  const tagvinduer = formData.get("tagvinduer");
  const udestue = formData.get("udestue");
  const interval = formData.get("interval");
  const adresse = formData.get("adresse");

  const schema = z.object({
    kvadrat: z.string().min(1, { message: "Vælg antal kvadratmeter" }),
    glas: z.string().min(1, { message: "Angiv antal glas" }),
    tagvinduer: z.string().min(1, { message: "Angiv antal tagvinduer" }),
    udestue: z.string().min(1, { message: "Vælg om du har udestue" }),
    interval: z.string().min(1, { message: "Vælg interval" }),
    adresse: z.string().min(1, { message: "Indtast adresse og postnummer" }),
  });

  const validated = schema.safeParse({
    kvadrat,
    glas,
    tagvinduer,
    udestue,
    interval,
    adresse,
  });

 if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

  
  return {
    success: true,
    message: "Bestilling sendt!",
  };
}
