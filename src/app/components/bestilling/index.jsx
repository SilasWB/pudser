"use client";

import { useState, useEffect } from "react";
import "./bestilling.scss";

export default function Bestilling() {
  const [adresse, setAdresse] = useState("");
  const [kvadratmeter, setKvadratmeter] = useState("");
  const [sprosser, setSprosser] = useState(0);
  const [tagVinduer, setTagVinduer] = useState(0);
  const [udestue, setUdestue] = useState(false);
  const [interval, setInterval] = useState("1gang");
  const [pris, setPris] = useState(0);

  useEffect(() => {
    let prisPerM2 = 0;

    if (kvadratmeter > 0 && kvadratmeter <= 80) prisPerM2 = 165;
    else if (kvadratmeter >= 81 && kvadratmeter <= 110) prisPerM2 = 185;
    else if (kvadratmeter >= 111 && kvadratmeter <= 140) prisPerM2 = 205;
    else if (kvadratmeter >= 141 && kvadratmeter <= 200) prisPerM2 = 225;
    else if (kvadratmeter > 200) prisPerM2 = 245;

    let total = kvadratmeter * prisPerM2;
    total += sprosser * 1;
    total += tagVinduer * 10;
    if (udestue) total += 45;

    // interval tillæg
    if (interval === "1gang") total += 150;
    if (interval === "hver8") total += 20;
    // hver4 = 0 kr, så vi gør intet

    setPris(total);
  }, [kvadratmeter, sprosser, tagVinduer, udestue, interval]);

  return (
    <section className="bestilling">
      <div className="bestilling-wrap">
        <h2>Beregn din pris</h2>
        <p>Indtast oplysningerne nedenfor for at få din pris på vinduespudsning.</p>

        <form className="bestilling__form">
          <div className="bestilling__left">
            <label>
              <h5>Adresse</h5>
              <input
                type="text"
                placeholder="F.eks. Mågevej 12, 7100 Vejle"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </label>

            <label>
              <h5>Kvadratmeter</h5>
              <input
                type="number"
                placeholder="Fx 120"
                value={kvadratmeter}
                onChange={(e) => setKvadratmeter(Number(e.target.value))}
              />
            </label>

            <label>
              <h5>Antal sprosser</h5>
              <input
                type="number"
                placeholder="Fx 5"
                value={sprosser}
                onChange={(e) => setSprosser(Number(e.target.value))}
              />
            </label>

            <label>
              <h5>Antal tagvinduer</h5>
              <input
                type="number"
                placeholder="Fx 2"
                value={tagVinduer}
                onChange={(e) => setTagVinduer(Number(e.target.value))}
              />
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={udestue}
                onChange={(e) => setUdestue(e.target.checked)}
              />
              Inkluderer udestue (+45 kr.)
            </label>

            <label>
              <h5>Interval</h5>
              <select
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
              >
                <option value="1gang">Pudsning 1 gang (+150 kr.)</option>
                <option value="hver4">Pudsning hver 4. uge (+0 kr.)</option>
                <option value="hver8">Pudsning hver 8. uge (+20 kr.)</option>
              </select>
            </label>
          </div>

          <div className="bestilling__right">
            <h3>Estimeret pris</h3>
            <p className="price">
              {pris > 0 ? `${pris.toLocaleString()} kr.` : "0 kr."}
            </p>
            <button
              type="button"
              onClick={() =>
                // alert(
                //   `Tak ${adresse || "kunde"}!\nDin estimerede pris er ${pris} kr.`
                // ) Resend api
                ``
              }
            >
              Send forespørgsel
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
