import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Owners from "/public/owners.jpg"
export default function About() {
  return (
    <div className="">
      <Header />

      <div className="container-two-about">
        <div className="container-two-paragraphs">
          <p>Wir sind Willi Hermann und Silja Harsányi und zusammen haben wir fast 30 Jahre Erfahrung damit,
            Menschen dabei zu unterstützen, das Fahren zu erlernen. Und wir freuen uns darauf, auch dich auf
            deinem Weg zum Führerschein zu begleiten</p>

          <p>Dabei legen wir viel Wert auf eine angenehme und entspannte Lernatmosphäre</p>
          <p>Außerdem bieten wir den praktischen</p>
          <p>Unterricht auch in englischer und russischer Sprache an</p>
        </div>
        <div className="container-two-owners">
          <Image className="owners-picture" alt="owners" src={Owners} width="550" height="700" />
        </div>
      </div>
      <Footer />
    </div>
  )

}