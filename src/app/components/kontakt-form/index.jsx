
"use client";

import { useActionState, useEffect, useState } from "react";
import "./kontakt.scss"
import KontaktMig from "@/app/actions/kontaktmig/KontaktMig";

export default function KontaktMigForm() {
    const [formState, formAction, isPending] = useActionState(KontaktMig)

    return (
         <>
        
        <form className="contact__form" action={formAction}>
            <section className="contact">
            <div>
                <label>
                    <span>Email</span>
                    <input className="contact__search-input" type="email" name="email" defaultValue={formState?.data?.email} />
    	            <p>{formState?.properties?.email?.errors}</p>
                </label>
            </div>
            <div>
                <label>
                    <span>Navn</span>
                    <input className="contact__search-input" type="text" name="name" defaultValue={formState?.data?.name} />
                    	<p>{formState?.properties?.name?.errors}</p>
                </label>
            </div>
            <div>
            <label>
                    <span>Besked</span>
                     <input className="contact__search-input" type="text" name="message" defaultValue={formState?.data?.message} />
                    	<p>{formState?.properties?.message?.errors}</p>
                </label>
            </div>
            <button type="submit">Kontakt os</button>
        </section>
        </form> 
        </>
    );
}