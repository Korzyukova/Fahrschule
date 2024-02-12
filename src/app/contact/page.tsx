import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
export default function Contact() {
    return (
        <div className="">
            <Header />

            <div className="container-two-about">
                <div className="container-two-contact">
                    <p>Ruf uns gerne an oder schreibe uns eine E-Mail. Gerne beraten wir dich auch in einem persönlichen Gespräch.</p>
                </div>
                <div className="container-two-address">
                    <p>Kazmairstraße 46, 80339 München</p>

                    <p>Tel: 089/ 62043082</p>
                    <p>Email: info@fahrschule-h2.de</p>
                    <div>
                        <p className='burozeiten'>Bürozeiten:</p>
                        <p className='burozeiten'>Montag und Mittwoch:</p>
                        <p className='burozeiten'>10:00 – 12:30</p>
                        <p className='burozeiten'> Dienstag und Donnerstag:</p>
                        <p className='burozeiten'>15:00 – 18:30</p>
                    </div>
                    <p>Mit den Öffentlichen kannst du uns bequem erreichen:</p>
                    <p className='bus'>U4 / U5  Schwanthalerhöhe</p>
                    <p className='bus'>S7 / S20  Heimeranplatz</p>
                    <p className='bus'>Bus 53  Bergmannstraße</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}