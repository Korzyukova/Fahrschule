import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Owners from "/public/owners.jpg"
import { useLanguage } from '@/app/context';
import {copy} from '@/constants'
export default function About() {

  const { language, setLanguage } = useLanguage();

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  }
  
  return (
    <div className="">
      <Header />

      <div className="container-two-about">
        <div className="container-two-paragraphs">
          <p>{copy.about[language]}</p>

          <p>{copy.aboutTwo[language]}</p>
          <p>{copy.aboutThree[language]}</p>
          <p>{copy.aboutFour[language]}</p>
        </div>
        <div className="container-two-owners">
          <Image className="owners-picture" alt="owners" src={Owners} width="550" height="700" />
        </div>
      </div>
      <Footer />
    </div>
  )

}