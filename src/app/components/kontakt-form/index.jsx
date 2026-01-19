"use client";

import { useActionState } from "react";
import KontaktMig from "@/app/actions/kontaktmig/KontaktMig";
import "./kontakt.scss";

export default function KontaktMigForm() {
  const [formState, formAction, isPending] = useActionState(KontaktMig, {});

  return (
    <form className="contact__form" action={formAction}>
      <section className="contact">

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            defaultValue={formState?.data?.email}
          />
          <p>{formState?.errors?.email}</p>
        </label>

        <label>
          <span>Navn</span>
          <input
            type="text"
            name="name"
            defaultValue={formState?.data?.name}
          />
          <p>{formState?.errors?.name}</p>
        </label>

        <label>
          <span>Besked</span>
          <input
            type="text"
            name="message"
            defaultValue={formState?.data?.message}
          />
          <p>{formState?.errors?.message}</p>
        </label>

        <button type="submit" disabled={isPending}>
          {isPending ? "Sender..." : "Kontakt os"}
        </button>

        {formState?.success && (
          <p className="success">Besked sendt</p>
        )}

        {formState?.serverError && (
          <p className="error">{formState.serverError}</p>
        )}

      </section>
    </form>
  );
}
