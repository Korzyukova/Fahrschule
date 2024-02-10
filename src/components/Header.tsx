"use client";
import Image from 'next/image';
import { useState } from 'react';

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
    width: '33%', // 33% of the viewport width
    height: '100%', // 100% of the viewport height
    backgroundColor: '#DAD6CE', // Menu background color
    transition: 'left 0.3s ease', // Smooth transition for sliding effect
    padding: '20px', // Inner spacing
  };

  return (
    <>
      <header className='header'>
        <Image className='logo' src="/logo.png" alt="logo" width="280" height="85" />
        <div className="links">
          <a className="link" href="/">Home</a>
          <a className="link" href="/about">About Us</a>
          <a className="link" href="/contact">Contact Us</a>
        </div>
        <button onClick={toggleMenu} className="burger-button">☰</button>
      </header>
      <Image className="header-picture" alt="city" src="/Munich.png" width="280" height="85" />
      {isOpen && (
        <div id="burger-menu" style={menuStyles}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </>
  );
}
