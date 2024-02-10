import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="container-one">
      <div className="red-square"></div>
      {/* <h1 className="font">Home</h1>
      <Image src="/santa.webp" alt="Santa" width="500" height="500" /> */}
      </div>
      <div className="container-two">
        
      {/* <h1 className="font">Home</h1>
      <Image src="/santa.webp" alt="Santa" width="500" height="500" /> */}
      </div>
      
      <Footer />
    </div>
  );
}
