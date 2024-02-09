import Image from 'next/image';

export default function Header() {
    const links = {
        link1: '/',
        link2: '/about-us',
    
        link3: '/contact-us',
      }
    return (
        <>
        <header className='header'>
            <Image className='logo' src="/logo.png" alt="logo" width="280" height="85" />
            <div className="links">
          <a className="link" href={links.link1}>
            Home
          </a>
          <a className="link" href={links.link2}>
            About Us
          </a>
          <a className="link" href={links.link3}>
            Contact Us
          </a>
        </div>
        
        </header>
         <Image className="header-picture" alt="city" src="/Munich.png" width="280" height="85"/> 
        </>
    )
}