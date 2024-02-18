import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import { copy } from '@/constants'
import { useLanguage } from '@/app/context';
export default function Contact() {
    const { language, setLanguage } = useLanguage();

    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    }
    return (
        <div className="">
            <Header />

            <div className="container-two-about">
                <div className="container-two-contact">
                    <p>{copy.contact[language]}</p>
                </div>
                <div className="container-two-address">
                    <p>Kazmairstraße 46, 80339 München</p>

                    <p>Tel: 089/ 62043082</p>
                    <p>Email: info@fahrschule-h2.de</p>
                    <div>
                        <p className='burozeiten'>{copy.time[language]}</p>
                        <p className='burozeiten'>{copy.timeTwo[language]}</p>
                        <p className='burozeiten'>10:00 – 12:30</p>
                        <p className='burozeiten'>{copy.timeThree[language]}</p>
                        <p className='burozeiten'>15:00 – 18:30</p>
                    </div>
                    <p>{copy.transportation[language]}</p>
                    <p className='bus'>U4 / U5  Schwanthalerhöhe</p>
                    <p className='bus'>S7 / S20  Heimeranplatz</p>
                    <p className='bus'>Bus 53  Bergmannstraße</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}