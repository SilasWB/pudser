import Link from "next/link";
import "./info.scss";
export default function Info() {
  return (
    <section className="info">
      <h1>Vinduespolering – Din Lokale Pudser</h1>

      <section className="info__section">
        <h2>Bestilling</h2>
        <p>
          For at bestille vinduespolering sender du blot en e-mail til{" "}
          <Link href="mailto:kontakt@dinlokalepudser.nu">
            kontakt@dinlokalepudser.nu
          </Link>.
          Angiv gerne adresse, antal vinduer, om der er udestue og evt. ønsket interval. 
          Vi bekræfter din booking hurtigst muligt.
        </p>
        <p>
          Vi gemmer ikke dine personlige oplysninger. Hver forespørgsel behandles kun til 
          formålet med booking og fakturering.
        </p>
      </section>

      <section className="info__section">
        <h2>Produktinformation</h2>
        <p>
          Vi tilbyder professionel vinduespolering (udvendigt). 
          Normal vinduespolering fjerner daglig snavs og skidt, men 
          silikone, klistermærker og rester herfra vil ikke blive fjernet.
        </p>
        <p>
          Inden udvendig vinduespolering skal områder ude foran vinduerne være ryddet. 
          Ellers betragtes vinduerne som blokerede og pudses ikke.
        </p>
      </section>

      <section className="info__section">
        <h2>Betaling</h2>
        <p>
          Betaling sker via faktura, som sendes til den e-mail, du har oplyst. 
          Fakturaen fremsendes normalt næste hverdag efter udført polering.
        </p>
        <p>
          Betaling skal ske senest 5 dage efter modtagelse af faktura, medmindre andet er aftalt. 
          Ved overskridelse opkræves et rykkergebyr på 100 kr. pr. rykkerskrivelse.
        </p>
        <p>
          Afbestillinger skal ske senest 24 timer før aftalt tid. Ved senere aflysning opkræves 
          et afbestillingsgebyr på 280 kr. for privatkunder og 380 kr. for erhvervskunder pr. time.
        </p>
      </section>

      <section className="info__section">
        <h2>Reklamation</h2>
        <p>
          Vi ønsker, at du er tilfreds med vores arbejde. Kontakt os hurtigst muligt, 
          senest 24 timer efter polering, hvis noget ikke lever op til dine forventninger. 
          Vi sørger for at udbedre fejlen hurtigst muligt.
        </p>
      </section>

      <section className="info__section">
        <h2>Sikkerhed</h2>
        <p>
          Vi benytter sikre betalingsløsninger og krypterer alle oplysninger, så dine data 
          altid behandles fortroligt.
        </p>
      </section>
    </section>
  );
}
