import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import "./forside.scss"
export default function Home() {
  return (
    <>
    <Header />
    <main>
       <section className="main-cta">
  <h2 className="main-cta__title">Første Vinduespudsning får du til 99 kr.</h2>
  <span>Max 30 vinduer og 2 etager</span>
  <Link href="/kontakt" className="main-cta__button">Kontakt os</Link>
</section>
<section className="about">
  <h2>Om os</h2>
  <p>Vi er et nyt og engageret vinduespudserfirma, der brænder for at levere rene og skinnende vinduer til både private og erhverv.

Selvom vi er en ny virksomhed, går vi ikke på kompromis med kvaliteten. Vi tror på god service, klare aftaler og tilfredse kunder - hver gang.

Hos os får du personlig kontakt, gennemsigtige priser og et resultat, du kan være stolt af at vise frem.</p>
</section>
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
