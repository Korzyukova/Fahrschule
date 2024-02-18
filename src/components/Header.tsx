"use client";
import Image from 'next/image';
import { useState } from 'react';
import logo from '/public/logo.png';
import Munich from '/public/Munich.png';
import { copy } from '@/constants'
import { useLanguage } from '@/app/context';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <>
      <header className='header'>
        <Image className='logo' src={logo} alt="logo" width="280" height="85" />
        <div className="links">
          <a className="link" href="/">Home</a>
          <a className="link" href="/about">{copy.headerAbout[language]}</a>
          <a className="link" href="/contact">{copy.headerContact[language]}</a>
        </div>
        <button onClick={toggleMenu} className="burger-button">☰</button>
      </header>
      <Image className="header-picture" alt="city" src={Munich} width="280" height="85" />
      <div id="burger-menu" className={`${isOpen ? 'show' : 'hide'}`}>
        <a href="/">{copy.headerHome[language]}</a>
        <a href="/about">{copy.headerAbout[language]}</a>
        <a href="/contact">{copy.headerContact[language]}</a>
      </div>
    </>
  );
}
