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

  // Inline styles for the burger menu
  const menuStyles = {
    position: 'fixed' as 'fixed',
    left: isOpen ? '0' : '-100%', // Slide in from left
    top: '0',
    width: '50%', // 33% of the viewport width
    height: '100%', // 100% of the viewport height
    backgroundColor: '#98BEC4', // Menu background color
    transition: 'left 0.3s ease', // Smooth transition for sliding effect
    padding: '20px', // Inner spacing
    zIndex: 10,
  };

  return (
    <>
      <header className='header'>
        <Image className='logo' src={logo} alt="logo" width="280" height="85" />
        <div className="links">
          <a className="link" href="/Fahrschule">Home</a>
          <a className="link" href="/Fahrschule/about">Über Uns</a>
          <a className="link" href="/Fahrschule/contact">Kontakt</a>
        </div>
        <button onClick={toggleMenu} className="burger-button">☰</button>
      </header>
      <Image className="header-picture" alt="city" src={Munich} width="280" height="85" />
      {isOpen && (
        <div id="burger-menu" style={menuStyles}>
          <a href="/Fahrschule">Home</a>
          <a href="/Fahrschule/about">About</a>
          <a href="/Fahrschule/contact">Contact</a>
        </div>
      )}
    </>
  );
}
