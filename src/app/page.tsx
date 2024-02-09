import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font">Home</h1>
      <Image src="/santa.webp" alt="Santa" width="500" height="500" />
    </div>
  );
}
