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
        <ul className= "red-square-text">
      <p className="square-text-one">ERÖFFNUNGSANGEBOT</p>
      <p className="square-text-two"> BIS 15.03.2024 bekommst du</p>
      <p className="square-text-three">250 EURO</p>
      <p className="square-text-four">Nachlassauf
 die Anmeldegebühr</p>
      </ul>

      </div>
    
      </div>
      <div className="container-two">
        
      </div>
      
      <Footer />
    </div>
  );
}
