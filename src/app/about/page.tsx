import Header from '@/components/Header'
import Image from 'next/image'
export default function About() {
    return (
        <div className="">
            <Header />
            <h1 className="font">About</h1>
            <Image src="/santa.webp" alt="Santa" width="500" height="500" />
        </div>
    )
    
}