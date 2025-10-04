"use server";

import z from "zod";

export default async function KontaktMig(prevState, formData) {
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt" }),
        name: z.string().min(1, { message: "Navn skal være udfyldt" }),
        message: z.string().min(1, { message: "Message skal være udfyldt" }).max(200, {message: "Besked er for lang"}),
    });

    const validated = schema.safeParse({
        email,
        name,
        message,
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }
}
