"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "/public/logo.png";
import Munich from "/public/Munich.png";
import { copy } from "@/constants";
import {
  LANGUAGE,
  LanguageParams,
  getLanguage,
  mapLanguageName,
} from "@/app/context";
import { useRouter, usePathname } from "next/navigation";

const possibleLanguages = Object.keys(LANGUAGE).map((lang) =>
  lang.toLowerCase(),
);

export default function Header({ params }: LanguageParams) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  let languageCode = params.lang;
  if (!possibleLanguages.includes(params.lang)) {
    const newPath = pathname.replace(languageCode, "de");
    router.push(newPath);
  }
  const lang = getLanguage(languageCode);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const newPath = pathname.replace(languageCode, selectedLang);
    router.push(newPath);
  };

  const handleButtonClick = (page: string) => {
    router.push(`/${languageCode}/${page}`);
  };

  const buildHandleButtonClick = (page: string) => {
    return () => handleButtonClick(page);
  };

  return (
    <>
      <header className="header">
        <Image className="logo" src={logo} alt="logo" width="280" height="85" />
        <div className="links">
          <a className="link" onClick={buildHandleButtonClick("/")}>
            Home
          </a>
          <a className="link" onClick={buildHandleButtonClick("/about")}>
            {copy.headerAbout[lang]}
          </a>
          <a className="link" onClick={buildHandleButtonClick("/contact")}>
            {copy.headerContact[lang]}
          </a>
          <select
            className="mySelect"
            value={languageCode}
            onChange={handleLanguageChange}
          >
            {Object.keys(LANGUAGE).map((code) => {
              const lowerCode = code.toLowerCase();
              const l = LANGUAGE[code as keyof typeof LANGUAGE];
              const langOption = mapLanguageName(l);
              return (
                <option key={l} value={lowerCode}>
                  {langOption}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={toggleMenu} className="burger-button">
          ☰
        </button>
      </header>
      <Image
        className="header-picture"
        alt="city"
        src={Munich}
        width="280"
        height="85"
      />
      <div id="burger-menu" className={`${isOpen ? "show" : "hide"}`}>
        <a onClick={buildHandleButtonClick("/")}>{copy.headerHome[lang]}</a>
        <a onClick={buildHandleButtonClick("/about")}>
          {copy.headerAbout[lang]}
        </a>
        <a onClick={buildHandleButtonClick("/contact")}>
          {copy.headerContact[lang]}
        </a>
        <select
          className="mySelectBurger"
          value={languageCode}
          onChange={handleLanguageChange}
        >
          {Object.keys(LANGUAGE).map((code) => {
            const lowerCode = code.toLowerCase();
            const l = LANGUAGE[code as keyof typeof LANGUAGE];
            const langOption = mapLanguageName(l);
            return (
              <option key={l} value={lowerCode}>
                {langOption}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
