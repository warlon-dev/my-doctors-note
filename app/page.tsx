import Features from "@/component/Features";
import Footer from "@/component/Footer";
import Guarantee from "@/component/Guarantee";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import PromoBanner from "@/component/PromoBanner";
import Steps from "@/component/Steps";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <PromoBanner/>
      <Header/>
      <Hero/>
      <Steps/>
      <Guarantee/>
      <Features/>
      <Footer/>
    </div>
  );
}
