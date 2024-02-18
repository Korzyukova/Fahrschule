import { copy } from "@/constants";
import { LanguageParams, getLanguage } from "../context";
import Header from "@/components/Header";

export { generateStaticParams } from "../context";

export default function Home({ params }: LanguageParams) {
  const lang = getLanguage(params.lang);

  return (
    <>
      <Header params={params} />
      <div className="homepage">
        <div className="container-one">
          <p className="container-text">{copy.home[lang]}</p>
          <div className="red-square">
            <ul className="red-square-text">
              <p className="square-text-one">{copy.offer[lang]}</p>
              <p className="square-text-two">{copy.offerTwo[lang]}</p>
              <p className="square-text-three">{copy.offerThree[lang]}</p>
              <p className="square-text-four">{copy.offerFour[lang]}</p>
            </ul>
          </div>
        </div>
        <div className="container-two">
          <div className="container-two-paragraphs">
            <p>{copy.homeTwo[lang]}</p>
            <ul>
              <li>{copy.list[lang]}</li>
              <li>{copy.listTwo[lang]}</li>
              <li>{copy.listThree[lang]}</li>
              <li>{copy.listFour[lang]}</li>
              <li>{copy.listFive[lang]}</li>
              <li>{copy.listSix[lang]}</li>
            </ul>
            <p>{copy.homeThree[lang]}</p>
            <p>{copy.homeFour[lang]}</p>
          </div>
          <div className="container-two-years">
            <p className="years">30</p>
            <p className="experience">{copy.homeFive[lang]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
