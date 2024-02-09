import Image from 'next/image';

export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <Image src="/santa.webp" alt="Santa" width="500" height="500" />
        </div>
    )
}