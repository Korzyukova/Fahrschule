import Image from "next/image";
import Owners from "/public/owners.jpg";
import { LanguageParams, getLanguage } from "@/app/context";
import { copy } from "@/constants";
import Header from "@/components/Header";

export { generateStaticParams } from "../../context";

export default function About({ params }: LanguageParams) {
  const lang = getLanguage(params.lang);

  return (
    <div className="">
      <Header params={params} />
      <div className="container-two-about">
        <div className="container-two-paragraphs">
          <p>{copy.about[lang]}</p>
          <p>{copy.aboutTwo[lang]}</p>
          <p>{copy.aboutThree[lang]}</p>
          <p>{copy.aboutFour[lang]}</p>
        </div>
        <div className="container-two-owners">
          <Image
            className="owners-picture"
            alt="owners"
            src={Owners}
            width="550"
            height="700"
          />
        </div>
      </div>
    </div>
  );
}
