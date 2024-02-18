import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {copy} from '@/constants'
import { useLanguage } from '@/app/context';

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <div className="homepage">
      <Header />
      <div className="container-one">
        <p className="container-text">{copy.home[language]}</p>
        <div className="red-square">
          <ul className="red-square-text">
            <p className="square-text-one">{copy.offer[language]}</p>
            <p className="square-text-two">{copy.offerTwo[language]}</p>
            <p className="square-text-three">{copy.offerThree[language]}</p>
            <p className="square-text-four">{copy.offerFour[language]}</p>
          </ul>
        </div>
      </div>
      <div className="container-two">
        <div className="container-two-paragraphs">
          <p>{copy.homeTwo[language]}</p>
          <ul>
            <li>{copy.list[language]}</li>
            <li>{copy.listTwo[language]}</li>
            <li>{copy.listThree[language]}</li>
            <li>{copy.listFour[language]}</li>
            <li>{copy.listFive[language]}</li>
            <li>{copy.listSix[language]}</li>
          </ul>
          <p>{copy.headerThree[language]}</p>
          <p>{copy.headerFour[language]}</p>
        </div>
        <div className="container-two-years">
          <p className="years">30</p>
          <p className="experience">{copy.headerFive[language]}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
