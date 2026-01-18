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
  <h1>Send forespørgsel</h1>

  <form action={formAction} className="bestilling__form">
    <div className="bestilling__left">

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label>
        Adresse
        <input
          name="adresse"
          required
          value={adresse}
          onChange={e => setAdresse(e.target.value)}
        />
      </label>

      <label>
        Kvadratmeter
        <input
          name="kvadratmeter"
          type="number"
          required
          value={kvadratmeter}
          onChange={e => setKvadratmeter(e.target.value)}
        />
      </label>

      <label>
        Antal vinduer
        <input
          name="tagVinduer"
          type="number"
          min="0"
          value={tagVinduer}
          onChange={e => setTagVinduer(Number(e.target.value))}
        />
      </label>

      <label>
        Interval
        <select
          name="interval"
          value={interval}
          onChange={e => setInterval(e.target.value)}
        >
          <option value="1gang">1 gang</option>
          <option value="hver4">Hver 4. uge</option>
          <option value="hver8">Hver 8. uge</option>
        </select>
      </label>
<label className="bestilling__checkbox">
  <span>Har udestue</span>
  <input
    type="checkbox"
    name="udestue"
    value="true"
    checked={udestue}
    onChange={e => setUdestue(e.target.checked)}
  />
</label>

    </div>

    <div className="bestilling__right">
      <h2>Forespørgsel</h2>
      <p>Vi kontakter dig hurtigst muligt</p>

      <button type="submit">Send forespørgsel</button>

      {formState?.success && (
        <p className="success">✅ Forespørgsel sendt</p>
      )}
    </div>
  </form>
</section>

  );
}
