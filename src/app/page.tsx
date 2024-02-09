import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="font">Home</h1>
      <Image src="/santa.webp" alt="Santa" width="500" height="500" />
      <Footer />
    </div>
  );
}
