import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import "./forside.scss"
import Image from "next/image";

import lucas from "@/imgs/lucas.jpg";
export default function Home() {
  return (
    <>
    <Header />
    <main>
       <section className="main-cta">
  <h2 className="main-cta__title">Din Lokale Pudser</h2>
  <span>Velkommen til din lokale vinduespudser med fokus på kvalitet, punktlighed og klare aftaler. Jeg driver et vinduespudserfirma, hvor grundighed, pålidelighed og øje for detaljen er i centrum - og hvor jeg aldrig går på kompromis med resultatet. </span>
  <span>Du er velkommen til at kontakte os nedenfor for et tilbud.</span>
  <Link href="/kontakt" className="main-cta__button">Kontakt os</Link>
</section>
<article className="about-wrap">
  <Image
    src={lucas}
    alt="forside-billede"
    sizes="(max-width: 1080px) 100vw, 1080px"
    style={{
      width: "100%",
      height: "auto",
    }}
    priority
  />

  <section className="about"> 
  <h2>Om os</h2>
  <p>Vi er et nyere og engageret vinduespudserfirma, der brænder for at levere rene og skinnende vinduer til både private og erhverv.

Selvom vi er en ny virksomhed, går vi ikke på kompromis med kvaliteten. Vi tror på god service, klare aftaler og tilfredse kunder - hver gang.

Hos os får du personlig kontakt, gennemsigtige priser og et resultat, du kan være stolt af at vise frem.</p>

</section>

</article>

<section className="benefits">
  <h2>Derfor vælger kunder os</h2>
  <ul>
    <li>✅ Professionel og pålidelig service</li>
    <li>✅ Ingen skjulte gebyrer</li>
    <li>✅ Tilfredshedsgaranti</li>
  </ul>
</section>


    </main>
    <Footer />

    </>
  );
}
