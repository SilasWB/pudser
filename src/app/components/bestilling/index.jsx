"use client";

import { useState, useActionState } from "react";
import sendBestilling from "@/app/actions/bestilling/sendBestilling";
import "./bestilling.scss";

export default function Bestilling() {
  const [formState, formAction] = useActionState(sendBestilling, {});

  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [kvadratmeter, setKvadratmeter] = useState("");
  const [tagVinduer, setTagVinduer] = useState(0);
  const [udestue, setUdestue] = useState(false);
  const [interval, setInterval] = useState("1gang");

  return (
    <section className="bestilling">
      <form action={formAction} className="bestilling-wrap">

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {/* ADRESSE */}
        <input
          name="adresse"
          placeholder="Adresse"
          required
          value={adresse}
          onChange={e => setAdresse(e.target.value)}
        />

        {/* KVADRATMETER */}
        <input
          name="kvadratmeter"
          type="number"
          placeholder="Kvadratmeter (m²)"
          required
          value={kvadratmeter}
          onChange={e => setKvadratmeter(e.target.value)}
        />

        {/* TAGVINDUER */}
        <input
          name="tagVinduer"
          type="number"
          min="0"
          placeholder="Antal vinduer"
          value={tagVinduer}
          onChange={e => setTagVinduer(Number(e.target.value))}
        />

        {/* INTERVAL */}
        <select
          name="interval"
          value={interval}
          onChange={e => setInterval(e.target.value)}
        >
          <option value="1gang">1 gang</option>
          <option value="hver4">Hver 4. uge</option>
          <option value="hver8">Hver 8. uge</option>
        </select>

        {/* UDESTUE */}
        <label>
          <input
            type="checkbox"
            name="udestue"
            value="true"
            checked={udestue}
            onChange={e => setUdestue(e.target.checked)}
          />
          Har udestue
        </label>

        <button type="submit">Send forespørgsel</button>

        {formState?.success && <p>✅ Forespørgsel sendt!</p>}
      </form>
    </section>
  );
}
