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
  <h2 className="main-cta__title">Book din næste pudsning allerede i dag!</h2>
  <Link href="/kontakt" className="main-cta__button">Kontakt os</Link>
</section>
    </main>
    <Footer />

    </>
  );
}
