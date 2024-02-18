import { copy } from "@/constants";
import { LanguageParams, getLanguage } from "../../context";
import Header from "@/components/Header";

export { generateStaticParams } from "../../context";

export default function Contact({ params }: LanguageParams) {
  const lang = getLanguage(params.lang);

  return (
    <div className="">
      <Header params={params} />
      <div className="container-two-about">
        <div className="container-two-contact">
          <p>{copy.contact[lang]}</p>
        </div>
        <div className="container-two-address">
          <p>Kazmairstraße 46, 80339 München</p>
          <p>Tel: 089/ 62043082</p>
          <p>Email: info@fahrschule-h2.de</p>
          <div>
            <p className="burozeiten">{copy.time[lang]}</p>
            <p className="burozeiten">{copy.timeTwo[lang]}</p>
            <p className="burozeiten">10:00 – 12:30</p>
            <p className="burozeiten">{copy.timeThree[lang]}</p>
            <p className="burozeiten">15:00 – 18:30</p>
          </div>
          <p>{copy.transportation[lang]}</p>
          <p className="bus">U4 / U5 Schwanthalerhöhe</p>
          <p className="bus">S7 / S20 Heimeranplatz</p>
          <p className="bus">Bus 53 Bergmannstraße</p>
        </div>
      </div>
    </div>
  );
}
