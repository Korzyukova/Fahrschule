"use client";
import Image from 'next/image';
import { useState } from 'react';
import logo from '/public/logo.png';
import Munich from '/public/Munich.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='header'>
        <Image className='logo' src={logo} alt="logo" width="280" height="85" />
        <div className="links">
          <a className="link" href="/">Home</a>
          <a className="link" href="/about">Über Uns</a>
          <a className="link" href="/contact">Kontakt</a>
        </div>
        <button onClick={toggleMenu} className="burger-button">☰</button>
      </header>
      <Image className="header-picture" alt="city" src={Munich} width="280" height="85" />
      <div id="burger-menu" className={`${isOpen ? 'show' : 'hide'}`}>
        <a href="/">HOME</a>
        <a href="/about">ÜBER UNS</a>
        <a href="/contact">KONTAKT</a>
      </div>
    </>
  );
}
