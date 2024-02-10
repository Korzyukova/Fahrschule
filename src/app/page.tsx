import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="container-one">
        <p className="container-text">Herzlich Willkommen auf der Website der Fahrschule H2, deiner neuen Fahrschule in München.
          Wir freuen uns über dein Interesse an unserer Fahrschule.
          Diese Führerscheinklassen bieten wir an:
          A, A1, A2, B, B78, B197, B196
        </p>
        <div className="red-square">
          <ul className="red-square-text">
            <p className="square-text-one">ERÖFFNUNGSANGEBOT</p>
            <p className="square-text-two"> BIS 15.03.2024 bekommst du</p>
            <p className="square-text-three">250 EURO</p>
            <p className="square-text-four">Nachlassauf
              die Anmeldegebühr</p>
          </ul>
        </div>
      </div>
      <div className="container-two">
        <div className="container-two-paragraphs">
          <p>Wir bieten dir eine moderne und professionelle Ausbildung in Theorie und Praxis</p>
          <ul>
            <li>Lern-APP</li>
            <li>Transparente Ausbildung anhand der Ausbildungsdiagrammkarte</li>
            <li>Gruppenarbeit</li>
            <li>Moderne Fahrzeuge</li>
            <li>Prüfungssimulationen</li>
            <li>Modernen Lernmethoden</li>
          </ul>
          <p>Du hast schon einen Führerschein, aber fühlst dich nicht sicher im Straßenverkehr?</p>
          <p>Kein Problem! Wir begleiten dich zu mehr Kompetenz im Straßenverkehr egal ob mit dem PKW oder dem Motorrad,
            damit du wieder sicher unterwegs bist</p>
        </div>
        <div className="container-two-years">
          <p className="years">30</p>
          <p className="experience">Jahre Erfahrung damit, Menschen dabei zu unterstützen, das Fahren zu erlernen.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
