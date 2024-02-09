import Image from 'next/image'
export default function Footer() {

    return (
        <>
        <footer className='footer'>
  <div className="footer-copyright">© 2024 H2 Fahrschule</div>
  
  <div className="footer-info">
  <li className="footer-string">
  <Image className='footer-icon' src="/location.png" alt="location" width="10" height="10" />Kazmairstraße 46,
80339 München
            </li>
            <li className="footer-string">
  <Image className='footer-icon' src="/email.png" alt="email" width="10" height="10" />info@fahrschule-h2.de
            </li>
            <li className="footer-string">
  <Image className='footer-icon' src="/call.png" alt="call" width="10" height="10" />089/62043082
            </li>
  </div>
        </footer>
        </>
    )
}