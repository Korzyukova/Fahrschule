import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
export default function Contact() {
    return (
        <div className="">
            <Header />

            <div className="container-two-about">
                <div className="container-two-paragraphs">
                    <p>Ruf uns gerne an oder schreibe uns eine E-Mail. Gerne beraten wir dich auch in einem persönlichen Gespräch.</p>
                </div>
                <div className="container-two-years">
                    <p>Kazmairstraße 46, 80339 München</p>

                    <p>Tel: 089/ 62043082</p>
                    <p>Email: fahrschule-H2@gmx.de</p>
                    <p>Bürozeiten:
                        Montag und Mittwoch:
                        10:00 – 12:30
                        Dienstag und Donnerstag:
                        15:00 – 18:30</p>
                    <p>Mit den Öffentlichen kannst du uns bequem erreichen:</p>
                    <p>U4 / U5  Schwanthalerhöhe
                        S7 / S20  Heimeranplatz
                        Bus 53   Bergmannstraße</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}